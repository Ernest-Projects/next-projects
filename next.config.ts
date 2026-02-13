import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com']
  },
  env: {
    FAKEAPI_URL: process.env.NEXT_API_URL
  }
};

export default nextConfig;
