import type { Metadata } from "next";
import { Target, Eye, Compass, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Stats } from "@/components/sections/stats";
import { Process } from "@/components/sections/home-sections";
import { CTA } from "@/components/sections/cta";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
  description:
    "The Mahir Tech is a Rawalpindi-based technology partner — years of referral-driven delivery, now a registered business spanning AI, GIS, software, and infrastructure.",
});

const values = [
  { icon: Sparkles, title: "Outcomes over output", detail: "We measure success in hours saved and decisions enabled — not lines of code or flashy demos." },
  { icon: Layers, title: "One accountable partner", detail: "Strategy to support, across disciplines, so you're never stuck coordinating five vendors." },
  { icon: ShieldCheck, title: "Trust by default", detail: "Registered, compliant, and disciplined — especially on government and institutional work." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            A technology partner built on <span className="text-gradient-gold">delivery</span>
          </>
        }
        description="The Mahir Tech grew the hard way — through years of referrals and private contracts, earning trust one delivered project at a time. Today we're a formally registered business carrying that same standard into AI, GIS, software, and infrastructure work."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title={<>From referrals to a <span className="text-gradient-gold">registered partner</span></>}
            description={
              `For several years, The Mahir Tech operated through referrals and private contracts — delivering GIS projects, enterprise software, websites, mobile apps, AI automation, hardware procurement, server deployments, and network infrastructure. That track record, built without marketing, is the foundation we now formalise. As a registered business with relevant registrations and compliance documentation, we bring the same execution discipline to every engagement — with the maturity and accountability larger clients require.`
            }
          />
          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {[
                { icon: Target, title: "Mission", text: "To be the execution partner organisations trust to design, build, deploy, and support complete technology ecosystems." },
                { icon: Eye, title: "Vision", text: "Technology that delivers measurable value — for government, enterprise, and the teams building what's next." },
                { icon: Compass, title: "Approach", text: "AI and automation first, backed by full-stack capability across software, GIS, and infrastructure." },
              ].map((b) => (
                <div key={b.title} className="card-surface flex gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-bone-50">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-bone-300">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Stats />

      <Section>
        <SectionHeading
          eyebrow="What we stand for"
          title={<>Values that <span className="text-gradient-gold">guide us</span></>}
        />
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-3">
          {values.map((v) => (
            <RevealItem key={v.title}>
              <div className="card-surface h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gradient-to-b from-gold-400/15 to-transparent text-gold-300">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-bone-50">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-300">{v.detail}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Process />

      <Section>
        <SectionHeading
          eyebrow="Leadership"
          title={<>The team behind <span className="text-gradient-gold">{siteConfig.shortName}</span></>}
          description="A lean, senior team that stays close to every project."
        />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:max-w-3xl lg:mx-auto">
          {[
            { name: siteConfig.team.projectManager, role: "Project Manager", link: siteConfig.social.linkedinFounder },
            { name: "Muhammad Adnan Zia", role: "Technology Partner", link: siteConfig.social.linkedinPartner },
          ].map((p) => (
            <RevealItem key={p.name}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface flex items-center gap-4 p-6 transition-colors hover:border-gold-400/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/25 bg-gold-400/[0.06] font-display text-xl font-semibold text-gold-300">
                  {p.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <p className="text-base font-semibold text-bone-50">{p.name}</p>
                  <p className="text-sm text-bone-400">{p.role}</p>
                  <p className="mt-1 text-xs text-gold-300">View LinkedIn →</p>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTA />
    </>
  );
}
