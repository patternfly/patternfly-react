import { getModifier } from '@patternfly/react-styles';

export const GutterSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

/**
 * @param styleObj
 * @param size
 * @param defaultValue
 */
export function getGutterModifier(styleObj, size, defaultValue) {
  return getModifier(styleObj, `gutter-${size}`, defaultValue);
}
