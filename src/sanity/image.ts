import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { dataset, projectId, sanityEnabled } from "./env";

const builder = sanityEnabled ? imageUrlBuilder({ projectId, dataset }) : null;

/** Build an optimized image URL from a Sanity image ref. Returns "" if unset. */
export function urlForImage(source?: SanityImageSource | null) {
  if (!builder || !source) return "";
  return builder.image(source).auto("format").fit("max").url();
}
