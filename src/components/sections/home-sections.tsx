import Link from "next/link";
import { ArrowRight, Quote, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/cards/service-card";
import { ProjectCard } from "@/components/cards/project-card";
import { services } from "@/lib/data/services";
import { getAllProjects, getTestimonials } from "@/lib/content-source";
import { differentiators, processSteps, techStack, industries } from "@/lib/data/content";

/* ---------------- Company intro ---------------- */
export function Intro() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <SectionHeading
          align="left"
          eyebrow="Who we are"
          title={
            <>
              Years of delivery, now a{" "}
              <span className="text-gradient-gold">registered technology partner</span>
            </>
          }
          description="The Mahir Tech grew through years of referral-driven work, GIS, enterprise software, websites, apps, AI automation, hardware, and infrastructure. Today we operate as a formally registered business with the compliance to match, partnering with organisations that need technology designed, built, deployed, and supported as one ecosystem."
        />
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "AI & Automation", value: "Core focus" },
              { label: "Government & Private", value: "Both sectors" },
              { label: "End-to-end", value: "Design → Support" },
              { label: "Based in", value: "Rawalpindi, PK" },
            ].map((item) => (
              <div key={item.label} className="card-surface p-5">
                <p className="text-gradient-gold font-display text-lg font-semibold">{item.value}</p>
                <p className="mt-1 text-sm text-bone-400">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------- Services overview ---------------- */
export function ServicesOverview() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What we do"
        title={
          <>
            One partner, the <span className="text-gradient-gold">full technology stack</span>
          </>
        }
        description="From the AI agents and automation clients want today to the GIS, software, and infrastructure that run an organisation, delivered end-to-end."
      />
      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <RevealItem key={s.slug}>
            <ServiceCard service={s} />
          </RevealItem>
        ))}
      </RevealGroup>
      <div className="mt-10 flex justify-center">
        <Button href="/services" variant="outline" size="md">
          Explore all services
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}

/* ---------------- Why choose us ---------------- */
export function WhyUs() {
  return (
    <Section className="bg-ink-900/40">
      <SectionHeading
        eyebrow="Why The Mahir Tech"
        title={
          <>
            Built for <span className="text-gradient-gold">trust and execution</span>
          </>
        }
        description="The reasons organisations choose us, and stay with us."
      />
      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((d) => (
          <RevealItem key={d.title}>
            <div className="card-surface h-full p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gradient-to-b from-gold-400/15 to-transparent text-gold-300">
                <Icon name={d.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-bone-50">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-300">{d.detail}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

/* ---------------- Featured work ---------------- */
export async function FeaturedWork() {
  const all = await getAllProjects();
  const featuredOnly = all.filter((p) => p.featured);
  const featured = (featuredOnly.length ? featuredOnly : all).slice(0, 6);
  return (
    <Section>
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Projects that <span className="text-gradient-gold">prove the point</span>
          </>
        }
        description="A snapshot of delivered work across AI, automation, web, marketplaces, and infrastructure."
      />
      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <RevealItem key={p.slug}>
            <ProjectCard project={p} />
          </RevealItem>
        ))}
      </RevealGroup>
      <div className="mt-10 flex justify-center">
        <Button href="/projects" variant="outline" size="md">
          View all projects
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}

/* ---------------- Process ---------------- */
export function Process() {
  return (
    <Section className="bg-ink-900/40">
      <SectionHeading
        eyebrow="How we work"
        title={
          <>
            A process built to <span className="text-gradient-gold">de-risk delivery</span>
          </>
        }
        description="Clear stages, reviewable milestones, and a hand-over that leaves you in control."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step, i) => (
          <Reveal key={step.step} delay={i * 0.08}>
            <div className="card-surface relative h-full p-6">
              <span className="font-display text-3xl font-bold text-gold-400/30">{step.step}</span>
              <h3 className="mt-3 text-base font-semibold text-bone-50">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-300">{step.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Tech stack + Industries ---------------- */
export function TechAndIndustries() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Technology stack"
            title={
              <>
                Modern tools, <span className="text-gradient-gold">chosen to fit</span>
              </>
            }
            description="We pick the right technology for the job, not the trendiest. Here's what we work with."
          />
          <RevealGroup className="mt-8 space-y-3">
            {techStack.map((group) => (
              <RevealItem key={group.category}>
                <div className="flex flex-col gap-2 border-b border-white/10 pb-3 sm:flex-row sm:items-center">
                  <span className="w-36 shrink-0 text-sm font-semibold text-gold-300">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-bone-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Industries"
            title={
              <>
                Sectors we <span className="text-gradient-gold">serve</span>
              </>
            }
            description="From public institutions to startups, we adapt to the standards each sector demands."
          />
          <RevealGroup className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {industries.slice(0, 8).map((ind) => (
              <RevealItem key={ind.name}>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                    <Icon name={ind.icon} className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-bone-100">{ind.name}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-bone-400">{ind.detail}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-6">
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 hover:text-gold-200"
            >
              See all industries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Testimonials ---------------- */
export async function Testimonials() {
  const testimonials = (await getTestimonials()).slice(0, 3);
  return (
    <Section className="bg-ink-900/40">
      <SectionHeading
        eyebrow="Client voices"
        title={
          <>
            What partners <span className="text-gradient-gold">say</span>
          </>
        }
        description="Feedback from teams we've worked with across defence, public utilities, education and private business."
      />
      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <RevealItem key={i}>
            <figure className="card-surface flex h-full flex-col p-6">
              <Quote className="h-7 w-7 text-gold-400/40" />
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
      <Reveal delay={0.1} className="mt-10">
        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-bone-400">
          {["Registered business", "Government-sector experience", "Enterprise delivery", "End-to-end support"].map(
            (item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-gold-400" />
                {item}
              </span>
            )
          )}
        </div>
      </Reveal>
    </Section>
  );
}
