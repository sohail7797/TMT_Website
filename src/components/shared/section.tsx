import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/[0.06] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-200",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-bone-300 sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

/** Standard vertical-rhythm section wrapper. */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}
