import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Ας μιλήσουμε", description: "Για mentoring, στρατηγική, σεμινάρια ή ομιλίες." };

export default function Page() {
  return <ComingSoon eyebrow="Επικοινωνία" title="Ας μιλήσουμε" text="Για mentoring, στρατηγική, σεμινάρια ή ομιλίες." />;
}
