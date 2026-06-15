import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/cards/project-card";
import { CTA } from "@/components/sections/cta";
import { getAllProjects } from "@/lib/content-source";
import { projectCategories } from "@/lib/data/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projects & Case Studies",
  path: "/projects",
  description:
    "See our work: AI agents and automation, web and marketplace platforms, enterprise software, GIS and IT infrastructure for global, government and private-sector clients.",
  keywords: ["AI automation case studies", "AI agency portfolio", "automation projects", "The Mahir Tech projects"],
});

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  // Count per category for the overview band (skip empty categories).
  const counts = projectCategories
    .map((cat) => ({ cat, n: projects.filter((p) => p.category === cat).length }))
    .filter((c) => c.n > 0);

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Work that <span className="text-gradient-gold">delivers results</span>
          </>
        }
        description="A portfolio spanning AI agents and automation, web and marketplace platforms, enterprise software, and large infrastructure deployments for government, defence and private-sector clients. Some client names are kept confidential by agreement."
      />

      {/* Category overview band */}
      <div className="border-b border-white/10 bg-ink-900/40">
        <div className="container-page py-8">
          <Reveal className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {counts.map((c) => (
              <span
                key={c.cat}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-bone-300"
              >
                <span className="font-display font-semibold text-gold-300">{c.n}</span>
                {c.cat}
              </span>
            ))}
          </Reveal>
        </div>
      </div>

      <Section>
        <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <RevealItem key={p.slug}>
              <ProjectCard project={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
      <CTA title="Have a project like these in mind?" />
    </>
  );
}
