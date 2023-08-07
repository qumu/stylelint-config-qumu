const stylelint = require('stylelint');
const config = require('..');

const invalidCode = `
.Foo {
  color: #f00;
}

.foo__Bar {
  color: #f00;
}

.foo__Bar2 {
  color: #f00;
}

.0foo-bar {
  color: #f00;
}

.fooBar___baz {
  color: #f00;
}
`;

const validCode = `
.foo {
  color: #f00;
}

.foo__bar {
  color: #f00;
}

.foo-bar {
  color: #f00;
}

.foo-bar__baz {
  color: #f00;
}

.fooBar__baz {
  color: #f00;
}

.foo__bar-baz {
  color: #f00;
}

.foo__barBaz {
  color: #f00;
}

.foo-bar__foo-bar--foo-baz {
  color: #f00;
}
`;


describe('Selector format', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(5);
      expect(warnings[0].text).toBe('Selector should be written following the BEM methodology (selector-class-pattern)');
      expect(warnings[1].text).toBe('Selector should be written following the BEM methodology (selector-class-pattern)');
      expect(warnings[2].text).toBe('Selector should be written following the BEM methodology (selector-class-pattern)');
      expect(warnings[3].text).toBe('Selector should be written following the BEM methodology (selector-class-pattern)');
      expect(warnings[4].text).toBe('Selector should be written following the BEM methodology (selector-class-pattern)');
    }));

  it('should not return warnings', () => stylelint
    .lint({
      code: validCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(0);
    }));
});
