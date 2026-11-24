import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Strategy", description: "Στρατηγική με βάση το ταμείο, την τιμολόγηση και την ομάδα. Αποφάσεις που μετριούνται." };

export default function Page() {
  return <ComingSoon eyebrow="Συνεργασία" title="Strategy" text="Στρατηγική με βάση το ταμείο, την τιμολόγηση και την ομάδα. Αποφάσεις που μετριούνται." />;
}
