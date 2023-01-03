/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  fontLoaders: [
    { loader: "@next/font/google", },
  ],
  swcMinify: true,
  images: {
    domains: ["fiverr-res.cloudinary.com", 'cdn-icons-png.flaticon.com', 'img.icons8.com', 'media.licdn.com']

  },
}

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});

module.exports = nextConfig
