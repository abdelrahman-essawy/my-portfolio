/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["fiverr-res.cloudinary.com"],

  },
}

module.exports = nextConfig
