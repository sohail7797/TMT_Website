"use client";

/**
 * Sanity Studio configuration — mounted at /studio.
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID (and optionally _DATASET) to be set.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemas";

export default defineConfig({
  name: "the-mahir-tech",
  title: "The Mahir Tech — Content",
  basePath: "/studio",
  projectId: projectId || "missing-project-id",
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
