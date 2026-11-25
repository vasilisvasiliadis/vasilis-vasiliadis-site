"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/site";
import { Container, buttonBase } from "./ui";

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
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 lg:h-[4.5rem]">
        <Link href="/" className="shrink-0" aria-label="Βασίλης Βασιλειάδης, αρχική">
          <Image
            src="/brand/vasiliadis-logo.webp"
            alt="Βασιλειάδης: Mentoring, Strategy, Education"
            width={750}
            height={144}
            priority
            className="h-10 w-auto sm:h-11 lg:h-12"
          />
        </Link>

        <nav aria-label="Κύριο μενού" className="hidden items-center gap-5 xl:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap font-display text-[1.0625rem] font-medium underline-offset-[6px] hover:underline ${
                  active ? "text-ink underline decoration-dot decoration-2" : "text-graphite"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <Link
              href="/billscore"
              className={`${buttonBase} min-h-10 whitespace-nowrap bg-dot px-4 py-1.5 text-base text-white hover:bg-dot-dark`}
            >
              Κάνε το Bill Score
            </Link>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            className="inline-flex size-11 items-center justify-center xl:hidden"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h11M4 17h16" />}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto bg-paper xl:hidden">
          <Container className="py-6">
            <nav aria-label="Μενού κινητού" className="flex flex-col">
              {[...mainNav, { label: "Επικοινωνία", href: "/epikoinonia" }].map((item) => (
                <Link key={item.href} href={item.href} className="border-b border-rule py-4 font-display text-3xl font-bold text-ink">
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="/billscore" className={`${buttonBase} mt-8 w-full bg-dot text-white`}>
              Κάνε το Bill Score
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
