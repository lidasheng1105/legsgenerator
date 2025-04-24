import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';

// 导入组件
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'LegsAI - 专业的AI美腿生成器 | 高质量AI Legs Generator',
  description: '使用LegsAI智能美腿生成器，创建高质量、逼真的美腿图像。我们的AI legs generator采用最先进的人工智能技术，可根据文本描述生成各种风格的性感美腿图像。轻松定制，即时生成，赋予创作无限可能。',
  keywords: 'AI legs generator, 美腿生成器, 人工智能图像生成, 美腿AI, 腿部图像生成, AI美腿, 虚拟模特腿部, 数字美腿创作, legs AI',
  authors: [{ name: 'LegsAI Team' }],
  creator: 'LegsAI',
  openGraph: {
    title: 'LegsAI - 专业的AI美腿生成器 | AI Legs Generator',
    description: '使用LegsAI智能美腿生成器，创建高质量、逼真的美腿图像。我们的AI legs generator采用最先进的人工智能技术，生成各种风格美腿。',
    url: 'https://www.legsgenerator.com',
    siteName: 'LegsAI',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LegsAI - 专业的AI美腿生成器 | AI Legs Generator',
    description: '使用LegsAI智能美腿生成器，创建高质量、逼真的美腿图像。我们的AI legs generator采用最先进的人工智能技术。',
    creator: '@LegsAI',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
} 