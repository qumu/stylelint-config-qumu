const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.spacebeforebrace1{
  color: #f00;
}

.spacebeforebrace2  {
  color: #f00;
}
`;

describe('Space before brace', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(2);
      expect(warnings[0].text).toBe('Expected single space before "{" (block-opening-brace-space-before)');
      expect(warnings[1].text).toBe('Expected single space before "{" (block-opening-brace-space-before)');
    }));
});
