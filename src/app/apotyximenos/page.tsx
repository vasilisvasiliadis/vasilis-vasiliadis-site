import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Container } from "@/components/ui";

const pdf = "/ebooks/apotyximenos-vasilis-vasiliadis.pdf";

export const metadata: Metadata = {
  alternates: { canonical: "/apotyximenos" },
  title: "Αποτυχημένος · δωρεάν e-book",
  description:
    "Δωρεάν e-book του Βασίλη Βασιλειάδη: η ιστορία μιας αποτυχίας και πώς τελικά τα κατάφερε. 12 κεφάλαια, ασκήσεις και η Πρόκληση 7 ημερών «Ξεκόλλα τη ρόδα».",
  openGraph: {
    title: "Αποτυχημένος · δωρεάν e-book",
    description: "Όλοι αποτυγχάνουμε. Το θέμα είναι αν θα σηκωθείς. Κατέβασε δωρεάν το e-book.",
    images: [{ url: "/images/covers/apotyximenos.webp", width: 640, height: 906, alt: "Εξώφυλλο: Αποτυχημένος" }],
  },
};

const inside = [
  { n: "12", t: "κεφάλαια αληθινής ιστορίας: από τα 4 χιλιόμετρα με τα πόδια ως το «Κατεβάστε με στο δίκτυο» και την επιστροφή από το εξωτερικό." },
  { n: "12", t: "ασκήσεις «Η σειρά σου» για να γράψεις τη δική σου ιστορία, όχι μόνο να διαβάσεις τη δική μου." },
  { n: "1", t: "εξίσωση: Επιτυχία = Αποτυχία + Πίστη + Επιμονή + Σκληρή δουλειά. Με ένα εργαλείο για κάθε συνθετικό." },
  { n: "7", t: "μέρες πρόκληση «Ξεκόλλα τη ρόδα». Επτά κινήσεις, καμία πάνω από 20 λεπτά." },
];

export default function EbookPage() {
  return (
    <>
      <PageHero
        kicker="Δωρεάν e-book"
        title="Αποτυχημένος"
        aside={
          <Image
            src="/images/covers/apotyximenos.webp"
            alt="Εξώφυλλο του e-book «Αποτυχημένος» του Βασίλη Βασιλειάδη"
            width={640}
            height={906}
            sizes="(min-width: 1024px) 22rem, 80vw"
            className="w-full max-w-xs border border-rule shadow-lg"
            priority
          />
        }
      >
        <p>Η ιστορία μου. Και πώς, τελικά, τα κατάφερα.</p>
        <p className="mt-4 text-lg text-graphite">
          Όλοι αποτυγχάνουμε. Η ερώτηση δεν είναι αν θα πέσεις. Είναι αν θα σηκωθείς.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={pdf}
            download
            className="inline-flex min-h-12 items-center justify-center rounded-[3px] bg-dot px-6 py-3 font-display text-lg font-bold tracking-wide text-white transition-colors hover:bg-dot-dark"
          >
            Κατέβασε δωρεάν (PDF)
          </a>
          <a
            href={pdf}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-12 items-center justify-center rounded-[3px] border-2 border-ink px-6 py-3 font-display text-lg font-bold tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Διάβασέ το online
          </a>
        </div>
      </PageHero>

      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="text-5xl font-black">Τι έχει μέσα</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {inside.map((x) => (
              <li key={x.t} className="flex gap-5 border-t-2 border-ink pt-4">
                <span className="font-display text-6xl leading-none font-black text-dot">{x.n}</span>
                <span className="text-lg">{x.t}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y-2 border-ink">
        <Container className="py-12">
          <p className="max-w-4xl font-display text-4xl leading-tight font-black text-ink sm:text-5xl">
            «Το “απέτυχα” είναι γεγονός. Το “είμαι αποτυχημένος” είναι ταυτότητα. Διάλεξε ποιο θα κρατήσεις.»
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="text-4xl font-black">Μην το διαβάσεις μόνος</h2>
          <ul className="mt-6 list-disc space-y-3 pl-6 text-lg">
            <li>Κάνε την Πρόκληση 7 ημερών και ανέβαζε κάθε μέρα story με <b>#ΞεκόλλαΤηΡόδα</b>.</li>
            <li>
              Κάνε tag στο{" "}
              <a href="https://www.instagram.com/vasiliadisvas/" rel="noopener" className="text-dot underline underline-offset-4">
                @vasiliadisvas
              </a>
              . Τα διαβάζω όλα.
            </li>
            <li>Στείλ&apos; το σε έναν άνθρωπο που το χρειάζεται σήμερα. Όχι σε όλους. Σε έναν.</li>
          </ul>
        </Container>
      </section>

      <section className="grid-paper border-t border-rule py-16">
        <Container>
          <h2 className="max-w-3xl text-5xl font-black">Και μετά; Ξεκίνα από ένα νούμερο</h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/billscore">Κάνε το Bill Score</ButtonLink>
            <ButtonLink href="/poios-eimai" variant="line">
              Ποιος είμαι
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
