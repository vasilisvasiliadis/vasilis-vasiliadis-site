import type { CaseStudy } from "@/lib/content";
import { pillars, pillarStyle } from "@/lib/site";
import { Struck } from "./ui";

const numbers = (s: string) => s.split("/").map((x) => x.trim());

/** Πριν και μετά, σαν σελίδα βιβλίου εσόδων: το «πριν» διαγραμμένο με μολύβι. */
export function CaseLedger({ rows }: { rows: CaseStudy["rows"] }) {
  return (
    <dl>
      <div aria-hidden="true" className="flex gap-3 border-b-2 border-ink pb-1 font-display text-lg text-pencil">
        <span className="flex-1" />
        <span className="w-24 shrink-0 text-right sm:w-32">Πριν</span>
        <span className="w-24 shrink-0 text-right sm:w-36">Μετά</span>
      </div>
      {rows.map(([label, before, after]) =>
        label === "Πυλώνες" ? (
          <PillarRow key={label} before={before} after={after} />
        ) : (
          <div key={label} className="flex items-baseline gap-3 border-b border-dashed border-rule py-3">
            <dt className="flex-1">{label}</dt>
            <dd className="w-24 shrink-0 text-right font-display text-lg tabular-nums sm:w-32">
              <span className="sr-only">πριν </span>
              <Struck>{before}</Struck>
            </dd>
            <dd className="w-24 shrink-0 text-right font-display text-xl font-black text-ink tabular-nums sm:w-36">
              <span className="sr-only">μετά </span>
              {after}
            </dd>
          </div>
        ),
      )}
    </dl>
  );
}

/** Οι 4 πυλώνες με τα ονόματά τους, ο καθένας στο χρώμα του (από 25). */
function PillarRow({ before, after }: { before: string; after: string }) {
  const b = numbers(before);
  const a = numbers(after);
  return (
    <div className="border-b border-dashed border-rule py-3">
      <dt className="mb-2">Πυλώνες (κάθε ένας από 25)</dt>
      <dd className="grid grid-cols-4 gap-2">
        {pillars.map((p, i) => (
          <div key={p.key} className={`border-t-4 pt-1 ${pillarStyle[p.key].border}`}>
            <p className="font-display text-base leading-tight font-bold text-ink">{p.verb}</p>
            <p className="font-display tabular-nums">
              <span className="sr-only">πριν </span>
              <Struck>{b[i]}</Struck>
            </p>
            <p className="font-display text-xl font-black text-ink tabular-nums">
              <span className="sr-only">μετά </span>
              {a[i]}
            </p>
          </div>
        ))}
      </dd>
    </div>
  );
}
