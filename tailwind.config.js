/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif']
      },
      colors: {
        'needle': '#e74c3c',
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
      }
    },
  },
  plugins: [],
}
