const plugin = require('tailwindcss/plugin');


module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx,vue}"],
  },
  theme: { extend: {} },
  variants: {},
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};

module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'denis': ['Bai Jamjuree', 'sans-serif']
      },
      colors:{
        'camp-claro':'#510cc7',
        'camp-escuro':'#8c2cda',
        'etpc-azuldark':"#242443",
        'etpc-azulight':"#00b6ca",
        'etpc-amarelo':"#edb700",
        'etpc-salmao':"#b15165", 
        'etpc-branco':"#f0f0e8",
        
      },
      backgroundImage: {
        'fundo': "url('/src/imgs/fundocadastro.png')",
        'fundo2': "url('jhin-camile.gif')",
        'fundoindex': "url('/src/assets/imgs/fundoindex.jpg')",
        'fundoindexblack': "url('/src/assets/imgs/fundoindexblack.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
}

