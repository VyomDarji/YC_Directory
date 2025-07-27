/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ⚠️ use only if needed, avoid in production
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  reactStrictMode: true,
  experimental: {
    serverActions: {}, // ✅ FIXED: was "true"
  },
};

module.exports = nextConfig;
