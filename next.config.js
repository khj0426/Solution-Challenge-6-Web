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
        destination: 'https://bep-server-skr6jumqta-uc.a.run.app/main',
      },

      {
        source: '/api/main/:path*',
        destination: 'https://bep-server-skr6jumqta-uc.a.run.app/main/:path*',
      },

      {
        source: '/main/donation/categories',
        destination:
          'https://bep-server-skr6jumqta-uc.a.run.app/main/donations/categories',
      },
    ];
  },
};

module.exports = nextConfig;
