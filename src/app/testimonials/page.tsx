import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CTA } from "@/components/sections/cta";
import { getTestimonials } from "@/lib/content-source";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Testimonials",
  path: "/testimonials",
  description:
    "Client feedback and success stories from organisations that partnered with The Mahir Tech across AI, automation, GIS, software, and infrastructure.",
});

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title={
          <>
            Trusted by teams that <span className="text-gradient-gold">value delivery</span>
          </>
        }
        description="Selected feedback from partners across the public and private sectors. Attributions are being finalised with client consent — placeholders are clearly marked."
      />
      <Section>
        <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <RevealItem key={i}>
              <figure className="card-surface flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <Quote className="h-7 w-7 text-gold-400/40" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-bone-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-medium text-bone-100">{t.name}</p>
                  <p className="text-xs text-bone-400">
                    {t.role} · {t.company}
                  </p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-12">
          <div className="card-surface flex flex-col items-center gap-3 p-8 text-center">
            <p className="text-sm text-bone-300">
              Google Reviews &amp; LinkedIn recommendations integration
            </p>
            <p className="text-xs text-bone-500">
              [ Placeholder — connect Google Business and LinkedIn recommendation feeds here ]
            </p>
          </div>
        </Reveal>
      </Section>
      <CTA />
    </>
  );
}
