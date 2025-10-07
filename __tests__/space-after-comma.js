import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
.spaceaftercomma {
  box-shadow: 0 2px 2px rgba(0,0,0,.2);
  color: rgba(0,0,0,.1);
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
      expect(warnings).toHaveLength(6);
      expect(warnings[0].text).toBe('Expected single space after "," in a single-line function (@stylistic/function-comma-space-after)');
      expect(warnings[1].text).toBe('Expected single space after "," in a single-line function (@stylistic/function-comma-space-after)');
      expect(warnings[2].text).toBe('Expected single space after "," in a single-line function (@stylistic/function-comma-space-after)');
      expect(warnings[3].text).toBe('Expected single space after "," in a single-line function (@stylistic/function-comma-space-after)');
      expect(warnings[4].text).toBe('Expected single space after "," in a single-line function (@stylistic/function-comma-space-after)');
      expect(warnings[5].text).toBe('Expected single space after "," in a single-line function (@stylistic/function-comma-space-after)');
    }));
});
