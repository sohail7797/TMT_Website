import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/icon";
import { CTA } from "@/components/sections/cta";
import { industries } from "@/lib/data/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  path: "/industries",
  description:
    "The Mahir Tech serves government, municipal, utility, infrastructure, defence, NGO, startup, SME, and enterprise clients with tailored technology solutions.",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={
          <>
            Tailored to the <span className="text-gradient-gold">sectors we serve</span>
          </>
        }
        description="Every sector has its own standards, constraints, and expectations. We adapt our delivery — from compliance-heavy public-sector work to fast-moving startups."
      />
      <Section>
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <RevealItem key={ind.name}>
              <div className="card-surface h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/20 bg-gradient-to-b from-gold-400/15 to-transparent text-gold-300">
                  <Icon name={ind.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-bone-50">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-300">{ind.detail}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
      <CTA />
    </>
  );
}
