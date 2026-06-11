import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5 py-32">
      <div className="pointer-events-none absolute inset-0 bg-spotlight" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="relative mx-auto max-w-lg text-center">
        <p className="font-display text-7xl font-bold text-gradient-gold sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-bone-300 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on
          track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            <Home className="h-4 w-4" />
            Back to home
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            <ArrowLeft className="h-4 w-4" />
            Browse services
          </Button>
        </div>
      </div>
    </section>
  );
}
