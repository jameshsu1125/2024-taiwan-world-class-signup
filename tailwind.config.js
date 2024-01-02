/** @type {import('tailwindcss').Config} */
import color from 'tailwindcss/colors';
import { fontSize } from 'tailwindcss/defaultTheme';

delete color.lightBlue;
delete color.warmGray;
delete color.trueGray;
delete color.coolGray;
delete color.blueGray;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      ...fontSize,
    },
    colors: {
      ...color,
      primary: '#108CFF',
      secondary: '#A3A3A3',
      backgroundColor: '#fff',
      textColor: '#111',
    },
    fontFamily: {
      noto: ['Noto Sans TC', 'sans-serif'],
    },
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
