/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)'],
      },
      colors: {
        // light mode colors
        'v-dark-blue': 'hsl(200, 15%, 8%)', // text
        'dark-gray': 'hsl(0, 0%, 52%)', // input
        'v-light-gray': 'hsl(0, 0%, 98%)', // background

        // dark mode colors
        'dark-blue': 'hsl(209, 23%, 22%)', // elements
        'v-dark-blue-bg': 'hsl(207, 26%, 17%)', // background

        // dark Mode Text & Light Mode Elements
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
