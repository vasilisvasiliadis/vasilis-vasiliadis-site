import { buttonBase } from "./ui";
import { formatPrice, tiers } from "@/lib/site";

const wish: Record<string, string> = {
  vivlio: "Θέλω το Βιβλίο",
  "vivlio-workbook": "Θέλω Βιβλίο + Workbook",
  pliris: "Θέλω ολόκληρη τη μέθοδο",
};

/** Τα τρία επίπεδα. Όσο `price` είναι null δεν εμφανίζεται καμία τιμή και το κουμπί πάει στη λίστα αναμονής. */
export function TierCards() {
  const soldOut = tiers.every((t) => !t.checkoutUrl);

  return (
    <ul className="grid gap-6 lg:grid-cols-3">
      {tiers.map((t, i) => {
        const top = i === tiers.length - 1;
        return (
          <li key={t.slug} className={`flex flex-col border-2 bg-white p-6 ${top ? "border-dot" : "border-ink"}`}>
            <h3 className="text-3xl font-black">{t.name}</h3>
            {t.price !== null && <p className="mt-4 font-display text-5xl font-black text-ink">{formatPrice(t.price)}</p>}
            <ul className="mt-5 flex-1 space-y-2">
              {t.includes.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-ink" />
                  {x}
                </li>
              ))}
              {t.gift && (
                <li className="flex gap-3 font-bold text-ink">
                  <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-dot" />
                  Δώρο: {t.gift}
                </li>
              )}
            </ul>
            <div className="mt-6">
              {t.checkoutUrl ? (
                <a href={t.checkoutUrl} className={`${buttonBase} w-full bg-dot text-white hover:bg-dot-dark`}>
                  Αγόρασε
                </a>
              ) : (
                <a
                  href={`/paketo-bill?epipedo=${t.slug}#lista`}
                  className={`${buttonBase} w-full ${top ? "bg-dot text-white hover:bg-dot-dark" : "border-2 border-ink text-ink hover:bg-ink hover:text-white"}`}
                >
                  {wish[t.slug]}
                </a>
              )}
            </div>
          </li>
        );
      })}
      {soldOut && <li className="sr-only">Οι πωλήσεις δεν έχουν ανοίξει ακόμα. Γράψου στη λίστα αναμονής.</li>}
    </ul>
  );
}
