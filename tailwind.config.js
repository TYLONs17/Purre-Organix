/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enabled dark mode
  theme: {
    extend: {
      colors: {
        'light': {
          'primary': '#064E3B', // green-950
          'secondary': '#059669', // green-700
          'background': '#D1FAE5', // green-200
          'accent': '#059669' // green-600
        },
        'dark': {
          'primary': '#D1FAE5', // green-200
          'secondary': '#34D399', // green-400
          'background': '#064E3B', // green-950
          'accent': '#10B981' // green-300
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        widest: '.25em',
      },
      fontSize: {
        '10xl': '8rem',
      },
      boxShadow: {
        'top': '0 -2px 4px 0 rgba(0, 0, 0, 0.1)',
        'top-sm': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
        'top-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
        'top-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [
    require('tailwind-extended-shadows'),
  ],
};

