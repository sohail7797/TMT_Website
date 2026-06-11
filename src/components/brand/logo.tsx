import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/**
 * Brand mark. Uses an inline gold "M" monogram so it renders crisp at any size
 * with no asset dependency. To use the official artwork instead, drop
 * `public/logo.svg` (or .png) and swap the <Monogram/> for an <Image/>.
 */
function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tmt-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4d77e" />
          <stop offset="45%" stopColor="#e6b43c" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="45" height="45" rx="11" fill="#0a0a0b" stroke="url(#tmt-gold)" strokeWidth="1.5" />
      <path
        d="M11 35V14l9 12 9-12v21"
        fill="none"
        stroke="url(#tmt-gold)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M33 35V20" stroke="url(#tmt-gold)" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="33" cy="14.5" r="2.2" fill="url(#tmt-gold)" />
    </svg>
  );
}

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
      <Monogram className="h-9 w-9 shrink-0" />
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
