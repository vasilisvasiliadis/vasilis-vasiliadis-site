import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Αποτελέσματα", description: "5 case studies: Bill Score, ρευστότητα και ώρες δουλειάς, πριν και μετά." };

export default function Page() {
  return <ComingSoon eyebrow="Πριν & μετά τις 90 μέρες" title="Αποτελέσματα" text="5 case studies: Bill Score, ρευστότητα και ώρες δουλειάς, πριν και μετά." />;
}
