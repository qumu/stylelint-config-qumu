const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.hexnotation {
  color: #F00;
}
`;

describe('Hex notation', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Expected "#F00" to be "#f00" (color-hex-case)');
    }));
});
