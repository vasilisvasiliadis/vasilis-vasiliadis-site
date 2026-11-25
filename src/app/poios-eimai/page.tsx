import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Container, Struck } from "@/components/ui";
import { socials } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/poios-eimai" },
  title: "Ποιος είμαι",
  description:
    "Ο Βασίλης «Bill» Βασιλειάδης: λογιστής-φοροτεχνικός Α΄ τάξης, mentor, ιδρυτής της Count On Me και της Billow, τραγουδοποιός, πατέρας τριών αγοριών.",
};

const jobs = ["Σερβιτόρος", "Διανομέας", "Πωλητής", "Μεσίτης"];

const ventures = [
  { name: "Count On Me", text: "Το boutique λογιστικό γραφείο μου. Και ναι, δεν είμαστε για όλους." },
  { name: "Billow", text: "Διαχείριση πάγιων δαπανών: ρεύμα, τηλεφωνία, internet, ασφάλειες." },
  { name: "Vasilis Vasiliadis", text: "Mentoring, στρατηγική και εκπαίδευση για επιχειρηματίες." },
  { name: "Song on me Records", text: "Η δική μου καλλιτεχνική στέγη." },
];

function Chapter({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14 first:mt-0">
      <h2 className="text-4xl font-black sm:text-5xl">{title}</h2>
      <div className="mt-4 space-y-4 text-lg">{children}</div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="Η ιστορία μου" title="Αποτυχημένος">
        <p>
          Είμαι ο Βασίλης Βασιλειάδης. Οι φίλοι μου με φωνάζουνε Bill. Αυτή η σελίδα δεν ξεκινάει με τίτλους. Ξεκινάει με μια
          λέξη.
        </p>
      </PageHero>

      <article className="py-16 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_20rem] lg:gap-20">
          <div className="max-w-2xl">
            <Chapter title="Τα 4 χιλιόμετρα">
              <p>
                Φοίτησα στο Πανεπιστήμιο Μακεδονίας, στο τμήμα Οικονομικών Επιστημών. Τελείωσα στα 5,5 χρόνια. Όχι επειδή
                έπινα καφέδες όλη μέρα. Επειδή δούλευα παράλληλα.
              </p>
              <p className="flex flex-wrap gap-x-5 font-display text-3xl">
                {jobs.map((j) => (
                  <Struck key={j}>{j}</Struck>
                ))}
              </p>
              <p>
                Αμέτρητες φορές περπατούσα πάνω από 4 χιλιόμετρα από τη σχολή ως το σπίτι, για να γλιτώσω το εισιτήριο. Εκεί
                έμαθα κάτι που δεν διδάσκεται στα αμφιθέατρα: η θεωρία είναι ωραία, η πραγματική οικονομία θέλει εξυπνάδα και
                αντοχές.
              </p>
            </Chapter>

            <Chapter title="«Κατεβάστε με στο δίκτυο»">
              <p>
                Στα 25 μου, μετά από πέντε χρόνια στο real estate, ήμουν «Περιφερειακός Σύμβουλος Ανάπτυξης Βορείου Ελλάδος»
                σε τράπεζα. Ήρθε η κρίση των στεγαστικών και ζήτησα κάτι που με έκανε να φανώ τρελός: να κατέβω στο δίκτυο.
              </p>
              <p>
                Πόνεσε. Έναν χρόνο μετά, οι περισσότεροι παλιοί συνάδελφοι είχαν φύγει. Εγώ έμεινα, πέρασα από όλα τα πόστα
                και έφτασα να είμαι Υπεύθυνος Πράσινης Τραπεζικής στον νομό μου. Και τότε παραιτήθηκα. Δεν ήθελα ταβάνια.
              </p>
            </Chapter>

            <Chapter title="Το μεγάλο μου λάθος">
              <p>
                Με τρία πολύ μικρά αγόρια, έφυγα για το εξωτερικό. Μέτρησα τα πάντα με αριθμούς: μισθούς, ανεργία, ΑΕΠ. Ξέχασα
                όσα δεν μετριούνται. Τη λησμονιά και την απουσία των δικών σου ανθρώπων δεν τη μετράς. Μόνο την πληρώνεις.
              </p>
              <p>Πήρα τη ζημιά μου νωρίς, μαζί με το μάθημα, και γύρισα. Αποτυχημένος.</p>
            </Chapter>

            <Chapter title="Ξανά από το μηδέν">
              <p>
                Μια φίλη μού είπε: «Βάλε όλη σου τη δύναμη να ξεκολλήσεις τη ρόδα από τη λάσπη. Μόλις ξεκολλήσει, την
                κουμαντάρεις όπου θέλεις.»
              </p>
              <p>
                Ξεκίνησα μόνος, με ένα ταλαιπωρημένο PC στο σπίτι και μια υπόσχεση: καμία έκπτωση από ανάγκη. Σεβάστηκα τον
                εαυτό μου και περίμενα να με σεβαστεί και η αγορά.
              </p>
            </Chapter>

            <section className="mt-14 border-y-2 border-ink py-8">
              <h2 className="sr-only">Η εξίσωσή μου</h2>
              <p className="font-display text-4xl leading-tight font-black sm:text-5xl">
                Επιτυχία = Αποτυχία + Πίστη + Επιμονή + Σκληρή δουλειά
              </p>
              <p className="mt-3 text-pencil">Η αποτυχία είναι το πρώτο συνθετικό. Δεν τη θέλει κανείς. Όλοι την περνάμε.</p>
            </section>

            <Chapter title="Γιατί σου τα λέω">
              <p>
                Για να ξέρεις ποιον έχεις απέναντί σου. Ξέρω πώς είναι να δουλεύεις 12 και 14 ώρες, να κοιτάς τα παιδιά σου να
                κοιμούνται και να νιώθεις τον κόμπο για την ώρα των πληρωμών, κάθε μήνα.
              </p>
              <p>
                Δεν ήρθα να σε χαϊδέψω. Ήρθα να γίνω ο καθρέφτης σου. Μόνο η αλήθεια ξεκολλάει τη ρόδα. Και η αλήθεια ξεκινάει
                από ένα νούμερο.
              </p>
            </Chapter>
          </div>

          <aside className="lg:pt-2">
            <Image
              src="/images/photos/coffee.webp"
              alt="Ο Βασίλης Βασιλειάδης με ένα φλιτζάνι καφέ"
              width={512}
              height={286}
              sizes="320px"
              className="w-full max-w-xs"
            />
            <h2 className="mt-8 text-3xl font-black">Σήμερα</h2>
            <p className="mt-2 text-pencil">Λογιστής-φοροτεχνικός Α΄ τάξης. Και πάνω από όλα, πατέρας τριών αγοριών.</p>
            <ul className="mt-5 space-y-4">
              {ventures.map((v) => (
                <li key={v.name}>
                  <p className="font-display text-xl font-bold text-ink">{v.name}</p>
                  <p className="text-[0.95rem]">{v.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.95rem] text-pencil">
              Διαλέγουμε τους πελάτες μας και δουλεύουμε κυρίως με συστάσεις.
            </p>
            <h2 className="mt-8 text-3xl font-black">Βίντεο</h2>
            <ul className="mt-2 space-y-1">
              {socials.map((x) => (
                <li key={x.name}>
                  <a href={x.url} rel="noopener" className="text-ink underline underline-offset-4">
                    {x.name} {x.handle}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </article>

      <section className="grid-paper border-t border-rule py-16">
        <Container>
          <h2 className="max-w-3xl text-5xl font-black">Ξεκίνα από ένα νούμερο</h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/billscore">Κάνε το Bill Score</ButtonLink>
            <ButtonLink href="/apotyximenos" variant="line">
              Όλη η ιστορία: δωρεάν e-book
            </ButtonLink>
            <ButtonLink href="/mentoring" variant="line">
              Δούλεψε μαζί μου
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
