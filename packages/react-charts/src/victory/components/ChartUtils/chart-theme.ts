import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import { ChartThemeColor } from '../ChartTheme/ChartThemeColor';
import { ChartThemeDefinition, ChartComponentThemeDefinition } from '../ChartTheme/ChartTheme';
import { ChartBaseTheme, ChartBaseComponentTheme } from '../ChartTheme/ChartThemeTypes';
import { BlueColorTheme, BlueColorComponentTheme } from '../ChartTheme/themes/colors/blue-theme';
import { TealColorTheme, TealColorComponentTheme } from '../ChartTheme/themes/colors/teal-theme';
import { YellowColorTheme, YellowColorComponentTheme } from '../ChartTheme/themes/colors/yellow-theme';
import { GrayColorTheme, GrayColorComponentTheme } from '../ChartTheme/themes/colors/gray-theme';
import { GreenColorTheme, GreenColorComponentTheme } from '../ChartTheme/themes/colors/green-theme';
import { SkeletonColorTheme, SkeletonColorComponentTheme } from '../ChartTheme/themes/colors/skeleton-theme';
import {
  MultiColorOrderedTheme,
  MultiColorOrderedComponentTheme
} from '../ChartTheme/themes/colors/multi-ordered-theme';
import {
  MultiColorUnorderedTheme,
  MultiColorUnorderedComponentTheme
} from '../ChartTheme/themes/colors/multi-unordered-theme';
import { OrangeColorTheme, OrangeColorComponentTheme } from '../ChartTheme/themes/colors/orange-theme';
import { PurpleColorTheme, PurpleColorComponentTheme } from '../ChartTheme/themes/colors/purple-theme';

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
  const baseTheme = cloneDeep(ChartBaseTheme);
  return merge(baseTheme, getThemeColors(themeColor));
};

/**
 * Returns base component theme for given color
 * @private
 * @beta
 */
export const getComponentTheme = (themeColor: string): ChartComponentThemeDefinition => {
  const theme = cloneDeep(ChartBaseComponentTheme);
  return merge(theme, getThemeComponentColors(themeColor));
};

/**
 * Returns theme colors
 * @public
 */
export const getThemeColors = (themeColor: string) => {
  switch (themeColor) {
    case ChartThemeColor.blue:
      return BlueColorTheme;
    case ChartThemeColor.teal:
      return TealColorTheme;
    case ChartThemeColor.yellow:
      return YellowColorTheme;
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
    case ChartThemeColor.skeleton:
      return SkeletonColorTheme;
    default:
      return BlueColorTheme;
  }
};

/**
 * Returns theme component colors
 * @private
 * @beta
 */
export const getThemeComponentColors = (themeColor: string) => {
  switch (themeColor) {
    case ChartThemeColor.blue:
      return BlueColorComponentTheme;
    case ChartThemeColor.teal:
      return TealColorComponentTheme;
    case ChartThemeColor.yellow:
      return YellowColorComponentTheme;
    case ChartThemeColor.gray:
      return GrayColorComponentTheme;
    case ChartThemeColor.green:
      return GreenColorComponentTheme;
    case ChartThemeColor.multi:
    case ChartThemeColor.multiOrdered:
      return MultiColorOrderedComponentTheme;
    case ChartThemeColor.multiUnordered:
      return MultiColorUnorderedComponentTheme;
    case ChartThemeColor.orange:
      return OrangeColorComponentTheme;
    case ChartThemeColor.purple:
      return PurpleColorComponentTheme;
    case ChartThemeColor.skeleton:
      return SkeletonColorComponentTheme;
    default:
      return BlueColorComponentTheme;
  }
};
