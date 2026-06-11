import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ServiceCard } from "@/components/cards/service-card";
import { CTA } from "@/components/sections/cta";
import { services } from "@/lib/data/services";
import { buildMetadata, baseKeywords } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  path: "/services",
  description:
    "AI solutions, AI automation, GIS, enterprise software, web & mobile development, IT infrastructure and hardware supply — delivered end-to-end by The Mahir Tech.",
  keywords: baseKeywords,
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Everything you need to <span className="text-gradient-gold">design, build & run</span> technology
          </>
        }
        description="Twelve capabilities across eight focused service areas — with AI and automation at the core, and complete infrastructure to back it up."
      />
      <Section>
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <RevealItem key={s.slug}>
              <ServiceCard service={s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
      <CTA />
    </>
  );
}
