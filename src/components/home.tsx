import Image from "next/image";
import Link from "next/link";
import { cases as allCases } from "@/lib/content";
import { formatPrice, pillars, pillarStyle, products, socials } from "@/lib/site";
import { HeroQuestion } from "./HeroQuestion";
import { ButtonLink, Container, Dot, Struck, Underline, buttonBase } from "./ui";

/* ───────── Hero: το Bill Score ξεκινά από εδώ ───────── */

export function Hero() {
  return (
    <section className="grid-paper border-b border-rule">
      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.7fr_1fr] lg:gap-14 lg:py-20">
        <div className="min-w-0">
          <h1 className="text-[3.1rem] font-black sm:text-7xl lg:text-[4.6rem]">
            Στήσε μια επιχείρηση που κερδίζει και δουλεύει χωρίς εσένα
            <Dot className="ml-1" />
          </h1>
          <HeroQuestion />
        </div>

        <figure className="self-end">
          <Image
            src="/images/photos/portrait.webp"
            alt="Ο Βασίλης Βασιλειάδης"
            width={800}
            height={800}
            priority
            sizes="(min-width: 1024px) 420px, 90vw"
            className="aspect-[4/5] w-full object-cover object-[50%_30%] grayscale-[15%]"
          />
          <figcaption className="mt-3 text-[0.95rem] leading-snug text-pencil">
            <span className="font-display text-lg font-bold text-ink">Βασίλης «Bill» Βασιλειάδης.</span> Λογιστής-φοροτεχνικός
            Α΄ τάξης, mentor, ομιλητής. Οι φίλοι μου με φωνάζουνε Bill, γι’ αυτό και η μέθοδος λέγεται έτσι.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

/* ───────── Το πρόβλημα ───────── */

const pains = [
  "Αν λείψεις μία εβδομάδα, η δουλειά σταματάει. Οι διακοπές σου γίνονται τηλεφωνήματα.",
  "Το ταμείο σε εκπλήσσει αρνητικά. Κάθε μήνα, η ώρα των πληρωμών σού κόβει τον ύπνο.",
  "Δεν ξέρεις ακριβώς πού γυρνάει το κλειδί: πόσα πρέπει να βγάζεις τη μέρα για να βγει ο μήνας.",
  "Δουλεύεις 12 ώρες, κερδίζεις τα ίδια και βλέπεις τα παιδιά σου μόνο όταν κοιμούνται.",
];

export function Problem() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <h2 className="text-5xl font-black sm:text-6xl">
          Δεν έχεις πρόβλημα πελατών. Έχεις πρόβλημα <Underline>αριθμών</Underline>.
        </h2>
        <div>
          <ul className="space-y-4 text-xl leading-snug text-ink">
            {pains.map((p) => (
              <li key={p} className="flex gap-4">
                <Dot className="mt-2.5 shrink-0 text-[1.6rem]" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-prose text-pencil">
            Οι περισσότερες μικρές επιχειρήσεις δεν κλείνουν από έλλειψη δουλειάς. Κλείνουν επειδή ο ιδιοκτήτης κοιτάει τα
            λάθος αριθμούς, ή κανέναν.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ───────── Οι 4 πυλώνες ως σκάλα: μπετά πρώτα, μετά ρετιρέ ───────── */

const gainAcc = { build: "θεμέλιο", improve: "χρήμα", lead: "χρόνο", levelup: "ελευθερία" } as const;

const stepOffset = ["lg:mt-48", "lg:mt-32", "lg:mt-16", "lg:mt-0"];

export function Pillars() {
  return (
    <section className="border-y border-rule py-20 lg:py-28" aria-labelledby="pillars-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16">
          <Image src="/brand/bill-logo.png" alt="The Bill Method" width={700} height={517} className="h-24 w-auto sm:h-28" />
          <div className="max-w-2xl">
            <h2 id="pillars-title" className="text-5xl font-black sm:text-6xl">
              Τέσσερις πυλώνες. Με αυτή τη σειρά.
            </h2>
            <p className="mt-4 text-pencil">
              Αν δεν ρίξεις πρώτα τα μπετά, δεν φτιάχνεις ρετιρέ. Χωρίς Θεμέλιο δεν βγαίνει το Χρήμα, χωρίς Χρήμα δεν
              αγοράζεις Χρόνο, χωρίς Χρόνο δεν φτάνεις στην Ελευθερία.
            </p>
          </div>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:items-start lg:gap-6">
          {pillars.map((p, i) => {
            const s = pillarStyle[p.key];
            return (
              <li key={p.key} className={`${stepOffset[i]} border-t-[6px] ${s.border} pt-4`}>
                <p className={`font-serif text-[7rem] leading-[0.85] font-black ${s.text}`} aria-hidden="true">
                  {p.letter}
                </p>
                <h3 className="mt-4 text-3xl font-black">
                  {p.verb} <span className="font-medium text-pencil">/ {p.en}</span>
                </h3>
                <p className="mt-1 text-pencil">
                  Κερδίζεις {gainAcc[p.key]}. {p.chapters.replace("Κεφ.", "Κεφάλαια")}.
                </p>
                <ul className="mt-4 space-y-1 text-[0.98rem] text-ink">
                  {p.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>

        <div className="mt-14">
          <ButtonLink href="/bill-method" variant="line">
            Διάβασε όλη τη μέθοδο
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/* ───────── Ο κύκλος: πραγματική σειρά βημάτων ───────── */

const cycle = [
  { verb: "Μέτρα", text: "Το Bill Score σού δείχνει πού είσαι σήμερα, από 0 έως 100." },
  { verb: "Ξεκίνα", text: "Από τον πρώτο πυλώνα που είναι κάτω από 15 στα 25." },
  { verb: "Κάνε πράξη", text: "Ένα εργαλείο, σε χαρτί. Πρώτη νίκη: μία μικρή κίνηση σε post-it." },
  { verb: "Ξαναμέτρα", text: "Σε 30 μέρες τον πυλώνα σου. Σε 90 μέρες όλο το Score." },
];

export function Cycle() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="cycle-title">
      <Container>
        <h2 id="cycle-title" className="max-w-3xl text-5xl font-black sm:text-6xl">
          Ένα τρίμηνο, ένα Score.
        </h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {cycle.map((c, i) => (
            <li key={c.verb}>
              <p className="font-display text-xl font-bold text-dot">{i + 1}</p>
              <h3 className="mt-1 text-4xl font-black">{c.verb}</h3>
              <p className="mt-3 text-pencil">{c.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <ButtonLink href="/billscore">Κάνε το Bill Score δωρεάν</ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/* ───────── Πακέτο BILL: εξώφυλλα στο γραφείο + βιβλίο εσόδων ───────── */

const coverPose = [
  "rotate-[-4deg] lg:translate-y-4",
  "rotate-[2deg] lg:-translate-y-2",
  "rotate-[-1.5deg] lg:translate-y-6",
  "rotate-[3deg]",
];

export function Package() {
  return (
    <section className="border-t border-rule bg-[#f3f5f8] py-20 lg:py-28" aria-labelledby="package-title">
      <Container>
        <div className="max-w-3xl">
          <h2 id="package-title" className="text-5xl font-black sm:text-6xl">
            Το Πακέτο BILL
          </h2>
          <p className="mt-4 text-pencil">
            Το βιβλίο σου δίνει μια πρώτη γεύση. Το Workbook, το Excel και τα Prompts τη μετατρέπουν σε πράξη.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 items-center gap-6 sm:gap-8 lg:grid-cols-4">
          {products.map((p, i) => (
            <Link key={p.slug} href={`/paketo-bill/${p.slug}`} className={`block transition-transform hover:rotate-0 ${coverPose[i]}`}>
              <Image
                src={p.cover}
                alt={`Εξώφυλλο: ${p.name}`}
                width={p.coverW}
                height={p.coverH}
                sizes="(min-width: 1024px) 260px, 45vw"
                className="w-full border border-rule bg-white shadow-[0_18px_30px_-18px_rgba(15,76,117,0.45)]"
              />
            </Link>
          ))}
        </div>

        <table className="mt-16 w-full border-collapse text-left">
          <caption className="sr-only">Τα τέσσερα μέρη του Πακέτου BILL</caption>
          <thead>
            <tr className="border-b-2 border-ink font-display text-lg">
              <th scope="col" className="py-3 pr-4 font-bold text-ink">Τι παίρνεις</th>
              <th scope="col" className="hidden py-3 pr-4 font-bold text-ink md:table-cell">Τι κάνει</th>
              <th scope="col" className="py-3 text-right font-bold text-ink">Τιμή</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.slug} className="border-b border-rule align-top">
                <th scope="row" className="py-4 pr-4 font-normal">
                  <Link href={`/paketo-bill/${p.slug}`} className="font-display text-2xl font-bold text-ink hover:underline">
                    {p.name}
                  </Link>
                  <span className="block text-sm text-pencil">{p.kind}</span>
                </th>
                <td className="hidden py-4 pr-4 text-pencil md:table-cell">{p.line}</td>
                <td className="py-4 text-right font-display text-xl whitespace-nowrap text-ink">{formatPrice(p.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-10">
          <ButtonLink href="/paketo-bill" variant="ink">
            Δες το Πακέτο BILL
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/* ───────── Συνεργασία ───────── */

const services = [
  {
    href: "/mentoring",
    title: "Mentoring",
    who: "Για επιχειρηματίες",
    text: "Δουλεύουμε μαζί πάνω στα δικά σου νούμερα, έναν πυλώνα τη φορά, σε κύκλους 90 ημερών.",
  },
  {
    href: "/strategy",
    title: "Strategy",
    who: "Για επιχειρήσεις",
    text: "Στρατηγική με βάση το ταμείο, την τιμολόγηση και την ομάδα. Αποφάσεις που μετριούνται.",
  },
  {
    href: "/education",
    title: "Education",
    who: "Για ομάδες και οργανισμούς",
    text: "Σεμινάρια, workshops και e-courses. Μαθαίνεις κάνοντας, με μολύβι και χαρτί.",
  },
];

export function WorkWithMe() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="work-title">
      <Container>
        <h2 id="work-title" className="text-5xl font-black sm:text-6xl">
          Πώς δουλεύουμε μαζί
        </h2>
        <ul className="mt-10">
          {services.map((s) => (
            <li key={s.href} className="border-t border-rule last:border-b">
              <Link href={s.href} className="group grid gap-2 py-7 sm:grid-cols-[16rem_1fr] sm:gap-10">
                <span>
                  <span className="block font-display text-5xl font-black text-ink group-hover:text-dot">{s.title}</span>
                  <span className="text-sm text-pencil">{s.who}</span>
                </span>
                <span className="max-w-prose self-center text-lg text-graphite">{s.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ───────── Η ιστορία ───────── */

const jobs = ["Σερβιτόρος", "Διανομέας", "Πωλητής", "Μεσίτης", "Τραπεζικός"];

export function Story() {
  return (
    <section className="border-t border-rule bg-[#f3f5f8] py-20 lg:py-28" aria-labelledby="story-title">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <Image
          src="/images/photos/coffee.webp"
          alt="Ο Βασίλης Βασιλειάδης με ένα φλιτζάνι καφέ"
          width={512}
          height={286}
          sizes="(min-width: 1024px) 512px, 100vw"
          className="w-full object-cover"
        />
        <div>
          <h2 id="story-title" className="text-6xl font-black sm:text-7xl">
            Αποτυχημένος.
          </h2>
          <p className="mt-6 flex flex-wrap gap-x-5 gap-y-1 font-display text-2xl">
            {jobs.map((j) => (
              <Struck key={j}>{j}</Struck>
            ))}
            <span className="font-bold text-ink">Σύμβουλος επιχειρηματιών.</span>
          </p>
          <p className="mt-6 max-w-prose">
            Οικονομικές Επιστήμες στο Πανεπιστήμιο Μακεδονίας, με δουλειά παράλληλα. Τράπεζα, όπου ζήτησα μόνος μου να «κατέβω
            στο δίκτυο». Σήμερα: λογιστής-φοροτεχνικός Α΄ τάξης, ιδρυτής της Count On Me και της Billow, τραγουδοποιός στη Song
            on me Records. Και πάνω από όλα, πατέρας τριών αγοριών.
          </p>
          <ButtonLink href="/poios-eimai" variant="ink" className="mt-8">
            Διάβασε όλη την ιστορία
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

/* ───────── Social ───────── */

export function Social() {
  return (
    <section className="border-t border-rule py-16 lg:py-20" aria-labelledby="social-title">
      <Container className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <h2 id="social-title" className="text-5xl font-black sm:text-6xl">
            Τα λέμε και στα βίντεο
          </h2>
          <p className="mt-4 max-w-prose text-lg">
            Εργοδότες και υπάλληλοι, πελάτες που πρέπει να φύγουν, λογιστικά χωρίς μπλα μπλα, mindset και ηγεσία. Σύντομα
            βίντεο, κάθε εβδομάδα.
          </p>
        </div>
        <ul className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          {socials.map((s) => (
            <li key={s.name}>
              <a href={s.url} rel="noopener" className={`${buttonBase} border-2 border-ink text-ink hover:bg-ink hover:text-white`}>
                {s.name} {s.handle}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ───────── Αποτελέσματα: σελίδα βιβλίου εσόδων ───────── */

const homeCases = ["kommotirio", "logistiko-grafeio"].map((slug, i) => {
  const c = allCases.find((x) => x.slug === slug)!;
  const keep = ["Bill Score", "Ρευστότητα"];
  return {
    who: c.who,
    what: c.kind,
    lesson: c.lesson,
    color: i === 0 ? "text-improve" : "text-lead",
    rows: c.rows.filter(([l]) => keep.includes(l) || l.startsWith("Ώρες")).map(([l, b, a]) => [l, b.replace(/ \(.\)/, ""), a.replace(/ \(.\)/, "")]),
  };
});

export function Results() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="results-title">
      <Container>
        <h2 id="results-title" className="max-w-3xl text-5xl font-black sm:text-6xl">
          Πριν και μετά τις 90 μέρες
        </h2>
        <p className="mt-4 max-w-prose text-pencil">
          Τρεις αριθμοί μετράνε: το Bill Score, η ρευστότητα (το χαμηλότερο σημείο του ταμείου 4 εβδομάδων) και οι ώρες
          δουλειάς.
        </p>
        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-16">
          {homeCases.map((c) => (
            <article key={c.who}>
              <h3 className="text-4xl font-black">{c.who}</h3>
              <p className="text-pencil">{c.what}</p>
              <dl className="mt-6">
                {c.rows.map(([label, before, after]) => (
                  <div key={label} className="flex items-baseline gap-3 border-b border-dashed border-rule py-3">
                    <dt className="flex-1">{label}</dt>
                    <dd className="shrink-0 text-right font-display text-lg tabular-nums sm:w-24 sm:text-xl">
                      <span className="sr-only">πριν </span>
                      <Struck>{before}</Struck>
                    </dd>
                    <dd className={`shrink-0 text-right font-display text-xl font-black tabular-nums sm:w-28 sm:text-2xl ${c.color}`}>
                      <span className="sr-only">μετά </span>
                      {after}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 font-display text-2xl leading-tight font-bold text-ink">{c.lesson}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-sm text-pencil">
          Βασισμένα σε πελάτες του λογιστικού μας γραφείου, της Count On Me. Τα στοιχεία έχουν αλλάξει για λόγους απορρήτου και
          οι αριθμοί είναι ενδεικτικοί. Δεν αποτελούν υπόσχεση για το δικό σου αποτέλεσμα.{" "}
          <Link href="/apotelesmata" className="text-ink underline underline-offset-4">
            Δες και τα 10 παραδείγματα
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}

/* ───────── Ομιλίες ───────── */

export function Speaking() {
  return (
    <section className="border-t border-rule py-20 lg:py-28" aria-labelledby="speaking-title">
      <Container className="grid items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 id="speaking-title" className="text-5xl font-black sm:text-6xl">
            Ομιλίες χωρίς θεωρίες
          </h2>
          <p className="mt-5 max-w-prose text-lg">
            Για συνέδρια, επιμελητήρια, συλλόγους και εταιρικές ομάδες. Το κοινό φεύγει με ένα νούμερο και μία απόφαση.
            Θέματα: επιχειρηματικότητα, ταμείο, τιμολόγηση, ομάδα, AI για μικρές επιχειρήσεις.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/omilies" variant="ink">
              Δες τα θέματα ομιλιών
            </ButtonLink>
            <ButtonLink href="/epikoinonia" variant="line">
              Κλείσε ομιλία
            </ButtonLink>
          </div>
        </div>
        <Image
          src="/images/photos/fullbody.webp"
          alt="Ο Βασίλης Βασιλειάδης όρθιος, σε ουδέτερο φόντο"
          width={382}
          height={512}
          sizes="(min-width: 1024px) 340px, 70vw"
          className="mx-auto w-full max-w-[19rem]"
        />
      </Container>
    </section>
  );
}

/* ───────── Κλείσιμο ───────── */

export function FinalCta() {
  return (
    <section className="grid-paper border-t border-rule py-20 lg:py-28">
      <Container>
        <h2 className="max-w-4xl text-6xl font-black sm:text-7xl">
          Ξεκίνα απλά. Με ένα νούμερο τη φορά<Dot className="ml-1" />
        </h2>
        <p className="mt-6 max-w-prose text-lg">
          20 ερωτήσεις, δωρεάν. Στο τέλος ξέρεις από ποιον πυλώνα ξεκινάς και ποιο είναι το πρώτο σου βήμα.
        </p>
        <ButtonLink href="/billscore" className="mt-8">
          Κάνε το Bill Score
        </ButtonLink>
      </Container>
    </section>
  );
}
