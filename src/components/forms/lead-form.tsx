"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/site";
import { whatsappLink, cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more (min 10 characters)"),
  website: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

const inputBase =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-bone-100 placeholder:text-bone-500 transition-colors focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/40";

export function LeadForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    setServerError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setServerError(data.error || "Something went wrong. Please try WhatsApp.");
        setStatus("error");
        return;
      }
      setStatus("success");
      reset();
    } catch {
      setServerError("Network error. Please try WhatsApp.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-surface flex flex-col items-center gap-4 p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold text-bone-50">Thank you, message received</h3>
        <p className="max-w-sm text-sm text-bone-300">
          We&apos;ll get back to you shortly. Need a faster reply? Message us on WhatsApp.
        </p>
        <Button
          href={whatsappLink(siteConfig.contact.whatsapp, "Hello, I just submitted a project inquiry on your website.")}
          external
          variant="secondary"
          size="md"
        >
          <MessageCircle className="h-4 w-4" />
          Continue on WhatsApp
        </Button>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm text-bone-400 underline-offset-4 hover:text-gold-300 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-surface flex flex-col gap-4 p-6 sm:p-8" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input className={inputBase} placeholder="Your name" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input type="email" className={inputBase} placeholder="you@company.com" {...register("email")} />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone (optional)">
          <input className={inputBase} placeholder="03xx-xxxxxxx" {...register("phone")} />
        </Field>
        <Field label="Company (optional)">
          <input className={inputBase} placeholder="Organisation" {...register("company")} />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Service of interest">
          <select className={cn(inputBase, "appearance-none")} defaultValue="" {...register("service")}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title} className="bg-ink-900">
                {s.title}
              </option>
            ))}
            <option value="Other" className="bg-ink-900">
              Other / Not sure
            </option>
          </select>
        </Field>
        <Field label="Estimated budget (optional)">
          <select className={cn(inputBase, "appearance-none")} defaultValue="" {...register("budget")}>
            <option value="" disabled>
              Select a range
            </option>
            {["Under $1k", "$1k, $5k", "$5k, $15k", "$15k+", "Not sure yet"].map((b) => (
              <option key={b} value={b} className="bg-ink-900">
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project details" error={errors.message?.message}>
        <textarea
          rows={5}
          className={cn(inputBase, "resize-y")}
          placeholder="Tell us what you're trying to build or solve…"
          {...register("message")}
        />
      </Field>

      {serverError && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-300">
          {serverError}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" size="lg" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            "Send inquiry"
          )}
        </Button>
        <p className="text-xs text-bone-400">
          We typically reply within one business day. Your details stay private.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-bone-200">{label}</span>
      {children}
      {error && <span className="text-xs text-red-300">{error}</span>}
    </label>
  );
}
