import type { Metadata } from "next";
import { LegalPage, Section } from "@/components/LegalPage";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/cookies" },
  title: "Πολιτική cookies",
  description: "Ο ιστότοπος δεν χρησιμοποιεί cookies διαφήμισης ή παρακολούθησης.",
};

export default function CookiesPage() {
  return (
    <LegalPage title="Πολιτική cookies">
      <Section title="Με λίγα λόγια">
        <p>
          Δεν χρησιμοποιούμε cookies διαφήμισης, παρακολούθησης ή κοινωνικών δικτύων. Γι’ αυτό δεν θα δεις παράθυρο
          συγκατάθεσης.
        </p>
      </Section>

      <Section title="Τι αποθηκεύεται στη συσκευή σου">
        <ul>
          <li>
            <strong>Πρόοδος του Bill Score</strong> (τοπική αποθήκευση του φυλλομετρητή, όχι cookie): οι απαντήσεις σου και η
            «πρώτη νίκη», ώστε να συνεχίσεις από εκεί που σταμάτησες. Μένουν μόνο στη συσκευή σου. Τις σβήνεις με το «Ξεκίνα
            από την αρχή» ή καθαρίζοντας τα δεδομένα του ιστότοπου.
          </li>
          <li>
            <strong>Cookies ασφαλείας της Cloudflare</strong>: η Cloudflare, που φιλοξενεί τον ιστότοπο, μπορεί να ορίσει
            απολύτως απαραίτητα cookies για την προστασία από κακόβουλη κίνηση. Δεν χρησιμοποιούνται για παρακολούθηση.
          </li>
        </ul>
      </Section>

      <Section title="Στατιστικά">
        <p>
          Αν μετράμε επισκεψιμότητα, το κάνουμε με εργαλείο χωρίς cookies και χωρίς προσωπικά δεδομένα (Cloudflare Web
          Analytics).
        </p>
      </Section>

      <Section title="Επικοινωνία">
        <p>
          Για ερωτήσεις: <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
      </Section>
    </LegalPage>
  );
}
