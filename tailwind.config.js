/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // custom user configuration
      bgGradientDeg: {
        75: '75deg',
      }
    }
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        jobs: {
          words: ['Software Engineer.', 'Cybersecurity Specialist.', '3D Designer.',],
          delay: .3,
          writeSpeed: .15,
          eraseSpeed: .15,
          pauseBetween: 2,
        }
      }
    }),
    require('tailwind-scrollbar-hide'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              10: '10deg', // bg-gradient-10
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              120: '120deg',
              135: '135deg',
            }
          )
        }
      )
    })
  ],
  darkMode: 'class',

}
