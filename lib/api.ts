import axios from 'axios';

// 调用硅基流动API生成图像
export async function generateImage(prompt: string, style: string) {
  try {
    // 根据选择的风格增强提示词
    const enhancedPrompt = `${style}风格的性感美腿, ${prompt}, 高质量, 精细细节`;
    
    const response = await axios.post(
      'https://api.siliconflow.cn/v1/image/generation', 
      {
        model: process.env.NEXT_PUBLIC_SILICONFLOW_MODEL_NAME || 'legs-model', // 替换为具体的模型名称
        prompt: enhancedPrompt,
        n: 1,
        size: '512x512',
      }, 
      {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SILICONFLOW_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    // 假设API返回的图像URL在response.data.data[0].url
    // 根据实际API调整这个路径
    return response.data.data[0].url;
  } catch (error) {
    console.error('API调用错误:', error);
    throw new Error('生成图像失败');
  }
}

// 使用风格加强版的提示词生成多张图像
export async function generateMultipleImages(prompt: string, style: string, count: number = 1) {
  try {
    // 根据选择的风格增强提示词
    const enhancedPrompt = `${style}风格的性感美腿, ${prompt}, 高质量, 精细细节`;
    
    const response = await axios.post(
      'https://api.siliconflow.cn/v1/image/generation', 
      {
        model: process.env.NEXT_PUBLIC_SILICONFLOW_MODEL_NAME || 'legs-model',
        prompt: enhancedPrompt,
        n: count,
        size: '512x512',
      }, 
      {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SILICONFLOW_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    // 假设API返回的图像URL数组在response.data.data
    // 提取所有生成图像的URL
    const imageUrls = response.data.data.map((item: any) => item.url);
    return imageUrls;
  } catch (error) {
    console.error('API调用错误:', error);
    throw new Error('生成多张图像失败');
  }
}

// 风格映射，将前端样式ID映射到API所需的风格描述
export const styleDescriptions: Record<string, string> = {
  'elegant': '优雅高贵',
  'sexy': '性感魅惑',
  'fashion': '时尚潮流',
  'casual': '休闲自然',
  'sports': '运动活力',
}; 