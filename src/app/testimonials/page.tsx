import type { Metadata } from "next";
import { Quote, Star, ShieldCheck, Landmark, GraduationCap, Globe } from "lucide-react";
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
    "Client feedback and success stories from organisations that partnered with The Mahir Tech across AI, automation, GIS, software and infrastructure.",
});

const trustBadges = [
  { icon: ShieldCheck, label: "Defence sector" },
  { icon: Landmark, label: "Public utilities" },
  { icon: GraduationCap, label: "Education" },
  { icon: Globe, label: "International clients" },
];

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
        description="Feedback from partners across the public and private sectors, from defence and utilities to education and international business."
      />

      {/* Trust band */}
      <div className="border-b border-white/10 bg-ink-900/40">
        <div className="container-page py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustBadges.map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 text-sm text-bone-300">
                <b.icon className="h-4 w-4 text-gold-400" />
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Section>
        <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <RevealItem key={i}>
              <figure className="card-surface flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <Quote className="h-7 w-7 text-gold-400/40" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating ?? 5 }).map((_, s) => (
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
          <div className="card-surface flex flex-col items-center gap-2 p-8 text-center">
            <p className="text-lg font-semibold text-bone-50">Worked with us? We&apos;d love your words.</p>
            <p className="max-w-md text-sm text-bone-300">
              If we&apos;ve delivered for you, a short review helps other teams trust us too. Reach
              out and we&apos;ll make it easy.
            </p>
          </div>
        </Reveal>
      </Section>
      <CTA />
    </>
  );
}
