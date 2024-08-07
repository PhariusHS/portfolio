/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Activar el modo oscuro por clase
  theme: {
    screens:{
      'md':'900px'
    },
    extend: {
      colors: {
        'transparent': 'transparent',
        'smoothDark': '#121212',
        'white': "#fff",
        "gray": {
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '300': '#d1d5db',
          '400': '#9ca3af',
          '500': '#6b7280',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#292a2b',
        },
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
        'hopbush': {
          '50': '#fcf3fa',
          '100': '#f9eaf6',
          '200': '#f5d5ee',
          '300': '#eeb3df',
          '400': '#e383c9',
          '500': '#db70bb',
          '600': '#c33f95',
          '700': '#a82e7a',
          '800': '#8b2964',
          '900': '#752656',
          '950': '#461131',
        },
        'medium-purple': {
          '50': '#f6f5fd',
          '100': '#efecfb',
          '200': '#e1ddf7',
          '300': '#cbc1f1',
          '400': '#b09de8',
          '500': '#9070db',
          '600': '#8358cf',
          '700': '#7245bc',
          '800': '#5f3a9d',
          '900': '#503181',
          '950': '#321e57',
        },
      },
      fontFamily: {
        Montserrat: ["Montserrat", 'sans-serif'],
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
      backdropBlur: {
        'bg-blur': '10px',
      },
      backgroundColor: {
        'blur-bg': 'rgba(255, 255, 255, 0.5)',
        'blur-bg-dark': 'rgba(18, 18, 18, 0.5)',
      },
    },
  },
  plugins: [],
}
