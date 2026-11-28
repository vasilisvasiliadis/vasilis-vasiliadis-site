import type { Metadata } from "next";
import { MentoringForm } from "@/components/MentoringForm";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Container, Dot } from "@/components/ui";
import { services } from "@/lib/services";

const s = services.mentoring;
const cycle = s.offers[0];

export const metadata: Metadata = {
  title: "Mentoring 1 προς 1, με αίτηση",
  description:
    "Κύκλος 90 ημερών, 1 προς 1, πάνω στα δικά σου νούμερα. Λίγες θέσεις, με αίτηση και γνωριμία 20 λεπτών.",
  alternates: { canonical: "/mentoring" },
};

const steps = [
  { verb: "Μέτρα", text: "Κάνεις το Bill Score." },
  { verb: "Αίτηση", text: "Στέλνεις αίτηση με 5 ερωτήσεις." },
  { verb: "Γνωριμία", text: "Αν ταιριάζουμε, γνωριμία 20 λεπτών." },
];

export default function MentoringPage() {
  return (
    <>
      <PageHero kicker="Για επιχειρηματίες" title={"Mentoring 1\u00a0προς\u00a01\u00a0· Με\u00a0αίτηση"}>
        <p>
          Δουλεύω με λίγους επιχειρηματίες κάθε φορά, γιατί δουλεύουμε πάνω στα δικά σου νούμερα. Λίγες θέσεις.
        </p>
      </PageHero>

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <h2 className="text-5xl font-black">Για σένα, αν</h2>
            <ul className="mt-6 space-y-4 text-lg">
              {s.forWhom.map((f) => (
                <li key={f} className="flex gap-4">
                  <Dot className="mt-2.5 shrink-0 text-[1.6rem]" />
                  {f}
                </li>
              ))}
            </ul>
            <h2 className="mt-12 text-4xl font-black">Δεν είναι για σένα, αν</h2>
            <p className="mt-4 text-lg">Ψάχνεις έτοιμη λύση χωρίς δουλειά ή την πιο φτηνή επιλογή.</p>
          </div>

          <article className="border-y border-rule py-8">
            <h2 className="text-4xl font-black">Κύκλος 90 ημερών</h2>
            <p className="mt-1 text-pencil">{cycle.format}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5">
              {cycle.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p className="mt-6 font-display text-2xl leading-tight font-bold text-ink">
              Για το κόστος μιλάμε στη γνωριμία. Το mentoring είναι επένδυση, όχι έξοδο.
            </p>
          </article>
        </Container>
      </section>

      <section className="grid-paper border-t border-rule py-16 lg:py-24" aria-labelledby="steps-title">
        <Container>
          <h2 id="steps-title" className="text-5xl font-black">
            Πώς ξεκινάμε
          </h2>
          <ol className="mt-10 grid gap-10 sm:grid-cols-3">
            {steps.map((st, i) => (
              <li key={st.verb}>
                <p className="font-display text-xl font-bold text-dot">{i + 1}</p>
                <h3 className="mt-1 text-4xl font-black">{st.verb}</h3>
                <p className="mt-2">{st.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <ButtonLink href="/billscore" variant="line">
              Κάνε το Bill{" "}Score
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section id="aitisi" className="scroll-mt-20 border-t border-rule py-16 lg:py-24" aria-labelledby="aitisi-title">
        <Container>
          <h2 id="aitisi-title" className="text-5xl font-black">
            Αίτηση
          </h2>
          <p className="mt-4 mb-10 max-w-prose text-lg">Πέντε ερωτήσεις. Γράψε όπως μιλάς, χωρίς να στολίσεις τίποτα.</p>
          <MentoringForm />
        </Container>
      </section>
    </>
  );
}
