const fs = require('fs');
const path = require('path');
const glob = require('glob');

const dir = path.resolve(__dirname, './packages/patternfly-4/**/*.md');
const fileNames = glob.sync(dir);

fileNames.forEach(file => {
  console.log(file);
  let contents = fs.readFileSync(file, 'utf8');
  // console.log(contents);
  const reg = /```js title=(.*) (.*)(?: isFullscreen)?/g;
  let match
  while((match = reg.exec(contents)) !== null) {
    // console.log('got a mtch', match);
    contents = contents.replace(/```js title=(.*) (.*)(?: isFullscreen)?/, '```js title=' + match[1].split(' ').join('-') + '-' + match[2].split(' ').join('-'));
    fs.writeFileSync(file, contents);
  }
})


// ```js title=(.*)(?: isFullpage)?
