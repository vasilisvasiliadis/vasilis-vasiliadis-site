import Image from "next/image";
import Link from "next/link";
import { formatPrice, pillars, pillarStyle, products } from "@/lib/site";
import { Arrow, ButtonLink, Container, Dot, Eyebrow, SectionHeading } from "./ui";

/* ───────────────────────── Hero ───────────────────────── */

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:py-24">
        <div className="min-w-0">
          <Eyebrow>Mentoring · Strategy · Education</Eyebrow>
          <h1 className="mt-5 text-[2.5rem] leading-[1.05] font-extrabold sm:text-6xl">
            Στήσε μια επιχείρηση που κερδίζει και δουλεύει χωρίς{" "}
            <span className="whitespace-nowrap">
              εσένα
              <Dot className="ml-1 size-3 align-baseline sm:size-4" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Η μέθοδος Bill: τέσσερα βήματα, ένα νούμερο τη φορά. Χτίσε, βελτίωσε, οδήγησε, ανέβα.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/billscore">
              Κάνε το Bill Score δωρεάν <Arrow />
            </ButtonLink>
            <ButtonLink href="/bill-method" variant="outline">
              Δες τη μέθοδο
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm text-muted">20 ερωτήσεις · σκορ 0–100 · βλέπεις από πού ξεκινάς</p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden="true" className="absolute -top-6 -right-6 grid size-40 grid-cols-2 gap-2 opacity-90 sm:size-52">
            <span className="rounded-tl-[2rem] bg-build" />
            <span className="bg-improve" />
            <span className="bg-lead" />
            <span className="rounded-br-[2rem] bg-levelup" />
          </div>
          <Image
            src="/images/photos/portrait.webp"
            alt="Ο Βασίλης Βασιλειάδης"
            width={800}
            height={800}
            priority
            sizes="(min-width: 1024px) 480px, 90vw"
            className="relative aspect-square w-full rounded-[2rem] object-cover shadow-xl"
          />
          <div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-lg">
            <p className="font-display text-sm font-semibold">Βασίλης «Bill» Βασιλειάδης</p>
            <p className="text-xs text-muted">Λογιστής-Φοροτεχνικός Α΄ τάξης · Mentor</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────── Πρόβλημα ───────────────────────── */

const pains = [
  "Αν λείψεις μία εβδομάδα, η δουλειά σταματάει.",
  "Το ταμείο σε εκπλήσσει, κάθε μήνα.",
  "Δεν ξέρεις πόσα πρέπει να βγάζεις τη μέρα για να βγει ο μήνας.",
  "Δουλεύεις περισσότερες ώρες, αλλά κερδίζεις τα ίδια.",
];

export function Problem() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionHeading
          eyebrow="Σου θυμίζει κάτι;"
          title="Δεν έχεις πρόβλημα πελατών. Έχεις πρόβλημα νούμερων."
          intro="Οι περισσότερες μικρές επιχειρήσεις δεν κλείνουν από έλλειψη δουλειάς. Κλείνουν επειδή ο ιδιοκτήτης κοιτάει τα λάθος νούμερα ή κανένα."
        />
        <ul className="space-y-4">
          {pains.map((p) => (
            <li key={p} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
              <span aria-hidden="true" className="mt-1.5 size-2.5 shrink-0 rounded-full bg-accent" />
              <span className="text-lg leading-snug">{p}</span>
            </li>
          ))}
          <li className="pt-2 font-display text-lg font-semibold">
            Αλλού ακούς θεωρίες. Εδώ εφαρμόζεις και μετράς.
          </li>
        </ul>
      </Container>
    </section>
  );
}

/* ───────────────────────── 4 Πυλώνες ───────────────────────── */

