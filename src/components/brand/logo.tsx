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
        width={352}
        height={624}
        priority
        unoptimized
        className="h-10 w-auto shrink-0"
      />
      {showWordmark && (
        <span className="flex flex-col items-start gap-[3px] leading-none">
          <span className="font-wordmark text-[16px] font-bold uppercase tracking-[0.08em] text-gradient-gold">
            THE MAHIR TECH
          </span>
          <span className="rounded-[4px] bg-gradient-to-b from-gold-300 to-gold-500 px-1.5 py-[2.5px] font-wordmark text-[7px] font-semibold uppercase leading-none tracking-[0.16em] text-ink-950 shadow-[0_2px_8px_-2px_rgba(230,180,60,0.4)]">
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
      width={1080}
      height={1080}
      unoptimized
      className={cn("h-auto w-auto", className)}
    />
  );
}
