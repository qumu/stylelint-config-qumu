const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.fatal {
  @extend .error;
}
`;

describe('Placeholder in extend scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Expected a placeholder selector (e.g. %placeholder) to be used in @extend (scss/at-extend-no-missing-placeholder)');
    }));
});
