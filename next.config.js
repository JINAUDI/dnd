/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
    unoptimized: false,
  },
  reactStrictMode: true,
}

module.exports = nextConfig

