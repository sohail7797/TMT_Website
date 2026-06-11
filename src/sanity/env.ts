/**
 * Sanity environment. The site is designed to work WITHOUT Sanity configured
 * (it falls back to local seed content). Set these env vars to enable the CMS:
 *
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET        (default: "production")
 *   NEXT_PUBLIC_SANITY_API_VERSION    (default below)
 */

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

/** True only when a project ID is configured. Gate all Sanity usage on this. */
export const sanityEnabled = projectId.length > 0;
