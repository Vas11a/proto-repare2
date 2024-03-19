/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    
  ],
  theme: {
    extend: {
      colors:{
        def_green: '#15372C',
        def_orange: '#FF7331'
      },
      fontSize: {
        '4.5xl': '40px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}