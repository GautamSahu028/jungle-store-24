import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.pexels.com", "img.clerk.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gmqjsgftpaghjfcgpgfu.supabase.co",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
