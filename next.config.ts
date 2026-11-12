import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes plain HTML/CSS/JS to ./out
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    // This folder is the project root. Without this, Turbopack walks up, finds
    // the stray package-lock.json in the parent, and picks that instead.
    root: path.resolve(__dirname),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
