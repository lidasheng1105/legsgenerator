import { NextResponse } from 'next/server';

/**
 * 调用SiliconFlow API生成图像的函数
 */
export async function generateImage(prompt: string, options?: {
  negativePrompt?: string;
  width?: number;
  height?: number;
  numOutputs?: number;
}) {
  // 从环境变量获取API密钥
  const apiKey = process.env.NEXT_PUBLIC_SILICONFLOW_API_KEY;
  
  if (!apiKey) {
    throw new Error('缺少API密钥，请在.env.local文件中设置NEXT_PUBLIC_SILICONFLOW_API_KEY');
  }

  // 默认配置
  const defaultNegativePrompt = "lowres, bad anatomy, bad hands, cropped, worst quality, deformed";
  const defaultWidth = 512;
  const defaultHeight = 768; // 适合腿部图像的高度

  try {
    // 计算图像尺寸 (使用 image_size 格式)
    const width = options?.width || defaultWidth;
    const height = options?.height || defaultHeight;
    const imageSize = `${width}x${height}`;
    
    // 构建请求参数 - 使用API文档中的格式
    const requestData = {
      model: "Kwai-Kolors/Kolors", // 使用正确的模型名称
      prompt: `high quality, photorealistic, ${prompt}`,
      negative_prompt: options?.negativePrompt || defaultNegativePrompt,
      image_size: imageSize,
      batch_size: options?.numOutputs || 1,
      seed: Math.floor(Math.random() * 999999999), // 随机种子
      num_inference_steps: 20, // 默认推理步数
      guidance_scale: 7.5, // 默认指导比例
    };

    // 调用SiliconFlow API
    const response = await fetch("https://api.siliconflow.cn/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API请求失败: ${errorText}`);
    }

    // 解析响应
    const result = await response.json();
    console.log("API响应:", result); // 调试输出
    
    // 提取图像URL
    if (result.images && Array.isArray(result.images)) {
      return result.images.map((item: any) => item.url);
    } else if (result.data && Array.isArray(result.data)) {
      return result.data.map((item: any) => item.url);
    }
    
    throw new Error('API返回的格式不正确，未找到images或data字段');
  } catch (error) {
    console.error("生成图像时出错:", error);
    throw error;
  }
} 