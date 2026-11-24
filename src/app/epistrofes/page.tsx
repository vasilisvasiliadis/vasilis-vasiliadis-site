import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Πολιτική επιστροφών", description: "Επιστροφές και υπαναχώρηση για ψηφιακά προϊόντα." };

export default function Page() {
  return <ComingSoon eyebrow="Νομικά" title="Πολιτική επιστροφών" text="Επιστροφές και υπαναχώρηση για ψηφιακά προϊόντα." />;
}
