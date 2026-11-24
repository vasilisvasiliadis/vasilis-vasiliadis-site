import type { Metadata } from "next";
import { BusinessDetails } from "@/components/BusinessDetails";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { bookingUrl, business } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/epikoinonia" },
  title: "Επικοινωνία",
  description: "Για mentoring, στρατηγική, σεμινάρια ή ομιλίες.",
};

const topics = [
  { label: "Mentoring", text: "Κύκλος 90 ημερών ή μία συνεδρία στρατηγικής." },
  { label: "Strategy", text: "Διάγνωση και συνοδεία για επιχειρήσεις με ομάδα." },
  { label: "Σεμινάριο / workshop", text: "Για επιμελητήρια, συλλόγους, εταιρείες." },
  { label: "Ομιλία", text: "Ημερομηνία, πόλη, κοινό, πόσοι θα είστε." },
  { label: "Πακέτο BILL", text: "Ερώτηση για αγορά, αρχείο ή επιστροφή." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Επικοινωνία" title="Ας μιλήσουμε">
        <p>Γράψε μου με λίγα λόγια τι θέλεις να αλλάξει. Απαντάω μέσα σε 3 εργάσιμες.</p>
      </PageHero>

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-5xl font-black">Διάλεξε θέμα</h2>
            <ul className="mt-6 divide-y divide-rule border-y border-rule">
              {topics.map((t) => (
                <li key={t.label}>
                  <a
                    href={`mailto:${business.email}?subject=${encodeURIComponent(t.label)}`}
                    className="group grid gap-1 py-5 sm:grid-cols-[16rem_1fr] sm:items-baseline sm:gap-8"
                  >
                    <span className="font-display text-3xl font-black text-ink group-hover:text-dot">{t.label}</span>
                    <span>{t.text}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-pencil">
              Κάθε θέμα ανοίγει email προς <a href={`mailto:${business.email}`} className="text-ink underline underline-offset-4">{business.email}</a>.
              Αν στείλεις νούμερα, βάλε κωδικούς αντί για ονόματα πελατών (GDPR).
            </p>
          </div>
          <aside>
            {bookingUrl && (
              <>
                <h2 className="text-3xl font-black">Ραντεβού</h2>
                <p className="mt-2">
                  <a href={bookingUrl} className="text-ink underline underline-offset-4">Κλείσε ραντεβού γνωριμίας</a>
                </p>
              </>
            )}
            <h2 className={`${bookingUrl ? "mt-10" : ""} text-3xl font-black`}>Στοιχεία</h2>
            <div className="legal mt-3">
              <BusinessDetails />
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
