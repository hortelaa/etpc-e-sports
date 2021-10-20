const plugin = require('tailwindcss/plugin');

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
  plugins: [plugin(function ({ addVariant, e, postcss }) {
    addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
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
}