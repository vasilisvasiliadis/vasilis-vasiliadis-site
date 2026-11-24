import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Ομιλίες", description: "Το κοινό φεύγει με ένα νούμερο και μία απόφαση." };

export default function Page() {
  return <ComingSoon eyebrow="Public speaking" title="Ομιλίες" text="Το κοινό φεύγει με ένα νούμερο και μία απόφαση." />;
}
