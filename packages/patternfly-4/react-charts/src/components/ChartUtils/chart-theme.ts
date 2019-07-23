import { merge } from 'lodash';
import { DarkBlueColorTheme } from '../ChartTheme/themes/dark/blue-color-theme';
import { DarkCyanColorTheme } from '../ChartTheme/themes/dark/cyan-color-theme';
import { DarkGoldColorTheme } from '../ChartTheme/themes/dark/gold-color-theme';
import { DarkGrayColorTheme } from '../ChartTheme/themes/dark/gray-color-theme';
import { DarkGreenColorTheme } from '../ChartTheme/themes/dark/green-color-theme';
import { DarkMultiColorOrderedTheme } from '../ChartTheme/themes/dark/multi-color-ordered-theme';
import { DarkMultiColorUnorderedTheme } from '../ChartTheme/themes/dark/multi-color-unordered-theme';
import { DarkOrangeColorTheme } from '../ChartTheme/themes/dark/orange-color-theme';
import { DarkPurpleColorTheme } from '../ChartTheme/themes/dark/purple-color-theme';
import { LightBlueColorTheme } from '../ChartTheme/themes/light/blue-color-theme';
import { LightCyanColorTheme } from '../ChartTheme/themes/light/cyan-color-theme';
import { LightGoldColorTheme } from '../ChartTheme/themes/light/gold-color-theme';
import { LightGrayColorTheme } from '../ChartTheme/themes/light/gray-color-theme';
import { LightGreenColorTheme } from '../ChartTheme/themes/light/green-color-theme';
import { LightMultiColorOrderedTheme } from '../ChartTheme/themes/light/multi-color-ordered-theme';
import { LightMultiColorUnorderedTheme } from '../ChartTheme/themes/light/multi-color-unordered-theme';
import { LightOrangeColorTheme } from '../ChartTheme/themes/light/orange-color-theme';
import { LightPurpleColorTheme } from '../ChartTheme/themes/light/purple-color-theme';
import {
  ChartAxisTheme,
  ChartBaseTheme,
  ChartDonutTheme,
  ChartDonutUtilizationDynamicTheme,
  ChartDonutUtilizationStaticTheme,
  ChartDonutThresholdDynamicTheme,
  ChartDonutThresholdStaticTheme,
  ChartThemeDefinition,
  ChartThemeColor,
  ChartThemeVariant
} from '../ChartTheme/ChartTheme';
import { cloneDeep } from 'lodash';

// Apply custom properties to color and base themes
export const getCustomTheme = (themeColor: string, themeVariant: string, customTheme: ChartThemeDefinition
): ChartThemeDefinition =>
  merge(getTheme(themeColor, themeVariant), customTheme);

// Apply axis threshold properties onto base theme
export const getAxisTheme = (themeColor: string, themeVariant: string) : ChartThemeDefinition => {
  const theme = getCustomTheme(themeColor, themeVariant, ChartAxisTheme);
  return theme;
}

// Apply donut properties onto pie chart theme
export const getDonutTheme = (themeColor: string, themeVariant: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, themeVariant, ChartDonutTheme);

// Apply dynamic donut threshold properties onto pie chart theme
export const getDonutThresholdDynamicTheme = (themeColor: string, themeVariant: string): ChartThemeDefinition => {
  const theme = getCustomTheme(themeColor, themeVariant, ChartDonutThresholdDynamicTheme);

  // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale
  theme.legend.colorScale = [theme.pie.colorScale[0], ...ChartDonutThresholdDynamicTheme.legend.colorScale];

  // Merge the threshold colors in case users want to show the unused data
  theme.pie.colorScale = [theme.pie.colorScale[0], ...ChartDonutThresholdStaticTheme.pie.colorScale];
  return theme;
};

// Apply static donut threshold properties onto pie chart theme
export const getDonutThresholdStaticTheme = (themeColor: string, themeVariant: string, invert?: boolean
): ChartThemeDefinition => {
  const staticTheme = cloneDeep(ChartDonutThresholdStaticTheme);
  if (invert) {
    staticTheme.pie.colorScale = staticTheme.pie.colorScale.reverse();
  }
  return getCustomTheme(themeColor, themeVariant, staticTheme);
};

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
    case ChartThemeColor.cyan:
      return DarkCyanColorTheme;
    case ChartThemeColor.gold:
      return DarkGoldColorTheme;
    case ChartThemeColor.gray:
      return DarkGrayColorTheme;
    case ChartThemeColor.green:
      return DarkGreenColorTheme;
    case ChartThemeColor.multi:
    case ChartThemeColor.multiOrdered:
      return DarkMultiColorOrderedTheme;
    case ChartThemeColor.multiUnordered:
      return DarkMultiColorUnorderedTheme;
    case ChartThemeColor.orange:
      return DarkOrangeColorTheme;
    case ChartThemeColor.purple:
      return DarkPurpleColorTheme;
    default:
      return DarkBlueColorTheme;
  }
};

// Returns light theme colors
export const getLightThemeColors = (themeColor: string) => {
  switch (themeColor) {
    case ChartThemeColor.blue:
      return LightBlueColorTheme;
    case ChartThemeColor.cyan:
      return LightCyanColorTheme;
    case ChartThemeColor.gold:
      return LightGoldColorTheme;
    case ChartThemeColor.gray:
      return LightGrayColorTheme;
    case ChartThemeColor.green:
      return LightGreenColorTheme;
    case ChartThemeColor.multi:
    case ChartThemeColor.multiOrdered:
      return LightMultiColorOrderedTheme;
    case ChartThemeColor.multiUnordered:
      return LightMultiColorUnorderedTheme;
    case ChartThemeColor.orange:
      return LightOrangeColorTheme;
    case ChartThemeColor.purple:
      return LightPurpleColorTheme;
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
