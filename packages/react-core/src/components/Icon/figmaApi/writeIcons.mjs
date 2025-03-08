import { join } from 'path';
import { outputFileSync } from 'fs-extra/esm';

// Create string to populate with icon data
let fileContent = `import React from 'react';
import figma from '@figma/code-connect';
`;

async function writeIconsFile(iconsArr, dirName) {
  await iconsArr.forEach(addIcon);
  writeFile(dirName, fileContent);
}

const addIcon = ({ fileName, reactName, url }) => {
  const iconImprt = `
import ${reactName} from '@patternfly/react-icons/dist/esm/icons/${fileName}';`;
  const figmaConnect = `
figma.connect(
  ${reactName},
  '${url}',
  {
    example: () => <${reactName} />
  }
);
  `;
  // Don't add duplicate import statement
  if (!fileContent.includes(iconImprt)) {
    fileContent += iconImprt;
  }
  fileContent += figmaConnect;
};

const writeFile = (dirName) => {
  outputFileSync(join(dirName, '../Icons.figma.tsx'), fileContent.trim());
};

export default writeIconsFile;
