import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type ButtonVariant = "primary" | "ink" | "line";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-dot text-white hover:bg-dot-dark",
  ink: "bg-ink text-white hover:bg-graphite",
  line: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
};

export const buttonBase =
  "inline-flex min-h-12 items-center justify-center rounded-[3px] px-6 py-3 font-display text-lg font-bold tracking-wide transition-colors";

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: { href: string; variant?: ButtonVariant } & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link href={href} className={`${buttonBase} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/** Η τελεία του «i»: το magenta σημάδι της μεθόδου. */
export function Dot({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`inline-block size-[0.18em] rounded-full bg-dot ${className}`} />;
}

/** Κύκλος μολυβιού γύρω από μια επιλογή. Το pathLength=1 επιτρέπει το «γράψιμο». */
export function PencilCircle({ className = "", color = "var(--color-dot)" }: { className?: string; color?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 80" preserveAspectRatio="none" className={`pointer-events-none absolute ${className}`}>
      <path
        className="pencil-stroke"
        pathLength={1}
        d="M108 6C62 3 14 12 8 38c-6 26 52 38 104 35 50-3 84-16 80-37C188 14 140 4 92 9"
        fill="none"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Διαγραφή με μολύβι πάνω σε ένα «πριν». */
export function Struck({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block text-pencil">
      {children}
      <svg aria-hidden="true" viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute inset-x-[-4%] top-1/2 h-3 w-[108%] -translate-y-1/2">
        <path d="M2 13C30 8 64 11 98 6" fill="none" stroke="var(--color-graphite)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
    </span>
  );
}

/** Υπογράμμιση με μολύβι. */
export function Underline({ children, color = "var(--color-dot)" }: { children: ReactNode; color?: string }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg aria-hidden="true" viewBox="0 0 100 12" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-2 h-3 w-full">
        <path d="M2 8C25 4 60 3 98 6" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
    </span>
  );
}
