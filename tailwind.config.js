module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    },
    fontSize: {
      'regular-1': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors:{
        'normal': '#AAA67F',
        'fighting': '#C12239',
        'flying': '#A891EC',
        'ground': '#DEC16B',
        'poison': '#A43E9E', 
        'rock': '#B69E31', 
        'bug': '#A7B723',
        'ghost': '#70559B',
        'steel': '#B7B9D0', 
        'fire': '#F57D31',
        'water': '#6493EB',
        'grass': '#74CB48',
        'electric': '#F9CF30', 
        'psychic': '#FB5584', 
        'ice': '#9AD6DF',
        'dragon': '#7037FF', 
        'dark': '#75574C',
        'fairy': '#E69EAC'
      },
     
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
}
