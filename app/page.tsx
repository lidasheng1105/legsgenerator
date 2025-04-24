"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-gradient opacity-80 z-0"></div>
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="mb-6">
                <span className="block mb-2">{t('advanced')}</span>
                <span className="gradient-text">{t('hero_title')}</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl">
                {t('hero_description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/generate" className="btn btn-secondary">
                  {t('try_now')}
                </Link>
                <Link href="#features" className="btn btn-outline">
                  {t('learn_more')}
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-dark-lighter p-2 rounded-xl border border-accent-gold border-opacity-30 shadow-2xl">
                <div 
                  className="w-full h-[400px] rounded-lg bg-dark flex items-center justify-center"
                >
                  <span className="text-accent-gold">Leg Image Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-dark-lighter py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-accent-gold mb-2">10,000+</h3>
              <p className="text-gray-300">{t('daily_images')}</p>
            </div>
            <div className="p-6">
              <h3 className="text-accent-gold mb-2">50+</h3>
              <p className="text-gray-300">{t('style_options')}</p>
            </div>
            <div className="p-6">
              <h3 className="text-accent-gold mb-2">100万+</h3>
              <p className="text-gray-300">{t('satisfied_users')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">{t('why_choose')} <span className="gradient-text">Legs Generator</span></h2>
            <p className="max-w-3xl mx-auto text-gray-300">
              {t('feature_intro')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover:border-accent-gold transition-all duration-300">
              <div className="mb-4 text-accent-gold text-4xl">✨</div>
              <h4 className="mb-3">{t('home_high_quality')}</h4>
              <p className="text-gray-300">
                {t('home_high_quality_desc')}
              </p>
            </div>
            
            <div className="card hover:border-accent-gold transition-all duration-300">
              <div className="mb-4 text-accent-gold text-4xl">🎨</div>
              <h4 className="mb-3">{t('diverse_styles')}</h4>
              <p className="text-gray-300">
                {t('diverse_styles_desc')}
              </p>
            </div>
            
            <div className="card hover:border-accent-gold transition-all duration-300">
              <div className="mb-4 text-accent-gold text-4xl">⚡</div>
              <h4 className="mb-3">{t('fast_generation')}</h4>
              <p className="text-gray-300">
                {t('fast_generation_desc')}
              </p>
            </div>
            
            <div className="card hover:border-accent-gold transition-all duration-300">
              <div className="mb-4 text-accent-gold text-4xl">💬</div>
              <h4 className="mb-3">{t('text_based')}</h4>
              <p className="text-gray-300">
                {t('text_based_desc')}
              </p>
            </div>
            
            <div className="card hover:border-accent-gold transition-all duration-300">
              <div className="mb-4 text-accent-gold text-4xl">🔒</div>
              <h4 className="mb-3">{t('security')}</h4>
              <p className="text-gray-300">
                {t('security_desc')}
              </p>
            </div>
            
            <div className="card hover:border-accent-gold transition-all duration-300">
              <div className="mb-4 text-accent-gold text-4xl">📱</div>
              <h4 className="mb-3">{t('cross_platform')}</h4>
              <p className="text-gray-300">
                {t('cross_platform_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-dark-gradient">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">{t('how_to_use')} <span className="gradient-text">Legs Generator</span></h2>
            <p className="max-w-3xl mx-auto text-gray-300">
              {t('how_to_intro')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-accent-gold text-dark flex items-center justify-center text-xl font-bold">1</div>
              <div className="card h-full">
                <h4 className="mb-3">{t('step1_title')}</h4>
                <p className="text-gray-300">
                  {t('step1_desc')}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-accent-gold text-dark flex items-center justify-center text-xl font-bold">2</div>
              <div className="card h-full">
                <h4 className="mb-3">{t('step2_title')}</h4>
                <p className="text-gray-300">
                  {t('step2_desc')}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-accent-gold text-dark flex items-center justify-center text-xl font-bold">3</div>
              <div className="card h-full">
                <h4 className="mb-3">{t('step3_title')}</h4>
                <p className="text-gray-300">
                  {t('step3_desc')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/generate" className="btn btn-secondary">
              {t('start_using')}
            </Link>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">{t('showcase')}</h2>
            <p className="max-w-3xl mx-auto text-gray-300">
              {t('showcase_intro')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="overflow-hidden rounded-xl bg-dark-lighter p-2 border border-accent-silver border-opacity-20">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-dark flex items-center justify-center">
                  <span className="text-accent-gold">{t('example')} #{index}</span>
                </div>
                <div className="p-4">
                  <h5 className="mb-2">{t('style')} #{index}</h5>
                  <p className="text-gray-300 text-sm">
                    {t('created_by')}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">{t('create_own')}</p>
            <Link href="/generate" className="btn btn-secondary">
              {t('create_free')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-dark-gradient">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">{t('user_reviews')}</h2>
            <p className="max-w-3xl mx-auto text-gray-300">
              {t('reviews_intro')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="text-accent-gold text-2xl mr-2">★★★★★</div>
                <span className="text-gray-300">5.0</span>
              </div>
              <p className="text-gray-300 mb-4">
                {t('testimonial1')}
              </p>
              <div className="flex items-center">
                <div className="font-medium">张小明</div>
                <div className="mx-2">•</div>
                <div className="text-gray-400">Professional Photographer</div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="text-accent-gold text-2xl mr-2">★★★★★</div>
                <span className="text-gray-300">5.0</span>
              </div>
              <p className="text-gray-300 mb-4">
                {t('testimonial2')}
              </p>
              <div className="flex items-center">
                <div className="font-medium">李婷</div>
                <div className="mx-2">•</div>
                <div className="text-gray-400">Content Creator</div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="text-accent-gold text-2xl mr-2">★★★★★</div>
                <span className="text-gray-300">4.9</span>
              </div>
              <p className="text-gray-300 mb-4">
                {t('testimonial3')}
              </p>
              <div className="flex items-center">
                <div className="font-medium">王大海</div>
                <div className="mx-2">•</div>
                <div className="text-gray-400">Graphic Designer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">{t('common_questions')}</h2>
            <p className="max-w-3xl mx-auto text-gray-300">
              {t('questions_intro')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h4 className="mb-3">{t('what_is_legs_gen')}</h4>
              <p className="text-gray-300">
                {t('what_is_answer')}
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">{t('applications')}</h4>
              <p className="text-gray-300">
                {t('applications_answer')}
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">{t('copyright')}</h4>
              <p className="text-gray-300">
                {t('copyright_answer')}
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">{t('image_quality_question')}</h4>
              <p className="text-gray-300">
                {t('image_quality_answer')}
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">{t('technical_knowledge')}</h4>
              <p className="text-gray-300">
                {t('technical_knowledge_answer')}
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">{t('supported_languages')}</h4>
              <p className="text-gray-300">
                {t('supported_languages_answer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-dark to-secondary-dark">
        <div className="container text-center">
          <h2 className="mb-6">{t('experience_now')} <span className="text-accent-gold">Legs Generator</span></h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('join_millions')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/generate" className="btn bg-accent-gold text-dark hover:bg-opacity-90">
              {t('free_start')}
            </Link>
            <Link href="/#features" className="btn btn-outline">
              {t('learn_more')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 