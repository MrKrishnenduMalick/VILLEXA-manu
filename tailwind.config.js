/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#030712",
          900: "#060d1b",
          850: "#091325",
          800: "#0d1b36",
          700: "#13274c",
          600: "#1b3668",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#f5c056",
          500: "#e5a93c",
          600: "#c98928",
          700: "#a16214",
          800: "#854d0e",
          900: "#713f12",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)',
        'glass-gold': '0 8px 32px 0 rgba(0, 0, 0, 0.45), 0 0 20px 0 rgba(229, 169, 60, 0.22), inset 0 1px 1px 0 rgba(255, 235, 170, 0.3)',
        'glow-gold': '0 0 35px -5px rgba(229, 169, 60, 0.4)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #fde68a 0%, #e5a93c 50%, #b4741f 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #fef08a 0%, #f5c056 50%, #c98928 100%)',
      },
    },
  },
  plugins: [],
}

