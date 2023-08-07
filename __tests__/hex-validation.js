const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.hexvalidation {
  background: #ab;
}
`;

describe('Hex validation', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Unexpected invalid hex color "#ab" (color-no-invalid-hex)');
    }));
});
