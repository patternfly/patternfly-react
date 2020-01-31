import { getModifier } from '@patternfly/react-styles';

export const GutterSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

/**
 * @param {any} styleObj - Style object
 * @param {string} size - Size string
 * @param {any} defaultValue - Default value
 */
export function getGutterModifier(styleObj: any, size: string, defaultValue: any) {
  return getModifier(styleObj, `gutter-${size}`, defaultValue);
}
