"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { tiers } from "@/lib/site";
import { buttonBase } from "./ui";

/** Λίστα αναμονής: email + ρητή συγκατάθεση. Στέλνει στο /api/waitlist (Worker → MailerLite). */
const priceOptions = [
  { value: "lt20", label: "Έως 20 €" },
  { value: "20-30", label: "20–30 €" },
  { value: "30-40", label: "30–40 €" },
  { value: "40-50", label: "40–50 €" },
  { value: "gt50", label: "Πάνω από 50 €" },
];

export function WaitlistForm({
  interest,
  label = "Ειδοποίησέ με",
  askPrice = false,
  tierChoice = false,
}: {
  interest: string;
  label?: string;
  /** Προαιρετική ερώτηση: ποια τιμή θεωρεί δίκαιη για ολόκληρη τη μέθοδο */
  askPrice?: boolean;
  /** Επιλογή επιπέδου (προεπιλογή από το ?epipedo= της διεύθυνσης) */
  tierChoice?: boolean;
}) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [fairPrice, setFairPrice] = useState("");
  const [chosen, setChosen] = useState(interest);

  useEffect(() => {
    if (!tierChoice) return;
    const t = new URLSearchParams(window.location.search).get("epipedo");
    if (t && tiers.some((x) => x.slug === t)) setChosen(t);
  }, [tierChoice]);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agree) {
      setError("Τσέκαρε το κουτάκι για να σε ειδοποιήσω.");
      setState("error");
      return;
    }
    setState("sending");
    setError("");
    const website = (new FormData(e.currentTarget).get("website") as string) ?? "";
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, interest: chosen, website, fairPrice }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        setState("sent");
        return;
      }
      setError(
        data.error === "email"
          ? "Το email δεν φαίνεται σωστό. Έλεγξέ το και πάτησε ξανά."
          : "Η εγγραφή δεν ολοκληρώθηκε. Δοκίμασε ξανά σε λίγο.",
      );
      setState("error");
    } catch {
      setError("Δεν υπάρχει σύνδεση. Έλεγξε το internet και δοκίμασε ξανά.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <p role="status" className="max-w-md border-l-[6px] border-dot pl-4 font-display text-xl font-bold text-ink">
        Σε σημείωσα. Θα σου γράψω μόλις ανοίξει.
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="max-w-lg">
      <label htmlFor={`${id}-email`} className="block font-display text-lg font-bold text-ink">
        Email
      </label>
      <div className="mt-1 flex flex-col gap-3 sm:flex-row">
        <input
          id={`${id}-email`}
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-12 flex-1 border-2 border-ink bg-white px-4 text-lg text-ink outline-none focus:border-dot"
        />
        <button type="submit" disabled={state === "sending"} className={`${buttonBase} bg-dot text-white hover:bg-dot-dark disabled:opacity-60`}>
          {state === "sending" ? "Στέλνεται…" : label}
        </button>
      </div>
      {tierChoice && (
        <div className="mt-3">
          <label htmlFor={`${id}-tier`} className="block text-[0.95rem] font-bold text-ink">
            Ποιο επίπεδο σε ενδιαφέρει;
          </label>
          <select
            id={`${id}-tier`}
            value={chosen}
            onChange={(e) => setChosen(e.target.value)}
            className="mt-1 min-h-12 w-full border-2 border-ink bg-white px-3 text-lg text-ink outline-none focus:border-dot"
          >
            <option value={interest}>Δεν ξέρω ακόμα</option>
            {tiers.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {askPrice && (
        <div className="mt-3">
          <label htmlFor={`${id}-price`} className="block text-[0.95rem] font-bold text-ink">
            Προαιρετικά: πόσο θα ήταν δίκαιο για ολόκληρη τη μέθοδο;
          </label>
          <select
            id={`${id}-price`}
            value={fairPrice}
            onChange={(e) => setFairPrice(e.target.value)}
            className="mt-1 min-h-12 w-full border-2 border-ink bg-white px-3 text-lg text-ink outline-none focus:border-dot"
          >
            <option value="">Δεν απαντώ</option>
            {priceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      )}
      {/* honeypot για bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="mt-3 flex items-start gap-3 text-[0.95rem]">
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-1 size-5 shrink-0 accent-dot" />
        <span>Θέλω να με ειδοποιήσετε με email όταν είναι διαθέσιμο. Μπορώ να διαγραφώ με ένα κλικ.</span>
      </label>
      {state === "error" && (
        <p role="alert" className="mt-3 font-bold text-dot">
          {error}
        </p>
      )}
      <p className="mt-3 text-sm text-pencil">
        Το email αποθηκεύεται στο MailerLite μόνο για αυτή την ειδοποίηση. Δες την{" "}
        <Link href="/aporrito" className="underline underline-offset-4">
          πολιτική απορρήτου
        </Link>
        .
      </p>
    </form>
  );
}
