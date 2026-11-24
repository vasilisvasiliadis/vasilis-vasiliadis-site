import Image from "next/image";
import Link from "next/link";
import { footerNav, legalNav } from "@/lib/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div aria-hidden="true" className="grid h-1.5 grid-cols-4">
        <span className="bg-build" />
        <span className="bg-improve" />
        <span className="bg-lead" />
        <span className="bg-levelup" />
      </div>
      <Container className="py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Image
              src="/brand/vasiliadis-logo-white.png"
              alt="Βασιλειάδης: Mentoring | Strategy | Education"
              width={1200}
              height={231}
              className="h-10 w-auto"
            />
            <p className="mt-6 max-w-sm leading-relaxed text-white/70">
              Αλλού ακούς θεωρίες. Εδώ εφαρμόζεις και μετράς.
            </p>
            <p className="mt-4 text-sm text-white/50">
              Η μέθοδος έχει και δικό της σπίτι:{" "}
              <a href="https://thebillmethod.gr" className="underline underline-offset-4 hover:text-white">
                thebillmethod.gr
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">{col.title}</p>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-white/85 hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-8 text-sm text-white/55 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} Βασίλης Βασιλειάδης · The Bill Method™</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-xs text-white/40">
          Το περιεχόμενο είναι γενική πληροφόρηση, όχι φορολογική ή νομική συμβουλή.
        </p>
      </Container>
    </footer>
  );
}
