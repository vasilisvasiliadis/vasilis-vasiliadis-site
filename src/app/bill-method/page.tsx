import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Η μέθοδος Bill", description: "Τέσσερις πυλώνες, με αυτή τη σειρά: Χτίσε, Βελτίωσε, Οδήγησε, Ανέβα. Θεμέλιο, Χρήμα, Χρόνος, Ελευθερία." };

export default function Page() {
  return <ComingSoon eyebrow="The Bill Method™" title="Η μέθοδος Bill" text="Τέσσερις πυλώνες, με αυτή τη σειρά: Χτίσε, Βελτίωσε, Οδήγησε, Ανέβα. Θεμέλιο, Χρήμα, Χρόνος, Ελευθερία." />;
}
