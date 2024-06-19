/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      }
    ] // Додайте ваш хост тут
  },
};

export default nextConfig;



