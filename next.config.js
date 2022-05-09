const debug = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? '/siano/' : '',
  images: {
    loader: "custom",
  }
}

module.exports = nextConfig
