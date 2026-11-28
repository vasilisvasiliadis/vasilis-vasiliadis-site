import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Container } from "@/components/ui";
import { productDetails } from "@/lib/content";
import { TierCards } from "@/components/TierCards";
import { WaitlistForm } from "@/components/WaitlistForm";
import { products, site, tiers } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/paketo-bill" },
  title: "Η μέθοδος Bill · βιβλίο και εργαλεία",
  description: "Βιβλίο, Workbook, Excel και AI Prompts της μεθόδου Bill. Ένα σύστημα, τέσσερα εργαλεία.",
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: site.name,
    title: `Η μέθοδος Bill · ${site.name}`,
    description: "Βιβλίο, Workbook, Excel και AI Prompts της μεθόδου Bill. Ένα σύστημα, τέσσερα εργαλεία.",
    images: [{ url: products[0].cover, width: products[0].coverW, height: products[0].coverH, alt: "Η μέθοδος Bill" }],
  },
};

const availability: Record<string, string> = {
  vivlio: "Σε όλα τα επίπεδα",
  workbook: "Από το 2ο επίπεδο",
  excel: "Στο πλήρες πακέτο",
  prompts: "Δώρο στο πλήρες πακέτο",
};

export default function PackagePage() {
  const open = tiers.some((t) => t.checkoutUrl);
  return (
    <>
      <PageHero kicker="Η μέθοδος Bill" title="Ένα σύστημα, τέσσερα εργαλεία">
        <p>
          Αν έχεις μόνο το βιβλίο, παίρνεις μια πρώτη γεύση της μεθόδου. Χωρίς την πράξη όμως δεν γίνεται τίποτα. Το Workbook,
          το Excel και τα Prompts είναι η πράξη.
        </p>
      </PageHero>

      <section className="py-16 lg:py-24">
        <Container>
          <ul className="divide-y divide-rule border-y border-rule">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/paketo-bill/${p.slug}`} className="group grid items-center gap-6 py-8 sm:grid-cols-[12rem_1fr_auto]">
                  <Image
                    src={p.cover}
                    alt={`Εξώφυλλο: ${p.name}`}
                    width={p.coverW}
                    height={p.coverH}
                    sizes="192px"
                    className="w-40 border border-rule sm:w-48"
                  />
                  <div>
                    <p className="text-sm text-pencil">{p.kind}, {productDetails[p.slug].format}</p>
                    <h2 className="text-4xl font-black group-hover:text-dot">{p.name}</h2>
                    <p className="mt-2 max-w-prose">{p.line}</p>
                  </div>
                  <p className="font-display text-xl text-ink sm:text-right">{availability[p.slug]}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="epipeda" className="grid-paper scroll-mt-20 border-t border-rule py-16 lg:py-24" aria-labelledby="tiers-title">
        <Container>
          <h2 id="tiers-title" className="text-5xl font-black sm:text-6xl">
            Διάλεξε πόσο μακριά θα πας
          </h2>
          <p className="mt-4 max-w-prose text-lg">
            Ξεκίνα από το βιβλίο, πρόσθεσε το Workbook για να γράφεις, ή πάρε το πλήρες πακέτο με το Excel και τα AI Prompts
            δώρο.
          </p>
          <div className="mt-10">
            <TierCards />
          </div>
        </Container>
      </section>

      {!open && (
        <section id="lista" className="scroll-mt-20 border-t border-rule py-16 lg:py-24" aria-labelledby="lista-title">
          <Container className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 id="lista-title" className="text-5xl font-black">
                Άνοιγμα σύντομα
              </h2>
              <p className="mt-4 max-w-prose text-lg">
                Άφησε το email σου και θα σε ειδοποιήσω μία φορά, μόλις ανοίξουν οι πωλήσεις. Μέχρι τότε, ξεκίνα δωρεάν από το Bill
                Score.
              </p>
              <div className="mt-6">
                <ButtonLink href="/billscore" variant="line">
                  Κάνε το Bill Score
                </ButtonLink>
              </div>
            </div>
            <WaitlistForm interest="paketo-bill" askPrice tierChoice />
          </Container>
        </section>
      )}
    </>
  );
}
