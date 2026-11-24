import type { Metadata } from "next";
import { Remeasure } from "@/components/Remeasure";

export const metadata: Metadata = {
  title: "Ξαναμέτρα τον πυλώνα σου",
  description: "Επανάμετρηση 30 ημερών: οι 5 ερωτήσεις του πυλώνα σου από το Bill Score.",
  robots: { index: false },
};

export default function Page() {
  return <Remeasure />;
}
