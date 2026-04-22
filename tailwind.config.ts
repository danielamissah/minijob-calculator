import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', 'Open Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0D5C63',
          light: '#E6F4F5',
        },
        accent: {
          DEFAULT: '#F4A035',
          light: '#FEF3E2',
        },
      },
    },
  },
  plugins: [],
};

export default config;