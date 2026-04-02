/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "footerImg": "url('/depi/public/favicon.svg')",
      }
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}


