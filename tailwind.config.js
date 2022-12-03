/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    ".src/layouts/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-blue": "#0284c7",
      },
    },
  },
  plugins: [],
};
