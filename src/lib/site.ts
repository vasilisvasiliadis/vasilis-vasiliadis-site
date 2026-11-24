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
    line: "Τα εργαλεία, με τις πράξεις έτοιμες. Από το Bill Score ως το σχέδιο 90 ημερών.",
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

/**
 * Τρία επίπεδα (σκάλα): Βιβλίο → Βιβλίο + Workbook → Πλήρες (με Excel και τα AI Prompts ως δώρο).
 * Τα Prompts ΔΕΝ πωλούνται χωριστά, δίνονται μόνο στο Πλήρες.
 * Οι τιμές ΑΝΕΒΑΙΝΟΥΝ: λανσαρίσματος (έως `launchEnds`) → κανονική. Δεν ανακοινώνεται μείωση.
 * Στο Polar: ένα προϊόν ανά επίπεδο στην κανονική τιμή και ένας κωδικός έκπτωσης για την τιμή λανσαρίσματος.
 * Η πώληση ανοίγει όταν μπει `checkoutUrl`. Μέχρι τότε: λίστα αναμονής.
 * Ο αριθμός «κανονική» δεν πρέπει να παρουσιάζεται ως «αντί για» αν δεν έχει εφαρμοστεί (κανόνας Omnibus, να επιβεβαιωθεί με νομικό).
 */
export type Tier = {
  slug: "vivlio" | "vivlio-workbook" | "pliris";
  name: string;
  includes: string[];
  /** Δώρο που δίνεται μόνο σε αυτό το επίπεδο */
  gift?: string;
  launchPrice: number;
  regularPrice: number;
  checkoutUrl: string | null;
};

/** Λήξη των τιμών λανσαρίσματος (ISO, ώρα Ελλάδας). */
export const launchEnds = "2026-12-31T23:59:59+02:00";

export const tiers: Tier[] = [
  {
    slug: "vivlio",
    name: "Βιβλίο",
    includes: ["Η μέθοδος Bill, βιβλίο PDF 146 σελίδων"],
    launchPrice: 14.9,
    regularPrice: 14.9,
    checkoutUrl: null,
  },
  {
    slug: "vivlio-workbook",
    name: "Βιβλίο + Workbook",
    includes: ["Η μέθοδος Bill, βιβλίο PDF 146 σελίδων", "Workbook, 36 σελίδες Α4 για εκτύπωση"],
    launchPrice: 24.9,
    regularPrice: 34.9,
    checkoutUrl: null,
  },
  {
    slug: "pliris",
    name: "Πλήρες πακέτο",
    includes: [
      "Η μέθοδος Bill, βιβλίο PDF 146 σελίδων",
      "Workbook, 36 σελίδες Α4 για εκτύπωση",
      "Excel της μεθόδου, 17 καρτέλες με τις πράξεις έτοιμες",
    ],
    gift: "AI Prompts, ένα prompt για κάθε κεφάλαιο (μόνο σε αυτό το πακέτο)",
    launchPrice: 34.9,
    regularPrice: 44.9,
    checkoutUrl: null,
  },
];

export type TierOffer = {
  price: number;
  phase: "launch" | "regular";
  /** Έως πότε ισχύει η τιμή λανσαρίσματος (null όταν ισχύει ήδη η κανονική) */
  until: Date | null;
  /** Η τιμή που ακολουθεί (null όταν ισχύει ήδη η κανονική) */
  nextPrice: number | null;
};

/** Ποια τιμή ισχύει τώρα για ένα επίπεδο. */
export function tierOffer(t: Tier, now: Date = new Date()): TierOffer {
  const end = new Date(launchEnds);
  if (now < end && t.launchPrice !== t.regularPrice) return { price: t.launchPrice, phase: "launch", until: end, nextPrice: t.regularPrice };
  return { price: t.regularPrice, phase: "regular", until: null, nextPrice: null };
}
