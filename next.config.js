const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/main/:path*',
        destination: 'https://bepserver.duckdns.org/main/:path*',
      },
      {
        source: '/api/main',
        destination: 'https://bepserver.duckdns.org/main',
      },
    ];
  },
};

module.exports = nextConfig;
