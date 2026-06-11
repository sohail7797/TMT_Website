import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { LegalProse } from "@/components/shared/legal-prose";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy-policy",
  description: "How The Mahir Tech collects, uses, and protects your personal information.",
});

const LAST_UPDATED = "June 2025";

export default function PrivacyPolicyPage() {
  const c = siteConfig.contact;
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: ${LAST_UPDATED}. This policy explains how ${siteConfig.legalName} handles your information.`}
      />
      <Section>
        <LegalProse>
          <p>
            {siteConfig.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
            respects your privacy and is committed to protecting your personal data. This Privacy
            Policy explains what information we collect through{" "}
            <strong>{siteConfig.domain}</strong> (the &ldquo;Website&rdquo;), how we use it, and the
            choices you have.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul>
            <li>
              <strong>Information you provide</strong> — such as your name, email, phone number,
              company, and project details when you submit a contact or quote form, or message us
              via WhatsApp or email.
            </li>
            <li>
              <strong>Usage data</strong> — basic technical information such as browser type, device,
              pages visited, and referring URLs, collected through cookies and analytics where
              enabled.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and provide quotes or proposals.</li>
            <li>To deliver, maintain, and improve our services and the Website.</li>
            <li>To communicate with you about projects, updates, and relevant offerings.</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>

          <h2>3. Legal Basis for Processing</h2>
          <p>
            We process personal data on the basis of your consent, the necessity to perform a
            contract or take steps at your request, our legitimate business interests, and
            compliance with legal obligations.
          </p>

          <h2>4. Sharing of Information</h2>
          <p>
            We do not sell your personal data. We may share information with trusted service
            providers (such as email delivery and hosting providers) who process data on our behalf
            under appropriate confidentiality obligations, and where required by law.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the purposes described
            in this policy, or as required by applicable law.
          </p>

          <h2>6. Cookies</h2>
          <p>
            The Website may use cookies and similar technologies for essential functionality and,
            where enabled, analytics. You can control cookies through your browser settings.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement reasonable technical and organisational measures to protect your
            information. However, no method of transmission over the internet is fully secure, and we
            cannot guarantee absolute security.
          </p>

          <h2>8. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access, correct, delete, or
            restrict the processing of your personal data, and to withdraw consent. To exercise these
            rights, contact us using the details below.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            The Website may contain links to third-party sites (such as LinkedIn or WhatsApp). We are
            not responsible for the privacy practices of those sites.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under 16, and we do not knowingly collect
            personal data from children.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated revision date.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href={`mailto:${c.email}`}>{c.email}</a>, by phone at {c.phoneDisplay}, or at{" "}
            {c.addressLine1}, {c.addressLine2}.
          </p>
        </LegalProse>
      </Section>
    </>
  );
}
