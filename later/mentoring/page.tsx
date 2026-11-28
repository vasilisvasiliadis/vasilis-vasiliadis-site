import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/services";

const s = services.mentoring;

export const metadata: Metadata = {
  title: "Mentoring",
  description: s.intro,
  alternates: { canonical: "/mentoring" },
};

export default function Page() {
  return <ServicePage s={s} />;
}
