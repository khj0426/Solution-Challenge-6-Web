/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['*'],
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/main',
        destination: 'https://bepserver.duckdns.org/main',
      },

      {
        source: '/api/main/:path*',
        destination: 'https://bepserver.duckdns.org/main/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
