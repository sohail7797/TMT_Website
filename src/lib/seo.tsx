import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Build consistent per-page metadata.
 * OG/Twitter images are provided automatically by the file-based
 * `opengraph-image.tsx` convention, so they're not set here.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const desc = description ?? siteConfig.description;
  const fullTitle =
    path === "/" ? `${siteConfig.name}, ${siteConfig.tagline}` : `${title} · ${siteConfig.name}`;

  return {
    title,
    description: desc,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description: desc,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}

/**
 * Keyword set: brand terms (to own name searches), plus high-intent,
 * lower-competition long-tail buyer phrases that convert better than
 * vague high-volume heads like "AI agency".
 */
export const baseKeywords = [
  // Brand (own #1 for name searches, worldwide)
  "The Mahir Tech",
  "Mahir Tech",
  "themahirtech",
  "themahirtech.com",
  "Mahir Tech agency",
  // High-intent buyer long-tail (AI & automation)
  "hire AI automation agency",
  "AI automation agency",
  "AI agent development company",
  "AI chatbot development services",
  "AI voice agent development",
  "build AI chatbot for website",
  "custom workflow automation services",
  "n8n automation expert",
  "AI automation for small business",
  "AI customer support automation",
  "business process automation services",
  // Web / app / GIS
  "affordable web app development agency",
  "custom web application development",
  "Shopify and WordPress development agency",
  "mobile app development agency",
  "GIS web application development",
  "hire GIS expert",
  // Infrastructure
  "server and NAS solutions",
  "IT infrastructure services",
  "computer lab setup",
  // Intent / conversion
  "get free project estimate",
  "AI development agency worldwide",
];

/** Organization + LocalBusiness JSON-LD for the site root. */
export function organizationJsonLd() {
  const c = siteConfig.contact;
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: ["Mahir Tech", "TMT", "The Mahir Tech Rawalpindi"],
    url: siteConfig.url,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    foundingDate: String(siteConfig.foundingYear),
    email: c.email,
    telephone: c.phone,
    logo: `${siteConfig.url}/brand/logo-mark.png`,
    image: `${siteConfig.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${c.addressLine1}, ${c.addressLine2}`,
      addressLocality: c.city,
      addressRegion: c.region,
      postalCode: c.postalCode,
      addressCountry: "PK",
    },
    geo: { "@type": "GeoCoordinates", latitude: c.geo.lat, longitude: c.geo.lng },
    areaServed: { "@type": "Place", name: "Worldwide" },
    knowsAbout: [
      "AI Agents",
      "AI Automation",
      "AI Chatbots",
      "Voice AI Agents",
      "Workflow Automation",
      "Web Development",
      "Mobile App Development",
      "GIS Solutions",
      "IT Infrastructure",
      "Server and NAS Solutions",
    ],
    sameAs: [
      siteConfig.social.linkedinCompany,
      siteConfig.social.linkedinFounder,
      siteConfig.social.linkedinPartner,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: c.phone,
      contactType: "sales",
      areaServed: "PK",
      availableLanguage: ["en", "ur"],
    },
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
