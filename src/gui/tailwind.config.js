// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Nunito',
          'system-ui',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ]
      },

      colors: {
        danger: {
          25: 'rgba(244, 67, 54, 0.25)',
          default: '#f44336'
        },

        success: '#57b846',
        warning: '#c17c16',

        primary: {
          25: 'rgba(77, 124, 254, 0.25)',
          100: '#7D9FFE',
          200: '#6D93FE',
          300: '#5D87FE',
          default: '#4d7cfe',
          500: '#4671E7',
          600: '#4066D0',
          700: '#395BB9',
          800: '#324FA2',
          900: '#2A448B'
        }
      }
    }
  },
  variants: {}
}
