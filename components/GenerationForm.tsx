"use client";

import React, { useState } from 'react';
import toast from 'react-hot-toast';

const styles = [
  { id: 'elegant', name: '优雅', description: '高雅精致的美腿风格' },
  { id: 'sexy', name: '性感', description: '妩媚诱人的美腿风格' },
  { id: 'fashion', name: '时尚', description: '潮流前卫的美腿风格' },
  { id: 'casual', name: '休闲', description: '舒适日常的美腿风格' },
  { id: 'sports', name: '运动', description: '充满活力的运动美腿' },
];

const GenerationForm = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('elegant');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast.error('请输入描述文本');
      return;
    }
    
    setIsGenerating(true);
    
    // 模拟API调用
    setTimeout(() => {
      setIsGenerating(false);
      toast.success('美腿图像生成成功！');
      // 实际项目中这里应该调用真实的API
      // generateImage(prompt, selectedStyle);
    }, 2000);
  };
  
  return (
    <div className="card">
      <h3 className="mb-6">创建您的AI美腿图像</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="prompt" className="block text-white mb-2">
            描述您想要的美腿图像 <span className="text-accent-gold">*</span>
          </label>
          <textarea
            id="prompt"
            className="w-full bg-dark border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent-gold transition-colors"
            rows={5}
            placeholder="例如：穿着黑色高跟鞋的修长美腿，站在大理石地面上，柔和的光线..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          <p className="text-gray-400 text-sm mt-2">
            详细的描述将帮助AI legs generator创建更符合您期望的图像
          </p>
        </div>
        
        <div className="mb-6">
          <label className="block text-white mb-2">
            选择风格 <span className="text-accent-gold">*</span>
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
                <div className="font-medium">{style.name}</div>
                <div className="text-gray-400 text-sm">{style.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-white mb-4">高级选项</label>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between">
              <span>图像质量</span>
              <select className="bg-dark border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-accent-gold transition-colors">
                <option value="standard">标准</option>
                <option value="high">高质量</option>
                <option value="ultra">超高质量</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span>生成数量</span>
              <select className="bg-dark border border-gray-700 rounded-lg p-2 text-white focus:outline-none focus:border-accent-gold transition-colors">
                <option value="1">1张</option>
                <option value="2">2张</option>
                <option value="4">4张</option>
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
              生成中...
            </span>
          ) : (
            '开始生成美腿图像'
          )}
        </button>
      </form>
    </div>
  );
};

export default GenerationForm; 