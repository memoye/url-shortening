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
      primary: withOpacity("--primary"),
      accent: withOpacity("--accent"),
      error: withOpacity("--error"),
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/plugin")(({ addBase }) =>
      addBase({
        html: { fontSize: "18px" },
      })
    ),
  ],
};
