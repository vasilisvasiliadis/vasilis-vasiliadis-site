import type { MetadataRoute } from "next";
import { products, site } from "@/lib/site";

export const dynamic = "force-static";

/** Μόνο σελίδες που θέλουμε στη Google. Εκτός: /arthra και /ksanametra (noindex). */
const paths = [
  "/",
  "/bill-method",
  "/billscore",
  "/paketo-bill",
  ...products.map((p) => `/paketo-bill/${p.slug}`),
  "/mentoring",
  "/poios-eimai",
  "/epikoinonia",
  "/oroi",
  "/aporrito",
  "/cookies",
  "/epistrofes",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${site.url}${p === "/" ? "" : p}` }));
}
