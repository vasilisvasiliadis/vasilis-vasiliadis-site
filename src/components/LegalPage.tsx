import type { ReactNode } from "react";
import { legalUpdated } from "@/lib/site";
import { Container } from "./ui";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="py-14 lg:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-5xl font-black sm:text-6xl">{title}</h1>
        <p className="mt-3 text-pencil">Τελευταία ενημέρωση: {legalUpdated}</p>
        <div className="legal mt-10">{children}</div>
      </Container>
    </article>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-3xl font-black">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
