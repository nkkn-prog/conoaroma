import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',


        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      },
      gridRowStart: {
        '8': '8;',
        '9': '9;',
        '10': '10;',
        '11': '11;',
        '12': '12;',
        '13': '13;',
      },
      gridRowEnd: {
        '8': '8;',
        '9': '9;',
        '10': '10;',
        '11': '11;',
        '12': '12;',
        '13': '13;',
      },
    },
  },
  plugins: [],
}
export default config
