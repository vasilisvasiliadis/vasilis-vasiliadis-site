import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      // thebillmethod.gr → vasilisvasiliadis.gr (αρχική → σελίδα μεθόδου, υπόλοιπα 1:1)
      {
        source: "/",
        has: [{ type: "host", value: "(www\\.)?thebillmethod\\.gr" }],
        destination: "https://vasilisvasiliadis.gr/bill-method",
        permanent: true,
      },
      {
        source: "/:path+",
        has: [{ type: "host", value: "(www\\.)?thebillmethod\\.gr" }],
        destination: "https://vasilisvasiliadis.gr/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
