/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_SERVER_URL: process.env.BASE_SERVER_URL,
  },
};

module.exports = nextConfig;
