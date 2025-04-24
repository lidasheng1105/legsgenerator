"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <nav className="bg-dark-lighter bg-opacity-90 backdrop-blur-sm fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Legs Generator</span>
          <span className="ml-2 text-sm bg-accent-gold text-dark px-2 py-0.5 rounded">legs generator</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-accent-gold transition-colors">
            {t('home')}
          </Link>
          <Link href="/generate" className="text-white hover:text-accent-gold transition-colors">
            {t('generate')}
          </Link>
          <Link href="/#features" className="text-white hover:text-accent-gold transition-colors">
            {t('features')}
          </Link>
          <Link href="/#examples" className="text-white hover:text-accent-gold transition-colors">
            {t('examples')}
          </Link>
          <Link href="/#faq" className="text-white hover:text-accent-gold transition-colors">
            {t('faq')}
          </Link>
          <LanguageSwitcher />
        </div>
        
        <Link href="/generate" className="btn btn-secondary">
          {t('free_trial')}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 