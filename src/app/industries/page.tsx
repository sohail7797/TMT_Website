import type { Metadata } from "next";
import { ShieldCheck, Clock, FileCheck2, Headphones } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section, SectionHeading } from "@/components/shared/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/icon";
import { CTA } from "@/components/sections/cta";
import { industries } from "@/lib/data/content";
import { buildMetadata } from "@/lib/seo";

const adaptations = [
  { icon: ShieldCheck, title: "Standards & compliance", detail: "For government and defence work, we deliver to institutional standards with proper documentation and accountability." },
  { icon: Clock, title: "Speed for startups", detail: "For startups and SMEs, we move fast: MVPs, automations and lean builds that ship and prove value quickly." },
  { icon: FileCheck2, title: "Process for enterprise", detail: "For enterprises, we bring reviewable milestones, clean architecture and integration with existing systems." },
  { icon: Headphones, title: "Support that lasts", detail: "Across every sector, we stay on after launch with maintenance, training and responsive support." },
];

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
        description="Every sector has its own standards, constraints, and expectations. We adapt our delivery, from compliance-heavy public-sector work to fast-moving startups."
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

      {/* How we adapt per sector */}
      <Section className="bg-ink-900/40">
        <SectionHeading
          eyebrow="How we adapt"
          title={<>One team, the <span className="text-gradient-gold">right approach</span> per sector</>}
          description="We do not force every client through the same mould. We adjust our process to what each sector actually needs."
        />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {adaptations.map((a) => (
            <RevealItem key={a.title}>
              <div className="card-surface h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-bone-50">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-300">{a.detail}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTA />
    </>
  );
}
