"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { buttonBase } from "./ui";

/** Λίστα αναμονής: email + ρητή συγκατάθεση. Στέλνει στο /api/waitlist (Worker → MailerLite). */
export function WaitlistForm({ interest, label = "Ειδοποίησέ με" }: { interest: string; label?: string }) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
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
        body: JSON.stringify({ email, interest, website }),
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
