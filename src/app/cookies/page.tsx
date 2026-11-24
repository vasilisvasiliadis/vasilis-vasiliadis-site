import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Πολιτική cookies", description: "Ποια cookies χρησιμοποιεί ο ιστότοπος και γιατί." };

export default function Page() {
  return <ComingSoon eyebrow="Νομικά" title="Πολιτική cookies" text="Ποια cookies χρησιμοποιεί ο ιστότοπος και γιατί." />;
}
