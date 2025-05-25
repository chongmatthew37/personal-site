import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'notion-gray': {
          50: 'rgba(247, 247, 247, 0.9)',
          100: 'rgba(241, 241, 241, 0.9)',
          200: 'rgba(226, 226, 226, 0.9)',
        },
      },
      backdropBlur: {
        'sm': '4px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

export default config;
