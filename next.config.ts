import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1035",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "api.rtholdings.uz",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
