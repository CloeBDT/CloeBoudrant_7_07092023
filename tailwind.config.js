/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./main.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD15B',
        secondary: '#1B1B1B',
        tertiary: '#EDEDED',
        quaternary: '#7A7A7A',
      },
      fontFamily: {
        'anton': ['Anton','sans-serif'],
        'manrope': ['Manrope','sans-serif'],
      },
    },
  },
  plugins: [],
}

