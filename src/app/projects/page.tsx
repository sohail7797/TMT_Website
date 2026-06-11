import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/cards/project-card";
import { CTA } from "@/components/sections/cta";
import { getAllProjects } from "@/lib/content-source";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  path: "/projects",
  description:
    "Selected projects by The Mahir Tech across AI & automation, web, marketplaces, software, GIS, and IT infrastructure for government and private-sector clients.",
});

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Work that <span className="text-gradient-gold">delivers results</span>
          </>
        }
        description="A portfolio spanning AI agents and automation, web and marketplace platforms, enterprise software, and large infrastructure deployments. Some details are kept confidential or marked as placeholders pending client approval."
      />
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
