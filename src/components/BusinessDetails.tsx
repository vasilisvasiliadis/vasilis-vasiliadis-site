import { business } from "@/lib/site";

export function BusinessDetails() {
  return (
    <ul>
      <li>Επωνυμία: {business.name}</li>
      <li>
        Διεύθυνση: {business.address}
        {business.postalCode ? `, ${business.postalCode}` : ""}, {business.region}
      </li>
      <li>ΑΦΜ: {business.afm}, ΔΟΥ {business.doy}</li>
      <li>
        Email: <a href={`mailto:${business.email}`}>{business.email}</a>
      </li>
    </ul>
  );
}
