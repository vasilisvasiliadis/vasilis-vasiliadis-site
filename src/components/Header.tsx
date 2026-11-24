"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/site";
import { ButtonLink, Container } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" className="shrink-0" aria-label="Βασίλης Βασιλειάδης, αρχική">
          <Image
            src="/brand/vasiliadis-logo.png"
            alt="Βασιλειάδης: Mentoring | Strategy | Education"
            width={1200}
            height={231}
            priority
            className="h-8 w-auto lg:h-10"
          />
        </Link>

        <nav aria-label="Κύριο μενού" className="hidden items-center gap-0.5 xl:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[15px] font-medium transition-colors hover:bg-cream ${
                  active ? "text-ink" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <ButtonLink href="/billscore" className="min-h-10 whitespace-nowrap px-5 py-2 text-sm">
              Bill Score δωρεάν
            </ButtonLink>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            className="inline-flex size-11 items-center justify-center rounded-full hover:bg-cream xl:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-white xl:hidden">
          <Container className="py-6">
            <nav aria-label="Μενού κινητού" className="flex flex-col">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-line py-4 font-display text-xl font-semibold"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/epikoinonia" className="border-b border-line py-4 font-display text-xl font-semibold">
                Επικοινωνία
              </Link>
            </nav>
            <ButtonLink href="/billscore" className="mt-8 w-full">
              Κάνε το Bill Score δωρεάν
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
