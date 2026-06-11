import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/icon";
import type { Service } from "@/lib/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group card-surface relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/20 bg-gradient-to-b from-gold-400/15 to-transparent text-gold-300">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>

      <h3 className="relative mt-5 flex items-center gap-1.5 text-lg font-semibold text-bone-50">
        {service.title}
        <ArrowUpRight className="h-4 w-4 -translate-y-0.5 text-gold-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-bone-300">{service.summary}</p>

      <ul className="relative mt-4 flex flex-wrap gap-1.5">
        {service.highlights.slice(0, 3).map((h) => (
          <li
            key={h}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-bone-400"
          >
            {h}
          </li>
        ))}
      </ul>
    </Link>
  );
}
