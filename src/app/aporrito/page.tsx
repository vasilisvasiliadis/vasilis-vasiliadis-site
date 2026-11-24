import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Πολιτική απορρήτου", description: "Πώς συλλέγουμε και προστατεύουμε τα προσωπικά σου δεδομένα (GDPR)." };

export default function Page() {
  return <ComingSoon eyebrow="Νομικά" title="Πολιτική απορρήτου" text="Πώς συλλέγουμε και προστατεύουμε τα προσωπικά σου δεδομένα (GDPR)." />;
}
