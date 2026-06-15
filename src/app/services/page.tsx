import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/icon";
import { ServiceCard } from "@/components/cards/service-card";
import { CTA } from "@/components/sections/cta";
import { services, getService } from "@/lib/data/services";
import { buildMetadata, baseKeywords } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "AI, Automation, Web, GIS & IT Services",
  path: "/services",
  description:
    "Explore our services: AI agents, chatbots, voice agents, workflow automation, web and mobile apps, GIS and IT infrastructure. Worldwide delivery. Get a free quote.",
  keywords: baseKeywords,
});

export default function ServicesPage() {
  const flagship = ["ai-solutions", "ai-automation"].map(getService).filter(Boolean);
  const rest = services.filter((s) => !["ai-solutions", "ai-automation"].includes(s.slug));

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Everything you need to <span className="text-gradient-gold">design, build & run</span> technology
          </>
        }
        description="Twelve capabilities across eight focused service areas, with AI and automation at the core, and complete infrastructure to back it up."
      />

      {/* Flagship AI-first spotlight */}
      <Section>
        <SectionHeading
          align="left"
          eyebrow="Where we lead"
          title={<>Our <span className="text-gradient-gold">AI-first</span> focus</>}
          description="The capabilities clients ask for most right now. We build these in-house, day in and day out."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {flagship.map(
            (s) =>
              s && (
                <Reveal key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group card-surface relative flex h-full flex-col overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30"
                  >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/20 bg-gradient-to-b from-gold-400/15 to-transparent text-gold-300">
                      <Icon name={s.icon} className="h-7 w-7" />
                    </div>
                    <h3 className="relative mt-5 text-2xl font-semibold text-bone-50">{s.title}</h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-bone-300">{s.summary}</p>
                    <ul className="relative mt-5 grid gap-2">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-bone-200">
                          <Check className="h-4 w-4 shrink-0 text-gold-400" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300">
                      Explore {s.title}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              )
          )}
        </div>
      </Section>

      {/* Full catalogue */}
      <Section className="bg-ink-900/40">
        <SectionHeading
          eyebrow="Full catalogue"
          title={<>The complete <span className="text-gradient-gold">service stack</span></>}
          description="From GIS and software to infrastructure and hardware, one partner across the board."
        />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((s) => (
            <RevealItem key={s.slug}>
              <ServiceCard service={s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTA title="Not sure which service you need?" description="Tell us the problem, not the solution. We'll recommend the right approach and a clear plan." />
    </>
  );
}
