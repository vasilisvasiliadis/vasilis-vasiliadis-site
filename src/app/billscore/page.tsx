import type { Metadata } from "next";
import { BillScoreQuiz } from "@/components/BillScoreQuiz";

export const metadata: Metadata = {
  alternates: { canonical: "/billscore" },
  title: "Bill Score",
  description:
    "20 ερωτήσεις, σε λιγότερο από 5 λεπτά, ένα νούμερο από το 0 έως το 100. Δωρεάν. Μάθε από ποιον πυλώνα της μεθόδου Bill ξεκινάς και ποιο είναι το πρώτο σου βήμα.",
};

export default function BillScorePage() {
  return <BillScoreQuiz />;
}
