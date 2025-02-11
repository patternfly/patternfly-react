import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import { ThemeColor } from '../themes/ThemeColor';
import { ThemeDefinition } from '../themes/Theme';
import { BaseTheme } from '../themes/base-theme';
import { BlueColorTheme, getComputedBlueColorTheme } from '../themes/colors/blue-theme';
import { getComputedTealColorTheme, TealColorTheme } from '../themes/colors/teal-theme';
import { getComputedYellowColorTheme, YellowColorTheme } from '../themes/colors/yellow-theme';
import { getComputedGrayColorTheme, GrayColorTheme } from '../themes/colors/gray-theme';
import { getComputedGreenColorTheme, GreenColorTheme } from '../themes/colors/green-theme';
import { getComputedSkeletonColorTheme, SkeletonColorTheme } from '../themes/colors/skeleton-theme';
import { getComputedMultiColorOrderedTheme, MultiColorOrderedTheme } from '../themes/colors/multi-ordered-theme';
import { getComputedMultiColorUnorderedTheme, MultiColorUnorderedTheme } from '../themes/colors/multi-unordered-theme';
import { getComputedOrangeColorTheme, OrangeColorTheme } from '../themes/colors/orange-theme';
import { getComputedPurpleColorTheme, PurpleColorTheme } from '../themes/colors/purple-theme';

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
 * Returns computed base theme for given color
 * @private
 * @beta
 */
export const getComputedTheme = (themeColor: string): ThemeDefinition => {
  const baseTheme = cloneDeep(BaseTheme({ isComputedTheme: true }));
  return merge(baseTheme, getComputedThemeColors(themeColor));
};

/**
 * Returns theme colors
 * @private
 */
const getThemeColors = (themeColor: string) => {
  switch (themeColor) {
    case ThemeColor.blue:
      return BlueColorTheme;
    case ThemeColor.teal:
      return TealColorTheme;
    case ThemeColor.yellow:
      return YellowColorTheme;
    case ThemeColor.gray:
      return GrayColorTheme;
    case ThemeColor.green:
      return GreenColorTheme;
    case ThemeColor.multi:
    case ThemeColor.multiOrdered:
      return MultiColorOrderedTheme;
    case ThemeColor.multiUnordered:
      return MultiColorUnorderedTheme;
    case ThemeColor.orange:
      return OrangeColorTheme;
    case ThemeColor.purple:
      return PurpleColorTheme;
    case ThemeColor.skeleton:
      return SkeletonColorTheme;
    default:
      return BlueColorTheme;
  }
};

/**
 * Returns computed theme colors
 * @private
 */
const getComputedThemeColors = (themeColor: string) => {
  switch (themeColor) {
    case ThemeColor.blue:
      return getComputedBlueColorTheme();
    case ThemeColor.teal:
      return getComputedTealColorTheme();
    case ThemeColor.yellow:
      return getComputedYellowColorTheme();
    case ThemeColor.gray:
      return getComputedGrayColorTheme();
    case ThemeColor.green:
      return getComputedGreenColorTheme();
    case ThemeColor.multi:
    case ThemeColor.multiOrdered:
      return getComputedMultiColorOrderedTheme();
    case ThemeColor.multiUnordered:
      return getComputedMultiColorUnorderedTheme();
    case ThemeColor.orange:
      return getComputedOrangeColorTheme();
    case ThemeColor.purple:
      return getComputedPurpleColorTheme();
    case ThemeColor.skeleton:
      return getComputedSkeletonColorTheme();
    default:
      return getComputedBlueColorTheme();
  }
};
