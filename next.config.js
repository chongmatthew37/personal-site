/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/personal-site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://matthwchong.github.io/personal-site' : '',
}

module.exports = nextConfig 