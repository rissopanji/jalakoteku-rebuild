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
        inter: ['Inter', 'sans-serif']
      },
      screens: {
        'xs': '320px',
        '540' : '540px'
      },
      borderRadius: {
        '6px': '0.375rem',
        '16px': '1rem',
        '20px' : '1.25rem',
        '40px': '2.5rem',
        '42px': '2.625rem'
      },
      height: {
        '52px' : '3.25rem',
        '90px' : '5.625rem',
        '200px' : '12.5rem',
        '410px' : '410px',
        '280px' : '17.5rem',
        '360px' : '22.5rem'
      },
      width: {
        '160px' : '10rem',
        '200px' : '12.5rem',
        '280px' : '17.5rem',
        '600px' : '37.5rem',
        '699px' : '43.6875rem',
      },
      gap: {
        '30px' : '1.875rem'
      },
      fontSize: {
        '10px' : '10px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
