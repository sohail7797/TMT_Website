"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav, siteConfig, WHATSAPP_GREETING, footerNav } from "@/lib/site";
import { whatsappLink, cn } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-18">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-gold-300"
                  : "text-bone-300 hover:text-bone-50"
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href={whatsappLink(siteConfig.contact.whatsapp, WHATSAPP_GREETING)}
            external
            variant="secondary"
            size="sm"
          >
            WhatsApp
          </Button>
          <Button href="/contact" variant="primary" size="sm">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-bone-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-page flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto py-5">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-gold-400/10 text-gold-200"
                      : "text-bone-200 hover:bg-white/5"
                  )}
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Link>
              ))}

              <div className="mt-3 border-t border-white/10 pt-4">
                <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-widest text-bone-400">
                  Services
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {footerNav[0].links.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="rounded-lg px-4 py-2 text-sm text-bone-300 hover:bg-white/5 hover:text-bone-50"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Get a Quote
                </Button>
                <Button
                  href={whatsappLink(siteConfig.contact.whatsapp, WHATSAPP_GREETING)}
                  external
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
