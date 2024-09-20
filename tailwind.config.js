/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'grey': '#EFEFEF',
      "grey-100": "#4B3D3D",
      "grey-200": "#9FA5AD",
      'grey-300': '#637381',
      'bgrey': '#BDBDBD',
      'yellow': '#FFC51B',
      "yellow-100": "#ffd900",
      "black":'#000000',
      "orange": '#E27A00',
      "white": '#FFFFFF',
      "orange-200":'#FFA200',
      'orange-100':"#FFBA10",
      
      
    },
    extend: {
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'],
      },
      screens: {
        'phone': '300px',
        
      }
  },
  plugins: [],
}
}