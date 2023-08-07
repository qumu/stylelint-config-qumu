const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.spaceaftercomma {
  transform: translate(1,1);
}

.spaceaftercomma,.spaceaftercomma2 {
  transform: translate(1, 1);
}
`;

describe('Space after comma', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(2);
      expect(warnings[0].text).toBe('Expected single space after "," in a single-line function (function-comma-space-after)');
      expect(warnings[0].text).toBe('Expected single space after "," in a single-line function (function-comma-space-after)');
    }));
});
