/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#0d1117',
          surface: '#161b22',
          border: '#21262d',
          text: {
            primary: '#f0f6fc',
            secondary: '#7d8590',
            muted: '#656d76'
          }
        },
        accent: {
          cyan: '#00d4ff',
          blue: '#0066ff',
          violet: '#8b5cf6'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #00d4ff 0%, #0066ff 50%, #8b5cf6 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 102, 255, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typewriter': 'typewriter 3s steps(40) 1s both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 102, 255, 0.6)' }
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        }
      }
    },
  },
  plugins: [],
};