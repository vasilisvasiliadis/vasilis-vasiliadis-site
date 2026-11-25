import type { Metadata } from "next";
import { CaseLedger } from "@/components/CaseLedger";
import { ButtonLink, Container, Dot, Struck } from "@/components/ui";
import { cases } from "@/lib/content";
import { countOnMeReviewsUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Αποτελέσματα",
  description:
    "10 ενδεικτικά παραδείγματα από την ελληνική μικρή επιχείρηση: κομμωτήριο, mini market, λογιστικό γραφείο, υδραυλικός, ηλεκτρολόγος, συνεργείο, σύμβουλοι, e-shop, λογοθεραπεία.",
  alternates: { canonical: "/apotelesmata" },
};

const row = (c: (typeof cases)[number], label: string) => c.rows.find((r) => r[0] === label) ?? ["", "", ""];
const hoursRow = (c: (typeof cases)[number]) => c.rows.find((r) => r[0].startsWith("Ώρες")) ?? ["", "", ""];

export default function ResultsPage() {
  const first = cases[0];
  const specimen = [row(first, "Bill Score"), row(first, "Ρευστότητα"), hoursRow(first)];

  return (
    <>
      <section className="grid-paper border-b border-rule">
        <Container className="grid items-end gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_24rem] lg:gap-16">
          <div>
            <p className="font-display text-xl font-medium text-pencil">Πριν και μετά τις 90 μέρες</p>
            <h1 className="mt-2 max-w-5xl text-6xl font-black sm:text-8xl">
              Αποτελέσματα
              <Dot className="ml-1" />
            </h1>
            <div className="mt-6 max-w-2xl text-xl leading-relaxed text-ink">
              <p>
                Τρεις αριθμοί μετράνε: το Bill Score, η ρευστότητα (το χαμηλότερο σημείο του ταμείου 4 εβδομάδων) και οι
                ώρες δουλειάς την εβδομάδα.
              </p>
              <p className="mt-3 text-base text-pencil">
                Ενδεικτικά παραδείγματα από καταστάσεις που βλέπουμε κάθε μέρα στο λογιστικό γραφείο. Δεν είναι
                συγκεκριμένοι πελάτες. Οι αριθμοί είναι στρογγυλεμένοι, το Bill Score είναι εκτίμηση, και δεν αποτελούν
                υπόσχεση για το δικό σου αποτέλεσμα.
              </p>
              {countOnMeReviewsUrl && (
                <p className="mt-3 text-base">
                  <a href={countOnMeReviewsUrl} className="text-ink underline underline-offset-4">
                    Δες τι γράφουν οι πελάτες της Count On Me στο Google
                  </a>
                </p>
              )}
            </div>
          </div>
          <div className="border-2 border-ink bg-paper p-5">
            <p className="font-display text-2xl font-black text-ink">{first.who}</p>
            <dl className="mt-2">
              {specimen.map(([label, before, after]) => (
                <div key={label} className="flex items-baseline gap-3 border-b border-dashed border-rule py-2 last:border-0">
                  <dt className="flex-1 text-[0.95rem]">{label}</dt>
                  <dd className="font-display text-lg tabular-nums">
                    <span className="sr-only">πριν </span>
                    <Struck>{before}</Struck>
                  </dd>
                  <dd className="w-20 text-right font-display text-xl font-black text-ink tabular-nums">
                    <span className="sr-only">μετά </span>
                    {after}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <nav aria-label="Παραδείγματα" className="border-b border-rule">
        <Container className="py-8">
          <table className="w-full text-left">
            <caption className="sr-only">Τα 10 παραδείγματα με Bill Score και ρευστότητα, πριν και μετά</caption>
            <thead className="font-display text-lg text-pencil">
              <tr className="border-b-2 border-ink">
                <th scope="col" className="py-1 font-medium">Επιχείρηση</th>
                <th scope="col" className="py-1 text-right font-medium">Bill Score</th>
                <th scope="col" className="py-1 text-right font-medium">Ρευστότητα</th>
                <th scope="col" className="hidden py-1 text-right font-medium sm:table-cell">Ώρες/εβδ.</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c) => {
                const s = row(c, "Bill Score");
                const l = row(c, "Ρευστότητα");
                const h = hoursRow(c);
                return (
                  <tr key={c.slug} className="border-b border-dashed border-rule align-baseline">
                    <th scope="row" className="py-2 pr-3 font-display text-lg font-bold">
                      <a href={`#${c.slug}`} className="text-ink underline-offset-4 hover:underline">
                        {c.who}
                      </a>
                    </th>
                    <Cell before={s[1]} after={s[2]} />
                    <Cell before={l[1]} after={l[2]} />
                    <Cell before={h[1]} after={h[2]} className="hidden sm:table-cell" />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Container>
      </nav>

      {cases.map((c) => (
        <article key={c.slug} id={c.slug} className="scroll-mt-24 border-b border-rule py-10 lg:py-20">
          <Container className="grid gap-x-16 gap-y-8 lg:grid-cols-2 lg:gap-y-10">
            <header className="lg:col-span-2">
              <h2 className="text-5xl font-black sm:text-6xl">{c.who}</h2>
              <p className="mt-2 text-pencil">{c.kind}</p>
              <p className="mt-6 max-w-4xl font-display text-3xl leading-tight font-black text-ink sm:text-4xl">{c.lesson}</p>
            </header>

            <div className="lg:col-start-2 lg:row-start-2">
              <CaseLedger rows={c.rows} />
            </div>

            <div className="lg:col-start-1 lg:row-span-2 lg:row-start-2">
              <h3 className="font-display text-2xl font-bold">Από πού ξεκίνησε</h3>
              <p className="mt-2">{c.start}</p>
              <h3 className="mt-8 font-display text-2xl font-bold">Η στιγμή που άλλαξε</h3>
              <p className="mt-2">{c.moment}</p>
              <p className="mt-3">{c.time}</p>
            </div>

            <div className="lg:col-start-2 lg:row-start-3">
              <details className="group">
                <summary className="cursor-pointer font-display text-2xl font-bold text-ink">Οι 3 στόχοι του κύκλου</summary>
                <ol className="mt-3 space-y-4">
                {c.goals.map((g, k) => (
                  <li key={g.tool} className="grid grid-cols-[2rem_1fr]">
                    <span className="font-display text-xl font-black text-dot">{k + 1}</span>
                    <div>
                      <p className="font-display text-lg font-bold text-ink">{g.tool}</p>
                      <p className="text-[0.97rem]">{g.did}</p>
                    </div>
                  </li>
                ))}
                </ol>
              </details>
            </div>
          </Container>
        </article>
      ))}

      <section className="grid-paper py-16">
        <Container>
          <h2 className="max-w-3xl text-5xl font-black">Οι δικοί σου τρεις αριθμοί</h2>
          <p className="mt-4 max-w-prose text-lg">Ξεκίνα από το Bill Score. Σε 90 μέρες ξαναμετράς και βλέπεις τη διαφορά.</p>
          <ButtonLink href="/billscore" className="mt-8">
            Κάνε το Bill Score
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}

function Cell({ before, after, className = "" }: { before: string; after: string; className?: string }) {
  return (
    <td className={`py-2 pl-3 text-right font-display tabular-nums ${className}`}>
      <span className="sr-only">πριν </span>
      <Struck>{before}</Struck> <span className="sr-only">μετά </span>
      <span className="ml-1 text-lg font-black text-ink sm:text-xl">{after}</span>
    </td>
  );
}
