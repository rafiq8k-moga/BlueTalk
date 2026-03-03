import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blueTalk: {
          50: '#f3f8ff',
          100: '#e5f0ff',
          500: '#3b82f6',
          700: '#1d4ed8',
          900: '#0f172a'
        }
      }
    }
  },
  plugins: []
};

export default config;
