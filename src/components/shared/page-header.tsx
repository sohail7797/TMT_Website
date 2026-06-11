import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: { label: string; href: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-spotlight" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="container-page relative">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-bone-400">
            <Link href="/" className="hover:text-gold-300">Home</Link>
            {breadcrumbs.map((b) => (
              <span key={b.href} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                <Link href={b.href} className="hover:text-gold-300">{b.label}</Link>
              </span>
            ))}
          </nav>
        )}
        <Reveal className="max-w-3xl">
          {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
          <h1 className="text-balance text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-bone-300 sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
