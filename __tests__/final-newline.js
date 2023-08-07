const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.finalnewline {
  color: #f00;
}`;

describe('Final new line', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Unexpected missing end-of-source newline (no-missing-end-of-source-newline)');
    }));
});
