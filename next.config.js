/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fiverr-res.cloudinary.com"],

  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
