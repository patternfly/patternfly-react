import { merge } from 'lodash';
import ThemeColorDarkBlue from '../ChartTheme/themes/dark/theme-color-blue';
import ThemeColorDarkGreen from '../ChartTheme/themes/dark/theme-color-green';
import ThemeColorDarkGrey from '../ChartTheme/themes/dark/theme-color-grey';
import ThemeColorDarkMulti from '../ChartTheme/themes/dark/theme-color-multi';
import ThemeColorLightBlue from '../ChartTheme/themes/light/theme-color-blue';
import ThemeColorLightGreen from '../ChartTheme/themes/light/theme-color-green';
import ThemeColorLightGrey from '../ChartTheme/themes/light/theme-color-grey';
import ThemeColorLightMulti from '../ChartTheme/themes/light/theme-color-multi';
import {
  ChartBaseTheme,
  ChartDonutTheme,
  ChartDonutUtilizationDynamicTheme,
  ChartDonutUtilizationStaticTheme,
  ChartDonutThresholdDynamicTheme,
  ChartDonutThresholdStaticTheme,
  ChartThemeColor,
  ChartThemeDefinition,
  ChartThemeVariant
} from '../ChartTheme';

// Apply custom properties to color and base themes
export const getCustomTheme = (themeColor: string, themeVariant: string,
                               customTheme: ChartThemeDefinition): ChartThemeDefinition =>
  merge(getTheme(themeColor, themeVariant), customTheme);

// Apply donut properties onto pie chart theme
export const getDonutTheme = (themeColor: string, themeVariant: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, themeVariant, ChartDonutTheme);

// Apply dynamic donut threshold properties onto pie chart theme
export const getDonutThresholdDynamicTheme = (themeColor: string, themeVariant: string): ChartThemeDefinition => {
  const theme = getCustomTheme(themeColor, themeVariant, ChartDonutThresholdDynamicTheme);

  // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale
  theme.legend.colorScale = [theme.pie.colorScale[0], ...ChartDonutThresholdDynamicTheme.legend.colorScale];
  return theme;
};

// Apply static donut threshold properties onto pie chart theme
export const getDonutThresholdStaticTheme = (themeColor: string, themeVariant: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, themeVariant, ChartDonutThresholdStaticTheme);

// Apply donut utilization properties onto pie chart theme
export const getDonutUtilizationTheme = (themeColor: string, themeVariant: string): ChartThemeDefinition => {
  const theme = getCustomTheme(themeColor, themeVariant, ChartDonutUtilizationDynamicTheme);

  // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale
  theme.pie.colorScale = [theme.pie.colorScale[0], ...ChartDonutUtilizationStaticTheme.pie.colorScale];
  theme.legend.colorScale = [theme.legend.colorScale[0],
    ...ChartDonutUtilizationStaticTheme.legend.colorScale];
  return theme;
};

// Returns dark theme colors
export const getDarkThemeColors = (themeColor: string) => {
  switch (themeColor) {
    case ChartThemeColor.blue:
      return ThemeColorDarkBlue;
    case ChartThemeColor.green:
      return ThemeColorDarkGreen;
    case ChartThemeColor.grey:
      return ThemeColorDarkGrey;
    case ChartThemeColor.multi:
      return ThemeColorDarkMulti;
    default:
      return ThemeColorDarkBlue;
  }
};

// Returns light theme colors
export const getLightThemeColors = (themeColor: string) => {
  switch (themeColor) {
    case ChartThemeColor.blue:
      return ThemeColorLightBlue;
    case ChartThemeColor.green:
      return ThemeColorLightGreen;
    case ChartThemeColor.grey:
      return ThemeColorLightGrey;
    case ChartThemeColor.multi:
      return ThemeColorLightMulti;
    default:
      return ThemeColorLightBlue;
  }
};

// Applies theme color and variant to base theme
export const getTheme = (themeColor: string, themeVariant: string): ChartThemeDefinition => {
  // Deep clone
  const baseTheme = {
    ...JSON.parse(JSON.stringify(ChartBaseTheme))
  };
  switch (themeVariant) {
    case ChartThemeVariant.dark:
      return merge(baseTheme, getDarkThemeColors(themeColor));
    case ChartThemeVariant.light:
      return merge(baseTheme, getLightThemeColors(themeColor));
    default:
      return merge(baseTheme, getLightThemeColors(themeColor));
  }
};
