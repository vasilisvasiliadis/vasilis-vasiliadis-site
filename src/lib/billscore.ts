import type { PillarKey } from "./site";

/** Διαδρομή: «running» = Έχω ήδη επιχείρηση, «starting» = Ξεκινάω */
export type Path = "running" | "starting";
export type Answer = "yes" | "partly" | "no";

export const answerLabel: Record<Answer, string> = { yes: "Ναι", partly: "Μερικώς", no: "Όχι" };
export const answerPoints: Record<Answer, number> = { yes: 5, partly: 2, no: 0 };

export type Question = { pillar: PillarKey; running: string; starting?: string };

/** Οι 20 ερωτήσεις, όπως στο Excel της μεθόδου (καρτέλα «Bill Score»). */
export const questions: Question[] = [
  // Χτίσε
  {
    pillar: "build",
    running: "Ξέρεις πόσα πρέπει να μπαίνουν κάθε μήνα για να πληρωθούν όλοι, κι εσύ μαζί;",
    starting: "Ξέρεις πόσα θα πρέπει να μπαίνουν κάθε μήνα για να πληρώνεσαι κι εσύ;",
  },
  {
    pillar: "build",
    running: "Έχεις βάλει τον δικό σου μισθό μέσα στα έξοδα, πριν από το κέρδος;",
    starting: "Έχεις αποφασίσει να βάλεις τον μισθό σου στα έξοδα από την πρώτη μέρα;",
  },
  {
    pillar: "build",
    running: "Ξέρεις, χωρίς να ρωτήσεις τον λογιστή, πόσα μπήκαν και πόσα βγήκαν τον προηγούμενο μήνα;",
    starting: "Ξέρεις πόσα έχεις να ξοδέψεις μέχρι τον πρώτο πελάτη;",
  },
  { pillar: "build", running: "Μπορείς να πεις σε μία πρόταση τι πουλάς και σε ποιον;" },
  { pillar: "build", running: "Ξέρεις ποιον πελάτη δεν θέλεις;" },
  // Βελτίωσε
  {
    pillar: "improve",
    running: "Ξέρεις πόσα λεφτά θα έχεις στον λογαριασμό σε 4 εβδομάδες;",
    starting: "Ξέρεις πόσες εβδομάδες αντέχεις χωρίς έσοδα;",
  },
  {
    pillar: "improve",
    running: "Πληρώνεσαι μπροστά ή με την παράδοση, και όχι «όποτε μπορέσει ο πελάτης»;",
    starting: "Έχεις αποφασίσει πώς και πότε θα πληρώνεσαι;",
  },
  {
    pillar: "improve",
    running: "Ξέρεις ποιοι λίγοι πελάτες ή ποιες λίγες υπηρεσίες σου φέρνουν τα περισσότερα;",
    starting: "Ξέρεις ποια μία υπηρεσία θα πουλήσεις πρώτη;",
  },
  { pillar: "improve", running: "Βάζεις τιμή με βάση το κόστος και την αξία σου, όχι «ό,τι βάζει κι ο διπλανός»;" },
  {
    pillar: "improve",
    running: "Έχεις έναν σταθερό τρόπο να σε βρίσκουν καινούριοι πελάτες κάθε μήνα, όχι «όποτε τύχει»;",
    starting: "Ξέρεις από πού θα έρθουν οι πρώτοι 10 πελάτες;",
  },
  // Οδήγησε
  { pillar: "lead", running: "Ξέρεις ποιες δουλειές κάνεις εσύ, ενώ θα μπορούσε να τις κάνει άλλος ή ένα πρόγραμμα;" },
  {
    pillar: "lead",
    running: "Είναι γραμμένα κάπου τα βήματα της δουλειάς σου, ώστε να τα κάνει κι άλλος;",
    starting: "Έχεις γράψει πώς θα παραδίδεις τη δουλειά σου;",
  },
  { pillar: "lead", running: "Κλείνεις κάθε εβδομάδα 1 ώρα στο ημερολόγιο για να σχεδιάζεις, όχι για να σβήνεις φωτιές;" },
  {
    pillar: "lead",
    running: "Κοιτάς κάθε εβδομάδα 3 νούμερα που σου λένε αν πας καλά;",
    starting: "Ξέρεις ποια 3 νούμερα θα κοιτάς κάθε εβδομάδα;",
  },
  {
    pillar: "lead",
    running: "Αν λείψεις 7 μέρες χωρίς κινητό, η δουλειά συνεχίζει;",
    starting: "Έχεις κάποιον ή κάτι να σε καλύψει αν λείψεις;",
  },
  // Ανέβα
  { pillar: "levelup", running: "Ξέρεις πώς θα μεγαλώσεις χωρίς να δουλεύεις διπλές ώρες;" },
  {
    pillar: "levelup",
    running: "Έχεις μία συνεργασία με άλλη επιχείρηση που σου στέλνει πελάτες, κι εσύ σε αυτήν;",
    starting: "Ξέρεις ποια επιχείρηση θα μπορούσε να σου στέλνει πελάτες;",
  },
  {
    pillar: "levelup",
    running: "Ξέρεις περίπου πόσο αξίζει η επιχείρησή σου, ή τι θα την έκανε να αξίζει;",
    starting: "Χτίζεις κάτι που μπορεί κάποτε να δουλεύει χωρίς εσένα;",
  },
  { pillar: "levelup", running: "Ξέρεις τι θα γίνει όταν θελήσεις να σταματήσεις: πούλημα, παιδιά, συνεταίρος;" },
  { pillar: "levelup", running: "Έχεις γραπτό στόχο 3 χρόνων με νούμερα: λεφτά, ανθρώπους, δικές σου ώρες;" },
];

