"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Path } from "@/lib/billscore";
import { PencilCircle } from "./ui";
import { Lines } from "@/components/Lines";

const options: { label: string; path: Path; hint: string }[] = [
  { label: "Ναι", path: "running", hint: "Έχω ήδη επιχείρηση" },
  { label: "Όχι", path: "starting", hint: "Ξεκινάω τώρα" },
];

/** Η ερώτηση-φίλτρο του Bill Score, απευθείας στην αρχική. */
export function HeroQuestion() {
  const router = useRouter();
  const [picked, setPicked] = useState<Path | null>(null);

  function choose(path: Path) {
    if (picked) return;
    setPicked(path);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => router.push(`/billscore?d=${path}`), reduce ? 0 : 650);
  }

  return (
    <fieldset className="mt-10 max-w-xl">
      <legend className="font-display text-lg font-medium text-pencil">Μία ερώτηση για να ξεκινήσεις</legend>
      <p className="mt-1 text-2xl leading-snug text-ink sm:text-[1.75rem]">Έχεις ήδη πελάτες που σε πληρώνουν;</p>
      <div className="mt-5 flex flex-wrap gap-4">
        {options.map((o) => (
          <button
            key={o.path}
            type="button"
            onClick={() => choose(o.path)}
            aria-pressed={picked === o.path}
            className="group relative min-w-40 border-2 border-ink bg-paper px-6 py-3 text-left transition-colors hover:border-dot focus-visible:border-dot"
          >
            <span className="block font-display text-5xl leading-none font-black text-ink">{o.label}</span>
            <span className="mt-1 block text-sm text-pencil">{o.hint}</span>
            {picked === o.path && <PencilCircle className="-inset-x-2 -inset-y-1.5 h-[calc(100%+0.75rem)] w-[calc(100%+1rem)]" />}
          </button>
        ))}
      </div>
      <p className="mt-6 text-sm text-pencil"><Lines>{`Το σκορ το βλέπεις μόνο εσύ. Οι απαντήσεις μένουν στη συσκευή σου.`}</Lines></p>
    </fieldset>
  );
}
