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
		screens:{
			xs: "320px",
		},
  		fontFamily: {
  			sans:  ['var(--font-open-sans)', 'sans-serif'],
  		},
  		colors: {
  			black: '#000000',
  			lightGray: '#D9D9D9',
  			darkergray: '#A9A9A9',
  			blue: '#0D98BA',
  			darkblue: "#095769", 
  		},
		backgroundImage: {
			'custom-gradient': 'linear-gradient(135deg, #0B1C3F, #000000)',
			'custom-dark-gradient': 'linear-gradient(135deg, #0A0F1A, #111827)',
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
