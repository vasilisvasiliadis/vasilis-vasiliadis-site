import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BuyButton } from "@/components/BuyButton";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Container } from "@/components/ui";
import { productDetails } from "@/lib/content";
import { bundle, formatPrice, products, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/paketo-bill" },
  title: "Πακέτο BILL",
  description: "Βιβλίο, Workbook, Excel και AI Prompts της μεθόδου Bill. Ένα σύστημα, τέσσερα εργαλεία.",
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: site.name,
    title: `Πακέτο BILL · ${site.name}`,
    description: "Βιβλίο, Workbook, Excel και AI Prompts της μεθόδου Bill. Ένα σύστημα, τέσσερα εργαλεία.",
    images: [{ url: products[0].cover, width: products[0].coverW, height: products[0].coverH, alt: "Η μέθοδος Bill" }],
  },
};

export default function PackagePage() {
  return (
    <>
      <PageHero kicker="Το Πακέτο BILL" title="Ένα σύστημα, τέσσερα εργαλεία">
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
                  <p className="font-display text-2xl whitespace-nowrap text-ink">{formatPrice(p.price)}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="grid-paper border-t border-rule py-16 lg:py-24" aria-labelledby="bundle-title">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 id="bundle-title" className="text-5xl font-black sm:text-6xl">
              {bundle.name}
            </h2>
            <p className="mt-4 max-w-prose text-lg">
              Βιβλίο, Workbook, Excel και AI Prompts μαζί. Διαβάζεις, γράφεις με μολύβι, βάζεις τα νούμερα στο Excel και
              ελέγχεις τη σκέψη σου με την AI.
            </p>
            {bundle.price !== null && <p className="mt-6 font-display text-3xl font-black text-ink">{formatPrice(bundle.price)}</p>}
            <div className="mt-6 flex flex-col gap-4">
              <BuyButton checkoutUrl={bundle.checkoutUrl} price={bundle.price} label="Αγόρασε το πακέτο" interest="paketo-bill" />
              {!bundle.checkoutUrl && (
                <div>
                  <ButtonLink href="/billscore">Κάνε το Bill Score</ButtonLink>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.map((p, i) => (
              <Image
                key={p.slug}
                src={p.cover}
                alt=""
                width={p.coverW}
                height={p.coverH}
                sizes="200px"
                className={`w-full border border-rule bg-white ${i % 2 ? "rotate-[2deg]" : "rotate-[-2deg]"}`}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
