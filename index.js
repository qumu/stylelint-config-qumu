module.exports = {
  extends:
    [
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
  ]
};
