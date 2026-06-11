import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group card-surface relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30"
    >
      {/* Visual band (placeholder — replace with project imagery in Sanity) */}
      <div className="relative h-44 overflow-hidden border-b border-white/10 bg-gradient-to-br from-ink-800 to-ink-900">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-500/15 blur-2xl transition-transform duration-500 group-hover:scale-150" />
        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-gold-400/25 bg-ink-950/60 px-3 py-1 text-xs font-medium text-gold-200 backdrop-blur">
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-5 right-5">
          <p className="font-display text-2xl font-semibold text-bone-50/90">{project.title}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-wider text-bone-400">{project.client}</p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-bone-300">{project.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold-300">
          View case study
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
