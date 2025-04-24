"use client";

import React from 'react';
import Image from 'next/image';
import GenerationForm from '@/components/GenerationForm';
import ImageResult from '@/components/ImageResult';
import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';

export default function GeneratePage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4">{t('advanced')} <span className="gradient-text">{t('create_page_title')}</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('create_page_desc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <GenerationForm />
          </div>
          
          <div className="lg:col-span-3">
            <ImageResult />
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-center mb-8">{t('best_results')} <span className="gradient-text">LegsAI</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h4 className="mb-3">{t('detailed_important')}</h4>
              <p className="text-gray-300">
                {t('detailed_desc')}
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">{t('try_styles')}</h4>
              <p className="text-gray-300">
                {t('try_styles_desc')}
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">{t('save_results')}</h4>
              <p className="text-gray-300">
                {t('save_results_desc')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-dark-lighter rounded-xl p-8 mt-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h3 className="mb-4">{t('upgrade_pro')}</h3>
              <p className="text-gray-300 mb-6">
                {t('upgrade_desc')}
              </p>
              <div className="flex gap-4">
                <button className="btn bg-accent-gold text-dark hover:bg-opacity-90">
                  {t('learn_pro')}
                </button>
                <button className="btn btn-outline">
                  {t('view_pricing')}
                </button>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="w-48 h-48 bg-dark rounded-full flex items-center justify-center">
                  <span className="text-accent-gold">Pro Badge</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-4 pt-4 pb-8 md:px-8">
          <h1 className="mb-3 text-center text-4xl font-bold text-foreground md:text-5xl">
            AI美腿生成器
          </h1>
          <p className="mb-6 mt-2 max-w-[750px] text-center text-lg text-muted-foreground md:text-xl">
            使用LegsAI的人工智能技术，根据您的文本描述生成各种风格的高质量美腿照片
          </p>
          
          {/* 会员信息区 */}
          <div className="mb-6 flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              游客模式
            </span>
            <Link href="/account" className="text-blue-500 hover:underline text-sm">
              升级到LegsAI专业版
            </Link>
          </div>
        </div>

        <div className="bg-dark-lighter p-4 rounded-lg border border-gray-700 mb-6 max-w-[700px] mx-auto">
          <h4 className="mb-2">提示</h4>
          <p className="text-gray-300 text-sm">
            使用LegsAI的AI技术，您可以通过精确描述来生成您想要的美腿图像。尝试描述姿势、背景和风格。
          </p>
        </div>
      </div>
    </div>
  );
} 