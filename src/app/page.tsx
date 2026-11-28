import type { Metadata } from "next";
import { Cycle, FinalCta, Hero, Package, Pillars, Problem, Social, Story } from "@/components/home";

// Εκτός πρώτης εκκίνησης (επιστρέφουν αργότερα): WorkWithMe, Results, Speaking

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Pillars />
      <Cycle />
      <Package />
      <Story />
      <Social />
      <FinalCta />
    </>
  );
}
