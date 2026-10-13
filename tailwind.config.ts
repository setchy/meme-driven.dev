import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import TailwindCSSMotion from 'tailwindcss-motion';

const config: Config = {
  content: ['./src/**/*.{astro,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navbar: '#b60821',
        surface: colors.gray[100],
        canvas: colors.gray[50],
        panel: colors.gray[800],
        ink: {
          DEFAULT: colors.gray[800],
          muted: colors.gray[600],
        },
        accent: {
          DEFAULT: colors.red[600],
          hover: colors.red[700],
          soft: colors.red[300],
        },
      },
    },
  },
  plugins: [TailwindCSSMotion],
};

export default config;
