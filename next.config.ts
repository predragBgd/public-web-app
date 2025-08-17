import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/public-web-app", // ⚠ ne završavaj sa /
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@root": path.resolve(__dirname, ".."), // mapa tsconfig alias-a na root folder
    };
    return config;
  },
};

export default nextConfig;
