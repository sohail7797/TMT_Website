/**
 * Embedded Sanity Studio at /studio.
 * Note: requires Sanity env vars; otherwise the studio will prompt for a valid
 * project. The public site works regardless (it falls back to seed content).
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
