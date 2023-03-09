const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    const apiPath = 'https://bepserver.duckdns.org/main';
    const rewrites = [
      {
        source: '/api/main/:path*',
        destination: `${apiPath}/:path*`,
      },
      {
        source: '/api/main',
        destination: apiPath,
      },
    ];
    return rewrites;
  },
};

module.exports = nextConfig;
