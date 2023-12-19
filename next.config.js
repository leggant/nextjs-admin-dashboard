/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  poweredByHeader: false,
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
    tsconfigPath: 'tsconfig.json',
  },
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
