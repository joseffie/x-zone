const twHyphens = require('tailwindcss-hyphens');
const twTextFill = require('tailwindcss-text-fill');

module.exports = {
  separator: '_',
  content: [
    './src/views/**/*.pug',
    './src/components/**/*.pug',
    './src/base/pug/**/*.pug',
    './src/base/scripts/**/*.js',
    './src/components/**/*.js',
  ],
  theme: {
    extend: {
      transitionDuration: {
        400: '400ms',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
    },
    screens: {
      // Configuring for max-height media queries
      xl: { max: '1700px' },
      lg: { max: '1200px' },
      md: { max: '1060px' },
      sm: { max: '768px' },
      ss: { max: '620px' },
      xs: { max: '480px' },

      // Configuring for min-height media queries
      minxs: { min: '480px' },
      minss: { min: '620px' },
      minsm: { min: '768px' },
      minmd: { min: '1060px' },
      minlg: { min: '1200px' },
      minxl: { min: '1700px' },
    },
    fontFamily: {
      primary: ['DMSans', 'sans-serif'],
      secondary: ['Rubik', 'sans-serif'],
      sans: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '40px'],
      '4.5xl': ['42px', '1'],
      '5xl': ['48px', '1'],
      '6xl': ['64px', '1'],
    },
    backgroundImage: {
      none: 'none',

      // Main gradients
      'gradient-r': 'linear-gradient(90deg, #2563EB 0.36%, #D946EF 201.02%)',
      'gradient-text-r': 'linear-gradient(90deg, #2563EB 0.11%, #D946EF 58.65%)',
      'glassmorph-dark-gradient-lt':
        'linear-gradient(270deg, rgba(254, 254, 255, 0.032) -11.04%, rgba(255, 255, 255, 0.018) 104.89%)',
      'glassmorph-dark-gradient-r':
        'linear-gradient(180deg, rgba(254, 254, 255, 0.0145) 0%, rgba(255, 255, 255, 0.02) 100%)',

      // Icon gradients
      'icon-gradient-violet': 'linear-gradient(180deg, #8A7FD9 0%, #402F8F 100%)',
      'icon-gradient-red': 'linear-gradient(180deg, #D97F95 0%, #923250 100%)',
      'icon-gradient-cyan': 'linear-gradient(180deg, #84D8ED 0%, #4292BB 100%)',
      'icon-gradient-green': 'linear-gradient(180deg, #92EFC3 0%, #2F8F5B 100%)',
      'icon-gradient-purple': 'linear-gradient(180deg, #BC7FD9 0%, #923283 100%)',
      'icon-gradient-blue': 'linear-gradient(180deg, #8684ED 0%, #4247BB 100%)',
    },
    colors: {
      // Basic colors
      transparent: 'transparent',
      inherit: 'inherit',
      current: 'currentColor',

      white: {
        100: '#fff',
        200: '#F9FAFB',
      },
      black: '#000',
      primary: '#111827',
      secondary: 'rgba(255, 255, 255, 0.8)',

      // Semantic colors
      mainColor: '#2563EB',
      successColor: '#16a34a',
      warningColor: '#eab308',
      dangerColor: '#b91c1c',

      // Other colors
      gray: '#969696',
      blue: '#2563EB',
      purple: '#D946EF',
    },
    backgroundColor: (theme) => theme('colors'),
    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.secondary', 'currentColor'),
    }),
    textColor: (theme) => theme('colors'),
  },
  corePlugins: {},
  plugins: [twHyphens, twTextFill],
};
