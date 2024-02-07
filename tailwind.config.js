/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px"
    },
    extend: {
      colors: {
        primary: {
          100: "#5562AD",
          200: "#6171C8"
        },
        secondary: {
          100: '#D9D9D9',
          200: '#808080'
        },
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      backgroundImage: {
        'rebellium-pattern': "url('./src/assets/sekiro.png')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

