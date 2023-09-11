/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  // i18n,
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.yhdfa.vn',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'vattumay.000webhostapp.com'
        }
      ],
  },
};

module.exports = nextConfig;
