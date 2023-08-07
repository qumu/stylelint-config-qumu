const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.spaceafterpropertyname {
  margin : 0;
}
`;

describe('Space after property name', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Unexpected whitespace before ":" (declaration-colon-space-before)');
    }));
});
