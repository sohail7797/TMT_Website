/**
 * THE MAHIR TECH — central site configuration.
 * Single source of truth for brand, contact, navigation and SEO defaults.
 * Edit values here; they propagate across the whole site.
 */

export const siteConfig = {
  name: "The Mahir Tech",
  shortName: "Mahir Tech",
  legalName: "The Mahir Tech",
  tagline: "Technology That Delivers",
  description:
    "The Mahir Tech is a Rawalpindi-based technology partner delivering AI automation, AI agents, GIS solutions, enterprise software, web & mobile apps, and IT infrastructure for government and private-sector organizations.",
  // Used for canonical URLs, sitemap, OG. Override with NEXT_PUBLIC_SITE_URL in production.
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://themahirtech.com",
  domain: "themahirtech.com",
  locale: "en_US",
  foundingYear: 2019,

  contact: {
    // WhatsApp / primary mobile (E.164 digits only for wa.me links)
    whatsapp: "923320006282",
    whatsappDisplay: "0332-0006282",
    phone: "+92517066702",
    phoneDisplay: "051-7066702",
    email: "info@themahirtech.com",
    salesEmail: "sales@themahirtech.com",
    addressLine1: "3rd Floor, Abbas Plaza, Computer Market",
    addressLine2: "Street #1, Saddar, Rawalpindi",
    city: "Rawalpindi",
    region: "Punjab",
    country: "Pakistan",
    postalCode: "46000",
    geo: { lat: 33.5973, lng: 73.0479 },
    hours: "Mon – Sat · 10:00 AM – 8:00 PM (PKT)",
  },

  social: {
    linkedinCompany: "https://www.linkedin.com/company/the-mahir-tech",
    linkedinFounder: "https://www.linkedin.com/in/muhammadsohail0/",
    linkedinPartner: "https://www.linkedin.com/in/muhammad-adnan-zia/",
  },

  team: {
    projectManager: "M. Sohail",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Services",
    links: [
      { label: "AI Solutions", href: "/services/ai-solutions" },
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "GIS Solutions", href: "/services/gis-solutions" },
      { label: "Software Development", href: "/services/software-development" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "IT Infrastructure", href: "/services/it-infrastructure" },
      { label: "Hardware Supply", href: "/services/hardware-supply" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Industries", href: "/industries" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

/** Default WhatsApp greeting used by the floating button & CTAs. */
export const WHATSAPP_GREETING =
  "Hello The Mahir Tech 👋 — I'd like to discuss a project.";
