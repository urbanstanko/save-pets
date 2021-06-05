module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      cookie: {
        light: '#E0C6AD',
        DEFAULT: '#86624A',
        dark: '#4B372C'
      },
      tongue: {
        light: '#F3A5BA',
        DEFAULT: '#EE809D',
        dark: '#E74B75'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
