/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static HTML export
  images: {
    domains: ['lacliniquedelentreprise.fr'],
    unoptimized: true, // Required for static export
  },
  basePath: '/LCDLE', // Required for GitHub Pages
  async redirects() {
    return [];
  },
}

module.exports = nextConfig 