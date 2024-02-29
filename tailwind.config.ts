import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      content: {
        dragIcon: 'url("../assets/images/icon-drag-and-drop.svg")',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'purple-dark': '#633CFF',
        purple: '#BEADFF',
        'purple-light': '#EFEBFF',
        black: '#333333',
        gray: '#737373',
        'gray-light': '#D9D9D9',
        'white-light': '#FAFAFA',
        white: '#FFFFFF',
        red: '#FF3939',
      },
    },
  },
  plugins: [],
};
export default config;
