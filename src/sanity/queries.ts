import { groq } from "next-sanity";

export const allProjectsQuery = groq`
  *[_type == "project"] | order(coalesce(order, 999) asc, _createdAt desc){
    "slug": slug.current,
    title, category, client, year, summary, challenge, solution,
    results, stack, featured,
    "coverImage": coverImage.asset->url
  }
`;

export const projectSlugsQuery = groq`*[_type == "project" && defined(slug.current)].slug.current`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0]{
    "slug": slug.current,
    title, category, client, year, summary, challenge, solution,
    results, stack, featured,
    "coverImage": coverImage.asset->url,
    "gallery": gallery[].asset->url
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(coalesce(order, 999) asc, _createdAt desc){
    quote, name, role, company, rating, featured,
    "avatar": avatar.asset->url
  }
`;
