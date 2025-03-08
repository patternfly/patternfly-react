import fetchIcons from './fetchIcons.mjs';
import writeIconsFile from './writeIcons.mjs';

async function generateIconsFile() {
  const { iconsData, __dirname } = await fetchIcons();
  writeIconsFile(iconsData, __dirname);
}

generateIconsFile();
