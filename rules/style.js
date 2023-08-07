module.exports = {
  rules: {
    // Specify short or long notation for hex colors.
    // https://stylelint.io/user-guide/rules/color-hex-length/
    'color-hex-length': 'short',

    // Require or disallow quotes for urls.
    // https://stylelint.io/user-guide/rules/function-url-quotes/
    'function-url-quotes': 'always',

    // Disallow units for zero lengths.
    // https://stylelint.io/user-guide/rules/length-zero-no-unit/
    'length-zero-no-unit': true,

    // Require or disallow an empty line before rules.
    // https://stylelint.io/user-guide/rules/rule-empty-line-before/
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: [
          'first-nested',
        ],
        ignore: [
          'after-comment',
        ],
      },
    ],

    // Require or disallow quotes for attribute values.
    // https://stylelint.io/user-guide/rules/selector-attribute-quotes/
    'selector-attribute-quotes': 'always',

    // Specify single or double colon notation for applicable pseudo-elements.
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/
    'selector-pseudo-element-colon-notation': 'double',

    // Specify lowercase or uppercase for keywords values.
    // https://stylelint.io/user-guide/rules/value-keyword-case/
    'value-keyword-case': 'lower',
  },
};
