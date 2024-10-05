/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js, ts, jsx, tsx, vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    },
  },
  plugins: [],
}

