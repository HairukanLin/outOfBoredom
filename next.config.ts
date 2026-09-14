import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  distDir: "docs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
