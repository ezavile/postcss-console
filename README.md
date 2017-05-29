# postcss-console

[![Travis](https://img.shields.io/travis/ezavile/postcss-console.svg?style=flat-square)](https://travis-ci.org/ezavile/postcss-console)
[![Codecov](https://img.shields.io/codecov/c/github/ezavile/postcss-console.svg?style=flat-square)](https://codecov.io/gh/ezavile/postcss-console)
[![npm](https://img.shields.io/npm/v/postcss-console.svg?style=flat-square)](https://www.npmjs.com/package/postcss-console)
[![MIT License](https://img.shields.io/npm/l/postcss-console.svg?style=flat-square)](http://opensource.org/licenses/MIT)

A [PostCSS] plugin output messages to the terminal.

## Installation
```
npm install postcss-console
```

What is this? For example, you have the following CSS file (I'm using [postcss-each], [postcss-text-transform] and [postcss-cssnext]):

**backgrounds.css**
```css
..u {
  @console.warn Here comes the postcss-console;
  @each $color in green, yellow, red {
    @console.assert '$color' == 'green';
    @text-transform $color, upperFirst, $colorTransformed {
      @console.log $colorTransformed;
      &-bg$(colorTransformed) {
        background-color: $color;
      }
    }
  }
  @console.error This is an error message;
}

```

And the plugin will give you:
![console](/console.png?raw=true "Messages on terminal")

## Usage

### JavaScript
```javascript
postcss([
   require('postcss-console')
]);
```

## TypeScript
```js
import * as postcssConsole from 'postcss-console;

postcss([ postcssConsole() ]);
```

```css
@console.log This is an informative message
@console.warn This is a warn message
@console.error This is an error message
@console.assert Boolean expression
```

## Testing
This will build scripts, run tests and generate a code coverage report. Anything less than 100% coverage will throw an error.

```javascript
npm test
```

See [PostCSS] docs for examples for your environment.

## Contributing
* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`npm test`).

[MIT License]

[PostCSS]: https://github.com/postcss/postcss
[postcss-each]: https://github.com/outpunk/postcss-each
[postcss-text-transform]: https://github.com/ezavile/postcss-text-transform
[postcss-cssnext]: https://github.com/MoOx/postcss-cssnext
[MIT License]: https://github.com/ezavile/postcss-console/blob/master/LICENSE
