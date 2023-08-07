module.exports = {
  rules: {
    // Disallow vendor prefixes for at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/
    'at-rule-no-vendor-prefix': null,

    // Require (where possible) or disallow named colors.
    // https://stylelint.io/user-guide/rules/color-named/
    'color-named': 'never',

    // Limit the number of declarations within a single line declaration block.
    // https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/
    'declaration-block-single-line-max-declarations': 1,

    // Limit the allowed nesting depth.
    // https://stylelint.io/user-guide/rules/max-nesting-depth/
    'max-nesting-depth': [
      3,
      {
        ignoreAtRules: [
          'each',
          'media',
          'supports',
          'include',
        ],
      },
    ],

    // Disallow vendor prefixes for media feature names.
    // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/
    'media-feature-name-no-vendor-prefix': null,

    // Disallow the new range feature for @media rules (only supported on iOS 16.4+)
    // https://stylelint.io/user-guide/rules/media-feature-range-notation/
    'media-feature-range-notation': null,

    // Disallow vendor prefixes for properties.
    // https://stylelint.io/user-guide/rules/property-no-vendor-prefix/
    // TODO re-enable this rule once Qumustrap is free of vendor prefixes
    // (vendor prefixes should be added by Autoprefixr, not by mixins)
    'property-no-vendor-prefix': null,

    // Specify a pattern for class selectors.
    // https://stylelint.io/user-guide/rules/selector-class-pattern/
    'selector-class-pattern': [
      '^([a-z][a-zA-Z0-9\\-]*)(\\.[a-z0-9\\-]*)?(__[a-z0-9][a-zA-Z0-9\\-]*)?(--[a-z0-9][a-zA-Z0-9\\-]*)?(\\:[a-z]*)*$',
      {
        message: 'Selector should be written following the BEM methodology (selector-class-pattern)',
      },
    ],

    // Limit the number of compound selectors in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-compound-selectors/
    'selector-max-compound-selectors': 3,

    // Limit the number of adjacent empty lines within selectors.
    // https://stylelint.io/user-guide/rules/selector-max-empty-lines/
    'selector-max-empty-lines': 0,

    // Limit the number of ID selectors in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-id/
    'selector-max-id': 0,

    // Disallow qualifying a selector by type.
    // https://stylelint.io/user-guide/rules/selector-no-qualifying-type/
    'selector-no-qualifying-type': null,

    // Disallow vendor prefixes for selectors.
    // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/
    'selector-no-vendor-prefix': null,

    // Disallow redundant values in shorthand properties.
    // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/
    'shorthand-property-no-redundant-values': true,

    // Disallow vendor prefixes for values.
    // https://stylelint.io/user-guide/rules/value-no-vendor-prefix/
    // TODO re-enable this rule once Qumustrap is free of vendor prefixes
    // (vendor prefixes should be added by Autoprefixr, not by mixins)
    'value-no-vendor-prefix': null,
  },
};
