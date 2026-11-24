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
          Το Bill Score σου, {path === "starting" ? "διαδρομή «Ξεκινάω»" : "διαδρομή «Έχω ήδη επιχείρηση»"}
        </p>
        <h1 ref={headingRef} tabIndex={-1} className="mt-2 outline-none">
          <span className="font-display text-[9rem] leading-[0.8] font-black sm:text-[12rem]">{r.total}</span>
          <span className="font-display text-4xl font-bold text-pencil">/100</span>
        </h1>
        <p className="mt-6 max-w-prose text-2xl leading-snug text-ink">
          <span className="font-display font-black">Βαθμός {r.grade}.</span> {gradeMeaning[r.grade]}
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <section aria-labelledby="pillars-h">
            <h2 id="pillars-h" className="text-3xl font-black">
              Ανά πυλώνα
            </h2>
            <ul className="mt-5 space-y-5">
              {pillarOrder.map((k) => {
                const v = r.byPillar[k];
                const ps = pillarStyle[k];
                return (
                  <li key={k}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-display text-xl font-bold text-ink">{pillarOf[k].verb}</span>
                      <span className={`font-display text-xl tabular-nums ${v < 15 ? "font-black text-dot" : "text-pencil"}`}>
                        {v}/25
                      </span>
                    </div>
                    <div className="relative mt-1 h-3 bg-grid/60">
                      <div className={`h-full ${ps.bg}`} style={{ width: `${(v / 25) * 100}%` }} />
                      <span aria-hidden="true" className="absolute top-[-4px] bottom-[-4px] left-[60%] w-px bg-ink" />
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-sm text-pencil">Η μαύρη γραμμή είναι το 15. Κάτω από αυτό, ο πυλώνας θέλει δουλειά.</p>
          </section>

          <section aria-labelledby="start-h" className={`border-l-[6px] ${s.border} pl-6`}>
            <h2 id="start-h" className="text-3xl font-black">
              Ξεκινάς από: <span className={s.text}>{start.verb}</span>
            </h2>
            <p className="mt-3">{r.reason}</p>
            <p className="mt-6 font-display text-xl font-bold text-ink">Το πρώτο βήμα</p>
            <p>{firstStep[r.start]}</p>
            {path === "starting" && (
              <p className="mt-4 text-pencil">
                Θα βγεις χαμηλά στην Ελευθερία. Φυσικό. Μην αγχωθείς. Το Θεμέλιο μετράει τώρα.
              </p>
            )}
          </section>
        </div>

        <section aria-labelledby="win-h" className="mt-14 max-w-xl bg-[#fff6b8] p-6 shadow-[0_14px_24px_-16px_rgba(0,0,0,0.35)] rotate-[-1deg]">
          <h2 id="win-h" className="text-3xl font-black">
            Η πρώτη μου νίκη
          </h2>
          <p className="mt-1 text-sm text-graphite">
            Ένα πράγμα από τον πυλώνα σου που κλείνεις σήμερα. Γράψ’ το και κόλλησέ το εκεί που το βλέπεις κάθε πρωί.
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
          <label htmlFor="win-date" className="mt-3 block text-sm text-graphite">
            Ως (ημερομηνία)
          </label>
          <input
            id="win-date"
            type="date"
            value={winDate}
            onChange={(e) => setWinDate(e.target.value)}
            className="mt-1 border-b-2 border-graphite/40 bg-transparent font-display text-xl text-ink outline-none focus:border-dot"
          />
        </section>

        <p className="mt-12 max-w-prose text-pencil">
          Σε 30 μέρες ξανακάνεις μόνο τις 5 ερωτήσεις του πυλώνα σου. Σε 90 μέρες όλο το Score. Οι απαντήσεις σου μένουν σε
          αυτή τη συσκευή.
        </p>

        <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/paketo-bill" className={`${buttonBase} bg-dot text-white hover:bg-dot-dark`}>
            Δες τα εργαλεία της μεθόδου
          </Link>
          <Link href="/mentoring" className={`${buttonBase} bg-ink text-white hover:bg-graphite`}>
            Δούλεψέ το μαζί μου
          </Link>
          <button type="button" onClick={() => window.print()} className={`${buttonBase} border-2 border-ink text-ink hover:bg-ink hover:text-white`}>
            Εκτύπωσε το σκορ
          </button>
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

