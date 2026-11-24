import { formatPrice } from "@/lib/site";
import { buttonBase } from "./ui";

/** Κουμπί αγοράς προς τη σελίδα πληρωμής του Merchant of Record. */
export function BuyButton({ checkoutUrl, price, label = "Αγόρασε" }: { checkoutUrl: string | null; price: number | null; label?: string }) {
  if (!checkoutUrl) {
    return (
      <p className="font-display text-xl font-bold text-pencil">
        Διαθέσιμο σύντομα. Μέχρι τότε, ξεκίνα δωρεάν από το Bill Score.
      </p>
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
