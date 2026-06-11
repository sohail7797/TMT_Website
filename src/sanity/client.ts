import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, sanityEnabled } from "./env";

/**
 * Read-only Sanity client. Returns null when Sanity is not configured so the
 * content layer can fall back to local seed data.
 */
export const sanityClient = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;
