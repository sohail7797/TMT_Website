import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/**
 * Brand mark. Uses the official artwork:
 *   public/brand/logo-mark.png, the square "M" figure mark
 *   public/brand/logo-full.png, the full horizontal lockup
 * The wordmark text is rendered in-app for crispness next to the mark.
 */
export function Logo({
  className,
  showWordmark = true,
  href = "/",
}: {
  className?: string;
  showWordmark?: boolean;
  href?: string | null;
}) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/brand/logo-mark.png"
        alt={`${siteConfig.name} logo`}
        width={44}
        height={44}
        priority
        unoptimized
        className="h-10 w-auto shrink-0"
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-bold tracking-tight text-bone-50">
            THE MAHIR TECH
          </span>
          <span className="text-[9.5px] font-medium uppercase tracking-[0.22em] text-gold-400/90">
            {siteConfig.tagline}
          </span>
        </span>
      )}
    </span>
  );

  if (href === null) return content;
  return (
    <Link href={href} aria-label={siteConfig.name} className="group">
      {content}
    </Link>
  );
}

/** Full horizontal lockup image, for large surfaces (footer, hero). */
export function LogoFull({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-full.png"
      alt={`${siteConfig.name}, ${siteConfig.tagline}`}
      width={420}
      height={140}
      unoptimized
      className={cn("h-auto w-auto", className)}
    />
  );
}
