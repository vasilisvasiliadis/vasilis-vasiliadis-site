import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Ένα νούμερο τη φορά",
  description: "Πρακτικά άρθρα για ταμείο, τιμολόγηση, ομάδα και AI στη μικρή επιχείρηση.",
  alternates: { canonical: "/arthra" },
  robots: { index: false },
};

export default function Page() {
  return <ComingSoon eyebrow="Άρθρα" title="Ένα νούμερο τη φορά" text="Πρακτικά άρθρα για ταμείο, τιμολόγηση, ομάδα και AI στη μικρή επιχείρηση." />;
}
