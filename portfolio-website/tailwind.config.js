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
        '7xl': '85rem',
        'md': '40rem',
        'screen-lg': '64rem',
     
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
        ubuntumono: ['Ubuntu Mono', 'sans-serif'],
        karma: ['Karma', 'sans-serif'],
      },
      colors: {
        'light-grey': "#F2F2F2",
        'beige-50': "#FFF8EF",
        'beige-100': "#FFEDD5",
        'beige-200': "#FED8AA",
        'beige-300': "#FDBB74",
        'beige-400': "#FB933C",
        'beige-500': "#F97516",
        'beige-600': "#EA5A0C",
        'beige-700': "#C2420C",
        'beige-800': "#9A3512",
        'beige-900': "#7C2E12",
      },
    },
  },
  plugins: [],
}
