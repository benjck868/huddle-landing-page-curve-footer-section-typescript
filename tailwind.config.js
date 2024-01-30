/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "HLPCS-pink": "hsl(322, 100%, 66%)",
        "HLPCS-light-pink": "hsl(321, 100%, 78%)",
        "HLPCS-light-red": "hsl(0, 100%, 63%)",
        "HLPCS-very-dark-cyan": "hsl(192, 100%, 9%)",
        "HLPCS-very-pale-blue": "hsl(207, 100%, 98%)"
      },
      fontFamily:{
        "HLPCS-poppins": ["Poppins", "sans-serif"],
        "HLPCS-open-sans": ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

