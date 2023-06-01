/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
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
        source: '/main/donations',
        destination:
          'https://bep-server-skr6jumqta-uc.a.run.app/main/donations',
      },

      {
        source: '/main/donations/:path*',
        destination:
          'https://bep-server-skr6jumqta-uc.a.run.app/main/donations/:path*',
      },
      {
        source: '/user-point',
        destination: 'https://bep-server-skr6jumqta-uc.a.run.app/user-point',
      },
    ];
  },
};

module.exports = nextConfig;
