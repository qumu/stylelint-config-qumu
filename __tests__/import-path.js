import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
@import 'foo/_bar.scss';
@import '_bar.scss';
@import '_bar';
@import 'bar.scss';
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
      expect(warnings).toHaveLength(3);
      expect(warnings[0].text).toBe('Unexpected leading underscore in imported partial name (scss/load-no-partial-leading-underscore)');
      expect(warnings[1].text).toBe('Unexpected leading underscore in imported partial name (scss/load-no-partial-leading-underscore)');
      expect(warnings[2].text).toBe('Unexpected leading underscore in imported partial name (scss/load-no-partial-leading-underscore)');
    }));
});
