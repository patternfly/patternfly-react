import { merge } from 'lodash';
import { DarkBlueColorTheme } from '../ChartTheme/themes/dark/blue-color-theme';
import { DarkGreenColorTheme } from '../ChartTheme/themes/dark/green-color-theme';
import { DarkGreyColorTheme } from '../ChartTheme/themes/dark/grey-color-theme';
import { DarkMultiColorTheme } from '../ChartTheme/themes/dark/multi-color-theme';
import { LightBlueColorTheme } from '../ChartTheme/themes/light/blue-color-theme';
import { LightGreenColorTheme } from '../ChartTheme/themes/light/green-color-theme';
import { LightGreyColorTheme } from '../ChartTheme/themes/light/grey-color-theme';
import { LightMultiColorTheme } from '../ChartTheme/themes/light/multi-color-theme';
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
      return DarkBlueColorTheme;
    case ChartThemeColor.green:
      return DarkGreenColorTheme;
    case ChartThemeColor.grey:
      return DarkGreyColorTheme;
    case ChartThemeColor.multi:
      return DarkMultiColorTheme;
    default:
      return DarkBlueColorTheme;
  }
};

// Returns light theme colors
export const getLightThemeColors = (themeColor: string) => {
  switch (themeColor) {
    case ChartThemeColor.blue:
      return LightBlueColorTheme;
    case ChartThemeColor.green:
      return LightGreenColorTheme;
    case ChartThemeColor.grey:
      return LightGreyColorTheme;
    case ChartThemeColor.multi:
      return LightMultiColorTheme;
    default:
      return LightBlueColorTheme;
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
