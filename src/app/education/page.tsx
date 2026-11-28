import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { Container } from "@/components/ui";
import { VideoEmbed } from "@/components/VideoEmbed";
import { services, talkVideos, talks } from "@/lib/services";

const s = services.education;

export const metadata: Metadata = {
  title: "Education: ομιλίες, σεμινάρια, workshops",
  description: s.intro,
  alternates: { canonical: "/education" },
};

export default function Page() {
  return (
    <ServicePage
      s={s}
      extra={
        <section className="border-t border-rule py-16 lg:py-24" aria-labelledby="talks-title">
          <Container>
            <h2 id="talks-title" className="text-5xl font-black">
              Θέματα ομιλιών
            </h2>
            <ul className="mt-10 grid gap-x-16 divide-y divide-rule border-y border-rule lg:grid-cols-2 lg:divide-y-0 [&>li]:border-b [&>li]:border-rule lg:[&>li:nth-last-child(-n+2)]:border-b-0">
              {talks.map((t) => (
                <li key={t.title} className="py-6">
                  <h3 className="text-3xl font-black">{t.title}</h3>
                  <p className="mt-2">{t.text}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      }
      extraAfter={
        talkVideos.length > 0 ? (
          <section className="border-t border-rule py-16 lg:py-24" aria-labelledby="videos-title">
            <Container>
              <h2 id="videos-title" className="text-5xl font-black">
                Ομιλίες σε βίντεο
              </h2>
              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                {talkVideos.map((v) => (
                  <VideoEmbed key={v.title} video={v} />
                ))}
              </div>
            </Container>
          </section>
        ) : null
      }
    />
  );
}
