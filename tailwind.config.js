const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: true,
  theme: {
      screens: {
        'xs': '320px',
         // => @media (min-width: 320px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'sunset-yellow': '#EEAF61',
        'sunset-orange': '#FB9062',
        'sunset-red': '#EE5D6C',
        'sunset-pink': '#C34993',
        'sunset-purple': '#6A0D83',
        'midnight-purple': '#541388',
        'midnight-blue': '#2E294E',
        'sunrise-blue': '#9381FF',
        'nightsky': '#10061B',
        'cloudy-day': '#F1F0F9',
      },

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'oxanium-extra-light': ['oxanium-extra-light', 'sans-serif'],
        'oxanium-light': ['oxanium-light', 'sans-serif'],
        'oxanium-medium': ['oxanium-medium', 'sans-serif'],
        'oxanium-regular': ['oxanium-regular', 'sans-serif'],
        'oxanium-semibold': ['oxanium-semibold', 'sans-serif'],
        'oxanium-bold': ['oxanium-bold', 'sans-serif'],
        'oxanium-extrabold': ['oxanium-extrabold', 'sans-serif'],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("@tailwindcss/typography"),
  ],
};
