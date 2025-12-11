import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kenya-green': '#00ff88',
        'kenya-teal': '#00d4aa',
        'kenya-gold': '#ffd700',
        'kenya-dark': '#000000',
        'kenya-darker': '#0a0a0a',
      },
    },
  },
  plugins: [],
}
export default config

