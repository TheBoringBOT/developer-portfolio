/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    nextImageExportOptimizer: {
      imageFolderPath: "public/images",
      exportFolderPath: "out",
      quality: 95,
    },
  },
  env: {
    storePicturesInWEBP: true,
    TawkPropertyId: "625fd8d87b967b11798b9791",
    TawkKeyId: "1g136e47n",
  },
};

module.exports = nextConfig;
