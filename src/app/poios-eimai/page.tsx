import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Αποτυχημένος.", description: "Σερβιτόρος, διανομέας, πωλητής, μεσίτης, τραπεζικός. Και μετά, το «αδιανόητο»." };

export default function Page() {
  return <ComingSoon eyebrow="Η ιστορία μου" title="Αποτυχημένος." text="Σερβιτόρος, διανομέας, πωλητής, μεσίτης, τραπεζικός. Και μετά, το «αδιανόητο»." />;
}
