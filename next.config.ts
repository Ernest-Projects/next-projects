import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
     remotePatterns: [
      {
        protocol: "https",
        hostname: 'fakestoreapi.com',
        pathname: '**'
      },
    ],
  },
  env: {
    FAKEAPI_URL: process.env.NEXT_API_URL
  }
};

export default nextConfig;
