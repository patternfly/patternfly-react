/**
 * Re-export subpath modules into the package root directory for ease of access.
 */
const { readdirSync, readFileSync, writeFileSync, mkdirSync } = require('fs');
const { resolve, join } = require('path');

const isIndex = (fileName) => fileName.match(/^index\./);

const updatePaths = (filePath, subPathName) => {
  const contents = readFileSync(filePath, { encoding: 'utf8' });
  if (filePath.includes('.map')) {
    return contents.replaceAll('../../../', `../`);
  } else {
    return contents.replaceAll('./', `../dist/esm/${subPathName}/`);
  }
};

['next', 'deprecated', 'components', 'layouts', 'helpers'].forEach((subPathName) => {
  const distPath = resolve(__dirname, `../dist/esm/${subPathName}`);
  const distFileNames = readdirSync(distPath);
  const distIndexFileNames = distFileNames.filter((fileName) => isIndex(fileName));

  const destinationDir = resolve(__dirname, `../${subPathName}`);
  mkdirSync(destinationDir, { recursive: true });

  distIndexFileNames.forEach((fileName) => {
    const filePath = join(__dirname, '../dist/esm', subPathName, fileName);
    const newFileContent = updatePaths(filePath, subPathName);
    const fileDestination = join(destinationDir, fileName);
    writeFileSync(fileDestination, newFileContent);
  });
});
