import merge from 'lodash/merge';
import { BlueColorTheme } from '../ChartTheme/themes/colors/blue-theme';
import { CyanColorTheme } from '../ChartTheme/themes/colors/cyan-theme';
import { GoldColorTheme } from '../ChartTheme/themes/colors/gold-theme';
import { GrayColorTheme } from '../ChartTheme/themes/colors/gray-theme';
import { GreenColorTheme } from '../ChartTheme/themes/colors/green-theme';
import { MultiColorOrderedTheme } from '../ChartTheme/themes/colors/multi-ordered-theme';
import { MultiColorUnorderedTheme } from '../ChartTheme/themes/colors/multi-unordered-theme';
import { OrangeColorTheme } from '../ChartTheme/themes/colors/orange-theme';
import { PurpleColorTheme } from '../ChartTheme/themes/colors/purple-theme';
import { ChartBaseTheme, ChartThemeDefinition } from '../ChartTheme';
import { ChartThemeColor } from '../ChartTheme/ChartThemeColor';

/**
 * Apply custom properties to base and color themes
 *
 * @param themeColor The theme color to merge with custom theme
 * @param customTheme The custom theme to merge
 * @public
 */
export const getCustomTheme = (themeColor: string, customTheme: ChartThemeDefinition): ChartThemeDefinition =>
  merge(getTheme(themeColor), customTheme);

/**
 * Returns base theme for given color
 * @public
 */
export const getTheme = (themeColor: string): ChartThemeDefinition => {
  // Deep clone
  const baseTheme = {
    ...JSON.parse(JSON.stringify(ChartBaseTheme))
  };
  return merge(baseTheme, getThemeColors(themeColor));
};

/**
 * Returns theme colors
 * @private
 */
const getThemeColors = (themeColor: string) => {
  switch (themeColor) {
    case ChartThemeColor.blue:
      return BlueColorTheme;
    case ChartThemeColor.cyan:
      return CyanColorTheme;
    case ChartThemeColor.gold:
      return GoldColorTheme;
    case ChartThemeColor.gray:
      return GrayColorTheme;
    case ChartThemeColor.green:
      return GreenColorTheme;
    case ChartThemeColor.multi:
    case ChartThemeColor.multiOrdered:
      return MultiColorOrderedTheme;
    case ChartThemeColor.multiUnordered:
      return MultiColorUnorderedTheme;
    case ChartThemeColor.orange:
      return OrangeColorTheme;
    case ChartThemeColor.purple:
      return PurpleColorTheme;
    default:
      return BlueColorTheme;
  }
};
