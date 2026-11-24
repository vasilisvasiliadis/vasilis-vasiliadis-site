import type { NextConfig } from "next";

/**
 * Στατικό export (φάκελος out/) για Cloudflare Workers.
 * Τα redirects του thebillmethod.gr γίνονται στο worker/index.ts.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
