"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Path } from "@/lib/billscore";
import { PencilCircle } from "./ui";

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
      <legend className="font-display text-lg font-medium text-pencil">Bill Score: η ερώτηση-φίλτρο</legend>
      <p className="mt-1 text-2xl leading-snug text-ink sm:text-[1.75rem]">Έχεις ήδη πελάτες που σε πληρώνουν;</p>
      <div className="mt-5 flex gap-10">
        {options.map((o) => (
          <button
            key={o.path}
            type="button"
            onClick={() => choose(o.path)}
            aria-pressed={picked === o.path}
            className="group relative px-6 py-2 text-left"
          >
            <span className="block font-display text-5xl leading-none font-black text-ink">{o.label}</span>
            <span className="mt-1 block text-sm text-pencil">{o.hint}</span>
            {picked === o.path && <PencilCircle className="-inset-x-3 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)]" />}
            <span
              aria-hidden="true"
              className="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 bg-dot transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
          </button>
        ))}
      </div>
      <p className="mt-6 text-sm text-pencil">
        Το σκορ το βλέπεις μόνο εσύ. Οι απαντήσεις μένουν στη συσκευή σου.
      </p>
    </fieldset>
  );
}
