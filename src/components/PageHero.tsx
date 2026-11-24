import type { ReactNode } from "react";
import { Container, Dot } from "./ui";

export function PageHero({ kicker, title, children }: { kicker?: string; title: string; children?: ReactNode }) {
  return (
    <section className="grid-paper border-b border-rule">
      <Container className="py-14 sm:py-20">
        {kicker && <p className="font-display text-xl font-medium text-pencil">{kicker}</p>}
        <h1 className="mt-2 max-w-5xl text-6xl font-black sm:text-8xl">
          {title}
          <Dot className="ml-1" />
        </h1>
        {children && <div className="mt-6 max-w-2xl text-xl leading-relaxed text-ink">{children}</div>}
      </Container>
    </section>
  );
}
