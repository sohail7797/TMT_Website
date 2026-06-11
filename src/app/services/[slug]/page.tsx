import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section, SectionHeading } from "@/components/shared/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { JsonLd } from "@/lib/seo";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { services, getService, serviceSlugs } from "@/lib/data/services";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return buildMetadata({ title: "Service", path: `/services/${slug}` });
  return buildMetadata({
    title: service.title,
    path: `/services/${slug}`,
    description: service.summary,
    keywords: [service.title, ...service.capabilities.slice(0, 6), "The Mahir Tech"],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: ["Pakistan", "Worldwide"],
    url: `${siteConfig.url}/services/${slug}`,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      <PageHeader
        eyebrow={service.tagline}
        breadcrumbs={[{ label: "Services", href: "/services" }]}
        title={
          <span className="inline-flex flex-col gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/20 bg-gradient-to-b from-gold-400/15 to-transparent text-gold-300">
              <Icon name={service.icon} className="h-7 w-7" />
            </span>
            {service.title}
          </span>
        }
        description={service.description}
      >
        <Button href="/contact" variant="primary" size="lg">
          Discuss your project
          <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHeader>

      {/* Capabilities */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            align="left"
            eyebrow="Capabilities"
            title={
              <>
                What this <span className="text-gradient-gold">covers</span>
              </>
            }
            description="The specific capabilities we deliver within this service area."
          />
          <RevealGroup className="grid gap-3 sm:grid-cols-2">
            {service.capabilities.map((cap) => (
              <RevealItem key={cap}>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                  <Check className="h-4 w-4 shrink-0 text-gold-400" />
                  <span className="text-sm text-bone-200">{cap}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* Deliverables + Process */}
      <Section className="bg-ink-900/40">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Deliverables"
              title={<>What you <span className="text-gradient-gold">receive</span></>}
            />
            <RevealGroup className="mt-8 space-y-3">
              {service.deliverables.map((d) => (
                <RevealItem key={d}>
                  <div className="flex items-start gap-3 border-b border-white/10 pb-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                    <span className="text-sm text-bone-200">{d}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Process"
              title={<>How we <span className="text-gradient-gold">deliver it</span></>}
            />
            <RevealGroup className="mt-8 space-y-3">
              {service.process.map((p, i) => (
                <RevealItem key={p.step}>
                  <div className="card-surface flex gap-4 p-4">
                    <span className="font-display text-xl font-bold text-gold-400/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-bone-100">{p.step}</p>
                      <p className="mt-1 text-sm text-bone-300">{p.detail}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title={<>Common <span className="text-gradient-gold">questions</span></>}
        />
        <RevealGroup className="mx-auto mt-12 max-w-3xl space-y-3">
          {service.faqs.map((f) => (
            <RevealItem key={f.q}>
              <details className="group card-surface p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-bone-100">
                  {f.q}
                  <ChevronRight className="h-4 w-4 shrink-0 text-gold-400 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-bone-300">{f.a}</p>
              </details>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Related services */}
      <Section className="bg-ink-900/40">
        <SectionHeading
          eyebrow="Related services"
          title={<>Explore <span className="text-gradient-gold">more</span></>}
        />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3">
          {related.map((s) => (
            <RevealItem key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group card-surface flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-bone-50">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-bone-300">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-gold-300">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTA title={`Ready to start your ${service.title} project?`} />
    </>
  );
}
