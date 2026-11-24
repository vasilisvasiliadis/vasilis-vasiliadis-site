import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type ButtonVariant = "primary" | "dark" | "outline" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-dark shadow-sm",
  dark: "bg-ink text-white hover:bg-black",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  ghost: "text-ink underline-offset-4 hover:underline",
};

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: { href: string; variant?: ButtonVariant } & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-[15px] font-semibold transition-colors ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted ${className}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>}
    </div>
  );
}

export function Arrow() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Η τελεία του «i»: το magenta σημάδι της μεθόδου. */
export function Dot({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`inline-block size-2.5 rounded-full bg-accent ${className}`} />;
}
