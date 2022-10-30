/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [        
    require('tailwind-typewriter')({
      wordsets: {
          jobs: {
              words: ['Software Engineer.', 'Cybersecurity Specialist.', '3D Designer.',],
              delay: .3,
              writeSpeed: .15,
              eraseSpeed:.15,
              pauseBetween:2,
          }
      }
  })
],
  darkMode: 'class',

}