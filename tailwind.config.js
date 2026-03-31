import colors from "tailwindcss/colors";

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      "primary-light": "#F7F8FC",
      "secondary-light": "#FFFFFF",
      "ternary-light": "#f6f7f8",

      "primary-dark": "#0D2438",
      "secondary-dark": "#102D44",
      "ternary-dark": "#1E3851",

      accent: {
        DEFAULT: "#6366f1",
        dark: "#4f46e5",
        light: "#818cf8",
      },
    },
    animation: {
      blink: "blink 1s step-end infinite",
    },
    keyframes: {
      blink: {
        "0%, 100%": { opacity: "1" },
        "50%": { opacity: "0" },
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "8rem",
      },
    },
  },
};
export const variants = {
  extend: { opacity: ["disabled"] },
};
export const plugins = ["@tailwindcss/forms"];
