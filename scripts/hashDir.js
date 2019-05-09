const fs = require('fs-extra');
const path = require('path');
const crypto = require('crypto');

// http://stackoverflow.com/a/5827895/4241030
function filewalker(dir, done) {
  let results = [];

  fs.readdir(dir, function(err, list) {
    if (err) return done(err);

    var pending = list.length;

    if (!pending) return done(null, results);

    list.forEach(function(file){
      file = path.resolve(dir, file);

      fs.stat(file, function(err, stat){
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          filewalker(file, function(err, res){
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

function hashDir(dirPath) {
  const md5 = crypto.createHash('md5');

  return new Promise((resolve, reject) => {
    filewalker(dirPath, (err, files) => {
      if (err) reject(err);

      files.sort().forEach(file => {
        const fileContents = fs.readFileSync(file);
        md5.update(fileContents);
      });
      resolve(md5.digest('hex'));
    })
  });
}

module.exports = {
  hashDir
};
