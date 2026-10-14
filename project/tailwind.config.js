/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'Century Gothic', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        olive: '#555849',
        moss: { DEFAULT: '#4B4C3A', dark: '#3A3B2E' },
        wine: { DEFAULT: '#7B2D26', dark: '#6B2520' },
        sage: { DEFAULT: '#6B7A5A', dark: '#5A6B49' },
        cream: '#F8F6F0',
      },
    },
  },
  plugins: [],
};
