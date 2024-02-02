const fs = require('fs');
const path = require('path');

const distIndexFiles = ['esm', 'js'].map((dir) => path.join(process.cwd(), 'dist', dir, 'index.js'));

distIndexFiles.forEach((file) => {
  const fileContents = fs.readFileSync(file, 'utf8');
  const newFileContents = fileContents
    .split('\n')
    .filter((line) => !line.includes('demos'))
    .join('\n');
  fs.writeFileSync(file, newFileContents);
});
