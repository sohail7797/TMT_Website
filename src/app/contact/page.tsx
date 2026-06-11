import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";
import { LeadForm } from "@/components/forms/lead-form";
import { Button } from "@/components/ui/button";
import { buildMetadata, JsonLd } from "@/lib/seo";
import { siteConfig, WHATSAPP_GREETING } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Get in touch with The Mahir Tech in Rawalpindi. Request a quote for AI, automation, GIS, software, web, mobile, or IT infrastructure projects.",
});

const faqs = [
  {
    q: "How quickly will you respond?",
    a: "We typically reply within one business day. For urgent matters, WhatsApp is the fastest channel.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes, we work with international and remote clients alongside our local government and private-sector partners.",
  },
  {
    q: "Can we start with a small project?",
    a: "Absolutely. Many engagements start with a focused automation or a single build, then grow from there.",
  },
];

export default function ContactPage() {
  const c = siteConfig.contact;

  const contactItems = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: c.whatsappDisplay,
      href: whatsappLink(c.whatsapp, WHATSAPP_GREETING),
      external: true,
    },
    { icon: Phone, label: "Phone", value: c.phoneDisplay, href: `tel:${c.phone}` },
    { icon: Mail, label: "Email", value: c.email, href: `mailto:${c.email}` },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact The Mahir Tech",
          url: `${siteConfig.url}/contact`,
        }}
      />
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about your <span className="text-gradient-gold">project</span>
          </>
        }
        description="Tell us what you're building or the problem you want solved. We'll come back with a clear plan, timeline, and quote."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact details */}
          <Reveal className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="card-surface flex items-center gap-4 p-4 transition-colors hover:border-gold-400/30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-bone-400">{item.label}</p>
                    <p className="text-sm font-medium text-bone-100">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="card-surface flex flex-col gap-4 p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <div>
                  <p className="text-sm font-medium text-bone-100">Office</p>
                  <p className="mt-1 text-sm text-bone-300">
                    {c.addressLine1}
                    <br />
                    {c.addressLine2}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <div>
                  <p className="text-sm font-medium text-bone-100">Business hours</p>
                  <p className="mt-1 text-sm text-bone-300">{c.hours}</p>
                </div>
              </div>
              <Button
                href={whatsappLink(c.whatsapp, WHATSAPP_GREETING)}
                external
                variant="secondary"
                size="md"
                className="mt-1 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Live map */}
            <div className="card-surface relative h-56 overflow-hidden">
              <iframe
                title="The Mahir Tech location, Saddar, Rawalpindi"
                src="https://www.google.com/maps?q=Abbas+Plaza+Computer+Market+Saddar+Rawalpindi&output=embed"
                className="h-full w-full grayscale-[0.2] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>

          {/* Lead form */}
          <Reveal delay={0.1}>
            <LeadForm />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-ink-900/40">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">
            Frequently asked <span className="text-gradient-gold">questions</span>
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className="card-surface p-5">
                <p className="text-base font-medium text-bone-100">{f.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-bone-300">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
