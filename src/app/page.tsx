import type { Metadata } from "next";
import { Cycle, FinalCta, Hero, Package, Pillars, Problem, Results, Social, Speaking, Story, WorkWithMe } from "@/components/home";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Pillars />
      <Cycle />
      <Package />
      <WorkWithMe />
      <Story />
      <Social />
      <Results />
      <Speaking />
      <FinalCta />
    </>
  );
}
