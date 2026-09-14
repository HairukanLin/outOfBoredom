import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  distDir: "docs",
  basePath: "/outOfBoredom",
  assetPrefix: "/outOfBoredom",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
