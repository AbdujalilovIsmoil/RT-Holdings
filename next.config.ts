import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://picsum.photos/460/370"),
      new URL("https://test.repid.uz/media/media/**"),
    ],
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
};

export default nextConfig;
