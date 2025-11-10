import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "dist",
  images: {
    domains: ['pbs.twimg.com'],
  },
};

export default nextConfig;
