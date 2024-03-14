/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
};

const withTM = require("next-transpile-modules")([]);

module.exports = withTM(nextConfig);
