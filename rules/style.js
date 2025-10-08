export default {
  rules: {
    '@stylistic/block-closing-brace-empty-line-before': 'never',
    '@stylistic/block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: [
          'if',
          'else',
        ],
      },
    ],
    '@stylistic/block-closing-brace-newline-before': 'always',
    '@stylistic/block-opening-brace-newline-after': 'always',
    '@stylistic/block-opening-brace-newline-before': 'never-single-line',

    // Require a single space or disallow whitespace before the opening brace of blocks.
    '@stylistic/block-opening-brace-space-before': 'always',
    '@stylistic/color-hex-case': 'lower',

    // Require a single space or disallow whitespace after the bang of declarations.
    '@stylistic/declaration-bang-space-after': 'never',

    // Require a single space or disallow whitespace before the bang of declarations.
    '@stylistic/declaration-bang-space-before': 'always',

    // Require a newline or disallow whitespace after the semicolons of declaration blocks.
    '@stylistic/declaration-block-semicolon-newline-after': 'always',

    // Require a single space or disallow whitespace before the semicolons of declaration blocks.
    '@stylistic/declaration-block-semicolon-space-before': 'never',

    // Require or disallow a trailing semicolon within declaration blocks.
    '@stylistic/declaration-block-trailing-semicolon': 'always',

    // Require a single space or disallow whitespace after the colon of declarations.
    '@stylistic/declaration-colon-space-after': 'always',

    // Require a single space or disallow whitespace before the colon of declarations.
    '@stylistic/declaration-colon-space-before': 'never',

    // Require a single space or disallow whitespace after the commas of functions.
    '@stylistic/function-comma-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the commas of functions.
    '@stylistic/function-comma-space-before': 'never',

    // Require a single space or disallow whitespace on the inside of the parentheses of functions.
    '@stylistic/function-parentheses-space-inside': 'never-single-line',

    // Specify indentation.
    '@stylistic/indentation': 2,

    // Limit the length of a line.
    '@stylistic/max-line-length': 140,

    // Require a single space or disallow whitespace on the inside of the parentheses within media features.
    '@stylistic/media-feature-parentheses-space-inside': 'never',

    // Disallow missing end-of-source newlines.
    '@stylistic/no-missing-end-of-source-newline': true,

    // Require or disallow a leading zero for fractional numbers less than 1.
    '@stylistic/number-leading-zero': 'never',

    // Disallow trailing zeros in numbers.
    '@stylistic/number-no-trailing-zeros': true,

    // Specify lowercase or uppercase for properties.
    '@stylistic/property-case': 'lower',


    // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
    '@stylistic/selector-attribute-brackets-space-inside': 'never',

    // Require a newline or disallow whitespace after the commas of selector lists.
    '@stylistic/selector-list-comma-newline-after': 'always',

    // Specify single or double quotes around strings.
    '@stylistic/string-quotes': 'single',

    // Specify lowercase or uppercase for units.
    '@stylistic/unit-case': 'lower',
    // Specify short or long notation for hex colors.
    // https://stylelint.io/user-guide/rules/color-hex-length/
    'color-hex-length': 'short',

    // Require or disallow quotes for urls.
    // https://stylelint.io/user-guide/rules/function-url-quotes/
    'function-url-quotes': 'always',

    // Disallow units for zero lengths.
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
