/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos'],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
