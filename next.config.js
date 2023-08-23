/** @type {import('next').NextConfig} */
const nextConfig = {
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
