/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    'index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    // 'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
    // 'node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      screens:{
        'max-sm': { 'max': '640px' },  // Applies styles for screens smaller than 640px
        'max-md': { 'max': '768px' },  // Applies styles for screens smaller than 768px
        'max-lg': { 'max': '1024px' }, // Applies styles for screens smaller than 1024px
        'max-xl': { 'max': '1280px' }, // Applies styles for screens smaller than 1280px
      }
    },
  },
  plugins:
   [
     flowbite.plugin(),
    //  require('flowbite/plugin')
    
    ],
}

