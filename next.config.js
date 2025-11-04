/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  './lib/i18n/request.ts'
);

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = withNextIntl(nextConfig);
