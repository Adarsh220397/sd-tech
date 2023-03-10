/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    
  },
  reactStrictMode:false,
  images: {
    domains:['images.ctfassets.net']
  }
}

module.exports =  nextConfig
