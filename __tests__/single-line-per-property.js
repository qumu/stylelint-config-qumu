const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.singlelineproperty1 {
  margin: 0; padding: 0;
}

.singlelineproperty2 { margin: 0; padding: 0; }
`;

describe('Single line per property', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(6);
      expect(warnings[0].text).toBe('Expected newline before "}" (block-closing-brace-newline-before)');
      expect(warnings[1].text).toBe('Expected newline after "{" (block-opening-brace-newline-after)');
      expect(warnings[2].text).toBe('Unexpected whitespace before "{" of a single-line block (block-opening-brace-newline-before)');
      expect(warnings[3].text).toBe('Expected newline after ";" (declaration-block-semicolon-newline-after)');
      expect(warnings[4].text).toBe('Expected newline after ";" (declaration-block-semicolon-newline-after)');
      expect(warnings[5].text).toBe('Expected no more than 1 declaration (declaration-block-single-line-max-declarations)');
    }));
});
