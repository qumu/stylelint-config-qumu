import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

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
      expect(warnings[0].text).toBe('Expected single space before "{" (@stylistic/block-opening-brace-space-before)');
      expect(warnings[1].text).toBe('Expected single space before "{" (@stylistic/block-opening-brace-space-before)');
    }));
});
