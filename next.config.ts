import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://picsum.photos/460/370")],
  },
};

export default nextConfig;
