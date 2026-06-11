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
  const toEmail = process.env.LEAD_TO_EMAIL || siteConfig.contact.salesEmail;
  const fromEmail = process.env.LEAD_FROM_EMAIL || "leads@themahirtech.com";
  const apiKey = process.env.RESEND_API_KEY;

  const summary = [
    `New lead from ${siteConfig.domain}`,
    "",
    `Name:    ${d.name}`,
    `Email:   ${d.email}`,
    `Phone:   ${d.phone || "—"}`,
    `Company: ${d.company || "—"}`,
    `Service: ${d.service || "—"}`,
    `Budget:  ${d.budget || "—"}`,
    "",
    "Message:",
    d.message,
  ].join("\n");

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: `The Mahir Tech Leads <${fromEmail}>`,
        to: [toEmail],
        replyTo: d.email,
        subject: `New project inquiry — ${d.name}${d.company ? ` (${d.company})` : ""}`,
        text: summary,
      });
      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { ok: false, error: "Could not send right now. Please WhatsApp us instead." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("Lead send failed:", err);
      return NextResponse.json(
        { ok: false, error: "Could not send right now. Please WhatsApp us instead." },
        { status: 502 }
      );
    }
  } else {
    // No email provider configured yet — log so the deploy still works.
    console.warn("[lead] RESEND_API_KEY not set. Lead captured in logs only:\n" + summary);
  }

  return NextResponse.json({ ok: true });
}
