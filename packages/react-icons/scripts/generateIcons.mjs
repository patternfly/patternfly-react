import faIcons from './icons/fontawesomeIcons.mjs';
import patternflyIcons from './icons/patternflyIcons.mjs';
import customIcons from './icons/customIcons.mjs';
import rhdsIconsMicrons from './icons/rhdsIconsMicrons.mjs';
import rhdsIconsStandard from './icons/rhdsIconsStandard.mjs';
import rhdsIconsSocial from './icons/rhdsIconsSocial.mjs';
import rhdsIconsUI from './icons/rhdsIconsUI.mjs';

/**
 * Generates icons from FontAwesome, PatternFly CSS, and custom icons in this repo.
 */
export function generateIcons() {
  return {
    ...faIcons,
    ...patternflyIcons,
    ...customIcons,
    ...rhdsIconsMicrons,
    ...rhdsIconsStandard,
    ...rhdsIconsSocial,
    ...rhdsIconsUI
  };
}
