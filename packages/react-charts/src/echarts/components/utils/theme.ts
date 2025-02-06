import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import { ThemeColor } from '../themes/ThemeColor';
import { ThemeDefinition } from '../themes/Theme';
import { BaseTheme } from '../themes/ThemeTypes';
import { BlueColorTheme } from '../themes/colors/blue-theme';
import { TealColorTheme } from '../themes/colors/teal-theme';
import { YellowColorTheme } from '../themes/colors/yellow-theme';
import { GrayColorTheme } from '../themes/colors/gray-theme';
import { GreenColorTheme } from '../themes/colors/green-theme';
import { SkeletonColorTheme } from '../themes/colors/skeleton-theme';
import { MultiColorOrderedTheme } from '../themes/colors/multi-ordered-theme';
import { MultiColorUnorderedTheme } from '../themes/colors/multi-unordered-theme';
import { OrangeColorTheme } from '../themes/colors/orange-theme';
import { PurpleColorTheme } from '../themes/colors/purple-theme';

/**
 * Apply custom properties to base and color themes
 *
 * @param themeColor The theme color to merge with custom theme
 * @param customTheme The custom theme to merge
 * @public
 */
export const getCustomTheme = (themeColor: string, customTheme: ThemeDefinition): ThemeDefinition =>
  merge(getTheme(themeColor), customTheme);

/**
 * Returns base theme for given color
 * @public
 */
export const getTheme = (themeColor: string): ThemeDefinition => {
  const baseTheme = cloneDeep(BaseTheme);
  return merge(baseTheme, getThemeColors(themeColor));
};

/**
 * Returns theme colors
 * @public
 */
export const getThemeColors = (themeColor: string) => {
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
