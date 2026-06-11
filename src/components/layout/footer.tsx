import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
import { footerNav, siteConfig, WHATSAPP_GREETING } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";

export function Footer() {
  const c = siteConfig.contact;
  const year = 2025; // bumped at build; avoids hydration drift

  return (
    <footer className="relative mt-auto border-t border-white/10 bg-ink-900">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-bone-300">
              A complete technology execution partner, AI, software, GIS, and
              infrastructure, for government and private-sector organisations.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-bone-300">
              <a
                href={whatsappLink(c.whatsapp, WHATSAPP_GREETING)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-gold-300"
              >
                <Phone className="h-4 w-4 text-gold-400" />
                {c.whatsappDisplay} · {c.phoneDisplay}
              </a>
              <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2.5 hover:text-gold-300">
                <Mail className="h-4 w-4 text-gold-400" />
                {c.email}
              </a>
              <span className="inline-flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>
                  {c.addressLine1}
                  <br />
                  {c.addressLine2}
                </span>
              </span>
              <span className="inline-flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-gold-400" />
                {c.hours}
              </span>
            </div>
            <div className="flex gap-3 pt-1">
              <a
                href={siteConfig.social.linkedinFounder}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-bone-200 transition-colors hover:border-gold-400/50 hover:text-gold-300"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-bone-100">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-bone-300 transition-colors hover:text-gold-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-bone-400 sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span className="text-gradient-gold font-medium">{siteConfig.tagline}</span>
            <span className="text-bone-500">· {siteConfig.contact.city}, {siteConfig.contact.country}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
