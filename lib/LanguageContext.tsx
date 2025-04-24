"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 英文和中文的翻译映射
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'home': 'Home',
    'generate': 'Create',
    'features': 'Features',
    'examples': 'Examples',
    'faq': 'FAQ',
    'free_trial': 'Free Trial',
    'language': 'Language',
    'english': 'English',
    'chinese': 'Chinese',
    
    // Footer
    'quick_links': 'Quick Links',
    'resources': 'Resources',
    'contact_us': 'Contact Us',
    'blog_posts': 'Blog',
    'tutorials': 'Tutorials',
    'updates': 'Updates',
    'privacy_policy': 'Privacy Policy',
    'terms_of_service': 'Terms of Service',
    'all_rights_reserved': 'All Rights Reserved',
    
    // General UI text
    'learn_more': 'Learn More',
    'get_started': 'Get Started',
    'try_free': 'Try for Free',
    'advanced': 'Advanced',
    
    // Homepage
    'hero_title': 'Legs Image Generator',
    'hero_description': 'Legs Generator is an advanced legs generator that creates high-resolution, high-quality leg images. Whether you\'re a photographer, designer, or content creator, our legs generator can help you quickly create realistic, diverse leg materials.',
    'try_now': 'Try Legs Generator Now',
    'daily_images': 'Daily Generated Leg Images',
    'style_options': 'Diverse Leg Style Options',
    'satisfied_users': 'Satisfied Users Using Our Legs Generator',
    'why_choose': 'Why Choose Legs Generator',
    'feature_intro': 'Our legs generator provides industry-leading features and technology, making leg image creation unprecedentedly simple and efficient.',
    'home_high_quality': 'High-Quality Image Generation',
    'home_high_quality_desc': 'Our legs generator uses the most advanced technical algorithms to generate high-quality, detail-rich leg images with resolutions up to 4K.',
    'diverse_styles': 'Diverse Style Options',
    'diverse_styles_desc': 'From elegant to sexy, from casual to formal, Legs Generator offers over 50 different leg styles to meet your various creative needs.',
    'fast_generation': 'Fast Generation',
    'fast_generation_desc': 'In just a few seconds, our legs generator can create the leg images you need, greatly improving your work efficiency.',
    'text_based': 'Text-Based Generation',
    'text_based_desc': 'Simply input a text description, and our legs generator can understand your needs and generate leg images that meet your expectations.',
    'security': 'Security and Privacy',
    'security_desc': 'We highly value user privacy. All images generated through our legs generator and user data are strictly encrypted and protected.',
    'cross_platform': 'Cross-Platform Support',
    'cross_platform_desc': 'Whether on PC or mobile devices, you can use our legs generator to create beautiful images anytime, anywhere.',
    'how_to_use': 'How to Use Legs Generator',
    'how_to_intro': 'Our leg generation platform is simple and intuitive to operate. Just three steps to get high-quality leg images.',
    'step1_title': 'Describe Your Requirements',
    'step1_desc': 'Describe in detail the leg image you want to generate in the text box, including style, pose, clothing, and environment details. Our legs generator will create based on your description.',
    'step2_title': 'Choose Style and Parameters',
    'step2_desc': 'Select your preferred leg style and adjust various parameters for the best effect. Legs Generator offers multiple style options to make your leg generation meet expectations.',
    'step3_title': 'Get Generation Results',
    'step3_desc': 'Click the generate button, and within seconds our legs generator will create high-quality leg images. You can download, edit, or regenerate until satisfied.',
    'start_using': 'Start Using Legs Generator',
    'showcase': 'Legs Generator Showcase',
    'showcase_intro': 'Explore the wonderful works created by our legs generator and feel the creative possibilities brought by advanced technology.',
    'example': 'Leg Example',
    'style': 'Leg Style',
    'created_by': 'Created by Legs Generator, completely text-based generation of realistic leg images.',
    'create_own': 'Want to create your own leg images? Try our legs generator now!',
    'create_free': 'Create Your Leg Images for Free',
    'user_reviews': 'User Reviews of Legs Generator',
    'reviews_intro': 'Hear what our users have to say about Legs Generator\'s leg generation service.',
    'testimonial1': '"Legs Generator\'s leg generator has completely changed my workflow. As a fashion photographer, I need a lot of reference materials, and this legs generator tool has saved me a tremendous amount of time and cost."',
    'testimonial2': '"As a content creator, I often need various materials. The quality of leg images provided by Legs Generator exceeds my expectations and can completely rival professional photography works."',
    'testimonial3': '"I\'ve tried many image generation tools, but Legs Generator is the best. Its understanding of text descriptions is very strong and can always accurately capture the leg style I want."',
    'common_questions': 'Common Questions About Legs Generator',
    'questions_intro': 'Get answers to questions you may have about Legs Generator\'s leg generation service.',
    'what_is_legs_gen': 'What is a legs generator?',
    'what_is_answer': 'A legs generator is a tool that uses advanced technology to automatically generate leg images based on text descriptions or other input parameters. Legs Generator uses the most advanced models to create highly realistic, detail-rich leg images suitable for various creative and professional scenarios.',
    'applications': 'What are the application scenarios for Legs Generator\'s leg generator?',
    'applications_answer': 'Our legs generator is widely used in fashion design, advertising creation, content marketing, social media, e-commerce product display, and other fields. Whether you\'re a designer, photographer, content creator, or marketing professional, you can benefit from it.',
    'copyright': 'Are there copyright restrictions on leg images generated using Legs Generator?',
    'copyright_answer': 'For images created through Legs Generator, you have full usage rights. You can use the generated images for personal or commercial projects without additional authorization or attribution. Please refer to our terms of service for detailed terms.',
    'image_quality_question': 'What\'s the quality of images generated by Legs Generator?',
    'image_quality_answer': 'Leg images generated by Legs Generator have extremely high quality and realism. Our advanced models are trained on millions of images, can understand complex text descriptions, and generate high-resolution leg images that meet requirements, with rich details and quality comparable to professional photography works.',
    'technical_knowledge': 'Do I need technical or design knowledge to use Legs Generator?',
    'technical_knowledge_answer': 'No. Our legs generator is designed to be very user-friendly. Even if you don\'t have a technical or design background, you can easily use it. Just input the leg description you want, select the appropriate style and parameters, and the system will generate satisfactory results for you.',
    'supported_languages': 'What languages does Legs Generator support for text descriptions?',
    'supported_languages_answer': 'Currently, our legs generator supports text description inputs in multiple languages including Chinese, English, Japanese, Korean, and more. Regardless of which language you use, our technology can understand your needs and generate corresponding leg images.',
    'experience_now': 'Experience the Magic of Legs Generator Now',
    'join_millions': 'Join millions of users worldwide and experience top-tier leg generation technology. Register for a free trial and start your creative journey!',
    'free_start': 'Start Using for Free',
    
    // Generate page
    'create_page_title': 'Legs Generator',
    'create_page_desc': 'Use Legs Generator\'s advanced technology to easily create high-quality leg images. Just describe the effect you want, and our advanced legs generator will create beautiful leg images for you.',
    'best_results': 'How to Get the Best Legs Generator Results',
    'detailed_important': 'Detailed Description is Important',
    'detailed_desc': 'Providing a detailed description can help our legs generator better understand your needs. Include details like pose, style, clothing, environment, etc., for more precise generation results.',
    'try_styles': 'Try Different Styles',
    'try_styles_desc': 'Legs Generator offers multiple leg style options, from elegant to sexy, from everyday to artistic. Try different style combinations to explore the creative possibilities of our legs generator.',
    'save_results': 'Save Your Favorite Results',
    'save_results_desc': 'When our legs generator creates images you\'re satisfied with, don\'t forget to download and save them. You can use these images for various creative and professional projects.',
    'upgrade_pro': 'Upgrade to Legs Generator Pro',
    'upgrade_desc': 'Get more advanced features and unlock the full potential of our legs generator. Pro users enjoy higher resolution output, batch generation, priority processing, and other privileges.',
    'learn_pro': 'Learn About Pro',
    'view_pricing': 'View Pricing',
    
    // GenerationForm component
    'create_your_legs': 'Create Your Leg Images',
    'describe_legs': 'Describe the legs you want',
    'detailed_description_helps': 'Detailed descriptions help our legs generator create images that better match your expectations',
    'select_style': 'Select Style',
    'advanced_options': 'Advanced Options',
    'generation_count': 'Number of Images',
    'standard': 'Standard',
    'high_quality': 'High Quality',
    'ultra_high_quality': 'Ultra High Quality',
    'generating': 'Generating...',
    'start_generating': 'Start Generating Leg Images',
    
    // ImageResult component
    'generation_results': 'Generation Results',
    'your_images_will_appear': 'Your leg images will appear here',
    'use_form_to_start': 'Use the form on the left to start generating. Our advanced legs generator will create realistic leg images based on your description.',
    'generated_leg_image': 'Generated Leg Image',
    'no_image_selected': 'No image selected',
    'download_image': 'Download Image',
    'regenerate': 'Regenerate',
  },
  zh: {
    // Navbar
    'home': '首页',
    'generate': '开始生成',
    'features': '功能特点',
    'examples': '示例展示',
    'faq': '常见问题',
    'free_trial': '免费试用',
    'language': '语言',
    'english': '英语',
    'chinese': '中文',
    
    // Footer
    'quick_links': '快速链接',
    'resources': '资源',
    'contact_us': '联系我们',
    'blog_posts': '博客文章',
    'tutorials': '使用教程',
    'updates': '更新日志',
    'privacy_policy': '隐私政策',
    'terms_of_service': '服务条款',
    'all_rights_reserved': '保留所有权利',
    
    // General UI text
    'learn_more': '了解更多',
    'get_started': '立即开始',
    'try_free': '免费试用',
    'advanced': '先进',
    
    // Homepage
    'hero_title': '美腿图像生成器',
    'hero_description': 'Legs Generator是一款先进的legs generator，利用先进技术生成高清晰度、高质量的美腿图像。无论您是摄影师、设计师还是内容创作者，我们的legs generator都能帮助您快速创建逼真、多样化的美腿素材。',
    'try_now': '立即体验Legs Generator',
    'daily_images': '每日生成的美腿图像',
    'style_options': '多样化的美腿风格选择',
    'satisfied_users': '满意用户使用我们的legs generator',
    'why_choose': '为什么选择Legs Generator美腿生成器',
    'feature_intro': '我们的美腿生成器提供了业界领先的功能和技术，让创作美腿图像变得前所未有的简单和高效。',
    'home_high_quality': '高质量图像生成',
    'home_high_quality_desc': '我们的legs generator采用最先进的技术算法，生成超高质量、细节丰富的美腿图像，分辨率可达到4K。',
    'diverse_styles': '多样化风格选择',
    'diverse_styles_desc': '从优雅到性感，从休闲到正式，Legs Generator美腿生成器提供50多种不同风格的美腿生成，满足您的各种创作需求。',
    'fast_generation': '快速生成',
    'fast_generation_desc': '仅需几秒钟，我们的legs generator就能生成您需要的美腿图像，大大提高您的工作效率。',
    'text_based': '文本描述生成',
    'text_based_desc': '只需输入文字描述，我们的legs generator就能理解您的需求，生成符合您期望的美腿图像。',
    'security': '安全与隐私',
    'security_desc': '我们高度重视用户隐私，所有通过legs generator生成的图像和用户数据都经过严格加密保护。',
    'cross_platform': '跨平台支持',
    'cross_platform_desc': '无论是PC还是移动设备，您都可以随时随地使用我们的legs generator创作精美图像。',
    'how_to_use': '如何使用Legs Generator',
    'how_to_intro': '我们的美腿生成平台操作简单直观，只需三步即可获得高质量的美腿图像。',
    'step1_title': '描述您的需求',
    'step1_desc': '在文本框中详细描述您想要生成的美腿图像，包括风格、姿势、服装等细节。我们的legs generator会根据您的描述进行创作。',
    'step2_title': '选择风格和参数',
    'step2_desc': '选择您偏好的美腿风格，并调整各种参数以获得最佳效果。Legs Generator提供多种风格选项，让您的美腿生成更符合预期。',
    'step3_title': '获取生成结果',
    'step3_desc': '点击生成按钮，几秒钟内我们的legs generator就会生成高质量的美腿图像。您可以下载、编辑或重新生成，直到满意为止。',
    'start_using': '开始使用Legs Generator',
    'showcase': 'Legs Generator作品展示',
    'showcase_intro': '探索我们legs generator创建的精彩作品，感受先进技术带来的创作可能性。',
    'example': '美腿示例',
    'style': '美腿风格',
    'created_by': '由Legs Generator创作，完全基于文本描述生成的逼真美腿图像。',
    'create_own': '想要创建您自己的美腿图像？立即尝试我们的legs generator！',
    'create_free': '免费生成您的美腿图像',
    'user_reviews': '用户对Legs Generator的评价',
    'reviews_intro': '听听我们的用户如何评价Legs Generator的美腿生成服务。',
    'testimonial1': '"Legs Generator的美腿生成器彻底改变了我的工作流程。作为一名时尚摄影师，我需要大量的参考素材，这个legs generator工具为我节省了大量时间和成本。"',
    'testimonial2': '"作为一名内容创作者，我经常需要各种素材。Legs Generator提供的美腿图像质量超出我的预期，完全可以媲美专业摄影作品。"',
    'testimonial3': '"我尝试过很多图像生成工具，但Legs Generator是最好的。它对于文本描述的理解能力非常强，总能精准捕捉我想要的美腿风格。"',
    'common_questions': '关于Legs Generator的常见问题',
    'questions_intro': '获取您可能对Legs Generator美腿生成服务的疑问解答。',
    'what_is_legs_gen': '什么是legs generator？',
    'what_is_answer': 'Legs generator是一种利用先进技术，根据文本描述或其他输入参数自动生成美腿图像的工具。Legs Generator使用最先进的模型，能够创建高度逼真、细节丰富的腿部图像，适用于各种创意和专业场景。',
    'applications': 'Legs Generator的美腿生成器有哪些应用场景？',
    'applications_answer': '我们的legs generator广泛应用于时尚设计、广告创作、内容营销、社交媒体、电商产品展示等领域。无论您是设计师、摄影师、内容创作者还是市场营销人员，都能从中受益。',
    'copyright': '使用Legs Generator生成的美腿图像有版权限制吗？',
    'copyright_answer': '通过Legs Generator创建的图像，您拥有完全使用权。您可以将生成的图像用于个人或商业项目，无需额外授权或归属。详细条款请参阅我们的服务条款。',
    'image_quality_question': 'Legs Generator生成的图像质量如何？',
    'image_quality_answer': 'Legs Generator生成的美腿图像具有极高的质量和逼真度。我们的先进模型经过数百万图像的训练，能够理解复杂的文本描述，并生成符合要求的高分辨率美腿图像，细节丰富，质量可媲美专业摄影作品。',
    'technical_knowledge': '我需要具备技术或设计知识才能使用Legs Generator吗？',
    'technical_knowledge_answer': '不需要。我们的legs generator设计得非常用户友好，即使您没有技术或设计背景，也能轻松使用。只需输入您想要的美腿描述，选择相应的风格和参数，系统就会为您生成满意的结果。',
    'supported_languages': 'Legs Generator支持哪些语言的文本描述？',
    'supported_languages_answer': '目前，我们的legs generator支持中文、英文、日文、韩文等多种语言的文本描述输入。无论您使用哪种语言，我们的先进技术都能理解您的需求并生成相应的美腿图像。',
    'experience_now': '立即体验Legs Generator的魅力',
    'join_millions': '加入全球数百万用户的行列，体验顶尖的美腿生成技术。注册即可免费体验，开启您的创意之旅！',
    'free_start': '免费开始使用',
    
    // Generate page
    'create_page_title': 'Legs Generator',
    'create_page_desc': '使用Legs Generator的先进技术，轻松生成高质量美腿图像。只需描述您想要的效果，我们的先进legs generator将为您创建精美的腿部图像。',
    'best_results': '如何获得最佳Legs Generator效果',
    'detailed_important': '详细描述很重要',
    'detailed_desc': '提供详细的描述可以帮助我们的legs generator更好地理解您的需求。包括姿势、风格、服装、环境等详细信息，将获得更精准的生成结果。',
    'try_styles': '尝试不同风格',
    'try_styles_desc': 'Legs Generator提供多种美腿风格选项，从优雅到性感，从日常到艺术。尝试不同风格组合，探索legs generator的创意可能性。',
    'save_results': '保存您喜欢的结果',
    'save_results_desc': '当我们的legs generator创建出您满意的图像时，别忘了下载并保存。您可以将这些图像用于各种创意和专业项目。',
    'upgrade_pro': '升级到Legs Generator专业版',
    'upgrade_desc': '获取更多高级功能，解锁我们legs generator的全部潜力。专业版用户可享受更高分辨率输出、批量生成、优先处理等特权。',
    'learn_pro': '了解专业版',
    'view_pricing': '查看价格',
    
    // GenerationForm component
    'create_your_legs': '创建您的美腿图像',
    'describe_legs': '描述您想要的美腿图像',
    'detailed_description_helps': '详细的描述将帮助我们的legs generator创建更符合您期望的图像',
    'select_style': '选择风格',
    'advanced_options': '高级选项',
    'generation_count': '生成数量',
    'standard': '标准',
    'high_quality': '高质量',
    'ultra_high_quality': '超高质量',
    'generating': '生成中...',
    'start_generating': '开始生成美腿图像',
    
    // ImageResult component
    'generation_results': '生成结果',
    'your_images_will_appear': '您的美腿图像将在这里显示',
    'use_form_to_start': '使用左侧的表单开始生成。我们的先进legs generator将根据您的描述创建逼真的美腿图像。',
    'generated_leg_image': '生成的美腿图像',
    'no_image_selected': '暂无选中图像',
    'download_image': '下载图像',
    'regenerate': '重新生成',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 默认使用英语
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // 尝试从localStorage中获取语言设置
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguage(savedLanguage);
    } else {
      // 检测浏览器语言
      const browserLang = navigator.language.split('-')[0];
      setLanguage(browserLang === 'zh' ? 'zh' : 'en');
    }
  }, []);

  // 更新语言并存储到localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
    // 可以添加更新文档语言属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  };

  // 翻译函数，根据当前语言返回相应文本
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 创建一个自定义钩子，方便组件使用语言上下文
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 