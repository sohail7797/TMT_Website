import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

const leadSchema = z.object({
  name: z.string().min(2, "Name is too short").max(100),
  email: z.string().email("Invalid email"),
  phone: z.string().max(40).optional().or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.string().max(80).optional().or(z.literal("")),
  budget: z.string().max(60).optional().or(z.literal("")),
  message: z.string().min(10, "Please add a little more detail").max(4000),
  // Honeypot — must stay empty.
  website: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Validation failed." },
      { status: 422 }
    );
  }

  // Honeypot hit → pretend success, drop silently.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const d = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  // Recipient. Defaults to the official inbox (the Resend account owner).
  const toEmail = process.env.LEAD_TO_EMAIL || "mahirtechofficial@gmail.com";
  // Sender. onboarding@resend.dev works before domain verification; once the
  // domain is verified, set LEAD_FROM_EMAIL to e.g. "The Mahir Tech <leads@themahirtech.com>".
  const fromEmail = process.env.LEAD_FROM_EMAIL || "The Mahir Tech <onboarding@resend.dev>";
  // Optional CC (backup inbox). Only works AFTER a domain is verified in Resend.
  const ccEmail = process.env.LEAD_CC_EMAIL;

  const summary = [
    `New lead from ${siteConfig.domain}`,
    "",
    `Name:    ${d.name}`,
    `Email:   ${d.email}`,
    `Phone:   ${d.phone || "Not provided"}`,
    `Company: ${d.company || "Not provided"}`,
    `Service: ${d.service || "Not provided"}`,
    `Budget:  ${d.budget || "Not provided"}`,
    "",
    "Message:",
    d.message,
  ].join("\n");

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        ...(ccEmail ? { cc: [ccEmail] } : {}),
        replyTo: d.email,
        subject: `New project inquiry from ${d.name}${d.company ? ` (${d.company})` : ""}`,
        text: summary,
      });
      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { ok: false, error: "Could not send right now. Please message us on WhatsApp." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("Lead send failed:", err);
      return NextResponse.json(
        { ok: false, error: "Could not send right now. Please message us on WhatsApp." },
        { status: 502 }
      );
    }
  } else {
    // No email provider configured yet, so log it (the deploy still works).
    console.warn("[lead] RESEND_API_KEY not set. Lead captured in logs only:\n" + summary);
  }

  return NextResponse.json({ ok: true });
}
