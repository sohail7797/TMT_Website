import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { serviceSlugs } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/projects", priority: 0.9, freq: "weekly" },
    { path: "/industries", priority: 0.7, freq: "monthly" },
    { path: "/testimonials", priority: 0.6, freq: "monthly" },
    { path: "/careers", priority: 0.5, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "monthly" },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  const staticEntries = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const serviceEntries = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectEntries = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...projectEntries];
}
