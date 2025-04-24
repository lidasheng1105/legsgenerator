/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#4A1D5E', // 深紫色
          DEFAULT: '#5D2277', // 紫色
          light: '#824C96', // 浅紫色
        },
        secondary: {
          dark: '#7A0A2C', // 深酒红色
          DEFAULT: '#9B0B35', // 酒红色
          light: '#C50E44', // 浅酒红色
        },
        accent: {
          gold: '#D4AF37', // 金色
          silver: '#C0C0C0', // 银色
          pink: '#FF6B91', // 粉红色
          blue: '#3AA1FF', // 亮蓝色
        },
        dark: {
          DEFAULT: '#1A1A2E', // 深色背景
          lighter: '#25254B', // 稍浅的深色
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Raleway', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dark-gradient': 'linear-gradient(to right, #1A1A2E, #25254B, #1A1A2E)',
      },
    },
  },
  plugins: [],
} 