/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      normal: 500,
      bold: 700,
    },
    colors: {
      neutral: {
        100: withOpacity("--neutral-100"),
        200: withOpacity("--neutral-200"),
        300: withOpacity("--neutral-300"),
        400: withOpacity("--neutral-400"),
      },
      white: withOpacity("--white"),
      black: withOpacity("--black"),
      primary: withOpacity("--primary"),
      accent: withOpacity("--accent"),
      error: withOpacity("--error"),
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "shorten-mobile": "url('images/bg-shorten-mobile.svg')",
        "shorten-desktop": "url('images/bg-shorten-desktop.svg')",
        "boost-mobile": "url('images/bg-boost-mobile.svg')",
        "boost-desktop": "url('images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(({ addBase }) =>
      addBase({
        html: { fontSize: "18px" },
      })
    ),
    "prettier-plugin-tailwindcss",
  ],
};
