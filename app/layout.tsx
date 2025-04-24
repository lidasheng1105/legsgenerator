import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

// 导入组件
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/lib/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Legs Generator - AI Legs Generator | AI Legs Creator',
  description: 'Legs Generator is the leading platform for creating high-quality, personalized legs images with our AI legs generator service.',
  keywords: 'legs generator, AI legs generator, AI legs, legs AI, high-quality legs, AI image generation, digital legs, leg image creator, virtual model legs, digital legs design',
  authors: [{ name: 'Legs Generator Team' }],
  creator: 'Legs Generator',
  openGraph: {
    title: 'Legs Generator - AI Legs Generator | High-Quality AI Legs Creator',
    description: 'Create high-quality, realistic legs images with Legs Generator AI legs creator. Our AI legs generator produces various styles of legs.',
    url: 'https://www.legsgenerator.com',
    siteName: 'Legs Generator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legs Generator - AI Legs Generator | legs AI',
    description: 'Create high-quality, realistic legs images with Legs Generator AI legs creator. Our AI legs generator uses advanced AI technology.',
    creator: '@LegsGenerator',
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
    <html lang="en">
      <body className={`${inter.className} bg-dark text-white`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster position="bottom-right" />
        </LanguageProvider>
      </body>
    </html>
  );
} 