/** Αίτηση Mentoring: κοινές επιλογές και όρια για τη φόρμα και τον Worker. */
export const turnoverOptions = [
  { value: "lt50", label: "Έως 50.000 €" },
  { value: "50-150", label: "50.000–150.000 €" },
  { value: "150-500", label: "150.000–500.000 €" },
  { value: "gt500", label: "Πάνω από 500.000 €" },
  { value: "nosay", label: "Προτιμώ να μην πω" },
] as const;

export type TurnoverValue = (typeof turnoverOptions)[number]["value"];

/** Μέγιστο και ελάχιστο μήκος απαντήσεων (το MailerLite δέχεται έως 1024 χαρακτήρες ανά πεδίο). */
export const limits = {
  business: { min: 5, max: 300 },
  pain: { min: 15, max: 900 },
  change: { min: 15, max: 900 },
  why: { min: 15, max: 900 },
} as const;
