// Found similar implementation from Primer @ Github here:
// https://github.com/primer/react/blob/main/packages/react/script/figma-connect-icons.ts
/* eslint-disable no-console */
/* eslint-disable camelcase */
// import fse from 'fs-extra';
import fse from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

if (!(process.argv.includes('--token') && process.argv.indexOf('--token') + 1 < process.argv.length)) {
  console.log('--token is required followed by the FIGMA_ACCESS_TOKEN name');
  process.exit(1);
}

const apiUri = 'https://api.figma.com/v1/files/VMEX8Xg2nzhBX8rfBx53jp/components';
const designBranch = 'PatternFly-6%3A-Components';
const figmaAccessToken = process.argv[process.argv.indexOf('--token') + 1];
// Get the current directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Helper functions for manipulating icon name strings
const removeSnake = (s) => s.toUpperCase().replace('-', '').replace('_', '');
const toCamel = (s) => `${s[0].toUpperCase()}${s.substr(1).replace(/([-_][\w])/gi, removeSnake)}`;

// Helper functions to get icons from Figma REST API
// Fetches icons from Figma & writes to ./iconsData.json
// TODO: Use a variable for URI
async function fetchIcons() {
  return await fetch(`${apiUri}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-FIGMA-TOKEN': figmaAccessToken
    }
  })
    .then((res) => res.json())
    .then((res) => {
      const components = res.meta.components;
      const iconsArr = filterIcons(components);
      const iconsData = buildIconsDataArr(iconsArr);
      // Comment out below to write icon data to json file for debugging
      fse.writeJSON(__dirname + '/../data/iconsData.json', iconsData);
      return { iconsData, __dirname };
    });
}

// Takes array of all components from Figma file
// Returns array filtered down only to those on "Icons " page
const filterIcons = (componentsArr) => componentsArr.filter((comp) => comp.containing_frame.pageName === 'Icons ');

// Creates new array with name/nodeId/url for each icon name
const buildIconsDataArr = (iconsArr) =>
  iconsArr.reduce((acc, i) => {
    const { name, node_id, file_key } = i;
    // Remove fa-, pf-icon-, pf- icon name prefixes
    const iconName = name.replace('fa-', '').replace('pf-icon-', '').replace('pf-', '');
    const fileName = `${iconName}-icon`;
    const reactName = `${toCamel(iconName)}Icon`;
    const nodeId = node_id.replace(':', '-');
    const url = `https://www.figma.com/design/${file_key}/${designBranch}=${nodeId}&m=dev`;

    acc.push({
      iconName,
      fileName,
      reactName,
      url
    });

    return acc;
  }, []);

fetchIcons();
