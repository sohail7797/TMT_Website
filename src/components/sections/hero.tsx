"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/motion/rotating-text";
import { siteConfig, WHATSAPP_GREETING } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

const rotatingServices = [
  "AI Agent",
  "AI Automation",
  "GIS",
  "Software",
  "Web",
  "Mobile App",
  "Cloud",
  "IT Infrastructure",
];

const chips = ["AI Agents", "Automation", "GIS Systems", "Enterprise Software", "IT Infrastructure"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36">
      {/* Layered backgrounds */}
      <div className="pointer-events-none absolute inset-0 bg-spotlight" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Text column */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-gold-200"
            >
              <Sparkles className="h-3.5 w-3.5" />
              AI · GIS · Software · Infrastructure
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.06 }}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-6xl"
            >
              We provide{" "}
              <RotatingText words={rotatingServices} className="text-gradient-gold" />{" "}
              <br className="hidden sm:block" />
              solutions that deliver
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.14 }}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-bone-300 sm:text-lg"
            >
              From AI agents and automation to GIS, enterprise software and IT infrastructure,
              The Mahir Tech designs, builds, deploys and supports complete technology ecosystems
              for government and private-sector organisations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.22 }}
              className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start"
            >
              <Button href="/contact" variant="primary" size="lg">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={whatsappLink(siteConfig.contact.whatsapp, WHATSAPP_GREETING)}
                external
                variant="secondary"
                size="lg"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </motion.div>

            {/* Mobile / tablet image (portrait) — hidden on large screens */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease, delay: 0.28 }}
              className="relative mt-10 w-full max-w-xs lg:hidden"
            >
              <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gold-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/team/founder-portrait.png"
                  alt={`${siteConfig.name} team`}
                  width={1024}
                  height={1536}
                  priority
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Capability chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.34 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start"
            >
              {chips.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.4 + i * 0.07 }}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-bone-300"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Desktop image (landscape) — hidden on small screens */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gold-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-elevated">
              <Image
                src="/team/hero-banner.png"
                alt={`${siteConfig.name}, technology that delivers`}
                width={1536}
                height={1024}
                priority
                unoptimized
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              {/* Floating accent badge */}
              <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-ink-950/70 px-4 py-3 backdrop-blur">
                <p className="text-sm font-semibold text-bone-50">Technology that delivers</p>
                <p className="text-xs text-gold-300">AI-first, full-stack execution</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
