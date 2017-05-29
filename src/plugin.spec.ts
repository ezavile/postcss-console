import test, { TestContext } from 'ava';
import { readFileSync } from 'fs';
import * as postcss from 'postcss';
const path = require('path');

import * as plugin from './plugin';

test('should output the log, warn, error and asserts', t => {
  const cssFile = path.join(__dirname, 'fakeStyle.css');
  const cssContent = readFileSync(cssFile, 'utf8');
  return postcss([
    require('postcss-each'),
    require('postcss-text-transform'),
    plugin()
  ]).process(cssContent, { from: cssFile})
  .then((result) => {
    t.falsy(result.content.includes('console'));
  });
});

test('should throw an error because of used a different type of log', t => {
  return postcss([ plugin() ]).process(`
    .componentName {
      @console.fake fake;
    }
  `, { from: 'fakeStyle.css'})
  .catch((error) => {
    t.truthy(error.message.includes(`Don't exist this method "console.fake"`));
  });
});

test('should throw an error because of there is an incorrect condition on the assertion', t => {
  return postcss([ plugin() ]).process(`
    .componentName {
      @console.assert fake == 14;
    }
  `, { from: 'fakeStyle.css'})
  .catch((error) => {
    t.truthy(error.message.includes(`Error: ReferenceError: fake is not defined`));
  });
});

