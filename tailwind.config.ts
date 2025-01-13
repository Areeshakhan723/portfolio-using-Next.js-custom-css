import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-down": "slideDown 1.2s ease-out forwards",
      },
      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(-50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      screens: {
        xs: "320px",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
      },
      colors: {
        black: "#000000",
        lightGray: "#D9D9D9",
        darkergray: "#A9A9A9",
        blue: "#0D98BA",
        darkblue: "#095769",
        bgdarkBlue: "#122142",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #0B1C3F, #0d1c3d)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
