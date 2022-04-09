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
        six174ff: '#6174ff',
        f5f6f8: '#f5f6f8'
      },
      fontFamily: {
        baiJamjuree: "'Bai Jamjuree', sans-serif"
      },
      boxShadow: {
        'cta-shadow-green': '0 5px 20px rgba(38, 187, 165, 0.4)',
        'cta-shadow-violet': '0 5px 20px rgba(97, 116, 255, 0.4)'
      }
    },
  },
  plugins: [],
}