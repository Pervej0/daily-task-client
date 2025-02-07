import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    BACK_END_URL: process.env.BACK_END_URL,
  },
};

export default nextConfig;
