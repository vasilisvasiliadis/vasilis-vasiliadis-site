import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Όροι χρήσης", description: "Οι όροι χρήσης του ιστότοπου και των ψηφιακών προϊόντων." };

export default function Page() {
  return <ComingSoon eyebrow="Νομικά" title="Όροι χρήσης" text="Οι όροι χρήσης του ιστότοπου και των ψηφιακών προϊόντων." />;
}
