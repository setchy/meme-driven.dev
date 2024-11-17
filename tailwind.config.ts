import TailwindCSSTypography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-kb-theme="dark"]'],
  content: ['./src/**/*.{astro,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navbar: '#b60821',
      },
    },
  },
  plugins: [TailwindCSSTypography],
};

export default config;
