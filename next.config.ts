import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://picsum.photos/460/370"),
      new URL("https://test.repid.uz/media/media/**"),
    ],
  },
};

export default nextConfig;
