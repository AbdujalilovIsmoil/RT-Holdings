import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  reactStrictMode: true,

  images: {
    domains: ["api.rtholdings.uz"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.rtholdings.uz",
        pathname: "/**",
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
