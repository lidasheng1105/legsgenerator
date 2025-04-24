"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ImageResult = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // 这里模拟已生成的示例图像，实际项目中应该从API获取
  const demoImages = [
    '/example-1.jpg',
    '/example-2.jpg',
    '/example-3.jpg',
    '/example-4.jpg',
  ];
  
  // 在实际应用中，这个函数会被父组件调用并传入真实生成的图像
  const handleNewImages = (newImages: string[]) => {
    setImages(newImages);
    if (newImages.length > 0) {
      setSelectedImage(newImages[0]);
    }
  };
  
  // 模拟初始加载示例图像
  React.useEffect(() => {
    // 在实际项目中移除这个演示用的代码
    setTimeout(() => {
      handleNewImages(demoImages);
    }, 1000);
  }, []);
  
  const handleDownload = () => {
    if (!selectedImage) return;
    
    // 创建一个a标签并模拟点击下载
    const link = document.createElement('a');
    link.href = selectedImage;
    link.download = `legsai-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="card h-full flex flex-col">
      <h3 className="mb-6">生成结果</h3>
      
      {images.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
          <div className="text-accent-gold text-6xl mb-4">✨</div>
          <h4 className="mb-3">您的AI美腿图像将在这里显示</h4>
          <p className="text-gray-400">
            使用左侧的表单开始生成。我们的AI legs generator将根据您的描述创建逼真的美腿图像。
          </p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-dark rounded-lg overflow-hidden relative mb-4">
            {selectedImage ? (
              <div className="w-full h-full min-h-[400px] flex items-center justify-center">
                <span className="text-accent-gold">此处将显示生成的美腿图像</span>
              </div>
            ) : (
              <div className="w-full h-[400px] flex items-center justify-center">
                <span className="text-gray-400">暂无选中图像</span>
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
                <div className="relative w-full h-full bg-dark flex items-center justify-center">
                  <span className="text-xs text-accent-gold">{index + 1}</span>
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
                下载图像
              </button>
            </div>
            
            <div>
              <button className="btn btn-outline">
                重新生成
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageResult; 