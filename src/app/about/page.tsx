import type { Metadata } from "next";
import Image from "next/image";
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
    "The Mahir Tech is a Rawalpindi-based technology partner. Years of referral-driven delivery, now a registered business spanning AI, automation, GIS, software and infrastructure.",
});

const values = [
  { icon: Sparkles, title: "Outcomes over output", detail: "We measure success in hours saved and decisions enabled, not in lines of code or flashy demos." },
  { icon: Layers, title: "One accountable partner", detail: "Strategy to support, across disciplines, so you are never stuck coordinating five vendors." },
  { icon: ShieldCheck, title: "Trust by default", detail: "Registered, compliant and disciplined, especially on government and institutional work." },
];

const timeline = [
  { year: "Early years", title: "Built on referrals", detail: "We started by quietly delivering GIS, software, websites, hardware and infrastructure for clients who found us through word of mouth." },
  { year: "Growth", title: "Broadened the stack", detail: "Projects expanded across web, mobile, enterprise software and large hardware and server deployments for private and public-sector clients." },
  { year: "Today", title: "Registered & AI-first", detail: "Now a formally registered business, with AI agents and automation at the centre of what we build, backed by full infrastructure capability." },
  { year: "Coming soon", title: "Our own products", detail: "We are building EVA, our E-Virtual Assistant, and ZMap, a GIS tool for beginners and experts alike." },
];

const team = [
  {
    name: siteConfig.team.projectManager,
    role: "Project Manager",
    photo: "/team/sohail-1.jpg",
    link: siteConfig.social.linkedinFounder,
    bio: "Leads delivery end to end, from first conversation to deployed, supported solution.",
  },
  {
    name: "Muhammad Adnan Zia",
    role: "Technology Partner",
    photo: "/team/sohail-4.jpg",
    link: siteConfig.social.linkedinPartner,
    bio: "Drives technical direction across software, AI and infrastructure engagements.",
  },
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
        description="The Mahir Tech grew the hard way: through years of referrals and private contracts, earning trust one delivered project at a time. Today we are a formally registered business carrying that same standard into AI, automation, GIS, software and infrastructure work."
      />

      {/* Story + photo */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title={<>From referrals to a <span className="text-gradient-gold">registered partner</span></>}
            description="For several years we operated through referrals and private contracts, delivering GIS projects, enterprise software, websites, mobile apps, AI automation, hardware procurement, server deployments and network infrastructure. That track record, built without marketing, is the foundation we now formalise. As a registered business with relevant registrations and compliance documentation, we bring the same execution discipline to every engagement, with the maturity and accountability larger clients require."
          />
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gold-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/team/sohail-2.jpg"
                  alt="The Mahir Tech, working with a client"
                  width={1024}
                  height={1280}
                  unoptimized
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent p-6">
                  <p className="text-sm font-medium text-bone-50">Close to every project</p>
                  <p className="text-xs text-bone-300">A lean, senior team that stays hands-on.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Stats />

      {/* Mission / Vision / Approach */}
      <Section>
        <SectionHeading
          eyebrow="What drives us"
          title={<>Mission, vision and <span className="text-gradient-gold">approach</span></>}
        />
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Target, title: "Mission", text: "To be the execution partner organisations trust to design, build, deploy and support complete technology ecosystems." },
            { icon: Eye, title: "Vision", text: "Technology that delivers measurable value for government, enterprise and the teams building what comes next." },
            { icon: Compass, title: "Approach", text: "AI and automation first, backed by full-stack capability across software, GIS and infrastructure." },
          ].map((b) => (
            <RevealItem key={b.title}>
              <div className="card-surface h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gradient-to-b from-gold-400/15 to-transparent text-gold-300">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-bone-50">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-300">{b.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Journey timeline */}
      <Section className="bg-ink-900/40">
        <SectionHeading
          eyebrow="Our journey"
          title={<>How we <span className="text-gradient-gold">got here</span></>}
        />
        <div className="mx-auto mt-14 max-w-3xl">
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06}>
              <div className="relative flex gap-6 pb-10 last:pb-0">
                {/* line */}
                {i < timeline.length - 1 && (
                  <span className="absolute left-[15px] top-8 h-full w-px bg-gradient-to-b from-gold-400/40 to-transparent" />
                )}
                <span className="relative mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/30 bg-ink-900 text-xs font-semibold text-gold-300">
                  {i + 1}
                </span>
                <div className="card-surface flex-1 p-5">
                  <p className="text-xs font-medium uppercase tracking-widest text-gold-400">{t.year}</p>
                  <h3 className="mt-1 text-base font-semibold text-bone-50">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-bone-300">{t.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
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

      {/* Leadership with photos */}
      <Section>
        <SectionHeading
          eyebrow="Leadership"
          title={<>The team behind <span className="text-gradient-gold">{siteConfig.shortName}</span></>}
          description="A lean, senior team that stays close to every project."
        />
        <RevealGroup className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {team.map((p) => (
            <RevealItem key={p.name}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-surface flex h-full flex-col overflow-hidden transition-colors hover:border-gold-400/30"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={p.photo}
                    alt={p.name}
                    width={800}
                    height={1000}
                    unoptimized
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent p-5">
                    <p className="text-lg font-semibold text-bone-50">{p.name}</p>
                    <p className="text-sm text-gold-300">{p.role}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-relaxed text-bone-300">{p.bio}</p>
                  <span className="mt-3 text-xs font-medium text-gold-300">View LinkedIn profile</span>
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
