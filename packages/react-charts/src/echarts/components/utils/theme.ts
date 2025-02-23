import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import { ThemeColor } from '../themes/ThemeColor';
import { ThemeDefinition } from '../themes/Theme';
import { BaseTheme } from '../themes/base-theme';
import { getBlueColorTheme } from '../themes/colors/blue-theme';
import { getTealColorTheme } from '../themes/colors/teal-theme';
import { getYellowColorTheme } from '../themes/colors/yellow-theme';
import { getGrayColorTheme } from '../themes/colors/gray-theme';
import { getGreenColorTheme } from '../themes/colors/green-theme';
import { getSkeletonColorTheme } from '../themes/colors/skeleton-theme';
import { getMultiColorOrderedTheme } from '../themes/colors/multi-ordered-theme';
import { getMultiColorUnorderedTheme } from '../themes/colors/multi-unordered-theme';
import { getOrangeColorTheme } from '../themes/colors/orange-theme';
import { getPurpleColorTheme } from '../themes/colors/purple-theme';

/**
 * Apply custom properties to base and color themes
 *
 * @param themeColor The theme color to merge with custom theme
 * @param customTheme The custom theme to merge
 * @public
 * @beta
 */
export const getCustomTheme = (themeColor: string, customTheme: ThemeDefinition): ThemeDefinition =>
  merge(getTheme(themeColor), customTheme);

/**
 * Returns base theme for given color
 * @public
 * @beta
 */
export const getTheme = (themeColor: string): ThemeDefinition => {
  const baseTheme = cloneDeep(BaseTheme());
  return merge(baseTheme, getThemeColors(themeColor));
};

/**
 * Returns computed theme colors
 * @private
 */
const getThemeColors = (themeColor: string) => {
  switch (themeColor) {
    case ThemeColor.blue:
      return getBlueColorTheme();
    case ThemeColor.teal:
      return getTealColorTheme();
    case ThemeColor.yellow:
      return getYellowColorTheme();
    case ThemeColor.gray:
      return getGrayColorTheme();
    case ThemeColor.green:
      return getGreenColorTheme();
    case ThemeColor.multi:
    case ThemeColor.multiOrdered:
      return getMultiColorOrderedTheme();
    case ThemeColor.multiUnordered:
      return getMultiColorUnorderedTheme();
    case ThemeColor.orange:
      return getOrangeColorTheme();
    case ThemeColor.purple:
      return getPurpleColorTheme();
    case ThemeColor.skeleton:
      return getSkeletonColorTheme();
    default:
      return getBlueColorTheme();
  }
};
