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
  rules: { 
    "@next/next/no-html-link-for-pages": "error",
  },
}

module.exports = nextConfig
