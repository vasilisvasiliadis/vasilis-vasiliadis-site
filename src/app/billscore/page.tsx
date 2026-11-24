import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Bill Score", description: "20 ερωτήσεις, ένα νούμερο από το 0 έως το 100. Βλέπεις από ποιον πυλώνα ξεκινάς." };

export default function Page() {
  return <ComingSoon eyebrow="The Bill Score™ · δωρεάν" title="Bill Score" text="20 ερωτήσεις, ένα νούμερο από το 0 έως το 100. Βλέπεις από ποιον πυλώνα ξεκινάς." />;
}
