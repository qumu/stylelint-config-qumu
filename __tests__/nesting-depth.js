import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
.one {
  .two {
    background-color: #c0ffee;

    @media (min-width: 420px) {
      background-color: #bada55;
    }

    @include mixin() {
      background-color: #ba2;
    }

    .three {
      .four {
        .five {
          color: #f00;
        }
      }
    }
  }
}
`;

const validCode = `
.button {
  @each $key, $value in $colors {
    &-#{$key} {
      background-color: $value;
    }
  }
}
`;

describe('Nesting depth scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(3);
      expect(warnings[0].text).toBe('Expected nesting depth to be no more than 3 (max-nesting-depth)');
      expect(warnings[1].text).toBe('Expected ".four" to have no more than 3 compound selectors (selector-max-compound-selectors)');
      expect(warnings[2].text).toBe('Expected ".five" to have no more than 3 compound selectors (selector-max-compound-selectors)');
    }));

  it('should return no errors', () => stylelint
    .lint({
      code: validCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(0);
    }));
});
