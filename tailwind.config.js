/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),
    function({addBase}){
      addBase({
         '.clip-polygon': {
              'clip-path' : 'polygon(8% 73%, 91% 73%, 100% 100%, 0% 100%);',  
         },
      })
    }
          
],
    
}

