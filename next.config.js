/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static HTML export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lacliniquedelentreprise.fr',
      },
    ],
  },
  basePath: '/LCDLE', // Required for GitHub Pages
  assetPrefix: '/LCDLE/',
  trailingSlash: true,
  async redirects() {
    return [];
  },
}

module.exports = nextConfig 