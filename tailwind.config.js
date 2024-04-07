const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        'league': ['"League Spartan"', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        'extra-light': 100,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extra-bold': 800,
        'black': 900,
      },
    },
  },
  theme: {
    extend: {
      fontFamily: {
        'montserrat-alt': ['"Montserrat Alternates"', 'sans-serif'],
      },
      fontWeight: {
        'extra-light': 100,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extra-bold': 800,
        'black': 900,
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}