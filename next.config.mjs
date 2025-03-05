/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow unoptimized images (reduces 404 errors with placeholder.svg)
    unoptimized: process.env.NODE_ENV === 'development',
    // Add remote domains if needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  // Disable ESLint during production builds
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
