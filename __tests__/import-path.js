const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
@import 'foo/_bar';
@import '_bar';
@import 'bar';
`;

describe('Import path scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(2);
      expect(warnings[0].text).toBe('Unexpected leading underscore in imported partial name (scss/at-import-no-partial-leading-underscore)');
      expect(warnings[1].text).toBe('Unexpected leading underscore in imported partial name (scss/at-import-no-partial-leading-underscore)');
    }));
});
