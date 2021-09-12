module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'fundo': "url('/src/imgs/fundocadastro.png')",
        'fundo2': "url('jhin-camile.gif')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
