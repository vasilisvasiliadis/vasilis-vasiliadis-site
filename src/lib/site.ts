export const site = {
  name: "Βασίλης Βασιλειάδης",
  tagline: "Mentoring | Strategy | Education",
  url: "https://vasilisvasiliadis.gr",
  methodUrl: "https://thebillmethod.gr",
  description:
    "Mentoring, στρατηγική και εκπαίδευση για επιχειρηματίες. The Bill Method™: πώς να στήσεις μια επιχείρηση που κερδίζει και δουλεύει χωρίς εσένα.",
};

/** Στοιχεία επιχείρησης (υποχρεωτικά για ηλεκτρονικό εμπόριο, π.δ. 131/2003). */
export const business = {
  name: "Βασιλειάδης Βασίλης",
  address: "Νέα Πέλλα",
  /** TODO: ταχυδρομικός κώδικας */
  postalCode: null as string | null,
  region: "Πέλλα",
  afm: "116534449",
  doy: "Γιαννιτσών",
  email: "info@vasilisvasiliadis.gr",
};

/** Merchant of Record για τις αγορές. null μέχρι να επιλεγεί πάροχος. */
export const merchantOfRecord: { name: string | null; url: string | null } = { name: null, url: null };

export const legalUpdated = "24 Νοεμβρίου 2026";

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Η μέθοδος", href: "/bill-method" },
  { label: "Πακέτο BILL", href: "/paketo-bill" },
  { label: "Mentoring", href: "/mentoring" },
  { label: "Strategy", href: "/strategy" },
  { label: "Education", href: "/education" },
  { label: "Ομιλίες", href: "/omilies" },
  { label: "Ποιος είμαι", href: "/poios-eimai" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "The Bill Method™",
    items: [
      { label: "Η μέθοδος", href: "/bill-method" },
      { label: "Bill Score (δωρεάν)", href: "/billscore" },
      { label: "Πακέτο BILL", href: "/paketo-bill" },
      { label: "Αποτελέσματα", href: "/apotelesmata" },
    ],
  },
  {
    title: "Συνεργασία",
    items: [
      { label: "Mentoring", href: "/mentoring" },
      { label: "Strategy", href: "/strategy" },
      { label: "Education", href: "/education" },
      { label: "Ομιλίες", href: "/omilies" },
    ],
  },
  {
    title: "Γνωριμία",
    items: [
      { label: "Ποιος είμαι", href: "/poios-eimai" },
      { label: "Άρθρα", href: "/arthra" },
      { label: "Επικοινωνία", href: "/epikoinonia" },
    ],
  },
];

export const legalNav: NavItem[] = [
  { label: "Όροι χρήσης", href: "/oroi" },
  { label: "Απόρρητο", href: "/aporrito" },
  { label: "Cookies", href: "/cookies" },
  { label: "Επιστροφές", href: "/epistrofes" },
];

export type PillarKey = "build" | "improve" | "lead" | "levelup";

export type Pillar = {
  key: PillarKey;
  letter: string;
  en: string;
  verb: string;
  gain: string;
  chapters: string;
  promise: string;
  tools: string[];
};

export const pillars: Pillar[] = [
  {
    key: "build",
    letter: "b",
    en: "Build",
    verb: "Χτίσε",
    gain: "Θεμέλιο",
    chapters: "Κεφ. 1–3",
    promise: "Χτίσε για να σταθείς.",
    tools: ["Οι 5 αριθμοί", "Το νούμερο επιβίωσης", "Τι πουλάς και σε ποιον"],
  },
  {
    key: "improve",
    letter: "i",
    en: "Improve",
    verb: "Βελτίωσε",
    gain: "Χρήμα",
    chapters: "Κεφ. 4–6",
    promise: "Βελτίωσε για να κερδίσεις.",
    tools: ["Ταμείο 4 εβδομάδων", "Λίστα 80/20", "Τιμή και 3 πακέτα"],
  },
  {
    key: "lead",
    letter: "l",
    en: "Lead",
    verb: "Οδήγησε",
    gain: "Χρόνος",
    chapters: "Κεφ. 7–9",
    promise: "Οδήγησε για να βρεις χρόνο.",
    tools: ["Πίνακας ανάθεσης", "Γράψ' το μία φορά", "Ο πίνακας της Δευτέρας"],
  },
  {
    key: "levelup",
    letter: "l",
    en: "Level Up",
    verb: "Ανέβα",
    gain: "Ελευθερία",
    chapters: "Κεφ. 10–12",
    promise: "Ανέβα για να γίνεις ελεύθερος.",
    tools: ["Τεστ αντοχής", "Χάρτης συμμαχιών", "Πόσο αξίζει η επιχείρησή σου"],
  },
];

/** Tailwind classes ανά πυλώνα (γραμμένες ολόκληρες για να τις βρίσκει ο Tailwind). */
export const pillarStyle: Record<PillarKey, { bg: string; text: string; soft: string; border: string }> = {
  build: { bg: "bg-build", text: "text-build", soft: "bg-build/8", border: "border-build" },
  improve: { bg: "bg-improve", text: "text-improve", soft: "bg-improve/8", border: "border-improve" },
  lead: { bg: "bg-lead", text: "text-lead", soft: "bg-lead/8", border: "border-lead" },
  levelup: { bg: "bg-levelup", text: "text-levelup", soft: "bg-levelup/8", border: "border-levelup" },
};

export type Product = {
  slug: string;
  name: string;
  kind: string;
  line: string;
  cover: string;
  coverW: number;
  coverH: number;
  /** null = η τιμή δεν έχει οριστεί ακόμα */
  price: number | null;
  /** Σύνδεσμος πληρωμής του Merchant of Record. null = όχι ακόμα */
  checkoutUrl: string | null;
};

export const products: Product[] = [
  {
    slug: "vivlio",
    name: "Η μέθοδος Bill",
    kind: "Βιβλίο",
    line: "12 κεφάλαια, 4 πυλώνες, 5 case studies. Δεν διαβάζεται. Δουλεύεται.",
    cover: "/images/covers/book.webp",
    coverW: 900,
    coverH: 1277,
    price: null,
    checkoutUrl: null,
  },
  {
    slug: "workbook",
    name: "Workbook",
    kind: "Τετράδιο εργασίας",
    line: "Εδώ γράφεις, με μολύβι, σε χαρτί. Όλες οι ασκήσεις, έτοιμες για εκτύπωση.",
    cover: "/images/covers/workbook.webp",
    coverW: 1200,
    coverH: 848,
    price: null,
    checkoutUrl: null,
  },
  {
    slug: "excel",
    name: "Excel της μεθόδου",
    kind: "Εργαλεία",
    line: "Τα εργαλεία, με τις πράξεις έτοιμες. Από το Bill Score ως το σχέδιο 90 ημερών.",
    cover: "/images/covers/excel.webp",
    coverW: 900,
    coverH: 1277,
    price: null,
    checkoutUrl: null,
  },
  {
    slug: "prompts",
    name: "AI Prompts",
    kind: "Prompts",
    line: "Πρώτα το μολύβι. Μετά το AI. Ένα prompt για κάθε κεφάλαιο, με έλεγχο απάντησης.",
    cover: "/images/covers/prompts.webp",
    coverW: 900,
    coverH: 1277,
    price: null,
    checkoutUrl: null,
  },
];

export function formatPrice(price: number | null) {
  if (price === null) return "Τιμή σύντομα";
  return new Intl.NumberFormat("el-GR", { style: "currency", currency: "EUR" }).format(price);
}
