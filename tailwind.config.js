/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#bc3fde',
          light: '#d774ff',
          dark: '#9c2ac5',
        },
      },
    },
  },
  plugins: [],
};
