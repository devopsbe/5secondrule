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
};

export default nextConfig;
