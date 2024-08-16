import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        open_sans: ['open-sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
  },
  plugins: [],
  },

}


