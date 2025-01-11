/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: '#022f12', 
          meduim:'#D9F0CB',
          light: '#e9f8dd',  
          lightGray: '#eaeaea',
          screen:'#F6FFFA' 
        },
      },
      
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'], // الخط الافتراضي
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'], // الخط الـ Bold
      },
    },
  },
  plugins: [],
}

