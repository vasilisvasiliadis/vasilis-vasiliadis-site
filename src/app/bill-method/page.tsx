import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Cycle } from "@/components/home";
import { ButtonLink, Container } from "@/components/ui";
import { chapters } from "@/lib/content";
import { pillars, pillarStyle } from "@/lib/site";

export const metadata: Metadata = {
  title: "Η μέθοδος Bill",
  description:
    "The Bill Method™: τέσσερις πυλώνες με αυτή τη σειρά. Χτίσε, Βελτίωσε, Οδήγησε, Ανέβα. 12 κεφάλαια, 12 εργαλεία, κύκλοι 90 ημερών.",
};

const ways = [
  { title: "Χαρτί", text: "Το Workbook, μαζί με το βιβλίο. Με μολύβι, γιατί το μολύβι κρατά την προσοχή σου.", href: "/paketo-bill/workbook" },
  { title: "Excel της μεθόδου", text: "Όλα τα εργαλεία, με τις πράξεις έτοιμες.", href: "/paketo-bill/excel" },
  { title: "Bill Score online", text: "Δωρεάν. Το σκορ βγαίνει μόνο του.", href: "/billscore" },
];

export default function MethodPage() {
  return (
    <>
      <PageHero kicker="The Bill Method™" title="Η μέθοδος Bill">
        <p>
          Πώς να στήσεις μια επιχείρηση που κερδίζει και δουλεύει χωρίς εσένα. Οι φίλοι με φωνάζουν Bill. Από εκεί και το
          όνομα. Δεν το πήρα από κανέναν Αμερικανό γκουρού.
        </p>
      </PageHero>

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <Image src="/brand/bill-logo.png" alt="The Bill Method" width={700} height={517} className="h-28 w-auto" />
            <p className="mt-6 max-w-sm text-pencil">
              Το «i» του λογότυπου είναι μολύβι. Η μέθοδος δουλεύεται με χαρτί και μολύβι, πριν από κάθε οθόνη.
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-black sm:text-6xl">Η σειρά δεν είναι τυχαία</h2>
            <p className="mt-5 text-lg">
              Αν δεν ρίξεις πρώτα τα μπετά, δεν φτιάχνεις ρετιρέ. Στην άμμο δεν χτίζονται παλάτια.
            </p>
            <ul className="mt-6 space-y-2 font-display text-2xl leading-tight font-bold text-ink">
              <li>Χωρίς Θεμέλιο δεν βγαίνει το Χρήμα.</li>
              <li>Χωρίς Χρήμα δεν αγοράζεις Χρόνο.</li>
              <li>Χωρίς Χρόνο δεν φτάνεις στην Ελευθερία.</li>
            </ul>
            <p className="mt-6 text-pencil">
              Το βιβλίο το διαβάζεις όλο, με τη σειρά. Στον αδύναμο πυλώνα σου όμως κάνεις όλες τις ασκήσεις, χωρίς έκπτωση.
            </p>
          </div>
        </Container>
      </section>

      {pillars.map((p, i) => {
        const s = pillarStyle[p.key];
        const list = chapters.filter((c) => c.pillar === p.key);
        return (
          <section key={p.key} aria-labelledby={`part-${p.key}`} className="border-t border-rule py-16 lg:py-20">
            <Container className="grid gap-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
              <div className={`border-t-[6px] ${s.border} pt-4`}>
                <p aria-hidden="true" className={`font-serif text-[7rem] leading-[0.85] font-black ${s.text}`}>
                  {p.letter}
                </p>
                <h2 id={`part-${p.key}`} className="mt-4 text-4xl font-black">
                  Μέρος {["Α΄", "Β΄", "Γ΄", "Δ΄"][i]}: {p.verb}
                </h2>
                <p className="mt-1 text-pencil">
                  {p.en}. Κερδίζεις {["θεμέλιο", "χρήμα", "χρόνο", "ελευθερία"][i]}.
                </p>
                <p className="mt-3 font-display text-xl font-bold text-ink">{p.promise}</p>
              </div>
              <ol className="divide-y divide-rule">
                {list.map((c) => (
                  <li key={c.n} className="grid gap-2 py-6 first:pt-0 sm:grid-cols-[4rem_1fr]">
                    <span className={`font-display text-4xl font-black tabular-nums ${s.text}`}>{c.n}</span>
                    <div>
                      <h3 className="text-3xl font-black">{c.title}</h3>
                      <p className="mt-1 text-pencil">Εργαλείο: {c.tool}</p>
                      <p className="mt-3 text-lg text-ink">«{c.phrase}»</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Container>
          </section>
        );
      })}

      <div className="border-t border-rule">
        <Cycle />
      </div>

      <section className="border-t border-rule bg-[#f3f5f8] py-20 lg:py-28" aria-labelledby="ways-title">
        <Container>
          <h2 id="ways-title" className="text-5xl font-black sm:text-6xl">
            Τρεις τρόποι, ίδια εργαλεία
          </h2>
          <ul className="mt-10 grid gap-10 lg:grid-cols-3">
            {ways.map((w) => (
              <li key={w.title}>
                <Link href={w.href} className="group block">
                  <h3 className="text-4xl font-black group-hover:text-dot">{w.title}</h3>
                  <p className="mt-2 text-lg">{w.text}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/billscore">Ξεκίνα από το Bill Score</ButtonLink>
            <ButtonLink href="/paketo-bill" variant="line">
              Δες το Πακέτο BILL
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
