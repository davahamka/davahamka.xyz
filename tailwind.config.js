module.exports = {
  darkMode:"class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      display:['Plus Jakarta Sans']
    },
    extend: {
      colors:{
        brand:{
          black:"#141414",
          white:"#F5F5F5"
        }
      }
    },
  },
  plugins: [],
}
