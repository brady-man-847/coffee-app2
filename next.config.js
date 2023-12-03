/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  // basePath: '/coffee-app2',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/auth/login': { page: '/auth/login' },
      '/auth/sign-up': { page: '/auth/sign-up' },
      '/auth/sign-up/check-uchef': { page: '/auth/sign-up/check-uchef' },
      '/menu': { page: '/menu' },
      '/room': { page: '/room' },
      '/room/[roomSn]': { page: '/room/[roomSn]' },
      '/order': { page: '/order' },
      '/payment': { page: '/payment' },
      '/setting': { page: '/setting' },
    };
  },
};

module.exports = nextConfig;
