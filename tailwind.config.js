/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Optional: keep any custom colors you use
        primary: {
          50: '#eef7ff',
          400: '#4fb3ff',
          600: '#0ea5e9'
        }
      }
    }
  },
  plugins: []
};
