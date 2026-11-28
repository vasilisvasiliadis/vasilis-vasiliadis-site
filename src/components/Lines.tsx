/**
 * Κανόνας γραφής: μετά από τελεία, η επόμενη πρόταση πάει στην επόμενη γραμμή.
 * Δέχεται απλό κείμενο και βάζει κάθε πρόταση σε δική της γραμμή.
 * Δεν σπάει μετά από «Κεφ.» ή πριν από αριθμό.
 */
export function Lines({ children }: { children: string }) {
  const parts = children
    .split(/(?<=[.!?…»])\s+(?=[«“"Α-ΩΆ-ΏA-Z])/u)
    .map((s) => s.trim())
    .filter(Boolean);
  if (parts.length < 2) return <>{children}</>;
  return (
    <>
      {parts.map((p, i) => (
        <span key={i} className="block">
          {p}
        </span>
      ))}
    </>
  );
}
