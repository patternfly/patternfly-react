import faIcons from './icons/fontawesomeIcons.js';
import { pfIcons } from '@patternfly/patternfly/icons/pf-icons.mjs';
import customIcons from './icons/customIcons.js';

/**
 * Generates icons from FontAwesome, PatternFly CSS, and custom icons in this repo.
 */
export function generateIcons() {
  return {
    ...faIcons,
    ...pfIcons,
    ...customIcons
  };
}
