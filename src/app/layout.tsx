import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { baseKeywords, organizationJsonLd, JsonLd } from "@/lib/seo";
import { SiteFrame } from "@/components/layout/site-frame";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Modular, techy wordmark font (HK Modular-style look) for the brand lockup.
const wordmark = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-wordmark",
  display: "swap",
  weight: ["500", "600", "700"],
});

const HOME_TITLE = `${siteConfig.name} | AI Agents, Automation, GIS & IT Solutions in Rawalpindi`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: HOME_TITLE,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: baseKeywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: HOME_TITLE,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: siteConfig.description,
  },
  category: "technology",
  // Add your Google Search Console code here once you verify ownership:
  // verification: { google: "your-google-site-verification-code" },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${wordmark.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink-950 text-bone-50">
        <JsonLd data={organizationJsonLd()} />
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
