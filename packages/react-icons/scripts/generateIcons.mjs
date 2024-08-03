import faIcons from './icons/fontawesomeIcons.mjs';
import patternflyIcons from './icons/patternflyIcons.mjs';
import customIcons from './icons/customIcons.mjs';

/**
 * Generates icons from FontAwesome, PatternFly CSS, and custom icons in this repo.
 */
export function generateIcons() {
  return {
    ...faIcons,
    ...patternflyIcons,
    ...customIcons
  };
}
