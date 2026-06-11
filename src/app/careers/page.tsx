import type { Metadata } from "next";
import { Briefcase, Heart, Rocket, Users, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section, SectionHeading } from "@/components/shared/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  path: "/careers",
  description:
    "Join The Mahir Tech. We're always interested in talented engineers, AI builders, GIS specialists, and IT professionals in Rawalpindi and remotely.",
});

const perks = [
  { icon: Rocket, title: "Real, shipped work", detail: "Work on projects that go live for government and enterprise clients, not throwaway demos." },
  { icon: Heart, title: "Learn the full stack", detail: "AI, automation, GIS, software, and infrastructure under one roof, broaden your range fast." },
  { icon: Users, title: "Lean, senior team", detail: "Direct mentorship and ownership. Your work is seen and your ideas count." },
];

const openRoles = [
  { title: "AI / Automation Engineer", type: "Full-time · Hybrid", area: "AI" },
  { title: "Full-Stack Developer (Next.js)", type: "Full-time · Hybrid", area: "Web" },
  { title: "GIS Specialist", type: "Project-based", area: "GIS" },
  { title: "IT Infrastructure Technician", type: "Full-time · On-site", area: "Infrastructure" },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title={
          <>
            Build technology that <span className="text-gradient-gold">delivers</span>
          </>
        }
        description="We're a growing team that values craft, ownership, and curiosity. If you want to ship real work across AI, software, GIS, and infrastructure, let's talk."
      >
        <Button
          href={whatsappLink(siteConfig.contact.whatsapp, "Hi, I'm interested in career opportunities at The Mahir Tech.")}
          external
          variant="primary"
          size="lg"
        >
          <MessageCircle className="h-4 w-4" />
          Reach out on WhatsApp
        </Button>
      </PageHeader>

      <Section>
        <SectionHeading
          eyebrow="Why join us"
          title={<>What you can <span className="text-gradient-gold">expect</span></>}
        />
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-3">
          {perks.map((p) => (
            <RevealItem key={p.title}>
              <div className="card-surface h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gradient-to-b from-gold-400/15 to-transparent text-gold-300">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-bone-50">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-300">{p.detail}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section className="bg-ink-900/40">
        <SectionHeading
          eyebrow="Open positions"
          title={<>Current <span className="text-gradient-gold">openings</span></>}
          description="Don't see your exact role? We still want to hear from exceptional people, send us your profile."
        />
        <RevealGroup className="mx-auto mt-12 max-w-3xl space-y-3">
          {openRoles.map((r) => (
            <RevealItem key={r.title}>
              <div className="card-surface flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-bone-50">{r.title}</p>
                    <p className="text-sm text-bone-400">{r.type}</p>
                  </div>
                </div>
                <Button
                  href={whatsappLink(siteConfig.contact.whatsapp, `Hi, I'd like to apply for the ${r.title} role.`)}
                  external
                  variant="secondary"
                  size="sm"
                >
                  Apply
                </Button>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTA title="Want to grow with us?" description="Send your CV and a short note. We review every application personally." />
    </>
  );
}
