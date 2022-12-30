/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["fiverr-res.cloudinary.com", 'cdn-icons-png.flaticon.com', 'img.icons8.com']

  },
}

module.exports = nextConfig
