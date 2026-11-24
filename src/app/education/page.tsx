import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/services";

const s = services.education;

export const metadata: Metadata = { title: "Education", description: s.intro };

export default function Page() {
  return <ServicePage s={s} />;
}
