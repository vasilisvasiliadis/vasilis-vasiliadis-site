import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Education", description: "Σεμινάρια, workshops και e-courses. Μαθαίνεις κάνοντας." };

export default function Page() {
  return <ComingSoon eyebrow="Συνεργασία" title="Education" text="Σεμινάρια, workshops και e-courses. Μαθαίνεις κάνοντας." />;
}
