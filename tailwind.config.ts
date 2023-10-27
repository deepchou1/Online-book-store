import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Maison Neue"'],
      mono: ['"Maison Neue Mono"'],
    },

    extend: {
      colors: {
        purple: {
          DEFAULT: "#2A1D5D",
          light: "#402F7E",
           "very-light": "#9AB9F4",
        },
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
}
export default config
