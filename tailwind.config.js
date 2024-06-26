/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      default: '#1C1B1F',
      white : '#FBFBFB',
      grey: "#D2D2D2",
      lightgrey: "#d4d4d4",
      blue : '#06b6d4',
      red: '#FF4B4B',
      black: {
        200: "#adadad",
        400: "#a3a3a3",
        600: "#525252"
      }
    }, 
    fontFamily: {
      Pthin: ["Poppins-Thin", "Sans-Serif"],
      Pextralight: ["Poppins-ExtraLight", "Sans-Serif"],
      Pbold: ["Poppins-Bold", "Sans-Serif"],
      Pmedium: ["Poppins-Medium", "Sans-Serif"],
      Pregular: ["Poppins-Regular", "Sans-Serif"],
      Psemibold: ["Poppins-SemiBold", "Sans-Serif"]
    }
  },
  plugins: [],
}

