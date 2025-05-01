import { NextRequest, NextResponse } from 'next/server';
import { generateImage } from '@/lib/image-generation';

export const maxDuration = 60; // 设置最大执行时间（秒）

export async function POST(request: NextRequest) {
  try {
    // 解析请求数据
    const { prompt, negativePrompt, width, height, numOutputs } = await request.json();
    
    // 验证输入
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: '缺少有效的提示词' },
        { status: 400 }
      );
    }
    
    // 调用图像生成服务
    const imageUrls = await generateImage(prompt, {
      negativePrompt,
      width,
      height,
      numOutputs
    });
    
    // 返回生成的图像URL
    return NextResponse.json({ 
      success: true, 
      images: imageUrls
    });
    
  } catch (error: any) {
    console.error('图像生成请求失败:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || '图像生成失败' 
      },
      { status: 500 }
    );
  }
} 