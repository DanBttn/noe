/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lemon Milk', 'sans-serif'],
      },
      colors: {
        primary: '#4B4C3A',
        secondary: '#FFFFFF',
        accent: '#7B2D26',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out 0.5s both',
      },
    },
  },
  plugins: [],
};
