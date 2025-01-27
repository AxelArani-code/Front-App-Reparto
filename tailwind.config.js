const { heroui } = require("@heroui/react");
/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}

 