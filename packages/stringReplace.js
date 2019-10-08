const fs = require('fs');
const path = require('path');
const glob = require('glob');

const dir = path.resolve(__dirname, './patternfly-4/**/*.md');
const fileNames = glob.sync(dir);

fileNames.forEach(file => {
  let contents = fs.readFileSync(file, 'utf8');
  const match = contents.match(/## Examples/);
  if (!match) {
    contents = contents.replace(/```js/, '## Examples\n```js')
    fs.writeFileSync(file, contents);
  }
})