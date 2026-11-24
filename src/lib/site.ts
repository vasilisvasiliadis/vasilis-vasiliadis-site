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
  postalCode: "58005" as string | null,
  region: "Πέλλα",
  afm: "116534449",
  doy: "Γιαννιτσών",
  email: "info@vasilisvasiliadis.gr",
};

/** Merchant of Record για τις αγορές. null μέχρι να επιλεγεί πάροχος. */
export const merchantOfRecord: { name: string | null; url: string | null } = { name: null, url: null };

/** Λογαριασμοί social (τα ίδια βίντεο ανεβαίνουν και στους δύο). */
export const socials = [
  { name: "Instagram", handle: "@vasiliadisvas", url: "https://www.instagram.com/vasiliadisvas/" },
  { name: "TikTok", handle: "@vasiliadisvas", url: "https://www.tiktok.com/@vasiliadisvas" },
];

/** Σύνδεσμος κράτησης ραντεβού (Google Calendar / Cal.com). null μέχρι να οριστεί. */
export const bookingUrl: string | null = null;

/** Token του Cloudflare Web Analytics (χωρίς cookies). null = χωρίς μέτρηση. */
export const cfAnalyticsToken: string | null = null;

/** Σύνδεσμος προς τις κριτικές Google της Count On Me. null μέχρι να δοθεί. */
export const countOnMeReviewsUrl: string | null = null;

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
      { label: "Bill Score (δωρεάν)", href: "/billscore" },
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
    price: 14.9,
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
    price: 12.9,
    checkoutUrl: null,
  },
  {
    slug: "excel",
    name: "Excel της μεθόδου",
    kind: "Εργαλεία",
    line: "Τα εργαλεία, με τις πράξεις έτοιμες. Από το Bill Score ως το σχέδιο 90 ημερών.",
    cover: "/images/covers/excel.webp",
    coverW: 900,
    coverH: 1277,
    price: 9.9,
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
    price: 4.9,
    checkoutUrl: null,
  },
];

export function formatPrice(price: number | null) {
  if (price === null) return "Τιμή σύντομα";
  return new Intl.NumberFormat("el-GR", { style: "currency", currency: "EUR" }).format(price);
}

/**
 * Το ολοκληρωμένο πακέτο (βιβλίο, Workbook, Excel, Prompts).
 * Οι τιμές ΑΝΕΒΑΙΝΟΥΝ: γνωριμίας → ενδιάμεση → κανονική (δεν ανακοινώνεται μείωση από προηγούμενη τιμή).
 * Στο Polar: μία τιμή (κανονική) και ένας κωδικός έκπτωσης ανά φάση, που μπαίνει στον σύνδεσμο πληρωμής.
 * launchDate = η μέρα που ανοίγουν οι πωλήσεις (ISO, π.χ. "2026-12-01T09:00:00+02:00"). null = δεν έχει ανοίξει.
 */
export type PricePhase = { name: string; price: number; days: number };

export const bundle: {
  name: string;
  regularPrice: number;
  phases: PricePhase[];
  launchDate: string | null;
  checkoutUrl: string | null;
} = {
  name: "Ολόκληρο το Πακέτο BILL",
  regularPrice: 39.9,
  phases: [
    { name: "Τιμή γνωριμίας", price: 29.9, days: 7 },
    { name: "Ενδιάμεση τιμή", price: 34.9, days: 14 },
  ],
  launchDate: null,
  checkoutUrl: null,
};

/** Το άθροισμα των τεσσάρων προϊόντων όταν πωλούνται χωριστά. */
export const productsTotal = products.reduce((sum, p) => sum + (p.price ?? 0), 0);

export type BundleOffer = {
  state: "waitlist" | "open";
  phase: string;
  price: number;
  /** Ημερομηνία λήξης της τρέχουσας φάσης (μόνο όταν είναι ανοιχτό) */
  until: Date | null;
  /** Η τιμή που ακολουθεί (null όταν είναι ήδη η κανονική) */
  nextPrice: number | null;
};

/** Ποια τιμή ισχύει τώρα. Πριν την έναρξη: η τιμή γνωριμίας για τη λίστα αναμονής. */
export function bundleOffer(now: Date = new Date()): BundleOffer {
  const { phases, regularPrice, launchDate } = bundle;
  const start = launchDate ? new Date(launchDate) : null;
  if (!start || now < start) {
    return { state: "waitlist", phase: phases[0].name, price: phases[0].price, until: null, nextPrice: phases[1]?.price ?? regularPrice };
  }
  let t = start.getTime();
  for (let i = 0; i < phases.length; i++) {
    const end = t + phases[i].days * 86_400_000;
    if (now.getTime() < end) {
      return { state: "open", phase: phases[i].name, price: phases[i].price, until: new Date(end), nextPrice: phases[i + 1]?.price ?? regularPrice };
    }
    t = end;
  }
  return { state: "open", phase: "Κανονική τιμή", price: regularPrice, until: null, nextPrice: null };
}
