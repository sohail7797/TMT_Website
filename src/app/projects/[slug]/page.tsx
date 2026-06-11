import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Target, Lightbulb, TrendingUp, Layers, AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/cards/project-card";
import { CTA } from "@/components/sections/cta";
import { buildMetadata, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getAllProjects, getProjectBySlug, getProjectSlugs } from "@/lib/content-source";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return buildMetadata({ title: "Project", path: `/projects/${slug}` });
  return buildMetadata({
    title: project.title,
    path: `/projects/${slug}`,
    description: project.summary,
    keywords: [project.title, project.category, "case study", "The Mahir Tech"],
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const allProjects = await getAllProjects();
  const related = allProjects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 3);
  const fallbackRelated = related.length
    ? related
    : allProjects.filter((p) => p.slug !== slug).slice(0, 3);

  const blocks = [
    { icon: Target, title: "The challenge", body: project.challenge },
    { icon: Lightbulb, title: "Our solution", body: project.solution },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          about: project.category,
          description: project.summary,
          creator: { "@id": `${siteConfig.url}/#organization` },
          url: `${siteConfig.url}/projects/${slug}`,
        }}
      />
      <PageHeader
        eyebrow={project.category}
        breadcrumbs={[{ label: "Projects", href: "/projects" }]}
        title={project.title}
        description={project.summary}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-bone-300">
            Client: <span className="text-bone-100">{project.client}</span>
          </span>
          {project.year && (
            <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-bone-300">
              {project.year}
            </span>
          )}
        </div>
      </PageHeader>

      {project.placeholder && (
        <div className="container-page pt-8">
          <Reveal className="flex items-start gap-3 rounded-xl border border-gold-400/25 bg-gold-400/[0.06] px-4 py-3 text-sm text-gold-100">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
            <p>
              Some details on this case study are placeholders pending client verification and consent.
              Metrics shown as “—” will be finalised before publication.
            </p>
          </Reveal>
        </div>
      )}

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {blocks.map((b) => (
            <Reveal key={b.title}>
              <div className="card-surface h-full p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                  <b.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-bone-50">{b.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-bone-300">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="card-surface h-full p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-bone-50">Results & impact</h2>
              <ul className="mt-4 space-y-2.5">
                {project.results.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-bone-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-surface h-full p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/[0.06] text-gold-300">
                <Layers className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-bone-50">Technology</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-bone-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 hover:text-gold-200"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all projects
          </Link>
        </div>
      </Section>

      <Section className="bg-ink-900/40">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Related <span className="text-gradient-gold">work</span>
        </h2>
        <RevealGroup className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fallbackRelated.map((p) => (
            <RevealItem key={p.slug}>
              <ProjectCard project={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTA />
    </>
  );
}
