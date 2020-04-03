const path = require('path');
const fs = require('fs-extra');
const icons = require('./icons');
const concurrently = require('concurrently');

const removeSnake = s =>
  s
    .toUpperCase()
    .replace('-', '')
    .replace('_', '');
const pascalCase = s => `${s[0].toUpperCase()}${s.substr(1).replace(/([-_][a-z])/gi, removeSnake)}`;

/**
 * Generates src/icons/*.tsx files
 */
function generateIcons() {
  const outDir = path.join(__dirname, '../dist');
  const templateDir = path.resolve(__dirname, './templates');

  if (fs.existsSync(outDir)) {
    console.log('Not overwriting generate icons files.')
    return;
  }

  const templates = fs
    .readdirSync(templateDir)
    .map(templateFile => require(path.join(templateDir, templateFile)));

  const index = [];
  Object.entries(icons).forEach(([iconName, icon]) => {
    const fname = `${iconName}-icon`;
    const jsName = `${pascalCase(iconName)}Icon`;

    templates.forEach(template =>
      fs.outputFileSync(
        template.getSingleOutputPath(outDir, fname),
        template.getSingleContent(jsName, icon)
      )
    );
    index.push(fname);
  });
  templates.forEach(template => 
    fs.outputFileSync(template.getOutputPath(outDir), template.getContent(index))
  );

  // Compile src folder
  const tsDir = path.resolve(__dirname, '..');
  concurrently([`yarn tsc -p ${tsDir}`, `yarn tsc -p ${tsDir}/tsconfig.cjs.json`], {  });
  console.log('Generated files for', index.length, 'icons');
}

generateIcons();
