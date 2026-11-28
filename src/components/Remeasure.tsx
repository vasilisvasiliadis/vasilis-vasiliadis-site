"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { type Answer, type Path, answerLabel, answerPoints, questionText, questions } from "@/lib/billscore";
import { type PillarKey, pillars, pillarStyle } from "@/lib/site";
import { Container, PencilCircle, buttonBase } from "./ui";

type Saved = { path: Path | null; answers: (Answer | null)[] };

const pillarFromParam = (v: string | null): PillarKey | null => {
  if (!v) return null;
  const s = decodeURIComponent(v).trim().toLowerCase();
  const hit = pillars.find((p) => p.key === s || p.verb.toLowerCase() === s || p.en.toLowerCase() === s);
  return hit ? hit.key : null;
};

function loadSaved(): Saved | null {
  try {
    const raw = localStorage.getItem("billscore-v1");
    return raw ? (JSON.parse(raw) as Saved) : null;
  } catch {
    return null;
  }
}

/** Επανάμετρηση ενός πυλώνα (5 ερωτήσεις), για το email της μέρας 30. */
export function Remeasure() {
  const [pillar, setPillar] = useState<PillarKey | null>(null);
  const [path, setPath] = useState<Path>("running");
  const [before, setBefore] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(Answer | null)[]>([null, null, null, null, null]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const saved = loadSaved();
    const p = pillarFromParam(q.get("p"));
    if (saved?.path) setPath(saved.path);
    if (p) setPillar(p);
    if (p && saved?.answers?.length === questions.length && saved.answers.every(Boolean)) {
      const idx = questions.map((x, i) => (x.pillar === p ? i : -1)).filter((i) => i >= 0);
      setBefore(idx.reduce((sum, i) => sum + answerPoints[saved.answers[i] as Answer], 0));
    }
    setReady(true);
  }, []);

  if (!ready) return <div className="min-h-[60vh]" />;

  if (!pillar) {
    return (
      <Shell>
        <h1 className="text-5xl font-black sm:text-6xl">Ποιον πυλώνα ξαναμετράς;</h1>
        <p className="mt-4 max-w-prose text-pencil">Αυτόν από τον οποίο ξεκίνησες στο Bill Score.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {pillars.map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setPillar(p.key)}
              className={`${buttonBase} border-2 ${pillarStyle[p.key].border} ${pillarStyle[p.key].text} hover:bg-ink hover:text-white`}
            >
              {p.verb}
            </button>
          ))}
        </div>
      </Shell>
    );
  }

  const meta = pillars.find((p) => p.key === pillar)!;
  const s = pillarStyle[pillar];
  const idx = questions.map((x, i) => (x.pillar === pillar ? i : -1)).filter((i) => i >= 0);
  const done = answers.every(Boolean);
  const now = done ? answers.reduce((sum, a) => sum + answerPoints[a as Answer], 0) : 0;

  return (
    <Shell>
      <p className="font-display text-xl text-pencil">Επανάμετρηση, 30 μέρες μετά</p>
      <h1 className="mt-2 text-5xl font-black sm:text-6xl">
        Πυλώνας <span className={s.text}>{meta.verb}</span>
      </h1>
      <p className="mt-3 max-w-prose text-pencil">
        5 ερωτήσεις. Απάντησε όπως είναι σήμερα. Αν διστάζεις ανάμεσα σε «Ναι» και «Μερικώς», είναι «Μερικώς».
      </p>

      <ol className="mt-10 space-y-10">
        {idx.map((qi, n) => (
          <li key={qi}>
            <p className="font-display text-lg text-pencil">Ερώτηση {n + 1} από 5</p>
            <p className="mt-1 max-w-3xl font-display text-3xl leading-tight font-black text-ink sm:text-4xl">
              {questionText(questions[qi], path)}
            </p>
            <div role="group" aria-label="Απαντήσεις" className="mt-4 flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-8">
              {(["yes", "partly", "no"] as Answer[]).map((a) => {
                const on = answers[n] === a;
                return (
                  <button
                    key={a}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setAnswers((prev) => prev.map((x, k) => (k === n ? a : x)))}
                    className="relative px-3 py-1 font-display text-3xl font-black text-ink sm:text-4xl"
                  >
                    {answerLabel[a]}
                    {on && <PencilCircle key={`${n}-${a}`} className="-inset-x-2 -inset-y-1 h-[calc(100%+0.5rem)] w-[calc(100%+1rem)]" />}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      {done && (
        <section aria-live="polite" className={`mt-14 border-l-[6px] ${s.border} pl-6`}>
          <h2 className="text-4xl font-black">
            Σήμερα: {now}/25
            {before !== null && <span className="text-pencil"> · πριν από 30 μέρες: {before}/25</span>}
          </h2>
          <p className="mt-3 max-w-prose text-lg">
            {before === null
              ? now < 15
                ? "Κάτω από 15: ο πυλώνας θέλει ακόμα δουλειά. Μείνε σε αυτόν, ένα εργαλείο τη φορά."
                : "15 και πάνω: πέρασες το όριο. Σε 60 μέρες ξανακάνεις όλο το Bill Score."
              : now > before
                ? `Ανέβηκες ${now - before} βαθμούς. Αυτό είναι πράξη, όχι θεωρία.`
                : now === before
                  ? "Ίδιο σκορ. Δεν πειράζει. Διάλεξε ένα εργαλείο του πυλώνα και κάν' το αυτή την εβδομάδα."
                  : "Έπεσες λίγο. Συχνά σημαίνει ότι τώρα βλέπεις πιο καθαρά. Η μέτρηση είναι πιο τίμια."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/paketo-bill" className={`${buttonBase} bg-dot text-white hover:bg-dot-dark`}>
              Τα εργαλεία της μεθόδου
            </Link>
            <Link href="/epikoinonia" className={`${buttonBase} border-2 border-ink text-ink hover:bg-ink hover:text-white`}>
              Δούλεψέ το μαζί μου
            </Link>
          </div>
        </section>
      )}
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
