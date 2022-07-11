/** @type {import('next').NextConfig} */
const path = require('path');

const { i18n } = require('./next-i18next.config');

module.exports = {
  webpack5: true,
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: false,
  i18n,

  webpack: (config, { isServer }) => {
    config.experiments = { topLevelAwait: true, layers: true };

    // Prevent React mismatch version
    config.resolve.alias.react = path.resolve(__dirname, '.', 'node_modules', 'react');
    return config;
  },
};
