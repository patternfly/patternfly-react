import { getModifier } from '@patternfly/react-styles';

export enum GutterSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

/**
 * @param {any} styleObj - Style object
 * @param {'sm' | 'md' | 'lg'} size - Size string 'sm', 'md', or 'lg'
 * @param {any} defaultValue - Default value
 */
export function getGutterModifier(styleObj: any, size: 'sm' | 'md' | 'lg', defaultValue: any) {
  return getModifier(styleObj, `gutter-${size}`, defaultValue);
}
