import faIcons from './icons/fontawesomeIcons.mjs';
import patternflyIcons from './icons/patternflyIcons.mjs';
import customIcons from './icons/customIcons.mjs';
import rhIconsMicrons from './icons/rhIconsMicrons.mjs';
import rhIconsStandard from './icons/rhIconsStandard.mjs';
// import rhIconsSocial from './icons/rhIconsSocial.mjs';
import rhIconsUI from './icons/rhIconsUI.mjs';

/**
 * Generates icons from FontAwesome, PatternFly CSS, and custom icons in this repo.
 */
export function generateIcons() {
  return {
    ...faIcons,
    ...patternflyIcons,
    ...customIcons,
    ...rhIconsMicrons,
    ...rhIconsStandard,
    // ...rhIconsSocial,
    ...rhIconsUI
  };
}
