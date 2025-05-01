"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

const ImageResult = () => {
  const { t } = useLanguage();
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  // 监听自定义事件以接收生成的图像
  useEffect(() => {
    const handleImagesGenerated = (event: CustomEvent) => {
      if (event.detail && Array.isArray(event.detail.images)) {
        handleNewImages(event.detail.images);
      }
    };
    
    // 添加事件监听器
    window.addEventListener('imagesGenerated', handleImagesGenerated as EventListener);
    
    // 清理函数
    return () => {
      window.removeEventListener('imagesGenerated', handleImagesGenerated as EventListener);
    };
  }, []);
  
  // 处理新生成的图像
  const handleNewImages = (newImages: string[]) => {
    setImages(newImages);
    if (newImages.length > 0) {
      setSelectedImage(newImages[0]);
    }
    setLoading(false);
  };
  
  const handleDownload = async () => {
    if (!selectedImage) return;
    
    try {
      // 获取图像数据
      const response = await fetch(selectedImage);
      const blob = await response.blob();
      
      // 创建一个可下载的URL
      const downloadUrl = URL.createObjectURL(blob);
      
      // 创建一个a标签并模拟点击下载
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `legsai-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // 清理对象URL
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('下载图像失败:', error);
    }
  };
  
  return (
    <div className="card h-full flex flex-col">
      <h3 className="mb-6">{t('generation_results') || 'Generation Results'}</h3>
      
      {images.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
          <div className="text-accent-gold text-6xl mb-4">✨</div>
          <h4 className="mb-3">{t('your_images_will_appear') || 'Your leg images will appear here'}</h4>
          <p className="text-gray-400">
            {t('use_form_to_start') || 'Use the form on the left to start generating. Our advanced legs generator will create realistic leg images based on your description.'}
          </p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          <div className="mb-4 p-3 bg-yellow-900/50 border border-yellow-500 rounded-lg text-white">
            <p className="text-sm">
              <span className="font-medium">⚠️ 注意：</span> 图像链接仅在1小时内有效，请及时下载保存您喜欢的图像。
            </p>
          </div>
          
          <div className="flex-1 bg-dark rounded-lg overflow-hidden relative mb-4">
            {selectedImage ? (
              <div className="w-full h-full min-h-[400px] flex items-center justify-center relative">
                <Image 
                  src={selectedImage} 
                  alt="Generated leg image" 
                  fill 
                  className="object-contain" 
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            ) : (
              <div className="w-full h-[400px] flex items-center justify-center">
                <span className="text-gray-400">{t('no_image_selected') || 'No image selected'}</span>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className={`aspect-[3/4] rounded-lg overflow-hidden cursor-pointer border-2 ${
                  selectedImage === image
                    ? 'border-accent-gold'
                    : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={image} 
                    alt={`Generated image ${index + 1}`} 
                    fill 
                    className="object-cover" 
                    sizes="100px"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-between">
            <div>
              <button
                onClick={handleDownload}
                disabled={!selectedImage}
                className="btn btn-primary"
              >
                {t('download_image') || 'Download Image'}
              </button>
            </div>
            
            <div>
              <button 
                className="btn btn-outline"
                onClick={() => {
                  // 触发自定义事件通知表单重新生成
                  const event = new CustomEvent('regenerateImage');
                  window.dispatchEvent(event);
                }}
              >
                {t('regenerate') || 'Regenerate'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageResult; 