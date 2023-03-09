/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: 'api/main',
        destination: 'https://bepserver.duckdns.org/main',
      },

      {
        source: 'api/main/:path*',
        destination: 'https://bepserver.duckdns.org/main/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
