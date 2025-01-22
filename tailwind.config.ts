/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
// @ts-ignore
import { keepTheme, colors } from "keep-react/keepTheme";

const colorsPalette = {
  ...colors,
  primary: {
   ...colors.primary,
   500: '#3C3F4E',
   600: '#94A3B9',
   700: 'slate-400',
   800: 'slate-400',
   900: 'slate-400',
  }
}

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        cloudBlue: "#AEE1E1",
        cloudGray: "#D3E0DC",
        cloudGray2: "#b0c8c1",
        cloudPink: "#FCD1D1",
        darkBlue: "#A5CDCE",
        darkPurple: "#5B4B8A",
        deepRed: "#B24A4A",
        mellowPink: "#D19BC0",
        darkTeal: "#004B47",
        slateGray: "#3C3F4E",
        softPlum: "#8D5B9C",
        deepSlate: "#2F4A6E",
      },
     
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-long': {
          '0%': { opacity: '0' },
          '25%': { opacity: '0.25' },
          '50%': { opacity: '0.5' },
          '75%': { opacity: '0.75' },
          '100%': { opacity: '1' },
        },
        'slideInRight': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slideOutLeft': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out forwards',
        'fade-in-long': 'fade-in-long .5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-out-left': 'slideInLeft 0.5s ease-in',
      },
      boxShadow: {
        'text': '1px 1px rgba(50, 50, 70, 0.5)', 
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '1px 1px rgba(50, 50, 70, 0.5)', 
        }
      }, ['responsive', 'hover']);
    }
  ],
};

export default keepTheme(config, colorsPalette);

