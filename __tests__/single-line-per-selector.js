const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.error, .explanation {
  color: #f00;
}
`;

describe('Single line per selector', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Expected newline after "," (selector-list-comma-newline-after)');
    }));
});
