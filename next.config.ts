import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old standalone routes now live inside the four core pages.
  async redirects() {
    return [
      { source: "/dining", destination: "/experiences#dining", permanent: true },
      { source: "/gallery", destination: "/#gallery", permanent: true },
      { source: "/location", destination: "/#location", permanent: true },
    ];
  },
};

export default nextConfig;
