/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.siliconflow.cn'], // 允许从API加载图片
    unoptimized: process.env.NODE_ENV === 'development', // 开发环境下不优化图片
  },
};

module.exports = nextConfig; 