export function questionText(q: Question, path: Path) {
  return path === "starting" && q.starting ? q.starting : q.running;
}

export const pillarOrder: PillarKey[] = ["build", "improve", "lead", "levelup"];

export const firstStep: Record<PillarKey, string> = {
  build:
    "Οι 5 αριθμοί σου. Γράψε σε ένα χαρτί: έσοδα του μήνα, σταθερά έξοδα μαζί με τον μισθό σου, πόσα πρέπει να βγάζεις τη μέρα, ταμείο σήμερα, ώρες δουλειάς την εβδομάδα. Δίπλα σε καθένα: «Γνωρίζω» ή «Μαντεύω». 20 λεπτά. (Κεφάλαιο 1 του βιβλίου)",
  improve:
    "Το ταμείο των 4 εβδομάδων. Γράψε εβδομάδα προς εβδομάδα τι θα μπει και τι θα βγει τον επόμενο μήνα, και κύκλωσε τις 3 μεγαλύτερες πληρωμές. 30 λεπτά. (Κεφάλαιο 4 του βιβλίου)",
  lead:
    "Το τεστ των 10€. Γράψε όσα έκανες χθες. Δίπλα σε καθένα ρώτα: θα μπορούσε να το κάνει κάποιος με 10€ την ώρα; Κύκλωσε όσα παίρνουν «ναι». 20 λεπτά. (Κεφάλαιο 7 του βιβλίου)",
  levelup:
    "Το τεστ αντοχής. Αν αύριο διπλασιαζόταν η δουλειά σου, τι θα έσπαγε πρώτο; Γράψε 3 πράγματα και δίπλα τι θα τα στήριζε. 25 λεπτά. (Κεφάλαιο 10 του βιβλίου)",
};

export type Grade = "A" | "B" | "C" | "D";

export const gradeMeaning: Record<Grade, string> = {
  A: "Δουλεύει σαν σύστημα. Την οδηγείς, δεν την κουβαλάς.",
  B: "Δουλεύει, αλλά χάνει ενέργεια και λεφτά σε έναν ή δύο πυλώνες.",
  C: "Δουλεύει, αλλά τρέχεις πίσω της. Τα λεφτά και ο χρόνος φεύγουν.",
  D: "Στηρίζεται σε σένα και στην τύχη. Δεν φταις εσύ. Φταίει το σύστημα.",
};

export type Result = {
  total: number;
  grade: Grade;
  byPillar: Record<PillarKey, number>;
  start: PillarKey;
  reason: string;
};

/** Ίδια λογική με το Excel: εξαίρεση στις ερωτήσεις 1–2, μετά ο πρώτος πυλώνας κάτω από 15, αλλιώς ο χαμηλότερος. */
export function scoreResult(answers: Answer[]): Result {
  const byPillar: Record<PillarKey, number> = { build: 0, improve: 0, lead: 0, levelup: 0 };
  questions.forEach((q, i) => {
    byPillar[q.pillar] += answerPoints[answers[i]] ?? 0;
  });
  const total = pillarOrder.reduce((s, k) => s + byPillar[k], 0);
  const grade: Grade = total >= 80 ? "A" : total >= 60 ? "B" : total >= 40 ? "C" : "D";

  let start: PillarKey;
  let reason: string;
  if (answers[0] === "no" || answers[1] === "no") {
    start = "build";
    reason = "Απάντησες «Όχι» στην ερώτηση 1 ή 2. Μπετά πρώτα: ξεκινάς από το Θεμέλιο.";
  } else {
    const weak = pillarOrder.find((k) => byPillar[k] < 15);
    if (weak) {
      start = weak;
      reason = "Είναι ο πρώτος πυλώνας, με τη σειρά, που έχει κάτω από 15 στα 25.";
    } else {
      start = pillarOrder.reduce((min, k) => (byPillar[k] < byPillar[min] ? k : min), "build" as PillarKey);
      reason = "Όλοι οι πυλώνες είναι 15 και πάνω. Δούλεψε τον πιο χαμηλό.";
    }
  }
  return { total, grade, byPillar, start, reason };
}
