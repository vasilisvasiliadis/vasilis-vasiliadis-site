import Image from "next/image";
import Link from "next/link";
import { footerNav, legalNav, socials } from "@/lib/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Image
              src="/brand/vasiliadis-logo-white.png"
              alt="Βασιλειάδης: Mentoring, Strategy, Education"
              width={1200}
              height={231}
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-sm font-display text-2xl leading-tight font-bold">
              Αλλού ακούς θεωρίες. Εδώ εφαρμόζεις και μετράς.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.url} rel="noopener" className="font-display text-lg text-white underline-offset-4 hover:underline">
                    {s.name} <span className="text-white/60">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <p className="font-display text-lg font-bold text-white">{col.title}</p>
                <ul className="mt-3 space-y-2">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-white/75 hover:text-white hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/20 pt-8 text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} Βασίλης Βασιλειάδης. The Bill Method™</p>
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
        <p className="mt-4 text-xs text-white/45">
          Το περιεχόμενο είναι γενική πληροφόρηση, όχι φορολογική ή νομική συμβουλή.
        </p>
      </Container>
    </footer>
  );
}
