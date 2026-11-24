import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Βιβλίο, Workbook, Excel, AI Prompts", description: "Ένα σύστημα, τέσσερα εργαλεία. Από τη θεωρία στην πράξη." };

export default function Page() {
  return <ComingSoon eyebrow="Το Πακέτο BILL" title="Βιβλίο, Workbook, Excel, AI Prompts" text="Ένα σύστημα, τέσσερα εργαλεία. Από τη θεωρία στην πράξη." />;
}
