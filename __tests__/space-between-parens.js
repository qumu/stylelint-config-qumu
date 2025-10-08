import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
.spacebetweenparens {
  @include box-shadow( 0 2px 2px rgba( 0, 0, 0, .2 ) );
  color: rgba( 0, 0, 0, .1 );
}

@media ( max-width: 300px ) {
  .zerounit {
    margin: 0;
  }
}

@media (max-width: 300px ) {
  .zerounit {
    margin: 0;
  }
}
`;

describe('Space between parens scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(5);
      expect(warnings[0].text).toBe('Unexpected whitespace after "(" in a single-line function (@stylistic/function-parentheses-space-inside)');
      expect(warnings[1].text).toBe('Unexpected whitespace before ")" in a single-line function (@stylistic/function-parentheses-space-inside)');
      expect(warnings[2].text).toBe('Unexpected whitespace after "(" (@stylistic/media-feature-parentheses-space-inside)');
      expect(warnings[3].text).toBe('Unexpected whitespace before ")" (@stylistic/media-feature-parentheses-space-inside)');
      expect(warnings[4].text).toBe('Unexpected whitespace before ")" (@stylistic/media-feature-parentheses-space-inside)');
    }));
});
