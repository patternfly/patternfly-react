/* eslint-disable no-console */
/* eslint-disable camelcase */
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Check if access token is provided
if (!(process.argv.includes('--token') && process.argv.indexOf('--token') + 1 < process.argv.length)) {
  console.log('--token is required followed by the FIGMA_ACCESS_TOKEN name');
  process.exit(1);
}

const figmaAccessToken = process.argv[process.argv.indexOf('--token') + 1];

// Get the current directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper functions for manipulating icon name strings
const removeSnake = (s) => s.toUpperCase().replace('-', '').replace('_', '');
const toCamel = (s) => `${s[0].toUpperCase()}${s.substr(1).replace(/([-_][\w])/gi, removeSnake)}`;

// Function to determine if an item is a size-related entry rather than an actual icon
const isSizeVariant = (name) =>
  name.startsWith('Icon Size=') ||
  name.startsWith('Font size -') ||
  name.startsWith('Body -') ||
  name.startsWith('Heading -') ||
  name.startsWith('Standalone -');

// Fetches icons from Figma & writes to ./iconsData.json
async function fetchIcons() {
  console.log('Fetching icons from Figma API...');

  try {
    const response = await fetch('https://api.figma.com/v1/files/VMEX8Xg2nzhBX8rfBx53jp/components', {
      headers: {
        'Content-Type': 'application/json',
        'X-FIGMA-TOKEN': figmaAccessToken
      }
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const components = data.meta.components;

    // Filter icons
    const iconsArr = filterIcons(components);
    console.log(`Found ${iconsArr.length} icons in Figma`);

    // Build icons data array
    const iconsData = buildIconsDataArr(iconsArr);
    console.log(`Processed ${iconsData.length} icons`);

    // Write to JSON file
    const outputPath = `${__dirname}/iconsData.json`;
    fs.writeFileSync(outputPath, JSON.stringify(iconsData, null, 2));
    console.log(`✓ Wrote icons data to ${outputPath}`);

    return { iconsData, __dirname };
  } catch (error) {
    console.error('Error fetching icons from Figma:', error);
    process.exit(1);
  }
}

// Takes array of all components from Figma file
// Returns array filtered down only to those on "Icons " page
const filterIcons = (componentsArr) =>
  componentsArr.filter((comp) => {
    // Filter by page name
    const isOnIconsPage = comp.containing_frame.pageName === 'Icons ';

    // Filter out size variants
    if (isOnIconsPage && isSizeVariant(comp.name)) {
      return false;
    }

    return isOnIconsPage;
  });

// Creates new array with name/nodeId/url for each icon name
const buildIconsDataArr = (iconsArr) =>
  iconsArr.reduce((acc, i) => {
    const { name, node_id, file_key } = i;

    // Remove fa-, pf-icon-, pf- icon name prefixes
    const iconName = name.replace('fa-', '').replace('pf-icon-', '').replace('pf-', '');
    const fileName = `${iconName}-icon`;
    const reactName = `${toCamel(iconName)}Icon`;
    const nodeId = node_id.replace(':', '-');
    const url = `https://www.figma.com/design/${file_key}/PatternFly-6%3A-Components?node-id=${nodeId}&m=dev`;

    acc.push({
      iconName,
      fileName,
      reactName,
      url
    });

    return acc;
  }, []);

export default fetchIcons;
