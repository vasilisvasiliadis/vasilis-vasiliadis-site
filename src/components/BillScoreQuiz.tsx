"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  type Answer,
  type Path,
  answerLabel,
  firstStep,
  gradeMeaning,
  pillarOrder,
  questionText,
  questions,
  scoreResult,
} from "@/lib/billscore";
import { pillars, pillarStyle } from "@/lib/site";
import { Container, PencilCircle, buttonBase } from "./ui";

type Step = "filter" | number | "result";
type Saved = { path: Path | null; answers: (Answer | null)[]; step: Step; win?: string; winDate?: string };

const KEY = "billscore-v1";
const empty = (): (Answer | null)[] => Array(questions.length).fill(null);
const pillarOf = Object.fromEntries(pillars.map((p) => [p.key, p]));

function load(): Saved | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Saved) : null;
  } catch {
    return null;
  }
}

function save(s: Saved) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* χωρίς αποθήκευση: το Score δουλεύει κανονικά */
  }
}

export function BillScoreQuiz() {
  const [path, setPath] = useState<Path | null>(null);
  const [answers, setAnswers] = useState<(Answer | null)[]>(empty);
  const [step, setStep] = useState<Step>("filter");
  const [picked, setPicked] = useState<string | null>(null);
  const [win, setWin] = useState("");
  const [winDate, setWinDate] = useState("");
  const [ready, setReady] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Επαναφορά προόδου ή διαδρομή από την αρχική (?d=running|starting)
  useEffect(() => {
    const d = new URLSearchParams(window.location.search).get("d");
    const saved = load();
    if (d === "running" || d === "starting") {
      setPath(d);
      setStep(0);
    } else if (saved) {
      setPath(saved.path);
      setAnswers(saved.answers?.length === questions.length ? saved.answers : empty());
      setStep(saved.step ?? "filter");
      setWin(saved.win ?? "");
      setWinDate(saved.winDate ?? "");
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) save({ path, answers, step, win, winDate });
  }, [ready, path, answers, step, win, winDate]);

  useEffect(() => {
    if (ready) headingRef.current?.focus({ preventScroll: true });
  }, [step, ready]);

  const delay = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 480;

  function pickPath(p: Path) {
    setPicked(p);
    window.setTimeout(() => {
      setPath(p);
      setPicked(null);
      setStep(0);
    }, delay());
  }

  function pickAnswer(i: number, a: Answer) {
    if (picked) return;
    setPicked(a);
    const next = answers.slice();
    next[i] = a;
    setAnswers(next);
    window.setTimeout(() => {
      setPicked(null);
      setStep(i + 1 < questions.length ? i + 1 : "result");
      window.scrollTo({ top: 0 });
    }, delay());
  }

  function restart() {
    setPath(null);
    setAnswers(empty());
    setStep("filter");
    setWin("");
    setWinDate("");
  }

  if (!ready) return <div className="min-h-[70vh]" />;

  /* ───── Ερώτηση-φίλτρο ───── */
  if (step === "filter" || !path) {
    return (
      <Shell>
        <p className="font-display text-xl text-pencil">Πριν από τις 20 ερωτήσεις</p>
        <h1 ref={headingRef} tabIndex={-1} className="mt-2 text-5xl font-black outline-none sm:text-7xl">
          Έχεις ήδη πελάτες που σε πληρώνουν;
        </h1>
        <p className="mt-4 max-w-prose text-pencil">
          Από την απάντηση εξαρτάται ποιες ερωτήσεις θα δεις. Απάντησε όπως είναι σήμερα, όχι όπως θα ήθελες να είναι.
        </p>
        <Options
          items={[
            { id: "running", label: "Ναι", hint: "Έχω ήδη επιχείρηση" },
            { id: "starting", label: "Όχι", hint: "Ξεκινάω τώρα" },
          ]}
          picked={picked}
          current={path}
          onPick={(id) => pickPath(id as Path)}
        />
      </Shell>
    );
  }

  /* ───── Αποτέλεσμα ───── */
  if (step === "result") {
    const complete = answers.every(Boolean);
    if (!complete) {
      const firstMissing = answers.findIndex((a) => !a);
      return (
        <Shell>
          <h1 ref={headingRef} tabIndex={-1} className="text-5xl font-black outline-none">
            Λείπουν απαντήσεις
          </h1>
          <p className="mt-4">Για να βγει το σκορ χρειάζονται και οι 20 απαντήσεις.</p>
          <button type="button" onClick={() => setStep(firstMissing)} className={`${buttonBase} mt-8 bg-dot text-white`}>
            Συνέχισε από την ερώτηση {firstMissing + 1}
          </button>
        </Shell>
      );
    }
    const r = scoreResult(answers as Answer[]);
    const start = pillarOf[r.start];
    const s = pillarStyle[r.start];
    return (
      <Shell>
        <p className="font-display text-xl text-pencil">
          Το Bill Score σου, {path === "starting" ? "διαδρομή «Ξεκινάω»" : "διαδρομή «Έχω ήδη επιχείρηση»"}
        </p>
        <h1 ref={headingRef} tabIndex={-1} className="mt-2 outline-none">
          <span className="font-display text-[9rem] leading-[0.8] font-black sm:text-[12rem]">{r.total}</span>
          <span className="font-display text-4xl font-bold text-pencil">/100</span>
        </h1>
        <p className="mt-6 font-display text-4xl font-black text-ink">Βαθμός {r.grade}</p>
        <p className={`mt-3 border-l-[6px] ${s.border} pl-5 font-display text-4xl font-black text-ink`}>
          Ξεκινάς από: <span className={s.text}>{start.verb}</span>
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <section aria-labelledby="locked-h">
            <h2 id="locked-h" className="text-3xl font-black">
              Η εξήγηση έρχεται στο email σου
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Τι σημαίνει ο βαθμός {r.grade} για την επιχείρησή σου</li>
              <li>Πού είσαι σε κάθε έναν από τους 4 πυλώνες</li>
              <li>Γιατί ξεκινάς από εκεί και ποιο είναι το πρώτο σου βήμα</li>
            </ul>
            <div aria-hidden="true" className="mt-6 space-y-4 select-none blur-[5px]">
              {pillarOrder.map((k, i) => (
                <div key={k}>
                  <div className="flex justify-between font-display text-xl font-bold text-ink">
                    <span>{pillarOf[k].verb}</span>
                    <span>??/25</span>
                  </div>
                  <div className="mt-1 h-3 bg-grid/60">
                    <div className={`h-full ${pillarStyle[k].bg}`} style={{ width: `${[64, 36, 48, 28][i]}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div>
            <EmailResult path={path} answers={answers as Answer[]} win={win} />
            <section aria-labelledby="win-h" className="mt-10 max-w-xl rotate-[-1deg] bg-[#fff6b8] p-6 shadow-[0_14px_24px_-16px_rgba(0,0,0,0.35)]">
              <h2 id="win-h" className="text-3xl font-black">
                Η πρώτη μου νίκη
              </h2>
              <p className="mt-1 text-sm text-graphite">
                Προαιρετικό. Ένα πράγμα από τον πυλώνα σου που κλείνεις σήμερα. Αν το γράψεις πριν πατήσεις «Στείλε μου το
                σκορ», θα σου έρθει μαζί.
              </p>
              <label htmlFor="win" className="sr-only">
                Η πρώτη μου νίκη
              </label>
              <textarea
                id="win"
                rows={2}
                value={win}
                onChange={(e) => setWin(e.target.value)}
                className="mt-3 w-full resize-none border-b-2 border-graphite/40 bg-transparent font-display text-2xl text-ink outline-none focus:border-dot"
                placeholder="π.χ. Γράφω τους 5 αριθμούς μου"
              />
            </section>
          </div>
        </div>

        <p className="mt-14 max-w-prose text-pencil">
          Σε 30 μέρες ξανακάνεις μόνο τις 5 ερωτήσεις του πυλώνα σου. Σε 90 μέρες όλο το Score.
        </p>

        <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/paketo-bill" className={`${buttonBase} bg-ink text-white hover:bg-graphite`}>
            Δες τα εργαλεία της μεθόδου
          </Link>
          <Link href="/epikoinonia" className={`${buttonBase} border-2 border-ink text-ink hover:bg-ink hover:text-white`}>
            Δούλεψέ το μαζί μου
          </Link>
          <button type="button" onClick={restart} className="px-2 py-3 text-pencil underline underline-offset-4 hover:text-ink">
            Ξεκίνα από την αρχή
          </button>
        </div>
      </Shell>
    );
  }

  /* ───── Οι 20 ερωτήσεις ───── */
  const i = step;
  const q = questions[i];
  const p = pillarOf[q.pillar];
  const ps = pillarStyle[q.pillar];
  return (
    <Shell>
      <Progress answers={answers} current={i} />
      <p className="mt-8 font-display text-xl text-pencil">
        Ερώτηση {i + 1} από {questions.length}, πυλώνας <span className={`font-bold ${ps.text}`}>{p.verb}</span>
      </p>
      <h1 ref={headingRef} tabIndex={-1} className="mt-2 max-w-4xl text-4xl leading-[1.05] font-black outline-none sm:text-6xl">
        {questionText(q, path)}
      </h1>
      <Options
        items={(["yes", "partly", "no"] as Answer[]).map((a) => ({ id: a, label: answerLabel[a] }))}
        picked={picked}
        current={answers[i]}
        onPick={(id) => pickAnswer(i, id as Answer)}
      />
      <p className="mt-6 text-sm text-pencil">Αν διστάζεις ανάμεσα σε «Ναι» και «Μερικώς», είναι «Μερικώς».</p>
      <div className="mt-10 flex gap-6">
        <button
          type="button"
          onClick={() => setStep(i === 0 ? "filter" : i - 1)}
          className="text-pencil underline underline-offset-4 hover:text-ink"
        >
          Προηγούμενη
        </button>
        {answers[i] && (
          <button type="button" onClick={() => setStep(i + 1 < questions.length ? i + 1 : "result")} className="text-pencil underline underline-offset-4 hover:text-ink">
            Επόμενη
          </button>
        )}
      </div>
    </Shell>
  );
}

function EmailResult({ path, answers, win }: { path: Path; answers: Answer[]; win: string }) {
  const [email, setEmail] = useState("");
  const [updates, setUpdates] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const website = (new FormData(e.currentTarget).get("website") as string) ?? "";
    try {
      const res = await fetch("/api/billscore", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, path, answers, win, updates, website }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        setState("sent");
        return;
      }
      setError(
        data.error === "email"
          ? "Το email δεν φαίνεται σωστό. Έλεγξέ το και πάτησε ξανά «Στείλε μου το σκορ»."
          : "Το σκορ δεν στάλθηκε. Δοκίμασε ξανά σε λίγο. Το αποτέλεσμα μένει εδώ, μπορείς και να το εκτυπώσεις.",
      );
      setState("error");
    } catch {
      setError("Δεν υπάρχει σύνδεση. Έλεγξε το internet και πάτησε ξανά «Στείλε μου το σκορ».");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <section className="max-w-xl border-l-[6px] border-dot pl-6" aria-live="polite">
        <h2 className="text-3xl font-black">Το σκορ στάλθηκε</h2>
        <p className="mt-2">Θα το βρεις στο {email} σε λίγα λεπτά. Αν δεν φανεί, κοίτα και στα Προωθήσεις ή στα Ανεπιθύμητα.</p>
      </section>
    );
  }

  return (
    <section aria-labelledby="email-h" className="no-print max-w-xl">
      <h2 id="email-h" className="text-3xl font-black">
        Πού να σου τη στείλω;
      </h2>
      <p className="mt-2">
        Σου έρχεται αμέσως, μαζί με το σκορ, για να το έχεις όταν ξαναμετρήσεις σε 90 μέρες.
      </p>
      <form onSubmit={submit} className="mt-5" noValidate>
        <label htmlFor="score-email" className="block font-display text-lg font-bold text-ink">
          Email
        </label>
        <div className="mt-1 flex flex-col gap-3 sm:flex-row">
          <input
            id="score-email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-h-12 flex-1 border-2 border-ink bg-white px-4 text-lg text-ink outline-none focus:border-dot"
          />
          <button
            type="submit"
            disabled={state === "sending"}
            className={`${buttonBase} bg-dot text-white hover:bg-dot-dark disabled:opacity-60`}
          >
            {state === "sending" ? "Στέλνεται…" : "Στείλε μου το σκορ"}
          </button>
        </div>
        {/* honeypot για bots */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <label className="mt-4 flex items-start gap-3 text-[0.95rem]">
          <input
            type="checkbox"
            checked={updates}
            onChange={(e) => setUpdates(e.target.checked)}
            className="mt-1 size-5 shrink-0 accent-dot"
          />
          <span>Θέλω να μου στέλνετε και πρακτικά εργαλεία της μεθόδου. Μπορώ να διαγραφώ με ένα κλικ.</span>
        </label>
        {state === "error" && (
          <p role="alert" className="mt-4 font-bold text-dot">
            {error}
          </p>
        )}
        <p className="mt-4 text-sm text-pencil">
          Το email και το σκορ σου αποθηκεύονται στο MailerLite για να σου σταλεί το αποτέλεσμα. Δες την{" "}
          <Link href="/aporrito" className="underline underline-offset-4">
            πολιτική απορρήτου
          </Link>
          .
        </p>
      </form>
    </section>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid-paper min-h-[75vh] border-b border-rule py-12 sm:py-16">
      <Container>{children}</Container>
    </section>
  );
}

function Options({
  items,
  picked,
  current,
  onPick,
}: {
  items: { id: string; label: string; hint?: string }[];
  picked: string | null;
  current: string | null;
  onPick: (id: string) => void;
}) {
  return (
    <div role="group" aria-label="Απαντήσεις" className="mt-8 flex flex-wrap gap-x-4 gap-y-4 sm:gap-x-10">
      {items.map((o) => {
        const on = picked ? picked === o.id : current === o.id;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => onPick(o.id)}
            aria-pressed={on}
            className="group relative px-3 py-2 text-left sm:min-w-28 sm:px-5"
          >
            <span className="block font-display text-[2.4rem] leading-none font-black text-ink sm:text-6xl">{o.label}</span>
            {o.hint && <span className="mt-1 block text-sm text-pencil">{o.hint}</span>}
            {on && <PencilCircle key={`${o.id}-${picked}`} className="-inset-x-3 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)]" />}
            <span
              aria-hidden="true"
              className="absolute inset-x-3 bottom-0 h-0.5 sm:inset-x-5 origin-left scale-x-0 bg-dot transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
          </button>
        );
      })}
    </div>
  );
}

function Progress({ answers, current }: { answers: (Answer | null)[]; current: number }) {
  return (
    <ol aria-label="Πρόοδος" className="flex gap-1">
      {questions.map((q, i) => {
        const done = answers[i] !== null;
        return (
          <li
            key={i}
            aria-label={`Ερώτηση ${i + 1}${done ? ", απαντήθηκε" : ""}`}
            className={`h-2 flex-1 ${done ? pillarStyle[q.pillar].bg : "bg-grid"} ${i === current ? "outline-2 outline-offset-2 outline-ink" : ""} ${
              i % 5 === 4 && i < questions.length - 1 ? "mr-2" : ""
            }`}
          />
        );
      })}
    </ol>
  );
}

