import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/services";

const s = services.strategy;

export const metadata: Metadata = {
  title: "Strategy",
  description: s.intro,
  alternates: { canonical: "/strategy" },
};

export default function Page() {
  return <ServicePage s={s} />;
}
