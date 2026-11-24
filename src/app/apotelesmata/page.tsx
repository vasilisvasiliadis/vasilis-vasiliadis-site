import type { Metadata } from "next";
import { CaseLedger } from "@/components/CaseLedger";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Container } from "@/components/ui";
import { cases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Αποτελέσματα",
  description:
    "5 case studies πριν και μετά τις 90 μέρες: Bill Score, ρευστότητα και ώρες δουλειάς σε γραφίστα, τεχνικό γραφείο, ηλεκτρολόγο, studio Pilates και e-shop.",
};

const colors = ["text-build", "text-improve", "text-lead", "text-levelup", "text-dot"];

export default function ResultsPage() {
  return (
    <>
      <PageHero kicker="Πριν και μετά τις 90 μέρες" title="Αποτελέσματα">
        <p>
          Τρία νούμερα μετράνε: το Bill Score, η ρευστότητα (το χαμηλότερο σημείο του ταμείου 4 εβδομάδων) και οι ώρες
          δουλειάς την εβδομάδα.
        </p>
        <p className="mt-3 text-base text-pencil">
          Ενδεικτικές μελέτες περίπτωσης από το βιβλίο, βασισμένες σε πραγματικά μοτίβα. Δεν είναι συγκεκριμένοι άνθρωποι, τα
          νούμερα είναι στρογγυλεμένα και δεν αποτελούν υπόσχεση για το δικό σου αποτέλεσμα.
        </p>
      </PageHero>

      <nav aria-label="Case studies" className="border-b border-rule">
        <Container className="flex flex-wrap gap-x-6 gap-y-2 py-5 font-display text-lg">
          {cases.map((c) => (
            <a key={c.slug} href={`#${c.slug}`} className="text-graphite underline-offset-4 hover:text-ink hover:underline">
              {c.who}
            </a>
          ))}
        </Container>
      </nav>

      {cases.map((c, i) => (
        <article key={c.slug} id={c.slug} className="scroll-mt-24 border-b border-rule py-16 lg:py-24">
          <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-5xl font-black sm:text-6xl">{c.who}</h2>
              <p className="mt-2 text-pencil">{c.kind}</p>
              <h3 className="mt-8 font-display text-2xl font-bold">Από πού ξεκίνησε</h3>
              <p className="mt-2">{c.start}</p>
              <h3 className="mt-8 font-display text-2xl font-bold">Η στιγμή που άλλαξε</h3>
              <p className="mt-2">{c.moment}</p>
              <h3 className="mt-8 font-display text-2xl font-bold">Ελεύθερος χρόνος</h3>
              <p className="mt-2">{c.time}</p>
            </div>
            <div>
              <CaseLedger rows={c.rows} color={colors[i]} />
              <p className="mt-2 text-sm text-pencil">Πυλώνες: Χτίσε / Βελτίωσε / Οδήγησε / Ανέβα, ο καθένας στα 25.</p>
              <h3 className="mt-10 font-display text-2xl font-bold">Οι 3 στόχοι του κύκλου</h3>
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
              <p className="mt-10 font-display text-3xl leading-tight font-black text-ink">{c.lesson}</p>
            </div>
          </Container>
        </article>
      ))}

      <section className="grid-paper py-16">
        <Container>
          <h2 className="max-w-3xl text-5xl font-black">Τα δικά σου τρία νούμερα</h2>
          <p className="mt-4 max-w-prose text-lg">Ξεκίνα από το Bill Score. Σε 90 μέρες ξαναμετράς και βλέπεις τη διαφορά.</p>
          <ButtonLink href="/billscore" className="mt-8">
            Κάνε το Bill Score
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
