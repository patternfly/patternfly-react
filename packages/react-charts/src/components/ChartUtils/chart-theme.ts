/* eslint-disable @typescript-eslint/no-unused-vars */
import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
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
  ChartBulletComparativeErrorMeasureTheme,
  ChartBulletComparativeMeasureTheme,
  ChartBulletComparativeWarningMeasureTheme,
  ChartBulletGroupTitleTheme,
  ChartBulletPrimaryDotMeasureTheme,
  ChartBulletPrimaryNegativeMeasureTheme,
  ChartBulletPrimarySegmentedMeasureTheme,
  ChartBulletTheme,
  ChartBulletQualitativeRangeTheme,
  ChartDonutTheme,
  ChartDonutUtilizationDynamicTheme,
  ChartDonutUtilizationStaticTheme,
  ChartDonutThresholdDynamicTheme,
  ChartDonutThresholdStaticTheme,
  ChartThemeDefinition,
  ChartThemeColor,
  ChartThresholdTheme
} from '../ChartTheme/ChartTheme';

/**
 * Apply custom properties to base and color themes
 * @deprecated Use mergeTheme
 * @public
 */
export const getCustomTheme = (
  themeColor: string,
  themeVariant: string,
  customTheme: ChartThemeDefinition
): ChartThemeDefinition => mergeTheme(themeColor, customTheme);

/**
 * Merge custom properties with base and color themes
 * @param themeColor The theme color to merge with custom theme
 * @param customTheme The custom theme to merge
 * @public
 */
export const mergeTheme = (themeColor: string, customTheme: ChartThemeDefinition): ChartThemeDefinition =>
  merge(getTheme(themeColor), customTheme);

/**
 * Returns axis theme
 * @private
 */
export const getAxisTheme = (themeColor: string): ChartThemeDefinition => mergeTheme(themeColor, ChartAxisTheme);

/**
 * Returns bullet chart theme
 * @private
 */
export const getBulletTheme = (themeColor: string): ChartThemeDefinition => mergeTheme(themeColor, ChartBulletTheme);

/**
 * Returns comparative error measure theme for bullet chart
 * @private
 */
export const getBulletComparativeErrorMeasureTheme = (themeColor: string): ChartThemeDefinition =>
  mergeTheme(themeColor, ChartBulletComparativeErrorMeasureTheme);

/**
 * Returns comparative measure theme for bullet chart
 * @private
 */
export const getBulletComparativeMeasureTheme = (themeColor: string): ChartThemeDefinition =>
  mergeTheme(themeColor, ChartBulletComparativeMeasureTheme);

/**
 * Returns comparative warning measure theme for bullet chart
 * @private
 */
export const getBulletComparativeWarningMeasureTheme = (themeColor: string): ChartThemeDefinition =>
  mergeTheme(themeColor, ChartBulletComparativeWarningMeasureTheme);

/**
 * Returns group title theme for bullet chart
 * @private
 */
export const getBulletGroupTitleTheme = (themeColor: string): ChartThemeDefinition =>
  mergeTheme(themeColor, ChartBulletGroupTitleTheme);

/**
 * Returns primary dot measure theme for bullet chart
 * @private
 */
export const getBulletPrimaryDotMeasureTheme = (themeColor: string): ChartThemeDefinition =>
  mergeTheme(themeColor, ChartBulletPrimaryDotMeasureTheme);

/**
 * Returns primary negative measure theme for bullet chart
 * @private
 */
export const getBulletPrimaryNegativeMeasureTheme = (themeColor: string): ChartThemeDefinition =>
  mergeTheme(themeColor, ChartBulletPrimaryNegativeMeasureTheme);

/**
 * Returns primary segmented measure theme for bullet chart
 * @private
 */
export const getBulletPrimarySegmentedMeasureTheme = (themeColor: string): ChartThemeDefinition =>
  mergeTheme(themeColor, ChartBulletPrimarySegmentedMeasureTheme);

/**
 * Returns qualitative range theme for bullet chart
 * @private
 */
export const getBulletQualitativeRangeTheme = (themeColor: string): ChartThemeDefinition =>
  mergeTheme(themeColor, ChartBulletQualitativeRangeTheme);

/**
 * Returns theme for Chart component
 * @private
 */
export const getChartTheme = (themeColor: string, showAxis: boolean): ChartThemeDefinition => {
  const theme = getTheme(themeColor);

  if (!showAxis) {
    theme.axis.padding = 0;
    theme.axis.style.axis.fill = 'none';
    theme.axis.style.axis.stroke = 'none';
    theme.axis.style.grid.fill = 'none';
    theme.axis.style.grid.stroke = 'none';
    theme.axis.style.ticks.fill = 'none';
    theme.axis.style.ticks.stroke = 'none';
    theme.axis.style.tickLabels.fill = 'none';
  }
  return theme;
};

/**
 * Returns donut theme
 * @private
 */
export const getDonutTheme = (themeColor: string): ChartThemeDefinition => mergeTheme(themeColor, ChartDonutTheme);

/**
 * Returns dynamic donut threshold theme
 * @private
 */
export const getDonutThresholdDynamicTheme = (themeColor: string): ChartThemeDefinition => {
  const theme = mergeTheme(themeColor, ChartDonutThresholdDynamicTheme);

  // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale
  theme.legend.colorScale = [theme.pie.colorScale[0], ...ChartDonutThresholdDynamicTheme.legend.colorScale];

  // Merge the threshold colors in case users want to show the unused data
  theme.pie.colorScale = [theme.pie.colorScale[0], ...ChartDonutThresholdStaticTheme.pie.colorScale];
  return theme;
};

/**
 * Returns static donut threshold theme
 * @private
 */
export const getDonutThresholdStaticTheme = (themeColor: string, invert?: boolean): ChartThemeDefinition => {
  const staticTheme = cloneDeep(ChartDonutThresholdStaticTheme);
  if (invert && staticTheme.pie.colorScale instanceof Array) {
    staticTheme.pie.colorScale = staticTheme.pie.colorScale.reverse();
  }
  return mergeTheme(themeColor, staticTheme);
};

/**
 * Returns donut utilization theme
 * @private
 */
export const getDonutUtilizationTheme = (themeColor: string): ChartThemeDefinition => {
  const theme = mergeTheme(themeColor, ChartDonutUtilizationDynamicTheme);

  // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale
  theme.pie.colorScale = [theme.pie.colorScale[0], ...ChartDonutUtilizationStaticTheme.pie.colorScale];
  theme.legend.colorScale = [theme.legend.colorScale[0], ...ChartDonutUtilizationStaticTheme.legend.colorScale];
  return theme;
};

/**
 * Returns theme colors
 * @private
 */
export const getThemeColors = (themeColor: string) => {
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

/**
 * Applies theme color to base theme
 * @private
 */
export const getTheme = (themeColor: string): ChartThemeDefinition => {
  // Deep clone
  const baseTheme = {
    ...JSON.parse(JSON.stringify(ChartBaseTheme))
  };
  return merge(baseTheme, getThemeColors(themeColor));
};

/**
 * Returns threshold theme
 * @private
 */
export const getThresholdTheme = (themeColor: string): ChartThemeDefinition =>
  mergeTheme(themeColor, ChartThresholdTheme);
