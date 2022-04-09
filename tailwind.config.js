module.exports = {
  content: [
    './dist/*.html'
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2560px'
    },
    extend: {
      colors: {
        fourd5760: '#4d5760',
        a4a8ab: '#a4a8ab',
        two6bba5: '#26bba5',
        six174ff: '#6174ff'
      },
      fontFamily: {
        baiJamjuree: "'Bai Jamjuree', sans-serif"
      }
    },
  },
  plugins: [],
}