const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `.spacebetweenparens {
  @include box-shadow( 0 2px 2px rgb( 0 0 0 / 20% ) );

  color: rgb( 0 0 0 / 10% );
}

@media ( max-width: 300px ) {
  .zerounit {
    margin: 0;
  }
}

@media (max-width: 300px ) {
  .zerounit {
    margin: 0;
  }
}
`;

describe('Space between parens scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(5);
      expect(warnings[0].text).toBe('Unexpected whitespace after "(" in a single-line function (function-parentheses-space-inside)');
      expect(warnings[1].text).toBe('Unexpected whitespace before ")" in a single-line function (function-parentheses-space-inside)');
      expect(warnings[2].text).toBe('Unexpected whitespace after "(" (media-feature-parentheses-space-inside)');
      expect(warnings[3].text).toBe('Unexpected whitespace before ")" (media-feature-parentheses-space-inside)');
      expect(warnings[4].text).toBe('Unexpected whitespace before ")" (media-feature-parentheses-space-inside)');
    }));
});
