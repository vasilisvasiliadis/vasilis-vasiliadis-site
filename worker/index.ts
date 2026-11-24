/**
 * Cloudflare Worker μπροστά από τις στατικές σελίδες (φάκελος out/).
 * 1. thebillmethod.gr → vasilisvasiliadis.gr (αρχική → /bill-method, τα υπόλοιπα 1:1)
 * 2. POST /api/billscore → ξαναϋπολογίζει το σκορ και γράφει τον συνδρομητή στο MailerLite
 * 3. Όλα τα άλλα → στατικά αρχεία
 */
import {
  type Answer,
  type Path,
  firstStep,
  gradeMeaning,
  questions,
  scoreResult,
} from "../src/lib/billscore";

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  MAILERLITE_API_KEY: string;
  MAILERLITE_GROUP_ID: string;
  MAIN_HOST: string;
}

const pillarName = { build: "Χτίσε", improve: "Βελτίωσε", lead: "Οδήγησε", levelup: "Ανέβα" } as const;
const validAnswers: Answer[] = ["yes", "partly", "no"];
const emailRe = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

async function handleBillScore(request: Request, env: Env): Promise<Response> {
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).hostname !== new URL(request.url).hostname) {
    return json({ ok: false, error: "origin" }, 403);
  }
  let body: {
    email?: unknown;
    path?: unknown;
    answers?: unknown;
    win?: unknown;
    updates?: unknown;
    website?: unknown; // honeypot
  };
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "body" }, 400);
  }
  if (typeof body.website === "string" && body.website !== "") return json({ ok: true }); // bot

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const path = body.path === "starting" ? "starting" : body.path === "running" ? "running" : null;
  const answers = Array.isArray(body.answers) ? (body.answers as unknown[]) : [];
  if (!emailRe.test(email)) return json({ ok: false, error: "email" }, 400);
  if (!path) return json({ ok: false, error: "path" }, 400);
  if (answers.length !== questions.length || !answers.every((a) => validAnswers.includes(a as Answer))) {
    return json({ ok: false, error: "answers" }, 400);
  }

  const r = scoreResult(answers as Answer[]);
  const win = typeof body.win === "string" ? body.win.slice(0, 250) : "";
  const updates = body.updates === true;

  const fields: Record<string, string | number> = {
    bill_score: r.total,
    bill_grade: r.grade,
    bill_keimeno_vathmidas: gradeMeaning[r.grade],
    bill_xtise: r.byPillar.build,
    bill_veltiose: r.byPillar.improve,
    bill_odigise: r.byPillar.lead,
    bill_anevaa: r.byPillar.levelup,
    pilwnas_ekkinisis: pillarName[r.start],
    bill_proto_vima: firstStep[r.start],
    diadromi: (path as Path) === "starting" ? "Ξεκινάω" : "Έχω ήδη επιχείρηση",
    eghkrisi_enimerwseon: updates ? `Ναι, ${new Date().toISOString().slice(0, 10)}` : "Όχι",
  };
  if (win) fields.bill_proti_niki = win;

  let res: Response;
  try {
    res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        authorization: `Bearer ${env.MAILERLITE_API_KEY}`,
      "content-type": "application/json",
      accept: "application/json",
    },
      body: JSON.stringify({ email, fields, groups: [env.MAILERLITE_GROUP_ID] }),
    });
  } catch (err) {
    console.error("mailerlite unreachable", err);
    return json({ ok: false, error: "provider" }, 502);
  }
  if (!res.ok) {
    console.error("mailerlite", res.status, await res.text());
    return json({ ok: false, error: "provider" }, 502);
  }
  return json({ ok: true });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (/^(www\.)?thebillmethod\.gr$/.test(url.hostname)) {
      const target = url.pathname === "/" ? "/bill-method" : url.pathname;
      return Response.redirect(`https://${env.MAIN_HOST}${target}${url.search}`, 301);
    }
    if (url.hostname === `www.${env.MAIN_HOST}`) {
      return Response.redirect(`https://${env.MAIN_HOST}${url.pathname}${url.search}`, 301);
    }

    if (url.pathname === "/api/billscore") {
      if (request.method !== "POST") return json({ ok: false, error: "method" }, 405);
      return handleBillScore(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
