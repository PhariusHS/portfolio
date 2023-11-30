/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'transparent': 'transparent',
      
      'seagull': {
        '50': '#f3f8fc',
        '100': '#e5f1f9',
        '200': '#c6e2f1',
        '300': '#94cce5',
        '400': '#70bbdb',
        '500': '#3597c2',
        '600': '#257aa4',
        '700': '#1f6285',
        '800': '#1e536e',
        '900': '#1e465c',
        '950': '#142d3d',
    },    
    'pizazz': {
      '50': '#fffbec',
      '100': '#fff7d3',
      '200': '#ffeba5',
      '300': '#ffdb6d',
      '400': '#ffbf32',
      '500': '#ffa80a',
      '600': '#ff9100',
      '700': '#cc6b02',
      '800': '#a1520b',
      '900': '#82450c',
      '950': '#462104',
  },
  
    },
    extend: {
      
    },
  },
  plugins: [],
}