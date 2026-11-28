"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { limits, turnoverOptions } from "@/lib/mentoring";
import { buttonBase } from "./ui";

const input = "mt-1 w-full border-2 border-ink bg-white px-4 py-3 text-lg text-ink outline-none focus:border-dot";
const label = "block font-display text-lg font-bold text-ink";

/** Αίτηση Mentoring 1 προς 1: 5 ερωτήσεις. Στέλνεται στο /api/mentoring (Worker → MailerLite). */
export function MentoringForm() {
  const id = useId();
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!consent) {
      setError("Τσέκαρε το κουτάκι συγκατάθεσης για να σταλεί η αίτηση.");
      setState("error");
      return;
    }
    const fd = new FormData(form);
    const get = (k: string) => ((fd.get(k) as string) ?? "").trim();
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/mentoring", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: get("name"),
          email: get("email"),
          business: get("business"),
          turnover: get("turnover"),
          pain: get("pain"),
          change: get("change"),
          why: get("why"),
          consent: true,
          website: get("website"),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        setState("sent");
        return;
      }
      setError(
        data.error === "email"
          ? "Το email δεν φαίνεται σωστό. Έλεγξέ το και στείλε ξανά."
          : data.error === "answers"
            ? "Μία από τις απαντήσεις είναι πολύ σύντομη. Γράψε τουλάχιστον μία ολόκληρη πρόταση σε κάθε ερώτηση."
            : "Η αίτηση δεν στάλθηκε. Δεν χάθηκε τίποτα από όσα έγραψες: δοκίμασε ξανά σε λίγο.",
      );
      setState("error");
    } catch {
      setError("Δεν υπάρχει σύνδεση. Έλεγξε το internet και στείλε ξανά. Όσα έγραψες μένουν στη φόρμα.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="max-w-xl border-l-[6px] border-dot pl-6">
        <h3 className="text-3xl font-black">Η αίτηση στάλθηκε</h3>
        <p className="mt-2">
          Την διαβάζω η ίδια. Αν ταιριάζουμε, θα σου γράψω για μια γνωριμία 20 λεπτών. Αν δεν ταιριάζουμε, θα το ακούσεις κι
          αυτό ευθέως.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="max-w-2xl space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={label}>
            Όνομα
          </label>
          <input id={`${id}-name`} name="name" required autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={label}>
            Email
          </label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" inputMode="email" className={input} />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-business`} className={label}>
          1. Τι επιχείρηση έχεις και πόσα χρόνια;
        </label>
        <input id={`${id}-business`} name="business" required maxLength={limits.business.max} className={input} />
      </div>

      <div>
        <label htmlFor={`${id}-turnover`} className={label}>
          2. Περίπου τι τζίρο κάνεις τον χρόνο;
        </label>
        <select id={`${id}-turnover`} name="turnover" required defaultValue="" className={input}>
          <option value="" disabled>
            Διάλεξε εύρος
          </option>
          {turnoverOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-pain`} className={label}>
          3. Τι σε πνίγει σήμερα;
        </label>
        <textarea id={`${id}-pain`} name="pain" required rows={4} maxLength={limits.pain.max} className={input} />
      </div>

      <div>
        <label htmlFor={`${id}-change`} className={label}>
          4. Τι θες να έχει αλλάξει σε 90 μέρες;
        </label>
        <textarea id={`${id}-change`} name="change" required rows={4} maxLength={limits.change.max} className={input} />
      </div>

      <div>
        <label htmlFor={`${id}-why`} className={label}>
          5. Γιατί τώρα;
        </label>
        <textarea id={`${id}-why`} name="why" required rows={3} maxLength={limits.why.max} className={input} />
      </div>

      {/* honeypot για bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <label className="flex items-start gap-3 text-[0.95rem]">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 size-5 shrink-0 accent-dot" />
        <span>
          Συμφωνώ να αποθηκευτούν τα στοιχεία και οι απαντήσεις μου, μόνο για να με καλέσεις για γνωριμία. Μπορώ να ζητήσω
          διαγραφή όποτε θέλω. Μην γράφεις ονόματα πελατών ή άλλων προσώπων.
        </span>
      </label>

      {state === "error" && (
        <p role="alert" className="font-bold text-dot">
          {error}
        </p>
      )}

      <div>
        <button type="submit" disabled={state === "sending"} className={`${buttonBase} bg-dot text-white hover:bg-dot-dark disabled:opacity-60`}>
          {state === "sending" ? "Στέλνεται…" : "Στείλε αίτηση"}
        </button>
        <p className="mt-3 text-sm text-pencil">
          Τα στοιχεία αποθηκεύονται στο MailerLite. Δες την{" "}
          <Link href="/aporrito" className="underline underline-offset-4">
            πολιτική απορρήτου
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
