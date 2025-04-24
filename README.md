# LegsAI - AI美腿生成网站

## 项目概述

LegsAI (www.legsgenerator.com) 是一个利用AI技术生成性感美腿图像的网站。该项目旨在为用户提供一个简单易用、视觉效果高级的平台，通过文本描述生成各种风格的美腿图像。

### 项目目标

- 创建一个视觉效果"性感高级"的AI美腿生成网站
- 验证市场需求，测试用户对此类内容的兴趣
- 初期保持功能简单，专注于核心体验
- 通过Google流量分析来评估真实需求

## 技术栈

- **前端框架**: Next.js
- **样式解决方案**: Tailwind CSS
- **API请求**: Axios
- **通知组件**: React Hot Toast
- **部署平台**: Vercel (推荐)
- **AI服务**: 硅基流动 (SiliconFlow) API

## 功能规划

### 第一阶段核心功能（MVP）

1. **基础文生图功能**
   - 文本输入框，用于描述需要生成的美腿图像
   - 2-3个基础风格选项（优雅、性感、时尚）
   - 生成按钮和结果展示区域

2. **简单用户界面**
   - 高级感的视觉设计（深色背景，优雅排版）
   - 直观的表单控件
   - 清晰的结果展示

3. **基本导航**
   - 首页：介绍网站功能和展示示例
   - 生成页：核心功能区域

## 页面设计参考

### 视觉风格指南

- **主色调**: 深紫色与酒红色组合，传达优雅与性感
- **辅助色**: 金色或银色点缀，增添高级感
- **背景**: 深色渐变背景，营造神秘氛围
- **强调色**: 适当的亮色点缀（如粉红或亮蓝）突出关键操作按钮
- **排版**: 优雅的无衬线字体（如Montserrat、Raleway）
- **空间**: 充分利用留白增强高级感

### 页面布局参考

- **导航区域**: 顶部简洁导航
- **生成控制区**: 左侧控制面板
- **结果展示区**: 右侧大尺寸展示区域

## 项目结构
```
legs-ai/
├── app/ # Next.js App Router
│ ├── page.tsx # 首页
│ ├── generate/ # 生成页面文件夹
│ │ └── page.tsx # 生成页面
│ ├── layout.tsx # 全局布局
│ └── globals.css # 全局样式
├── components/ # React组件
│ ├── Navbar.tsx # 导航栏
│ ├── Footer.tsx # 页脚
│ ├── GenerationForm.tsx # 生成表单
│ └── ImageResult.tsx # 结果显示
├── public/ # 静态资源
│ └── images/ # 示例图片
├── lib/ # 公共函数
│ └── api.ts # API调用函数
└── .env.local # 环境变量(包含API密钥)
```

## 快速开始

1. 克隆项目
```bash
git clone https://github.com/yourusername/legs-ai.git
cd legs-ai
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
在项目根目录创建`.env.local`文件，添加如下配置:
```
NEXT_PUBLIC_SILICONFLOW_API_KEY=your_api_key_here
NEXT_PUBLIC_SILICONFLOW_MODEL_NAME=legs-model
```

4. 运行开发服务器
```bash
npm run dev
```

5. 构建生产版本
```bash
npm run build
```

## API集成

项目使用硅基流动(SiliconFlow) API进行AI图像生成。主要API函数位于`lib/api.ts`中：

```typescript
// 生成单张图像
generateImage(prompt: string, style: string): Promise<string>

// 生成多张图像
generateMultipleImages(prompt: string, style: string, count: number): Promise<string[]>
```

## SEO优化

本项目已针对关键词"ai legs generator"进行了SEO优化，包括：

- 适当的关键词密度(~3%)
- 语义化HTML结构
- 优化的元数据和Open Graph标签
- 丰富的内容（>1000词）

## 联系方式

如有任何问题或建议，请发送邮件至info@legsgenerator.com
