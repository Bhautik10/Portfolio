import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Portfolio',  // Add this line
  assetPrefix: '/Portfolio',  // Add this line too
  images: {
    unoptimized: true  // Required for static export
  }
}

module.exports = nextConfig