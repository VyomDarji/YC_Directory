/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ⚠️ use only if needed, avoid in production
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ correct key is "ignoreDuringBuilds"
  },
  images: {
    domains: ['cdn.sanity.io'], // ✅ allows loading Sanity-hosted images
  },
  reactStrictMode: true,
  experimental: {
    serverActions: true, // ✅ experimental flag should be a boolean or an object depending on version
  },
};

module.exports = nextConfig;
