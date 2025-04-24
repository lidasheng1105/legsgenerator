import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-dark-lighter bg-opacity-90 backdrop-blur-sm fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold gradient-text">LegsAI</span>
          <span className="ml-2 text-sm bg-accent-gold text-dark px-2 py-0.5 rounded">AI legs generator</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-accent-gold transition-colors">
            首页
          </Link>
          <Link href="/generate" className="text-white hover:text-accent-gold transition-colors">
            开始生成
          </Link>
          <Link href="/#features" className="text-white hover:text-accent-gold transition-colors">
            功能特点
          </Link>
          <Link href="/#examples" className="text-white hover:text-accent-gold transition-colors">
            示例展示
          </Link>
          <Link href="/#faq" className="text-white hover:text-accent-gold transition-colors">
            常见问题
          </Link>
        </div>
        
        <Link href="/generate" className="btn btn-secondary">
          免费试用
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 