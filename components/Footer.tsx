"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-dark-lighter pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-col">
              <Link href="/" className="flex items-center mb-4">
                <span className="text-2xl font-bold gradient-text">Legs Generator</span>
              </Link>
              <p className="text-gray-300 mb-4">
                Legs Generator is the leading platform for creating high-quality, personalized legs with our advanced legs generator service.
              </p>
              <p className="text-accent-gold">
                © {new Date().getFullYear()} Legs Generator. {t('all_rights_reserved')}
              </p>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h5 className="text-white font-medium mb-4">{t('quick_links')}</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent-gold transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/generate" className="text-gray-300 hover:text-accent-gold transition-colors">
                  {t('generate')}
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-300 hover:text-accent-gold transition-colors">
                  {t('features')}
                </Link>
              </li>
              <li>
                <Link href="/#examples" className="text-gray-300 hover:text-accent-gold transition-colors">
                  {t('examples')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h5 className="text-white font-medium mb-4">{t('resources')}</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/#faq" className="text-gray-300 hover:text-accent-gold transition-colors">
                  {t('faq')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent-gold transition-colors">
                  {t('blog_posts')}
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-300 hover:text-accent-gold transition-colors">
                  {t('tutorials')}
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-gray-300 hover:text-accent-gold transition-colors">
                  {t('updates')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h5 className="text-white font-medium mb-4">{t('contact_us')}</h5>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Email: info@legsgenerator.com
              </li>
              <li className="text-gray-300">
                Follow Us:
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
            <p>Legs Generator - Professional Legs Creator | legs generator</p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              <Link href="/privacy" className="hover:text-accent-gold transition-colors">
                {t('privacy_policy')}
              </Link>
              <Link href="/terms" className="hover:text-accent-gold transition-colors">
                {t('terms_of_service')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 