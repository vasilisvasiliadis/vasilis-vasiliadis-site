import type { CaseStudy } from "@/lib/content";
import { Struck } from "./ui";

/** Πριν και μετά, σαν σελίδα βιβλίου εσόδων: το «πριν» διαγραμμένο με μολύβι. */
export function CaseLedger({ rows, color = "text-improve" }: { rows: CaseStudy["rows"]; color?: string }) {
  return (
    <dl>
      {rows.map(([label, before, after]) => (
        <div key={label} className="flex items-baseline gap-3 border-b border-dashed border-rule py-3">
          <dt className="flex-1">{label}</dt>
          <dd className="text-right font-display text-lg tabular-nums sm:w-32">
            <span className="sr-only">πριν </span>
            <Struck>{before}</Struck>
          </dd>
          <dd className={`text-right font-display text-xl font-black tabular-nums sm:w-36 ${color}`}>
            <span className="sr-only">μετά </span>
            {after}
          </dd>
        </div>
      ))}
    </dl>
  );
}
