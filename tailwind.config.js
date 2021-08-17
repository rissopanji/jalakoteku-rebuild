const colors = require('tailwindcss/colors');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Custom Color
        orange1: "#FFF3E5",
        orange2: "#F89F39",
        orange2b: "#F79322",
        gray0: "#F7F6F5",
        gray1: "#EFEDEB",
        gray2: "#D9D7D4",
        gray3: "#756B5E",
        gray4: "#443E37",
        red0: "#FB9894",
        green: "#19CC79",
        black0: "#333333",
      },
      fontFamily: {
        inter: ['Inter']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
