/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  reactStrictMode: true,
  // ⬇️ paste the snippet here
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
