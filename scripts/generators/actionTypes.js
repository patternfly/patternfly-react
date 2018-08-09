const path = require('path');
const fs = require('fs-extra');

const ADD_TO_BARREL_FILE = 'addToBarrelFile';

function setActionTypes(plop) {
  plop.setActionType(ADD_TO_BARREL_FILE, addToBarrelFile);
}

async function addToBarrelFile(answers, config, plop) {
  const renderedPath = plop.renderString(config.path, {
    ...answers,
    ...config.data
  });
  const pathToFile = path.isAbsolute(renderedPath) ? renderedPath : path.resolve(plop.getPlopfilePath(), renderedPath);
  let fileContents = '';
  try {
    fileContents = await fs.readFile(pathToFile, 'utf8');
  } catch (_) {
    fileContents = '';
  }
  const lines = fileContents.split('\n');
  const finalLine = lines.lastIndexOf('');
  const updatedLines = [
    ...lines.slice(0, finalLine),
    plop.renderString(config.template, { ...answers, ...config.data }),
    ''
  ];
  await fs.outputFile(pathToFile, updatedLines.join('\n'));
  return `-> ${pathToFile}`;
}

module.exports = {
  setActionTypes,
  ADD_TO_BARREL_FILE
};
