import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-gradient opacity-80 z-0"></div>
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="mb-6">
                <span className="block mb-2">AI驱动的</span>
                <span className="gradient-text">美腿图像生成器</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl">
                LegsAI是一款先进的<strong>AI legs generator</strong>，利用人工智能技术生成高清晰度、高质量的美腿图像。无论您是摄影师、设计师还是内容创作者，我们的<strong>AI legs generator</strong>都能帮助您快速创建逼真、多样化的美腿素材。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/generate" className="btn btn-secondary">
                  立即体验AI Legs Generator
                </Link>
                <Link href="#features" className="btn btn-outline">
                  了解更多功能
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-dark-lighter p-2 rounded-xl border border-accent-gold border-opacity-30 shadow-2xl">
                <div 
                  className="w-full h-[400px] rounded-lg bg-dark flex items-center justify-center"
                >
                  <span className="text-accent-gold">此处将显示美腿图像</span>
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
              <p className="text-gray-300">每日生成的美腿图像</p>
            </div>
            <div className="p-6">
              <h3 className="text-accent-gold mb-2">50+</h3>
              <p className="text-gray-300">多样化的美腿风格选择</p>
            </div>
            <div className="p-6">
              <h3 className="text-accent-gold mb-2">100万+</h3>
              <p className="text-gray-300">满意用户使用我们的AI legs generator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">为什么选择LegsAI <span className="gradient-text">AI Legs Generator</span></h2>
            <p className="max-w-3xl mx-auto text-gray-300">
              我们的AI美腿生成器提供了业界领先的功能和技术，让创作美腿图像变得前所未有的简单和高效。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover:border-accent-gold transition-all duration-300">
              <div className="mb-4 text-accent-gold text-4xl">✨</div>
              <h4 className="mb-3">高质量AI生成</h4>
              <p className="text-gray-300">
                我们的AI legs generator采用最先进的人工智能算法，生成超高质量、细节丰富的美腿图像，分辨率可达到4K。
              </p>
            </div>
            
            <div className="card hover:border-accent-gold transition-all duration-300">
              <div className="mb-4 text-accent-gold text-4xl">🎨</div>
              <h4 className="mb-3">多样化风格选择</h4>
              <p className="text-gray-300">
                从优雅到性感，从休闲到正式，LegsAI美腿生成器提供50多种不同风格的美腿生成，满足您的各种创作需求。
              </p>
            </div>
            
            <div className="card hover:border-accent-gold transition-all duration-300">
              <div className="mb-4 text-accent-gold text-4xl">⚡</div>
              <h4 className="mb-3">快速生成</h4>
              <p className="text-gray-300">
                仅需几秒钟，我们的AI legs generator就能生成您需要的美腿图像，大大提高您的工作效率。
              </p>
            </div>
            
            <div className="card hover:border-accent-gold transition-all duration-300">
              <div className="mb-4 text-accent-gold text-4xl">💬</div>
              <h4 className="mb-3">文本描述生成</h4>
              <p className="text-gray-300">
                只需输入文字描述，我们的AI legs generator就能理解您的需求，生成符合您期望的美腿图像。
              </p>
            </div>
            
            <div className="card hover:border-accent-gold transition-all duration-300">
              <div className="mb-4 text-accent-gold text-4xl">🔒</div>
              <h4 className="mb-3">安全与隐私</h4>
              <p className="text-gray-300">
                我们高度重视用户隐私，所有通过AI legs generator生成的图像和用户数据都经过严格加密保护。
              </p>
            </div>
            
            <div className="card hover:border-accent-gold transition-all duration-300">
              <div className="mb-4 text-accent-gold text-4xl">📱</div>
              <h4 className="mb-3">跨平台支持</h4>
              <p className="text-gray-300">
                无论是PC还是移动设备，您都可以随时随地使用我们的AI legs generator创作精美图像。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-dark-gradient">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">如何使用 <span className="gradient-text">AI Legs Generator</span></h2>
            <p className="max-w-3xl mx-auto text-gray-300">
              我们的AI美腿生成平台操作简单直观，只需三步即可获得高质量的美腿图像。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-accent-gold text-dark flex items-center justify-center text-xl font-bold">1</div>
              <div className="card h-full">
                <h4 className="mb-3">描述您的需求</h4>
                <p className="text-gray-300">
                  在文本框中详细描述您想要生成的美腿图像，包括风格、姿势、服装等细节。我们的AI legs generator会根据您的描述进行创作。
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-accent-gold text-dark flex items-center justify-center text-xl font-bold">2</div>
              <div className="card h-full">
                <h4 className="mb-3">选择风格和参数</h4>
                <p className="text-gray-300">
                  选择您偏好的美腿风格，并调整各种参数以获得最佳效果。LegsAI提供多种风格选项，让您的AI legs生成更符合预期。
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-accent-gold text-dark flex items-center justify-center text-xl font-bold">3</div>
              <div className="card h-full">
                <h4 className="mb-3">获取生成结果</h4>
                <p className="text-gray-300">
                  点击生成按钮，几秒钟内我们的AI legs generator就会生成高质量的美腿图像。您可以下载、编辑或重新生成，直到满意为止。
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/generate" className="btn btn-secondary">
              开始使用AI Legs Generator
            </Link>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">AI Legs Generator <span className="gradient-text">作品展示</span></h2>
            <p className="max-w-3xl mx-auto text-gray-300">
              探索我们AI legs generator创建的精彩作品，感受人工智能带来的创作可能性。
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="overflow-hidden rounded-xl bg-dark-lighter p-2 border border-accent-silver border-opacity-20">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-dark flex items-center justify-center">
                  <span className="text-accent-gold">美腿示例 #{index}</span>
                </div>
                <div className="p-4">
                  <h5 className="mb-2">美腿风格 #{index}</h5>
                  <p className="text-gray-300 text-sm">
                    由LegsAI的AI legs generator创作，完全基于文本描述生成的逼真美腿图像。
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">想要创建您自己的美腿图像？立即尝试我们的AI legs generator！</p>
            <Link href="/generate" className="btn btn-secondary">
              免费生成您的美腿图像
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-dark-gradient">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">用户对 <span className="gradient-text">AI Legs Generator</span> 的评价</h2>
            <p className="max-w-3xl mx-auto text-gray-300">
              听听我们的用户如何评价LegsAI的美腿生成服务。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="text-accent-gold text-2xl mr-2">★★★★★</div>
                <span className="text-gray-300">5.0</span>
              </div>
              <p className="text-gray-300 mb-4">
                "LegsAI的美腿生成器彻底改变了我的工作流程。作为一名时尚摄影师，我需要大量的参考素材，这个AI legs generator工具为我节省了大量时间和成本。"
              </p>
              <div className="flex items-center">
                <div className="font-medium">张小明</div>
                <div className="mx-2">•</div>
                <div className="text-gray-400">专业摄影师</div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="text-accent-gold text-2xl mr-2">★★★★★</div>
                <span className="text-gray-300">5.0</span>
              </div>
              <p className="text-gray-300 mb-4">
                "作为一名内容创作者，我经常需要各种素材。LegsAI的AI legs generator提供的美腿图像质量超出我的预期，完全可以媲美专业摄影作品。"
              </p>
              <div className="flex items-center">
                <div className="font-medium">李婷</div>
                <div className="mx-2">•</div>
                <div className="text-gray-400">社交媒体影响者</div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="text-accent-gold text-2xl mr-2">★★★★★</div>
                <span className="text-gray-300">4.9</span>
              </div>
              <p className="text-gray-300 mb-4">
                "我尝试过很多AI图像生成工具，但LegsAI的美腿生成器是最好的。它对于文本描述的理解能力非常强，总能精准捕捉我想要的美腿风格。"
              </p>
              <div className="flex items-center">
                <div className="font-medium">王大海</div>
                <div className="mx-2">•</div>
                <div className="text-gray-400">平面设计师</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">关于 <span className="gradient-text">AI Legs Generator</span> 的常见问题</h2>
            <p className="max-w-3xl mx-auto text-gray-300">
              获取您可能对LegsAI美腿生成服务的疑问解答。
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h4 className="mb-3">什么是AI legs generator？</h4>
              <p className="text-gray-300">
                AI legs generator是一种利用人工智能技术，根据文本描述或其他输入参数自动生成美腿图像的工具。LegsAI的美腿生成器使用最先进的AI模型，能够创建高度逼真、细节丰富的腿部图像，适用于各种创意和专业场景。
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">LegsAI的美腿生成器有哪些应用场景？</h4>
              <p className="text-gray-300">
                我们的AI legs generator广泛应用于时尚设计、广告创作、内容营销、社交媒体、电商产品展示等领域。无论您是设计师、摄影师、内容创作者还是市场营销人员，都能从中受益。
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">使用LegsAI生成的美腿图像有版权限制吗？</h4>
              <p className="text-gray-300">
                通过LegsAI的AI legs generator创建的图像，您拥有完全使用权。您可以将生成的图像用于个人或商业项目，无需额外授权或归属。详细条款请参阅我们的服务条款。
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">AI legs generator生成的图像质量如何？</h4>
              <p className="text-gray-300">
                LegsAI生成的美腿图像具有极高的质量和逼真度。我们的AI模型经过数百万图像的训练，能够理解复杂的文本描述，并生成符合要求的高分辨率美腿图像，细节丰富，质量可媲美专业摄影作品。
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">我需要具备AI或设计知识才能使用LegsAI吗？</h4>
              <p className="text-gray-300">
                不需要。我们的AI legs generator设计得非常用户友好，即使您没有AI或设计背景，也能轻松使用。只需输入您想要的美腿描述，选择相应的风格和参数，系统就会为您生成满意的结果。
              </p>
            </div>
            
            <div className="card">
              <h4 className="mb-3">LegsAI支持哪些语言的文本描述？</h4>
              <p className="text-gray-300">
                目前，我们的AI legs generator支持中文、英文、日文、韩文等多种语言的文本描述输入。无论您使用哪种语言，我们的AI都能理解您的需求并生成相应的美腿图像。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-dark to-secondary-dark">
        <div className="container text-center">
          <h2 className="mb-6">立即体验 <span className="text-accent-gold">AI Legs Generator</span> 的魅力</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            加入全球数百万用户的行列，体验顶尖的AI美腿生成技术。注册即可免费体验，开启您的创意之旅！
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/generate" className="btn bg-accent-gold text-dark hover:bg-opacity-90">
              免费开始使用
            </Link>
            <Link href="/#features" className="btn btn-outline">
              了解更多功能
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 