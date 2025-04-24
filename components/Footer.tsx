import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark-lighter pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-col">
              <Link href="/" className="flex items-center mb-4">
                <span className="text-2xl font-bold gradient-text">LegsAI</span>
              </Link>
              <p className="text-gray-300 mb-4">
                LegsAI是领先的AI美腿生成器平台，为您提供高质量、个性化的AI legs生成服务。
              </p>
              <p className="text-accent-gold">
                © {new Date().getFullYear()} LegsAI. 保留所有权利。
              </p>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h5 className="text-white font-medium mb-4">快速链接</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent-gold transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/generate" className="text-gray-300 hover:text-accent-gold transition-colors">
                  开始生成
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-300 hover:text-accent-gold transition-colors">
                  功能特点
                </Link>
              </li>
              <li>
                <Link href="/#examples" className="text-gray-300 hover:text-accent-gold transition-colors">
                  示例展示
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h5 className="text-white font-medium mb-4">资源</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/#faq" className="text-gray-300 hover:text-accent-gold transition-colors">
                  常见问题
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent-gold transition-colors">
                  博客文章
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-300 hover:text-accent-gold transition-colors">
                  使用教程
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-gray-300 hover:text-accent-gold transition-colors">
                  更新日志
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h5 className="text-white font-medium mb-4">联系我们</h5>
            <ul className="space-y-2">
              <li className="text-gray-300">
                邮箱: info@legsgenerator.com
              </li>
              <li className="text-gray-300">
                关注我们:
              </li>
              <li className="flex space-x-4 mt-2">
                <a href="#" className="text-accent-gold hover:text-white transition-colors">
                  <span>Twitter</span>
                </a>
                <a href="#" className="text-accent-gold hover:text-white transition-colors">
                  <span>Instagram</span>
                </a>
                <a href="#" className="text-accent-gold hover:text-white transition-colors">
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between">
            <p>LegsAI - 专业的AI美腿生成器 | AI Legs Generator</p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              <Link href="/privacy" className="hover:text-accent-gold transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="hover:text-accent-gold transition-colors">
                服务条款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 