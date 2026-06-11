import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces a minimal, self-contained server build for Docker / Coolify.
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;
