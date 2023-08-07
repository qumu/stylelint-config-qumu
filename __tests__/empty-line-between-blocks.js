const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
p {
  margin: 0;
  em {
    color: #f00;
  }
}
a {
  color: #f00;
}
`;

describe('Empty line between', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(2);
      expect(warnings[0].text).toBe('Expected empty line before rule (rule-empty-line-before)');
      expect(warnings[1].text).toBe('Expected empty line before rule (rule-empty-line-before)');
    }));
});
