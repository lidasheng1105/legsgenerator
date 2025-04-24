"use client";

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLanguage } from '@/lib/LanguageContext';

const styles = [
  { id: 'elegant', name: { en: 'Elegant', zh: '优雅' }, description: { en: 'Refined and graceful leg style', zh: '高雅精致的美腿风格' } },
  { id: 'sexy', name: { en: 'Sexy', zh: '性感' }, description: { en: 'Alluring and sensual leg style', zh: '妩媚诱人的美腿风格' } },
  { id: 'fashion', name: { en: 'Fashion', zh: '时尚' }, description: { en: 'Trendy and modern leg style', zh: '潮流前卫的美腿风格' } },
  { id: 'casual', name: { en: 'Casual', zh: '休闲' }, description: { en: 'Relaxed everyday leg style', zh: '舒适日常的美腿风格' } },
  { id: 'sports', name: { en: 'Athletic', zh: '运动' }, description: { en: 'Energetic athletic leg style', zh: '充满活力的运动美腿' } },
];

const GenerationForm = () => {
  const { language, t } = useLanguage();
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('elegant');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast.error(language === 'en' ? 'Please enter a description' : '请输入描述文本');
      return;
    }
    
    setIsGenerating(true);
    
    // 模拟API调用
    setTimeout(() => {
      setIsGenerating(false);
      toast.success(language === 'en' ? 'Leg image generated successfully!' : '美腿图像生成成功！');
      // 实际项目中这里应该调用真实的API
      // generateImage(prompt, selectedStyle);
    }, 2000);
  };
  
  return (
    <div className="card">
      <h3 className="mb-6">{t('create_your_legs') || 'Create Your Leg Images'}</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="prompt" className="block text-white mb-2">
            {t('describe_legs') || 'Describe the legs you want'} <span className="text-accent-gold">*</span>
          </label>
          <textarea
            id="prompt"
            className="w-full bg-dark border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent-gold transition-colors"
            rows={5}
            placeholder={language === 'en' 
              ? 'E.g.: Slender legs with black high heels, standing on marble floor, soft lighting...'
              : '例如：穿着黑色高跟鞋的修长美腿，站在大理石地面上，柔和的光线...'}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          <p className="text-gray-400 text-sm mt-2">
            {t('detailed_description_helps') || 'Detailed descriptions help our legs generator create images that better match your expectations'}
          </p>
        </div>
        
        <div className="mb-6">
          <label className="block text-white mb-2">
            {t('select_style') || 'Select Style'} <span className="text-accent-gold">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {styles.map((style) => (
              <div
                key={style.id}
                className={`border rounded-lg p-3 cursor-pointer transition-all ${
                  selectedStyle === style.id
                    ? 'border-accent-gold bg-dark-lighter'
                    : 'border-gray-700 hover:border-gray-500'
                }`}
                onClick={() => setSelectedStyle(style.id)}
              >
                <div className="font-medium">{style.name[language]}</div>
                <div className="text-gray-400 text-sm">{style.description[language]}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-white mb-4">{t('advanced_options') || 'Advanced Options'}</label>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between">
              <span>{t('image_quality') || 'Image Quality'}</span>
              <select className="bg-dark border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-accent-gold transition-colors">
                <option value="standard">{t('standard') || 'Standard'}</option>
                <option value="high">{t('high_quality') || 'High Quality'}</option>
                <option value="ultra">{t('ultra_high_quality') || 'Ultra High Quality'}</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span>{t('generation_count') || 'Number of Images'}</span>
              <select className="bg-dark border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-accent-gold transition-colors">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className={`btn w-full ${
            isGenerating
              ? 'bg-dark-lighter cursor-not-allowed'
              : 'btn-secondary'
          }`}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t('generating') || 'Generating...'}
            </span>
          ) : (
            t('start_generating') || 'Start Generating Leg Images'
          )}
        </button>
      </form>
    </div>
  );
};

export default GenerationForm; 