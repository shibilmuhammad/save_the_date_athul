import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    // Local images from /public are always allowed — no extra config needed
  },
};

export default nextConfig;
