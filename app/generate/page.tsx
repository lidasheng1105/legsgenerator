import React from 'react';
import Image from 'next/image';
import GenerationForm from '@/components/GenerationForm';
import ImageResult from '@/components/ImageResult';

export const metadata = {
  title: '创建美腿图像 | LegsAI - AI Legs Generator',
  description: '使用LegsAI的AI legs generator创建高质量美腿图像。简单输入描述，选择风格，即刻生成逼真美腿图像。',
};

export default function GeneratePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4">AI <span className="gradient-text">Legs Generator</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            使用LegsAI的人工智能技术，轻松生成高质量美腿图像。只需描述您想要的效果，我们的AI legs generator将为您创建精美的腿部图像。
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
          <h2 className="text-center mb-8">如何获得最佳 <span className="gradient-text">AI Legs Generator</span> 效果</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h4 className="mb-3">详细描述很重要</h4>
              <p className="text-gray-300">
                提供详细的描述可以帮助我们的AI legs generator更好地理解您的需求。包括姿势、风格、服装、环境等详细信息，将获得更精准的生成结果。
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">尝试不同风格</h4>
              <p className="text-gray-300">
                LegsAI提供多种美腿风格选项，从优雅到性感，从日常到艺术。尝试不同风格组合，探索AI legs generator的创意可能性。
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">保存您喜欢的结果</h4>
              <p className="text-gray-300">
                当我们的AI legs generator创建出您满意的图像时，别忘了下载并保存。您可以将这些图像用于各种创意和专业项目。
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-dark-lighter rounded-xl p-8 mt-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h3 className="mb-4">升级到LegsAI专业版</h3>
              <p className="text-gray-300 mb-6">
                获取更多高级功能，解锁我们AI legs generator的全部潜力。专业版用户可享受更高分辨率输出、批量生成、优先处理等特权。
              </p>
              <div className="flex gap-4">
                <button className="btn bg-accent-gold text-dark hover:bg-opacity-90">
                  了解专业版
                </button>
                <button className="btn btn-outline">
                  查看价格
                </button>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="w-48 h-48 bg-dark rounded-full flex items-center justify-center">
                  <span className="text-accent-gold">专业版徽章</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 