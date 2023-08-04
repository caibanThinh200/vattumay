/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.yhdfa.vn',
          port: '',
        },
      ],
  },
};

module.exports = nextConfig;
