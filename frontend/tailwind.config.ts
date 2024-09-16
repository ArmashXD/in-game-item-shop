import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl-max': {'max': '1535px'},

      'xl-max': {'max': '1279px'},

      'lg-max': {'max': '1023px'},

      'md-max': {'max': '767px'},

      'sm-max': {'max': '639px'},

      '2xl-min': {'min': '1535px'},

      'xl-min': {'min': '1279px'},

      'lg-min': {'min': '1023px'},

      'md-min': {'min': '767px'},

      'sm-min': {'min': '639px'},
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        '60vh' : '60vh',
        '70vh' : '70vh',
        '80vh' : '80vh', 
      },
      boxShadow: {
        '3xl': '0 2px 30px 0 rgba(116, 195, 247, 0.733),0 6px 20px 0 rgba(6, 102, 228, 0.3)',
      },
      backgroundColor:{
        'theme' : '#041836',
      },
      content :{
        'null' : " "
      },
      translate :{
        'x' : '100%'
      }
    },
  },
  plugins: [],
};
export default config;
