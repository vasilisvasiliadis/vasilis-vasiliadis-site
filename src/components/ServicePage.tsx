import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import { cases } from "@/lib/content";
import { business, bookingUrl } from "@/lib/site";
import { CaseLedger } from "./CaseLedger";
import { WaitlistForm } from "./WaitlistForm";
import type { Service } from "@/lib/services";
import { PageHero } from "./PageHero";
import { ButtonLink, Container, Dot, buttonBase } from "./ui";

export function ContactActions({ subject }: { subject: string }) {
  const mail = `mailto:${business.email}?subject=${encodeURIComponent(subject)}`;
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {bookingUrl ? (
        <a href={bookingUrl} className={`${buttonBase} bg-dot text-white hover:bg-dot-dark`}>
          Κλείσε ραντεβού γνωριμίας
        </a>
      ) : (
        <a href={mail} className={`${buttonBase} bg-dot text-white hover:bg-dot-dark`}>
          Στείλε μου email
        </a>
      )}
      <ButtonLink href="/billscore" variant="line">
        Κάνε το Bill Score
      </ButtonLink>
    </div>
  );
}

export function ServicePage({ s, extra, extraAfter }: { s: Service; extra?: ReactNode; extraAfter?: ReactNode }) {
  const example = s.caseSlug ? cases.find((c) => c.slug === s.caseSlug) : undefined;
  return (
    <>
      <PageHero
        kicker={s.kicker}
        title={s.title}
        aside={
          s.image && (
            <Image
              src={s.image.src}
              alt={s.image.alt}
              width={s.image.width}
              height={s.image.height}
              priority
              sizes="(min-width: 1024px) 352px, 90vw"
              className="w-full max-w-sm justify-self-end border border-rule bg-white lg:max-w-none"
            />
          )
        }
      >
        <p className="mb-5 font-display text-3xl leading-tight font-black text-ink sm:text-4xl">{s.promise}</p>
        <p>{s.intro}</p>
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
          </div>
          <div className="divide-y divide-rule border-y border-rule">
            {s.offers.map((o) => (
              <article key={o.name} className="py-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h2 className="text-4xl font-black">{o.name}</h2>
                  <p className="font-display text-xl text-ink">{o.price}</p>
                </div>
                <p className="mt-1 text-pencil">{o.format}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5">
                  {o.includes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                {o.waitlist && (
                  <div className="mt-6">
                    <WaitlistForm interest={o.waitlist} />
                  </div>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {example && (
        <section className="border-t border-rule py-16 lg:py-24" aria-labelledby="example-title">
          <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <h2 id="example-title" className="text-5xl font-black">
                Ένα παράδειγμα
              </h2>
              <p className="mt-4 font-display text-2xl font-bold text-ink">{example.who}</p>
              <p className="text-pencil">{example.kind}</p>
              <p className="mt-6 font-display text-3xl leading-tight font-black text-ink">{example.lesson}</p>
              <p className="mt-6 text-sm text-pencil">Ενδεικτικό παράδειγμα, όχι συγκεκριμένος πελάτης. Δεν αποτελεί υπόσχεση αποτελέσματος.</p>
            </div>
            <div>
              <CaseLedger rows={example.rows.filter(([l]) => l !== "Πυλώνες").slice(0, 3)} />
              <p className="mt-6">
                <Link href={`/apotelesmata#${example.slug}`} className="text-ink underline underline-offset-4">
                  Δες όλο το παράδειγμα
                </Link>
              </p>
            </div>
          </Container>
        </section>
      )}

      {extra}
      {extraAfter}

      <section className="grid-paper border-t border-rule py-16 lg:py-24" aria-labelledby="steps-title">
        <Container>
          <h2 id="steps-title" className="text-5xl font-black">
            Πώς ξεκινάμε
          </h2>
          <ol className="mt-10 grid gap-10 sm:grid-cols-3">
            {s.steps.map((st, i) => (
              <li key={st.verb}>
                <p className="font-display text-xl font-bold text-dot">{i + 1}</p>
                <h3 className="mt-1 text-4xl font-black">{st.verb}</h3>
                <p className="mt-2">{st.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <ContactActions subject={s.subject} />
          </div>
          <p className="mt-6 text-sm text-pencil">
            Δες και πώς λειτουργεί η <Link href="/bill-method" className="underline underline-offset-4">μέθοδος Bill</Link>.
          </p>
        </Container>
      </section>
    </>
  );
}
