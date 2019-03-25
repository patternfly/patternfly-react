const path = require("path")

exports.getFileName = filename => {
  const extension = path.extname(filename);
  return path.basename(filename, extension).toLowerCase().trim();
}

exports.getParentFolder = filename => {
  const split = filename.split('/');
  return split[split.length - 2]; // i.e. 'Alert' in '/ff/ff/Alert/AlertSomething.js'
}
