/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  // basePath: '/coffee-app2',
  // assetPrefix: 'https://brady-man-847.github.io/coffee-app2/',
  assetPrefix: '.',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/menu': { page: '/menu' },
      '/game': { page: '/game' },
      '/order': { page: '/order' },
      '/payment': { page: '/payment' },
      '/setting': { page: '/setting' },
    };
  },
};

module.exports = nextConfig;
