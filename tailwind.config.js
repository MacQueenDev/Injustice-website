/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: {
          950: '#07080c',
          900: '#0b0d13',
          850: '#0f1219',
          800: '#141822',
          700: '#1c2130',
          600: '#252b3d',
          500: '#333a50'
        },
        brand: {
          DEFAULT: '#e11d48',
          light: '#fb7185',
          dark: '#9f1239'
        },
        gold: {
          DEFAULT: '#f5c451',
          light: '#fde68a',
          dark: '#b8912f'
        },
        aqua: {
          DEFAULT: '#22d3ee',
          dark: '#0e7490'
        }
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
        'radial-brand':
          'radial-gradient(circle at 50% 0%, rgba(225,29,72,0.18) 0%, transparent 60%)'
      },
      boxShadow: {
        'card-glow': '0 0 0 1px rgba(255,255,255,0.06), 0 18px 40px -18px rgba(0,0,0,0.9)',
        'gold-edge': 'inset 0 0 0 1px rgba(245,196,81,0.45)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'slide-in': 'slide-in 0.4s ease-out both'
      }
    }
  },
  plugins: []
};