import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Mentoring", description: "Δουλεύουμε μαζί πάνω στα δικά σου νούμερα, έναν πυλώνα τη φορά, σε κύκλους 90 ημερών." };

export default function Page() {
  return <ComingSoon eyebrow="Συνεργασία" title="Mentoring" text="Δουλεύουμε μαζί πάνω στα δικά σου νούμερα, έναν πυλώνα τη φορά, σε κύκλους 90 ημερών." />;
}
