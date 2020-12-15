const colors = require('tailwindcss/colors')


module.exports = {
  darkMode: false,
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/**/*.vue",
      "./src/**/*.html"
    ]
  },
  theme: {
    opacity: {
      '20': '0.2',
      '50': '0.5',
      '80': '0.8',
      '90': '0.9',
    },
    colors: {
      gray: colors.warmGray,
      red: colors.red,
      blue: colors.cyan,
      green: colors.lime,
      white: colors.white 
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
