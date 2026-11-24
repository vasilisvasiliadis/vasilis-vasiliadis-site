import { formatPrice } from "@/lib/site";
import { WaitlistForm } from "./WaitlistForm";
import { buttonBase } from "./ui";

/** Κουμπί αγοράς προς τη σελίδα πληρωμής του Merchant of Record. Χωρίς σύνδεσμο: λίστα αναμονής. */
export function BuyButton({
  checkoutUrl,
  price,
  label = "Αγόρασε",
  interest,
}: {
  checkoutUrl: string | null;
  price: number | null;
  label?: string;
  /** Για τη λίστα αναμονής όσο δεν υπάρχει σύνδεσμος πληρωμής */
  interest: string;
}) {
  if (!checkoutUrl) {
    return (
      <div>
        <p className="mb-4 font-display text-xl font-bold text-ink">Διαθέσιμο σύντομα. Άφησε το email σου και θα σε ειδοποιήσω.</p>
        <WaitlistForm interest={interest} />
      </div>
    );
  }
  return (
    <div>
      <a href={checkoutUrl} className={`${buttonBase} bg-dot text-white hover:bg-dot-dark`}>
        {label}: {formatPrice(price)}
      </a>
      <p className="mt-2 text-sm text-pencil">Ψηφιακό προϊόν: παραδίδεται αμέσως και δεν επιστρέφεται.</p>
    </div>
  );
}
