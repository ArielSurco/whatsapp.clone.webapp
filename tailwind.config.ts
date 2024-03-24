import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/chat/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-300': '#374248',
        'primary-400': '#2a3942',
        'primary-500': '#233138',
        'primary-525': '#222e35',
        'primary-550': '#202c33',
        'primary-700': '#111b21',
        'primary-900': '#0c1317',

        'light-100': '#e9edef',
        'light-300': '#d1d7db',
        'light-500': '#8696a0',
      },
    },
  },
  plugins: [],
}

export default config
