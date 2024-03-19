/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#FDFBF6',
        'grayMain': '#242422',
        'grayText': '#9E9E9E',
        'redHeart': '#EE2844',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      screens: {
        'tablet': '650px',
        'mobileLg': '500px',
      }
    },
  },
  plugins: [],
}