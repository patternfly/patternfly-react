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
      results.push({ path: filePath, type: 'dir' });
      results = results.concat(filewalker(filePath));
    } else if (stat && stat.isFile()) {
      results.push({ path: filePath, type: 'file' });
    }
  });

  return results;
};

function hashDir(dirPath) {
  const md5 = crypto.createHash('md5');
  const stat = fs.statSync(dirPath);

  if (stat && stat.isFile()) {
    const fileContents = fs.readFileSync(dirPath);
    md5.update(fileContents);
  }
  else {
    filewalker(dirPath)
      .sort((f1, f2) => f1.path.localeCompare(f2.path))
      .forEach(file => {
        if (file.type === 'file') {
          const fileContents = fs.readFileSync(file.path);
          md5.update(fileContents);
        }
        else if (file.type === 'dir') {
          md5.update(file.path);
        }
      });
  }
  return md5.digest('hex');
}

module.exports = {
  hashDir
};
