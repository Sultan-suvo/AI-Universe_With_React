/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0c3bd6",

          "secondary": "#cc1e89",

          "accent": "#25ed75",

          "neutral": "#33233E",

          "base-100": "#4B484B",

          "info": "#26BEE8",

          "success": "#2ACFA6",

          "warning": "#B07F03",

          "error": "#E64C61",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

