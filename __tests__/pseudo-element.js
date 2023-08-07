const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
p:before {
  content: '>';
}

p::hover {
  color: #f00;
}
`;

describe('Pseudo element', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(2);
      expect(warnings[0].text).toBe('Expected double colon pseudo-element notation (selector-pseudo-element-colon-notation)');
      expect(warnings[1].text).toBe('Unexpected unknown pseudo-element selector "::hover" (selector-pseudo-element-no-unknown)');
    }));
});
