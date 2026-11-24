import { ButtonLink, Container, Dot } from "./ui";

/** Προσωρινή σελίδα για ενότητες που χτίζονται στις επόμενες φάσεις. */
export function ComingSoon({
  eyebrow,
  title,
  text,
  note = "Η σελίδα ετοιμάζεται. Μέχρι τότε, ξεκίνα από το Bill Score.",
}: {
  eyebrow: string;
  title: string;
  text: string;
  /** null = χωρίς δεύτερη γραμμή (π.χ. στη 404) */
  note?: string | null;
}) {
  return (
    <section className="grid-paper border-b border-rule py-24 lg:py-32">
      <Container className="max-w-4xl">
        <p className="font-display text-xl font-medium text-pencil">{eyebrow}</p>
        <h1 className="mt-3 text-6xl font-black sm:text-7xl">
          {title}
          <Dot className="ml-1" />
        </h1>
        <p className="mt-6 max-w-prose text-xl">{text}</p>
        {note && <p className="mt-3 text-pencil">{note}</p>}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/billscore">Κάνε το Bill Score</ButtonLink>
          <ButtonLink href="/" variant="line">
            Αρχική
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
