/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'bx-sdw': '0 0 10px rgba(0,0,0,.09)'
      },
      fontFamily: {
        'abril': ["Abril Fatface","system-ui"],
        'rufina' : ["Rufina", "cursive"],
        'roja' : ["Rozha One", "fantasy"],
        'yes' : ["Yeseva One", "serif"],
        'joseph' : ["Josefin Sans", "sans-serif"]
    },
    width:{
      'car' : "600px"
    },
    textColor:{
      'denim': "#002244"
    }
  },
  plugins: [],
}
}
