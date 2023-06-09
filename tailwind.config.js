/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: "10px",
      sm: "14px",
      base: "16px",
      rem: "16px",
    },
    extend: {
      width: {
        "3/20": "15%",
        "1/20": "5%",
      },
      colors: {
        primary: "#FF725E",
        "light-grey": "#979797",
        "lighter-grey": "#EDEDE9",
        "light-primary": "#E3D5CA",
      },
    },
    plugins: [],
  },
};
