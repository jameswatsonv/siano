const { PHASE_PRODUCTION_BUILD, PHASE_EXPORT } = require('next/constants')

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  const config = {
    reactStrictMode: true,
    images: {
      loader: "custom",
    },
  };

  if (phase === PHASE_PRODUCTION_BUILD || phase === PHASE_EXPORT) {
    config.basePath = process.env.NEXT_PUBLIC_BACKEND_URL ?? '/';
  }

  return config;
}

module.exports = nextConfig
