
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        blob_up: "blob_up 5s infinite",
        blob_down: "blob_down 7s infinite"
      },
      keyframes:{
        blob_up:{
          "0%":{
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%":{
            transform: "translate(20px, -50px) scale(1.05)"
          },
          "66%":{
            transform: "translate(-10px, 20px) scale(0.95)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          }
        },
        blob_down:{
          "0%":{
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%":{
            transform: "translate(-20px, 50px) scale(1.05)"
          },
          "66%":{
            transform: "translate(10px, -20px) scale(0.95)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
}

