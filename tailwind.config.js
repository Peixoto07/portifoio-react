// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      mono: 'monospace',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1234px',
      xxl: '1450px',
    },
    extend: {
      colors: {
        primary: '#3CDFD2',
        secondary: 'rgb(91 35 176)',
        colorBg: '#111827'
      },
      backgroundImage: {
        'hero-image': "url('src/assets/img/bgHero2.png')",
    
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(126, 34, 206, 0.7)',
      },
    },
  },
  plugins: [],
};
