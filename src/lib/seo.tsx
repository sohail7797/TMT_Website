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

/** Default keyword set used on the home page and as a base. */
export const baseKeywords = [
  // Brand (rank #1 for name searches)
  "The Mahir Tech",
  "Mahir Tech",
  "Mahir Tech Rawalpindi",
  "Mahir Tech Pakistan",
  "Mahir Tech AI",
  "themahirtech",
  "themahirtech.com",
  "TMT technology",
  // Services
  "AI agents Pakistan",
  "AI automation company Rawalpindi",
  "AI automation Pakistan",
  "AI agency Pakistan",
  "AI chatbot development",
  "voice AI agents",
  "AI calling agent",
  "workflow automation n8n",
  "GIS solutions Pakistan",
  "enterprise software development Rawalpindi",
  "web development company Pakistan",
  "mobile app development Rawalpindi",
  "IT infrastructure Pakistan",
  "hardware supply Rawalpindi",
  "servers and NAS Pakistan",
  "computer lab setup Pakistan",
  "government IT projects Pakistan",
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
    areaServed: ["Pakistan", "Worldwide"],
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
