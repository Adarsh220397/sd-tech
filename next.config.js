/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    
  },
  reactStrictMode:false,
  images: {
    domains:['images.ctfassets.net']
  },
  pageExtensions: ['.tsx', '.jsx']
}

module.exports =  nextConfig
