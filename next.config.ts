import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/public-web-app", // ime tvog repo-a
  images: {
    unoptimized: true, // jer GitHub Pages ne podržava Image Optimization
  },
};

export default nextConfig;
