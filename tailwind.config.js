/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'school-blue': '#1e3a8a',
        'school-gold': '#fbbf24',
      },
    },
  },
  plugins: [],
}