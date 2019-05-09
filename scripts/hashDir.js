const klaw = require('klaw');
const fs = require('fs-extra');
const crypto = require('crypto');

function hashDir(dirPath) {
  return new Promise((resolve, reject) => {
    const md5 = crypto.createHash('md5');
    klaw(dirPath)
      .on('data', item => {
        if (!item.stats.isDirectory()) {
          const fileContents = fs.readFileSync(item.path);
          md5.update(fileContents)
        }
      })
      .on('error', err => reject(err))
      .on('end', () => resolve(md5.digest('hex')));
  });
}

module.exports = {
  hashDir
};
