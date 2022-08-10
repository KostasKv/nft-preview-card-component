/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {},
    colors: {
      'very-dark-blue-main-bg': 'hsl(217, 54%, 11%)',
      'very-dark-blue-card-bg': 'hsl(216, 50%, 16%)',
      'very-dark-blue-line': 'hsl(215, 32%, 27%)',
      'white': 'hsl(0, 0%, 100%)',
      'soft-blue': 'hsl(215, 51%, 70%)',
      'cyan': 'hsl(178, 100%, 50%)',
    },
    fontFamily: {
      'sans': ['Outfit', 'sans-serif'],
    },
    screens: {
      'sm': '410px',
    },
  },
  plugins: [],
}