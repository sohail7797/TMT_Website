"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, WHATSAPP_GREETING } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

const rotating = ["AI Agents", "Automation", "GIS Systems", "Enterprise Software", "IT Infrastructure"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Layered backgrounds */}
      <div className="pointer-events-none absolute inset-0 bg-spotlight" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="container-page relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-200"
          >
            <Sparkles className="h-3.5 w-3.5" />
            AI · GIS · Software · Infrastructure
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.06 }}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-[4.25rem]"
          >
            Your complete{" "}
            <span className="text-gradient-gold">technology partner</span> for what comes next
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.14 }}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-bone-300 sm:text-lg"
          >
            We design, build, deploy, and support complete technology ecosystems — from{" "}
            <span className="text-bone-100">AI agents and automation</span> to GIS, enterprise
            software, and IT infrastructure — for government and private-sector organisations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.22 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
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

          {/* Rotating capability chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.34 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-2.5"
          >
            {rotating.map((item, i) => (
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
      </div>
    </section>
  );
}
