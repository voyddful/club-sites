/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#b91c1c',

          secondary: '#0000ff',

          accent: '#a3e635',

          neutral: '#2b2523',

          'base-100': '#1f2937',

          info: '#00d5ff',

          success: '#008900',

          warning: '#f7b000',

          error: '#ff7885',
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [require('daisyui')],
}

export default config
