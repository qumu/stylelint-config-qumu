const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.indentation {
    color: #f00;
}
`;

describe('Indentation', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Expected indentation of 2 spaces (indentation)');
    }));
});
