const fs = require('fs-extra');
const path = require('path');
const crypto = require('crypto');

// http://stackoverflow.com/a/5827895/4241030
function filewalker(dir) {
  let results = [];

	fs.readdirSync(dir).forEach(file => {
    filePath = path.resolve(dir, file);

    const stat = fs.statSync(filePath);
    // If directory, execute a recursive call
    if (stat && stat.isDirectory() && !stat.isSymbolicLink()) {
      results = results.concat(filewalker(filePath));
    } else if (stat && stat.isFile()) {
      results.push(filePath);
    }
  });

  return results;
};

function hashDir(dirPath) {
  const md5 = crypto.createHash('md5');

  const files = filewalker(dirPath);
  files.sort().forEach(file => {
    const fileContents = fs.readFileSync(file);
    md5.update(fileContents);
  });
  return md5.digest('hex');
}

module.exports = {
  hashDir
};
