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
        'diamond-gradient': "url('/diamond-gradient.png')",
        'conic-gradient': 'bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(to bottom right, #68B566 0%, rgba(9, 11, 8, 0.80) 29%, rgba(32, 36, 32, 0.80) 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #68B566 0%, rgba(9, 11, 8, 0.80) 29%, rgba(32, 36, 32, 0.80) 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #68B566 0%, rgba(9, 11, 8, 0.80) 29%, rgba(32, 36, 32, 0.80) 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #68B566 0%, rgba(9, 11, 8, 0.80) 29%, rgba(32, 36, 32, 0.80) 50%) top right / 50% 50% no-repeat]'
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
            letterSpacing: '-0.07rem'
          }
        ],
        '3xl': [
          '1.85rem', {
            lineHeight: '2rem',
            letterSpacing: '-0.01rem'
          }
        ],
        '2xl': [
          '1.5rem', {
            lineHeight: '1.7rem',
            letterSpacing: '0.01rem',
            fontWeight: '300'
          }
        ]
      },
      fontFamily: {
        mono: ['var(--font-mono)'],
        sans: ['var(--font-nm)'],
      }
    },
  },
  plugins: [],
}
export default config
