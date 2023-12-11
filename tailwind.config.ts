import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'multi-gradient': "url('/gradient-bg.png')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand-400': '#5CBB55',
        'brand-200': '#5EFF81',
        'brand-800': '#31832B',
        bg: '#050505',
      },
      fontSize: {
        '6xl': [
          '3.5rem', {
            lineHeight: '3.6rem',
            letterSpacing: '-0.15rem'
          }
        ],
        '3xl': [
          '1.85rem', {
            lineHeight: '1.9rem',
          }
        ],
        '2xl': [
          '1.5rem', {
            lineHeight: '1.7rem',
            letterSpacing: '0.01rem',
            fontWeight: '300'
          }
        ]
      }
    },
  },
  plugins: [],
}
export default config
