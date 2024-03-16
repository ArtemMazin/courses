/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'old-images.hb.ru-msk.vkcs.cloud',
      },
      {
        protocol: 'https',
        hostname: 'old-images.hb.ru-msk.vkcs.cloudhttp',
      },
    ],
  },
};

export default nextConfig;
