module.exports = {
  extends:
    [
      // 'stylelint-config-html/html',
      // 'stylelint-config-html/astro',
      'stylelint-config-standard-scss',
      'stylelint-config-standard-vue/scss'
    ]
      .concat(
        [
          './rules/errors',
          './rules/language',
          './rules/style',
          './rules/order',
          './rules/scss',
        ]
          .map(require.resolve)),
  plugins: [
    'stylelint-order',
  ],
  overrides: []
};
