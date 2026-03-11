/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'claro-red': '#E30613',
        'claro-yellow': '#FFD100',
      },
    },
  },
  plugins: [],
};
