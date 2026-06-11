import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import {
  Intro,
  ServicesOverview,
  WhyUs,
  FeaturedWork,
  Process,
  TechAndIndustries,
  Testimonials,
} from "@/components/sections/home-sections";
import { CTA } from "@/components/sections/cta";
import { JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/data/services";

function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${siteConfig.url}/services/${s.slug}`,
    })),
  };
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={servicesJsonLd()} />
      <Hero />
      <Stats />
      <Intro />
      <ServicesOverview />
      <WhyUs />
      <FeaturedWork />
      <Process />
      <TechAndIndustries />
      <Testimonials />
      <CTA />
    </>
  );
}
