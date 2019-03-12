function importer(url) {
  if (url[0] === '~') {
    return { file: `../../../../../node_modules/${url.substr(1)}` };
  }
  return { file: url };
}

module.exports = importer;
