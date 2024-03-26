import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/chat/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'chat-pattern': 'url("/img/chat-pattern.png")',
      },
      colors: {
        'primary-300': '#374248',
        'primary-400': '#2a3942',
        'primary-500': '#233138',
        'primary-525': '#222e35',
        'primary-550': '#202c33',
        'primary-700': '#111b21',
        'primary-900': '#0c1317',
        'primary-950': '#0b141a',

        'light-100': '#e9edef',
        'light-300': '#d1d7db',
        'light-500': '#8696a0',

        'success-700': '#005c4b',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.message-tail': {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)',
        },
        '.message-tail-reverse': {
          clipPath: 'polygon(0 0, 100% 0, 0 100%, 0 0)',
        },
      })
    }),
  ],
}

export default config
