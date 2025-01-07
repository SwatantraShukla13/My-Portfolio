/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors:{
        'blue':{ 
          50 :'#eff6ff',
          200 : '#bfdbfe',
          400 :'#60a5fa',
        },
      },
      bg:{
        'gray':{
          250:'#EEEEEE',
        }
      },
      spacing:{
            '18':'4.5rem',
        
      },
    }
    
    
  },
  plugins: [],
  darkMode: 'selector',
  
}


