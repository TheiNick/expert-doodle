/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#007BFF",
        "background-light": "#F4F6F8",
        "background-dark": "#0f1923",
        "text-heading": "#1c1e21",
        "text-body": "#333333",
        "status-success": "#28A745",
        "status-warning": "#FFC107",
        "status-danger": "#DC3545",
        "status-info": "#17A2B8",
      },
      fontFamily: {
        "display": ["Rubik", "Work Sans", "Noto Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "8px",
        "lg": "12px",
        "xl": "16px",
        "full": "9999px",
      },
    },
  },
  plugins: [],
}
