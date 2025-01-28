import fs from 'fs/promises';
import path from 'path';

async function getIconNames() {
  try {
    const iconDirectory = './icons'; // Adjust this path to your icons folder
    const files = await fs.readdir(iconDirectory);

    // Filter for SVG files and remove extensions
    const iconNames = files.filter((file) => path.extname(file) === '.svg').map((file) => path.basename(file, '.svg'));

    // eslint-disable-next-line no-console
    console.log('Icon names:', iconNames);
    return iconNames;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error reading icons:', error);
    throw error;
  }
}

getIconNames();