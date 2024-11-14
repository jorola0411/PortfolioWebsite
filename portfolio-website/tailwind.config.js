/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '96rem',
        'md': '40rem'
      },
      width: {
        '96': '80rem',
        '70': '60rem',
      },
      height: {
        '96': '80rem',
        '70': '60rem',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        karma: ['Karma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