export function Pillars() {
  return (
    <section className="bg-cream py-20 lg:py-28" aria-labelledby="pillars-title">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Image src="/brand/bill-logo.png" alt="The Bill Method" width={700} height={517} className="h-20 w-auto" />
            <h2 id="pillars-title" className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
              Μία μέθοδος, τέσσερις πυλώνες. Με αυτή τη σειρά.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Αν δεν ρίξεις πρώτα τα μπετά, δεν φτιάχνεις ρετιρέ. Κάθε πυλώνας σού αφήνει ένα νούμερο, μία απόφαση και ένα
              εργαλείο.
            </p>
          </div>
          <ButtonLink href="/bill-method" variant="dark" className="self-start lg:self-auto">
            Όλη η μέθοδος <Arrow />
          </ButtonLink>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const s = pillarStyle[p.key];
            return (
              <li key={p.key} className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-sm">
                <div className={`${s.bg} flex items-end justify-between px-6 pt-6 pb-5 text-white`}>
                  <span className="font-display text-6xl leading-none font-extrabold">{p.letter}</span>
                  <span className="text-right">
                    <span className="block font-display text-xs font-semibold uppercase tracking-widest opacity-80">
                      {String(i + 1).padStart(2, "0")} · {p.en}
                    </span>
                    <span className="block font-display text-xl font-bold">{p.verb}</span>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm text-muted">
                    Κερδίζεις: <span className={`font-semibold ${s.text}`}>{p.gain}</span> · {p.chapters}
                  </p>
                  <ul className="mt-4 space-y-2 text-[15px]">
                    {p.tools.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span aria-hidden="true" className={`mt-2 size-1.5 shrink-0 rounded-full ${s.bg}`} />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-6 font-display font-semibold">{p.promise}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-10 text-center font-display text-lg text-ink-soft">
          Χωρίς Θεμέλιο δεν βγαίνει το Χρήμα. Χωρίς Χρήμα δεν αγοράζεις Χρόνο. Χωρίς Χρόνο δεν φτάνεις στην Ελευθερία.
        </p>
      </Container>
    </section>
  );
}

/* ───────────────────────── Bill Score ───────────────────────── */

const scoreSteps = [
  { n: "1", title: "Η ερώτηση-φίλτρο", text: "Έχεις ήδη πελάτες που σε πληρώνουν; Διαλέγεις διαδρομή: «Ξεκινάω» ή «Έχω ήδη επιχείρηση»." },
  { n: "2", title: "20 ερωτήσεις", text: "5 για κάθε πυλώνα. Όχι = 0, Μερικώς = 2, Ναι = 5. Αν διστάζεις, είναι «Μερικώς»." },
  { n: "3", title: "Το σκορ σου", text: "Από 0 έως 100. Βλέπεις τον πρώτο πυλώνα που είναι κάτω από 15 στα 25. Από εκεί ξεκινάς." },
  { n: "4", title: "Πρώτη νίκη", text: "Μία μικρή κίνηση, γραμμένη σε post-it. Σε 90 μέρες ξαναμετράς." },
];

const exampleScore = [
  { key: "build" as const, label: "Χτίσε", v: 16 },
  { key: "improve" as const, label: "Βελτίωσε", v: 7 },
  { key: "lead" as const, label: "Οδήγησε", v: 8 },
  { key: "levelup" as const, label: "Ανέβα", v: 5 },
];

export function BillScore() {
  const total = exampleScore.reduce((a, b) => a + b.v, 0);
  return (
    <section className="py-20 lg:py-28" aria-labelledby="score-title">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Eyebrow>The Bill Score™ · δωρεάν</Eyebrow>
          <h2 id="score-title" className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            Πριν αλλάξεις οτιδήποτε, μέτρα πού είσαι σήμερα.
          </h2>
          <ol className="mt-8 space-y-6">
            {scoreSteps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink font-display font-bold text-white">
                  {s.n}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold">{s.title}</p>
                  <p className="mt-1 leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <ButtonLink href="/billscore" className="mt-10">
            Ξεκίνα το Bill Score <Arrow />
          </ButtonLink>
          <p className="mt-3 text-sm text-muted">Το σκορ το βλέπεις μόνο εσύ.</p>
        </div>

        <figure className="rounded-[2rem] border border-line bg-white p-6 shadow-xl sm:p-10">
          <figcaption className="flex items-baseline justify-between">
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-muted">Παράδειγμα σκορ</span>
            <span className="text-xs text-muted">ενδεικτικό</span>
          </figcaption>
          <p className="mt-4 font-display text-7xl font-extrabold">
            {total}
            <span className="text-3xl text-muted">/100</span>
          </p>
          <ul className="mt-8 space-y-5">
            {exampleScore.map((row) => {
              const s = pillarStyle[row.key];
              const weak = row.v < 15;
              return (
                <li key={row.key}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-semibold">{row.label}</span>
                    <span className={weak ? "font-semibold text-accent" : "text-muted"}>{row.v}/25</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-cream">
                    <div className={`h-full rounded-full ${s.bg}`} style={{ width: `${(row.v / 25) * 100}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 rounded-xl bg-cream p-4 text-[15px]">
            <span className="font-semibold">Ξεκινάς από: Βελτίωσε.</span> Είναι ο πρώτος πυλώνας, με τη σειρά, κάτω από
            15.
          </p>
        </figure>
      </Container>
    </section>
  );
}

/* ───────────────────────── Πακέτο BILL ───────────────────────── */

export function Package() {
  return (
    <section className="bg-ink py-20 text-white lg:py-28" aria-labelledby="package-title">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow className="text-white/60">Το Πακέτο BILL</Eyebrow>
            <h2 id="package-title" className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Βιβλίο, Workbook, Excel και AI Prompts. Ένα σύστημα, τέσσερα εργαλεία.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Το βιβλίο σου δίνει μια πρώτη γεύση. Το workbook, το Excel και τα prompts τη μετατρέπουν σε πράξη.
            </p>
          </div>
          <ButtonLink href="/paketo-bill" variant="primary" className="self-start lg:self-auto">
            Δες το πακέτο <Arrow />
          </ButtonLink>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/paketo-bill/${p.slug}`}
                className="group flex h-full flex-col rounded-[var(--radius-card)] bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <div className="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-xl bg-white p-3">
                  <Image
                    src={p.cover}
                    alt={`Εξώφυλλο: ${p.name}`}
                    width={p.coverW}
                    height={p.coverH}
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw"
                    className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-white/50">{p.kind}</p>
                <p className="mt-1 font-display text-xl font-bold">{p.name}</p>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/70">{p.line}</p>
                <p className="mt-4 text-sm font-semibold text-white/90">{formatPrice(p.price)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ───────────────────────── Πώς δουλεύουμε μαζί ───────────────────────── */

const services = [
  {
    href: "/mentoring",
    title: "Mentoring",
    who: "Για επιχειρηματίες",
    text: "Δουλεύουμε μαζί πάνω στα δικά σου νούμερα, έναν πυλώνα τη φορά, σε κύκλους 90 ημερών.",
    color: "bg-build",
  },
  {
    href: "/strategy",
    title: "Strategy",
    who: "Για επιχειρήσεις",
    text: "Στρατηγική με βάση το ταμείο, την τιμολόγηση και την ομάδα. Αποφάσεις που μετριούνται.",
    color: "bg-improve",
  },
  {
    href: "/education",
    title: "Education",
    who: "Για ομάδες και οργανισμούς",
    text: "Σεμινάρια, workshops και e-courses. Μαθαίνεις κάνοντας, με μολύβι και χαρτί.",
    color: "bg-lead",
  },
];

export function WorkWithMe() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="work-title">
      <Container>
        <SectionHeading
          eyebrow="Πώς δουλεύουμε μαζί"
          title={<span id="work-title">Mentoring, Strategy, Education.</span>}
          intro="Τρεις τρόποι συνεργασίας, η ίδια μέθοδος από πίσω: μετράς, διαλέγεις, κάνεις, ξαναμετράς."
        />
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span aria-hidden="true" className={`h-1.5 w-12 rounded-full ${s.color}`} />
                <p className="mt-6 text-sm text-muted">{s.who}</p>
                <h3 className="mt-1 text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{s.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display font-semibold">
                  Μάθε περισσότερα
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ───────────────────────── Ιστορία ───────────────────────── */

const roles = [
  "Λογιστής-Φοροτεχνικός Α΄ τάξης",
  "Ιδρυτής Count On Me",
  "Ιδρυτής Billow",
  "Τραγουδοποιός · Song on me Records",
  "Πατέρας τριών αγοριών",
];

export function Story() {
  return (
    <section className="bg-cream py-20 lg:py-28" aria-labelledby="story-title">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Image
          src="/images/photos/coffee.webp"
          alt="Ο Βασίλης Βασιλειάδης με ένα φλιτζάνι καφέ"
          width={512}
          height={286}
          sizes="(min-width: 1024px) 512px, 100vw"
          className="w-full rounded-[2rem] object-cover shadow-lg"
        />
        <div>
          <Eyebrow>Η ιστορία μου</Eyebrow>
          <h2 id="story-title" className="mt-3 text-5xl font-extrabold sm:text-6xl">
            Αποτυχημένος.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Σερβιτόρος. Διανομέας. Πωλητής. Μεσίτης. Τραπεζικός που ζήτησε μόνος του να «κατέβει στο δίκτυο». Οι φίλοι με
            φωνάζουν Bill, και από εκεί πήρε το όνομα η μέθοδος. Δεν το πήρα από κανέναν Αμερικανό γκουρού.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {roles.map((r) => (
              <li key={r} className="rounded-full border border-line bg-white px-4 py-2 text-sm">
                {r}
              </li>
            ))}
          </ul>
          <ButtonLink href="/poios-eimai" variant="dark" className="mt-9">
            Διάβασε την ιστορία <Arrow />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────── Αποτελέσματα ───────────────────────── */

const cases = [
  {
    who: "Ο γραφίστας",
    what: "Ελεύθερος επαγγελματίας, χωρίς υπαλλήλους",
    lesson: "Δεν χρειαζόταν περισσότερους πελάτες. Χρειαζόταν διαφορετικούς όρους.",
    rows: [
      ["Bill Score", "36", "47"],
      ["Ρευστότητα", "−420 €", "+2.100 €"],
      ["Ώρες / εβδομάδα", "55", "42"],
    ],
  },
  {
    who: "Το τεχνικό γραφείο",
    what: "Επιχείρηση 4 ατόμων",
    lesson: "Έγραψε τη διαδικασία της προσφοράς μία φορά. Μετά βγήκε χωρίς αυτόν.",
    rows: [
      ["Bill Score", "42", "56"],
      ["Ρευστότητα", "−3.800 €", "+4.500 €"],
      ["Ώρες / εβδομάδα", "60", "48"],
    ],
  },
];

export function Results() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="results-title">
      <Container>
        <SectionHeading
          eyebrow="Πριν & μετά τις 90 μέρες"
          title={<span id="results-title">Τρία νούμερα μετράνε: Score, ρευστότητα, ώρες.</span>}
        />
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {cases.map((c) => (
            <li key={c.who} className="rounded-[var(--radius-card)] border border-line bg-white p-7">
              <h3 className="text-2xl font-bold">{c.who}</h3>
              <p className="text-sm text-muted">{c.what}</p>
              <table className="mt-6 w-full text-left">
                <thead>
                  <tr className="border-b border-line text-xs uppercase tracking-wider text-muted">
                    <th scope="col" className="pb-2 font-semibold">Νούμερο</th>
                    <th scope="col" className="pb-2 text-right font-semibold">Πριν</th>
                    <th scope="col" className="pb-2 text-right font-semibold">Μετά</th>
                  </tr>
                </thead>
                <tbody>
                  {c.rows.map(([label, before, after]) => (
                    <tr key={label} className="border-b border-line/60 last:border-0">
                      <th scope="row" className="py-3 font-medium">{label}</th>
                      <td className="py-3 text-right text-muted tabular-nums">{before}</td>
                      <td className="py-3 text-right font-display font-bold text-improve tabular-nums">{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-5 font-display font-semibold">«{c.lesson}»</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm text-muted">
            Ενδεικτικές μελέτες περίπτωσης από το βιβλίο, βασισμένες σε πραγματικά μοτίβα. Δεν είναι συγκεκριμένοι άνθρωποι
            και δεν αποτελούν υπόσχεση για το δικό σου αποτέλεσμα.
          </p>
          <Link href="/apotelesmata" className="inline-flex items-center gap-2 font-display font-semibold">
            Και τα 5 case studies <Arrow />
          </Link>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────── Ομιλίες ───────────────────────── */

export function Speaking() {
  return (
    <section className="bg-cream py-20 lg:py-28" aria-labelledby="speaking-title">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Eyebrow>Public speaking</Eyebrow>
          <h2 id="speaking-title" className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            Ομιλίες χωρίς θεωρίες. Το κοινό φεύγει με ένα νούμερο και μία απόφαση.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Για συνέδρια, επιμελητήρια, συλλόγους και εταιρικές ομάδες. Επιχειρηματικότητα, ταμείο, τιμολόγηση, ομάδα και
            AI για μικρές επιχειρήσεις.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/omilies" variant="dark">
              Θέματα ομιλιών <Arrow />
            </ButtonLink>
            <ButtonLink href="/epikoinonia" variant="outline">
              Κλείσε ομιλία
            </ButtonLink>
          </div>
        </div>
        <Image
          src="/images/photos/fullbody.webp"
          alt="Ο Βασίλης Βασιλειάδης όρθιος, σε ουδέτερο φόντο"
          width={382}
          height={512}
          sizes="(min-width: 1024px) 380px, 80vw"
          className="mx-auto w-full max-w-xs rounded-[2rem] object-cover shadow-lg"
        />
      </Container>
    </section>
  );
}

/* ───────────────────────── Τελικό CTA ───────────────────────── */

export function FinalCta() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-build px-6 py-14 text-center text-white sm:px-12 lg:py-20">
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 grid h-2 grid-cols-4">
            <span className="bg-build brightness-125" />
            <span className="bg-improve" />
            <span className="bg-lead" />
            <span className="bg-levelup" />
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
            Ξεκίνα απλά. Με ένα νούμερο τη φορά.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            Κάνε το Bill Score και μάθε από ποιον πυλώνα ξεκινάς. Δωρεάν.
          </p>
          <ButtonLink href="/billscore" className="mt-9">
            Κάνε το Bill Score <Arrow />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
