import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/shared/section";
import { siteConfig, WHATSAPP_GREETING } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

/** A human, personal band: real face, direct message, clear ways to reach us. */
export function FounderNote() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gold-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/team/founder-tablet.png"
                  alt={`${siteConfig.team.projectManager}, ${siteConfig.name}`}
                  width={1024}
                  height={1536}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Talk to a real person</Eyebrow>
            <blockquote className="mt-5 text-2xl font-semibold leading-snug text-bone-50 sm:text-3xl">
              &ldquo;When you reach out, you talk to the people who actually build your
              solution. We listen first, then deliver something that{" "}
              <span className="text-gradient-gold">works in the real world</span>.&rdquo;
            </blockquote>
            <div className="mt-6">
              <p className="text-base font-semibold text-bone-50">{siteConfig.team.projectManager}</p>
              <p className="text-sm text-gold-300">Project Manager, {siteConfig.name}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappLink(siteConfig.contact.whatsapp, WHATSAPP_GREETING)}
                external
                variant="primary"
                size="lg"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Send an inquiry
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
