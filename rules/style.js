module.exports = {
  rules: {
    // Require or disallow an empty line before the closing brace of blocks.
    // https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before/
    'block-closing-brace-empty-line-before': 'never',

    // Require a newline or disallow whitespace after the closing brace of blocks.
    // https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: [
          'if',
          'else',
        ],
      },
    ],

    // Require a newline or disallow whitespace before the closing brace of blocks.
    // https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/
    'block-closing-brace-newline-before': 'always',

    // Require a newline after the opening brace of blocks.
    // https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/
    'block-opening-brace-newline-after': 'always',

    // Require a newline or disallow whitespace before the opening brace of blocks.
    // https://stylelint.io/user-guide/rules/block-opening-brace-newline-before/
    'block-opening-brace-newline-before': 'never-single-line',

    // Require a single space or disallow whitespace before the opening brace of blocks.
    // https://stylelint.io/user-guide/rules/block-opening-brace-space-before/
    'block-opening-brace-space-before': 'always',

    // Specify lowercase or uppercase for hex colors.
    // https://stylelint.io/user-guide/rules/color-hex-case/
    'color-hex-case': 'lower',

    // Specify short or long notation for hex colors.
    // https://stylelint.io/user-guide/rules/color-hex-length/
    'color-hex-length': 'short',

    // Require a single space or disallow whitespace after the bang of declarations.
    // https://stylelint.io/user-guide/rules/declaration-bang-space-after/
    'declaration-bang-space-after': 'never',

    // Require a single space or disallow whitespace before the bang of declarations.
    // https://stylelint.io/user-guide/rules/declaration-bang-space-before/
    'declaration-bang-space-before': 'always',

    // Require a newline or disallow whitespace after the semicolons of declaration blocks.
    // https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/
    'declaration-block-semicolon-newline-after': 'always',

    // Require a single space or disallow whitespace before the semicolons of declaration blocks.
    // https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/
    'declaration-block-semicolon-space-before': 'never',

    // Require or disallow a trailing semicolon within declaration blocks.
    // https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/
    'declaration-block-trailing-semicolon': 'always',

    // Require a single space or disallow whitespace after the colon of declarations.
    // https://stylelint.io/user-guide/rules/declaration-colon-space-after/
    'declaration-colon-space-after': 'always',

    // Require a single space or disallow whitespace before the colon of declarations.
    // https://stylelint.io/user-guide/rules/declaration-colon-space-before/
    'declaration-colon-space-before': 'never',

    // Require a single space or disallow whitespace after the commas of functions.
    // https://stylelint.io/user-guide/rules/function-comma-space-after/
    'function-comma-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the commas of functions.
    // https://stylelint.io/user-guide/rules/function-comma-space-before/
    'function-comma-space-before': 'never',

    // Require a single space or disallow whitespace on the inside of the parentheses of functions.
    // https://stylelint.io/user-guide/rules/function-parentheses-space-inside/
    'function-parentheses-space-inside': 'never-single-line',

    // Require or disallow quotes for urls.
    // https://stylelint.io/user-guide/rules/function-url-quotes/
    'function-url-quotes': 'always',

    // Specify indentation.
    // https://stylelint.io/user-guide/rules/indentation/
    indentation: 2,

    // Disallow units for zero lengths.
    // https://stylelint.io/user-guide/rules/length-zero-no-unit/
    'length-zero-no-unit': true,

    // Limit the length of a line.
    // https://stylelint.io/user-guide/rules/max-line-length/
    'max-line-length': 140,

    // Require a single space or disallow whitespace on the inside of the parentheses within media features.
    // https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/
    'media-feature-parentheses-space-inside': 'never',

    // Disallow missing end-of-source newlines.
    // https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/
    'no-missing-end-of-source-newline': true,

    // Require or disallow a leading zero for fractional numbers less than 1.
    // https://stylelint.io/user-guide/rules/number-leading-zero/
    'number-leading-zero': 'never',

    // Disallow trailing zeros in numbers.
    // https://stylelint.io/user-guide/rules/number-no-trailing-zeros/
    'number-no-trailing-zeros': true,

    // Specify lowercase or uppercase for properties.
    // https://stylelint.io/user-guide/rules/property-case/
    'property-case': 'lower',

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

    // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
    // https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/
    'selector-attribute-brackets-space-inside': 'never',

    // Require or disallow quotes for attribute values.
    // https://stylelint.io/user-guide/rules/selector-attribute-quotes/
    'selector-attribute-quotes': 'always',

    // Require a newline or disallow whitespace after the commas of selector lists.
    // https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/
    'selector-list-comma-newline-after': 'always',

    // Specify single or double colon notation for applicable pseudo-elements.
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/
    'selector-pseudo-element-colon-notation': 'double',

    // Specify single or double quotes around strings.
    // https://stylelint.io/user-guide/rules/string-quotes/
    'string-quotes': 'single',

    // Specify lowercase or uppercase for units.
    // https://stylelint.io/user-guide/rules/unit-case/
    'unit-case': 'lower',

    // Specify lowercase or uppercase for keywords values.
    // https://stylelint.io/user-guide/rules/value-keyword-case/
    'value-keyword-case': 'lower',
  },
};
