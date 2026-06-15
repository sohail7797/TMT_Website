/**
 * Unified content source. Reads from Sanity when configured, otherwise falls
 * back to local seed data, so the site always works, even before the CMS is
 * populated. Pages should import from here, not from the raw data files.
 */
import { sanityClient } from "@/sanity/client";
import {
  allProjectsQuery,
  projectBySlugQuery,
  projectSlugsQuery,
  testimonialsQuery,
} from "@/sanity/queries";
import { projects as seedProjects, type Project } from "@/lib/data/projects";
import { testimonials as seedTestimonials } from "@/lib/data/content";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  rating?: number;
  featured?: boolean;
};

const REVALIDATE = 60; // seconds, ISR for CMS content

export async function getAllProjects(): Promise<Project[]> {
  if (!sanityClient) return seedProjects;
  try {
    const data = await sanityClient.fetch<Project[]>(
      allProjectsQuery,
      {},
      { next: { revalidate: REVALIDATE } }
    );
    return data?.length ? data : seedProjects;
  } catch (err) {
    console.error("[content-source] projects fetch failed, using seed:", err);
    return seedProjects;
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  if (!sanityClient) return seedProjects.map((p) => p.slug);
  try {
    const slugs = await sanityClient.fetch<string[]>(projectSlugsQuery);
    return slugs?.length ? slugs : seedProjects.map((p) => p.slug);
  } catch {
    return seedProjects.map((p) => p.slug);
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  if (!sanityClient) return seedProjects.find((p) => p.slug === slug);
  try {
    const data = await sanityClient.fetch<Project | null>(
      projectBySlugQuery,
      { slug },
      { next: { revalidate: REVALIDATE } }
    );
    return data ?? seedProjects.find((p) => p.slug === slug);
  } catch {
    return seedProjects.find((p) => p.slug === slug);
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!sanityClient) return seedTestimonials;
  try {
    const data = await sanityClient.fetch<Testimonial[]>(
      testimonialsQuery,
      {},
      { next: { revalidate: REVALIDATE } }
    );
    return data?.length ? data : seedTestimonials;
  } catch {
    return seedTestimonials;
  }
}
