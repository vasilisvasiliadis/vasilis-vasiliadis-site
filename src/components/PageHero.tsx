import type { ReactNode } from "react";
import { Container, Dot } from "./ui";

export function PageHero({
  kicker,
  title,
  children,
  aside,
}: {
  kicker?: string;
  title: string;
  children?: ReactNode;
  /** Προαιρετική εικόνα δίπλα στον τίτλο (κάτω από το κείμενο στο κινητό) */
  aside?: ReactNode;
}) {
  return (
    <section className="grid-paper border-b border-rule">
      <Container className={`py-14 sm:py-20 ${aside ? "grid items-end gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14" : ""}`}>
        <div>
          {kicker && <p className="font-display text-xl font-medium text-pencil">{kicker}</p>}
          <h1 className="mt-2 max-w-5xl text-6xl font-black sm:text-8xl">
            {title}
            <Dot className="ml-1" />
          </h1>
          {children && <div className="mt-6 max-w-2xl text-xl leading-relaxed text-ink">{children}</div>}
        </div>
        {aside}
      </Container>
    </section>
  );
}
