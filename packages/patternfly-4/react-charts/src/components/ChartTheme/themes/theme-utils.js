import ThemeColorDarkBlue from './dark/theme-color-blue';
import ThemeColorDarkGreen from './dark/theme-color-green';
import ThemeColorDarkMulti from './dark/theme-color-multi';
import ThemeColorLightBlue from './light/theme-color-blue';
import ThemeColorLightGreen from './light/theme-color-green';
import ThemeColorLightMulti from './light/theme-color-multi';
import { ChartBaseTheme, ChartDonutTheme, ChartThemeColor, ChartThemeVariant } from '../ChartTheme';
import mergeDeep from '../../../merge-utils';

// Apply custom properties to color and base themes
export function getCustomTheme(themeColor, themeVariant, customTheme) {
  return mergeDeep(getTheme(themeColor, themeVariant), customTheme);
}

// Apply donut specific properties onto pie chart theme
export function getDonutTheme(themeColor, themeVariant) {
  return getCustomTheme(themeColor, themeVariant, ChartDonutTheme);
}

// Returns dark theme colors
export function getDarkThemeColors(themeColor) {
  switch (themeColor) {
    case ChartThemeColor.blue:
      return ThemeColorDarkBlue;
    case ChartThemeColor.green:
      return ThemeColorDarkGreen;
    case ChartThemeColor.multi:
      return ThemeColorDarkMulti;
    default:
      return ThemeColorDarkBlue;
  }
}

// Returns light theme colors
export function getLightThemeColors(themeColor) {
  switch (themeColor) {
    case ChartThemeColor.blue:
      return ThemeColorLightBlue;
    case ChartThemeColor.green:
      return ThemeColorLightGreen;
    case ChartThemeColor.multi:
      return ThemeColorLightMulti;
    default:
      return ThemeColorLightBlue;
  }
}

// Applies theme color and variant to base theme
export function getTheme(themeColor, themeVariant) {
  // Deep clone
  const baseTheme = {
    ...JSON.parse(JSON.stringify(ChartBaseTheme))
  };
  switch (themeVariant) {
    case ChartThemeVariant.dark:
      return mergeDeep(baseTheme, getDarkThemeColors(themeColor));
    case ChartThemeVariant.light:
      return mergeDeep(baseTheme, getLightThemeColors(themeColor));
    default:
      return mergeDeep(baseTheme, getLightThemeColors(themeColor));
  }
}
