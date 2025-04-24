"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: 'en' | 'zh') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center text-white hover:text-accent-gold transition-colors"
        onClick={toggleDropdown}
      >
        <span>{t('language')}</span>
        <svg
          className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-dark-lighter border border-gray-700 rounded-md shadow-lg z-50">
          <ul className="py-1">
            <li>
              <button
                className={`block px-4 py-2 text-sm w-full text-left ${
                  language === 'en' ? 'text-accent-gold' : 'text-white hover:text-accent-gold'
                }`}
                onClick={() => changeLanguage('en')}
              >
                {t('english')}
              </button>
            </li>
            <li>
              <button
                className={`block px-4 py-2 text-sm w-full text-left ${
                  language === 'zh' ? 'text-accent-gold' : 'text-white hover:text-accent-gold'
                }`}
                onClick={() => changeLanguage('zh')}
              >
                {t('chinese')}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 