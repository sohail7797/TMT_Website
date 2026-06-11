import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig, WHATSAPP_GREETING } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export function CTA({
  title = "Let's build something that delivers",
  description = "Tell us about your project. We'll respond with a clear plan, timeline, and quote, no jargon, no pressure.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-br from-ink-850 to-ink-900 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-gold-500/10 blur-[100px]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl md:text-5xl">
              {title.includes("delivers") ? (
                <>
                  Let&apos;s build something that{" "}
                  <span className="text-gradient-gold">delivers</span>
                </>
              ) : (
                title
              )}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-bone-300 sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                Get a free quote
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={whatsappLink(siteConfig.contact.whatsapp, WHATSAPP_GREETING)}
                external
                variant="secondary"
                size="lg"
              >
                <MessageCircle className="h-4 w-4" />
                Message us now
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
