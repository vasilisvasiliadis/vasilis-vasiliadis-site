import { Arrow, ButtonLink, Container, Dot, Eyebrow } from "./ui";

/** Προσωρινή σελίδα για ενότητες που χτίζονται στις επόμενες φάσεις. */
export function ComingSoon({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <Container className="max-w-3xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
          {title}
          <Dot className="ml-1 size-3" />
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{text}</p>
        <p className="mt-4 text-sm text-muted">Η σελίδα ετοιμάζεται.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/billscore">
            Κάνε το Bill Score <Arrow />
          </ButtonLink>
          <ButtonLink href="/" variant="outline">
            Αρχική
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
