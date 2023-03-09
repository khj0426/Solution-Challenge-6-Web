/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        destination: 'https://bepserver.duckdns.org/main/:path*',
        source: '/api/main/:path*',
        
        destination: 'https://bepserver.duckdns.org/main',
        source: '/api/main,
      },
    ];
  },
};

module.exports = nextConfig;
