module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#46A5CD',
        background: '#1A2241',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
