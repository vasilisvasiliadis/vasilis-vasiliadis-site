"use client";

import { useEffect, useState } from "react";
import { type BundleOffer, bundleOffer, formatPrice, productsTotal } from "@/lib/site";

const dateFmt = new Intl.DateTimeFormat("el-GR", { day: "numeric", month: "long" });

/** Η τιμή του πακέτου της ημέρας. Οι τιμές ανεβαίνουν, ποτέ δεν γράφουμε «αντί για». */
export function BundlePrice() {
  const [offer, setOffer] = useState<BundleOffer>(() => bundleOffer(new Date(0)));
  useEffect(() => setOffer(bundleOffer()), []);

  const next = offer.nextPrice !== null ? formatPrice(offer.nextPrice) : null;
  return (
    <div className="mt-6">
      <p className="font-display text-4xl font-black text-ink">{formatPrice(offer.price)}</p>
      <p className="mt-1 font-display text-xl font-bold text-ink">{offer.phase}</p>
      {offer.state === "waitlist" ? (
        <p className="mt-2 max-w-prose text-pencil">
          Ισχύει για όσους γραφτούν στη λίστα αναμονής. Μετά το λανσάρισμα η τιμή ανεβαίνει σε {next}.
        </p>
      ) : (
        offer.until &&
        next && (
          <p className="mt-2 max-w-prose text-pencil">
            Ισχύει έως τις {dateFmt.format(offer.until)}. Από τότε {next}.
          </p>
        )
      )}
      <p className="mt-2 text-sm text-pencil">Τα τέσσερα προϊόντα χωριστά: {formatPrice(productsTotal)}.</p>
    </div>
  );
}
