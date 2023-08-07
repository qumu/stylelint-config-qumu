const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.spaceafterpropertycolon {
  margin:0;
  padding:  0;
}
`;

describe('Space after property colon', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(2);
      expect(warnings[0].text).toBe('Expected single space after ":" (declaration-colon-space-after)');
      expect(warnings[1].text).toBe('Expected single space after ":" (declaration-colon-space-after)');
    }));
});
