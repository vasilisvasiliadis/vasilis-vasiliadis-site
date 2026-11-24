import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ContactActions } from "@/components/ServicePage";
import { Container } from "@/components/ui";
import { talks } from "@/lib/services";

export const metadata: Metadata = {
  title: "Ομιλίες",
  description:
    "Ομιλίες για συνέδρια, επιμελητήρια, συλλόγους και εταιρικές ομάδες: επιχειρηματικότητα, ταμείο, τιμολόγηση, ομάδα και AI για μικρές επιχειρήσεις.",
};

const formats = [
  { name: "Keynote", text: "30 έως 45 λεπτά, με ερωτήσεις." },
  { name: "Ομιλία με εργαστήριο", text: "Έως 2 ώρες. Το κοινό κάνει το Bill Score στην αίθουσα." },
  { name: "Panel ή συνέντευξη", text: "Συζήτηση με συντονιστή, πάνω στα θέματα της μεθόδου." },
];

export default function TalksPage() {
  return (
    <>
      <PageHero kicker="Public speaking" title="Ομιλίες χωρίς θεωρίες">
        <p>Το κοινό φεύγει με ένα νούμερο και μία απόφαση. Για συνέδρια, επιμελητήρια, συλλόγους και εταιρικές ομάδες.</p>
      </PageHero>

      <section className="py-16 lg:py-24" aria-labelledby="topics-title">
        <Container className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <h2 id="topics-title" className="text-5xl font-black">
              Θέματα
            </h2>
            <ul className="mt-6 divide-y divide-rule border-y border-rule">
              {talks.map((t) => (
                <li key={t.title} className="py-6">
                  <h3 className="text-3xl font-black">{t.title}</h3>
                  <p className="mt-2 text-lg">{t.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <aside>
            <Image src="/images/photos/fullbody.webp" alt="Ο Βασίλης Βασιλειάδης όρθιος" width={382} height={512} sizes="320px" className="w-full max-w-xs" />
            <h2 className="mt-8 text-3xl font-black">Μορφές</h2>
            <ul className="mt-4 space-y-4">
              {formats.map((f) => (
                <li key={f.name}>
                  <p className="font-display text-xl font-bold text-ink">{f.name}</p>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="grid-paper border-t border-rule py-16">
        <Container>
          <h2 className="text-5xl font-black">Κλείσε ομιλία</h2>
          <p className="mt-4 max-w-prose text-lg">Γράψε μου ημερομηνία, πόλη, κοινό και πόσοι θα είστε. Απαντάω μέσα σε 3 εργάσιμες.</p>
          <div className="mt-8">
            <ContactActions subject="Ομιλία" />
          </div>
        </Container>
      </section>
    </>
  );
}
