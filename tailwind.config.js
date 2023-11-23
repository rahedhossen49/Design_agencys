/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      poppin:['Poppins', 'sans-serif']
    },
    extend: {
      colors:{
       clight: '#D7F5DC',
       cDark: '#20b15a',
       cOrange: "#F55F1D" 
      },
      backgroundColor:{
        clight: '#D7F5DC',
        cDark: '#20b15a',
        clight2: '#F8FFF9',
        clight3: '#F0FDF4'
      }
    },
  },
  plugins: [],
};
