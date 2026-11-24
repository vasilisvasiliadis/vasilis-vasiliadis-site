import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BuyButton } from "@/components/BuyButton";
import { ButtonLink, Container, Dot } from "@/components/ui";
import { productDetails } from "@/lib/content";
import { formatPrice, products, site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.line,
    alternates: { canonical: `/paketo-bill/${p.slug}` },
    openGraph: {
      type: "website",
      locale: "el_GR",
      siteName: site.name,
      title: `${p.name} · ${site.name}`,
      description: p.line,
      images: [{ url: p.cover, width: p.coverW, height: p.coverH, alt: p.name }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const d = productDetails[p.slug];
  const others = products.filter((x) => x.slug !== p.slug);

  return (
    <>
      <section className="grid-paper border-b border-rule">
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_22rem] lg:gap-20">
          <div>
            <p className="font-display text-xl font-medium text-pencil">
              <Link href="/paketo-bill" className="underline-offset-4 hover:underline">
                Πακέτο BILL
              </Link>
              , {p.kind.toLowerCase()}
            </p>
            <h1 className="mt-2 text-6xl font-black sm:text-8xl">
              {p.name}
              <Dot className="ml-1" />
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-ink">{p.line}</p>
            <p className="mt-3 text-pencil">{d.format}</p>
            {p.price !== null && <p className="mt-8 font-display text-3xl font-black text-ink">{formatPrice(p.price)}</p>}
            <div className="mt-8">
              <BuyButton checkoutUrl={p.checkoutUrl} price={p.price} interest={p.slug} />
            </div>
          </div>
          <Image
            src={p.cover}
            alt={`Εξώφυλλο: ${p.name}`}
            width={p.coverW}
            height={p.coverH}
            priority
            sizes="352px"
            className="w-full rotate-[2deg] border border-rule bg-white shadow-[0_18px_30px_-18px_rgba(15,76,117,0.45)]"
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-5xl font-black">Τι περιέχει</h2>
            <ul className="mt-6 space-y-3 text-lg">
              {d.what.map((w) => (
                <li key={w} className="flex gap-4">
                  <Dot className="mt-2.5 shrink-0 text-[1.6rem]" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-black">Για ποιον</h2>
            <p className="mt-4 text-lg">{d.forWhom}</p>
            <p className="mt-6 text-sm text-pencil">
              Ψηφιακό προϊόν: παραδίδεται αμέσως μετά την πληρωμή και δεν επιστρέφεται.{" "}
              <Link href="/epistrofes" className="underline underline-offset-4">
                Πολιτική επιστροφών
              </Link>
              . Για προσωπική χρήση του αγοραστή. Γενική πληροφόρηση, όχι φορολογική ή νομική συμβουλή.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-rule bg-[#f3f5f8] py-16" aria-labelledby="others-title">
        <Container>
          <h2 id="others-title" className="text-4xl font-black">
            Τα άλλα μέρη του πακέτου
          </h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/paketo-bill/${o.slug}`} className="group block">
                  <Image src={o.cover} alt="" width={o.coverW} height={o.coverH} sizes="240px" className="w-40 border border-rule bg-white" />
                  <p className="mt-3 font-display text-2xl font-black text-ink group-hover:text-dot">{o.name}</p>
                  <p className="text-[0.95rem]">{o.line}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/paketo-bill" variant="ink" className="mt-10">
            Ολόκληρο το πακέτο
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
