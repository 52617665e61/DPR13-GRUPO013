/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontSize:{
        'h1' : '48px',
        'h2' : '36px',
        'h3' : '30px',
        'h4' : '24px',
        'h5' : '20px',
        'h6' : '16px'
        
       
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
}

