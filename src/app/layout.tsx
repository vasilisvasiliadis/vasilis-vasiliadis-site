import type { Metadata, Viewport } from "next";
import { Fira_Sans_Extra_Condensed, Literata } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site, socials } from "@/lib/site";
import "./globals.css";

const firaXC = Fira_Sans_Extra_Condensed({
  weight: ["500", "700", "900"],
  subsets: ["greek", "latin"],
  variable: "--font-fira-xc",
  display: "swap",
});

const literata = Literata({
  subsets: ["greek", "latin"],
  variable: "--font-literata",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: site.name,
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    images: [{ url: "/images/photos/portrait.webp", width: 800, height: 800, alt: site.name }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/photos/portrait.webp`,
  jobTitle: "Λογιστής-φοροτεχνικός Α΄ τάξης, mentor, ομιλητής",
  description: site.description,
  sameAs: socials.map((x) => x.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={`${firaXC.variable} ${literata.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Μετάβαση στο περιεχόμενο
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
