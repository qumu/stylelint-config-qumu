const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
$spaceaftervariablename : #f00;
`;

describe('Space after variable name scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Unexpected whitespace before ":" (scss/dollar-variable-colon-space-before)');
    }));
});
