import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      keyframes: {
        blink: {
          from: {
            borderLeft: 'solid 1px #93c5fd'
          },
          to: {
            borderLeft: 'solid 1px transparent'
          }
        },
        typewriter: {
          '40%, 60%': {
            left: '100%'
          },
          '100%': {
            left: '0'
          }
        },
        jump: {
          '0%': {
            top: '143px'
          },
          '30%': {
            top: '115px'
          },
          '50%': {
            top: '70px'
          },
          '80%': {
            top: '115px'
          },
          '100%': {
            top: '143px'
          }
        },
        cactus: {
          '0%': {
            left: '100%'
          },
          '100%': {
            left: '-20px'
          }
        },
        cactusDisplay: {
          '0%': {
            left: '100%'
          },
          '100%': {
            left: '30%'
          }
        }
      },
      animation: {
        blink: 'blink 1s infinite',
        typewriter:
          'typewriter 4s steps(23) infinite, blink 0.5s steps(23) infinite',
        jump: 'jump 0.3s linear',
        cactus: 'cactus 1.2s infinite linear',
        castusDisplay: 'cactusDisplay 1.2s infinite linear'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}

export default config
