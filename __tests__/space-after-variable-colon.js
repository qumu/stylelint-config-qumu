const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
$spaceaftervariablecolon:#fff;
`;

describe('Space after variable colon scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Expected at least one space after ":" (scss/dollar-variable-colon-space-after)');
    }));
});
