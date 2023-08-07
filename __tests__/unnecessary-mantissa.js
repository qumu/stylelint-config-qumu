const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.mantissa {
  margin: 1.0em;
}
`;

describe('Unnecessary mantissa', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Unexpected trailing zero(s) (number-no-trailing-zeros)');
    }));
});
