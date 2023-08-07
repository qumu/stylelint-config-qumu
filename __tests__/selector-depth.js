const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.one .two .three > .four {
  color: #f00;
}

.four .five {
  .six > .seven {
    color: #f00;
  }
}
`;

describe('Selector depth scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(2);
      expect(warnings[0].text).toBe('Expected ".one .two .three > .four" to have no more than 3 compound selectors (selector-max-compound-selectors)');
      expect(warnings[1].text).toBe('Expected ".four .five .six > .seven" to have no more than 3 compound selectors (selector-max-compound-selectors)');
    }));
});
