module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
          indigo: '#6366f1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      keyframes: {
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        floatUp: {
          '0%': { transform: 'translateY(2px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        borderFlow: 'borderFlow 6s linear infinite',
        floatUp: 'floatUp 400ms ease-out forwards'
      }
    }
  },
  plugins: []
};
