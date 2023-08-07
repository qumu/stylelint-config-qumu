module.exports = {
  rules: {
    // Disallow unknown at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown/
    'at-rule-no-unknown': null,

    // Disallow invalid hex colors.
    // https://stylelint.io/user-guide/rules/color-no-invalid-hex/
    'color-no-invalid-hex': true,

    // Disallow duplicate properties within declaration blocks.
    // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/
    'declaration-block-no-duplicate-properties': true,

    // Disallow shorthand properties that override related longhand properties.
    // https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/
    'declaration-block-no-shorthand-property-overrides': true,

    // Disallow duplicate font family names.
    // https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/
    'font-family-no-duplicate-names': true,

    // Disallow missing generic families in lists of font family names.
    // https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/
    'font-family-no-missing-generic-family-keyword': true,

    // Disallow an unspaced operator within calc functions.
    // https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/
    'function-calc-no-unspaced-operator': true,

    // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
    // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
    'function-linear-gradient-no-nonstandard-direction': true,

    // Disallow !important within keyframe declarations.
    // https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/
    'keyframe-declaration-no-important': true,

    // Disallow unknown media feature names.
    // https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/
    'media-feature-name-no-unknown': true,

    // Disallow duplicate @import rules within a stylesheet.
    // https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/
    'no-duplicate-at-import-rules': true,

    // Disallow extra semicolons.
    // https://stylelint.io/user-guide/rules/no-extra-semicolons/
    'no-extra-semicolons': true,

    // Disallow unknown properties.
    // https://stylelint.io/user-guide/rules/property-no-unknown/
    'property-no-unknown': true,

    // Specify lowercase or uppercase for pseudo-class selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-case/
    'selector-pseudo-class-case': 'lower',

    // Disallow unknown pseudo-element selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/
    'selector-pseudo-element-no-unknown': true,

    // Disallow unknown type selectors.
    // https://stylelint.io/user-guide/rules/selector-type-no-unknown/
    'selector-type-no-unknown': [
      true,
      {
        'ignoreTypes': [
          '/^qi-/'
        ]
      }
    ],

    // Disallow (unescaped) newlines in strings.
    // https://stylelint.io/user-guide/rules/string-no-newline/
    'string-no-newline': true,

    // Disallow unknown units.
    // https://stylelint.io/user-guide/rules/unit-no-unknown/
    'unit-no-unknown': true,
  },
};
