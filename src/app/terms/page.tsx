import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { LegalProse } from "@/components/shared/legal-prose";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  path: "/terms",
  description: "The terms governing your use of the The Mahir Tech website and services.",
});

const LAST_UPDATED = "June 2025";

export default function TermsPage() {
  const c = siteConfig.contact;
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`Last updated: ${LAST_UPDATED}. Please read these terms carefully before using our website or engaging our services.`}
      />
      <Section>
        <LegalProse>
          <p>
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the
            website <strong>{siteConfig.domain}</strong> and the services provided by{" "}
            {siteConfig.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By using
            our Website or engaging our services, you agree to these Terms.
          </p>

          <h2>1. Services</h2>
          <p>
            We provide technology services including AI solutions, AI automation, GIS, software and
            web development, mobile applications, IT infrastructure, and hardware supply. The specific
            scope, deliverables, timelines, and fees for any engagement will be set out in a separate
            proposal, quotation, or agreement (&ldquo;Project Agreement&rdquo;), which takes
            precedence over these Terms where they conflict.
          </p>

          <h2>2. Quotations &amp; Proposals</h2>
          <p>
            Quotations and proposals are valid for the period stated and are estimates based on the
            information available at the time. Changes to scope may affect pricing and timelines.
          </p>

          <h2>3. Client Responsibilities</h2>
          <ul>
            <li>Provide accurate information, materials, and timely feedback.</li>
            <li>Ensure you have the rights to any content or data you provide to us.</li>
            <li>Designate a point of contact for approvals and decisions.</li>
          </ul>

          <h2>4. Payment</h2>
          <p>
            Payment terms are defined in the applicable Project Agreement. Unless stated otherwise,
            invoices are due within the agreed period. We reserve the right to pause work on overdue
            accounts.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            Upon full payment, ownership of the final, custom deliverables created specifically for
            you transfers to you, except for third-party components, open-source software, and our
            pre-existing tools, libraries, and know-how, which remain owned by their respective
            owners or by us and are licensed to you as needed to use the deliverables.
          </p>

          <h2>6. Confidentiality</h2>
          <p>
            Each party agrees to keep the other&apos;s confidential information secure and to use it
            only for the purpose of the engagement.
          </p>

          <h2>7. Warranties &amp; Disclaimers</h2>
          <p>
            We perform our services with reasonable skill and care. Except as expressly stated, the
            Website and services are provided &ldquo;as is&rdquo; without warranties of any kind,
            whether express or implied, to the maximum extent permitted by law.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, our total liability arising out of or in
            connection with an engagement shall not exceed the fees paid for that engagement. We are
            not liable for indirect, incidental, or consequential damages.
          </p>

          <h2>9. Third-Party Services</h2>
          <p>
            Our solutions may rely on third-party platforms, APIs, or hardware. We are not
            responsible for the availability, performance, or terms of third-party services.
          </p>

          <h2>10. Termination</h2>
          <p>
            Either party may terminate an engagement as set out in the Project Agreement. On
            termination, you agree to pay for work performed up to the termination date.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Islamic Republic of Pakistan, and any
            disputes shall be subject to the jurisdiction of the courts of Rawalpindi/Islamabad.
          </p>

          <h2>12. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the Website after changes
            constitutes acceptance of the revised Terms.
          </p>

          <h2>13. Contact</h2>
          <p>
            Questions about these Terms? Contact us at <a href={`mailto:${c.email}`}>{c.email}</a> or{" "}
            {c.phoneDisplay}.
          </p>
        </LegalProse>
      </Section>
    </>
  );
}
