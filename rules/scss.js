module.exports = {
  rules: {
    // Disallow at-extends (@extend) with missing placeholders.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md
    'scss/at-extend-no-missing-placeholder': true,

    // Specify a pattern for Sass/SCSS-like function names.
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-function-pattern
    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    // Disallow leading underscore in partial names in @import.
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-import-no-partial-leading-underscore
    'scss/at-import-no-partial-leading-underscore': true,

    // Specify a pattern for Sass/SCSS-like mixin names.
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-mixin-pattern
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    // Disallow unknown at-rules. Should be used instead of stylelint's at-rule-no-unknown.
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-rule-no-unknown
    'scss/at-rule-no-unknown': true,

    // Allow empty comments
    'scss/comment-no-empty': null,

    // Require or disallow whitespace after the colon in $-variable declarations.
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/dollar-variable-colon-space-after
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',

    // Require a single space or disallow whitespace before the colon in $-variable declarations.
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/dollar-variable-colon-space-before
    'scss/dollar-variable-colon-space-before': 'never',

    // Allow empty and non-empty lines before @
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before/README.md
    'scss/dollar-variable-empty-line-before': null,

    // Specify a pattern for Sass-like variables.
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/dollar-variable-pattern
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    // Specify a pattern for %-placeholders.
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/percent-placeholder-pattern
    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    // Disallow redundant nesting selectors (&).
    // https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/selector-no-redundant-nesting-selector
    'scss/selector-no-redundant-nesting-selector': true,

    // Enforces parentheses even for mixin with no arguements
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md
    'scss/at-mixin-argumentless-call-parentheses': 'always',
  },
};
