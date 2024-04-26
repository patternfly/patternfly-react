import { ChartThemeDefinition } from '../ChartTheme/ChartTheme';
import {
  ChartAxisTheme,
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
  ChartThresholdTheme,
  ChartSkeletonTheme
} from '../ChartTheme/ChartThemeTypes';
import { getTheme, getCustomTheme } from './chart-theme';
import { ChartThemeColor } from '../ChartTheme/ChartThemeColor';
import merge from 'lodash/merge';
import { SkeletonColorTheme } from '../ChartTheme/themes/colors/skeleton-theme';

/**
 * Returns axis theme
 * @private
 */
export const getAxisTheme = (themeColor: string): ChartThemeDefinition => getCustomTheme(themeColor, ChartAxisTheme);

/**
 * Returns bullet chart theme
 * @private
 */
export const getBulletTheme = (themeColor: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, ChartBulletTheme);

/**
 * Returns comparative error measure theme for bullet chart
 * @private
 */
export const getBulletComparativeErrorMeasureTheme = (themeColor: string): ChartThemeDefinition => {
  const theme = getCustomTheme(themeColor, ChartBulletComparativeErrorMeasureTheme);

  // Override zero measure
  if (themeColor === ChartThemeColor.skeleton) {
    theme.bar.style = merge(theme.bar.style, ChartSkeletonTheme.bar.style);
  }
  return theme;
};

/**
 * Returns comparative measure theme for bullet chart
 * @private
 */
export const getBulletComparativeMeasureTheme = (themeColor: string): ChartThemeDefinition => {
  const theme = getCustomTheme(themeColor, ChartBulletComparativeMeasureTheme);

  // Override zero measure
  if (themeColor === ChartThemeColor.skeleton) {
    theme.bar.style = merge(theme.bar.style, ChartSkeletonTheme.bar.style);
  }
  return theme;
};

/**
 * Returns comparative warning measure theme for bullet chart
 * @private
 */
export const getBulletComparativeWarningMeasureTheme = (themeColor: string): ChartThemeDefinition => {
  const theme = getCustomTheme(themeColor, ChartBulletComparativeWarningMeasureTheme);

  // Override zero measure
  if (themeColor === ChartThemeColor.skeleton) {
    theme.bar.style = merge(theme.bar.style, ChartSkeletonTheme.bar.style);
  }
  return theme;
};

/**
 * Returns group title theme for bullet chart
 * @private
 */
export const getBulletGroupTitleTheme = (themeColor: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, ChartBulletGroupTitleTheme);

/**
 * Returns primary dot measure theme for bullet chart
 * @private
 */
export const getBulletPrimaryDotMeasureTheme = (themeColor: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, ChartBulletPrimaryDotMeasureTheme);

/**
 * Returns primary negative measure theme for bullet chart
 * @private
 */
export const getBulletPrimaryNegativeMeasureTheme = (themeColor: string): ChartThemeDefinition => {
  const theme = getCustomTheme(themeColor, ChartBulletPrimaryNegativeMeasureTheme);

  // Override colorScale
  if (themeColor === ChartThemeColor.skeleton) {
    theme.group.colorScale = merge(theme.group.colorScale, SkeletonColorTheme.group.colorScale);
  }
  return theme;
};

/**
 * Returns primary segmented measure theme for bullet chart
 * @private
 */
export const getBulletPrimarySegmentedMeasureTheme = (themeColor: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, ChartBulletPrimarySegmentedMeasureTheme);

/**
 * Returns qualitative range theme for bullet chart
 * @private
 */
export const getBulletQualitativeRangeTheme = (themeColor: string): ChartThemeDefinition => {
  const theme = getCustomTheme(themeColor, ChartBulletQualitativeRangeTheme);

  // Override colorScale
  if (themeColor === ChartThemeColor.skeleton) {
    theme.group.colorScale = merge(theme.group.colorScale, SkeletonColorTheme.group.colorScale);
  }
  return theme;
};

/**
 * Returns theme for Chart component
 * @private
 */
export const getChartTheme = (themeColor: string, showAxis: boolean): ChartThemeDefinition => {
  const theme = getTheme(themeColor);

  if (!showAxis) {
    theme.axis.padding = 0;
    theme.axis.style.axis.fill = 'transparent';
    theme.axis.style.axis.stroke = 'transparent';
    theme.axis.style.grid.fill = 'transparent';
    theme.axis.style.grid.stroke = 'transparent';
    theme.axis.style.ticks.fill = 'transparent';
    theme.axis.style.ticks.stroke = 'transparent';
    theme.axis.style.tickLabels.fill = 'transparent';
  }
  return theme;
};

/**
 * Returns donut theme
 * @private
 */
export const getDonutTheme = (themeColor: string): ChartThemeDefinition => getCustomTheme(themeColor, ChartDonutTheme);

/**
 * Returns dynamic donut threshold theme
 * @private
 */
export const getDonutThresholdDynamicTheme = (themeColor: string): ChartThemeDefinition => {
  const theme = getCustomTheme(themeColor, ChartDonutThresholdDynamicTheme);

  // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale
  theme.legend.colorScale = [theme.pie.colorScale[0], ...ChartDonutThresholdDynamicTheme.legend.colorScale];

  // Merge the threshold colors in case users want to show the unused data
  theme.pie.colorScale = [theme.pie.colorScale[0], ...ChartDonutThresholdStaticTheme.pie.colorScale];

  // Override colorScale
  if (themeColor === ChartThemeColor.skeleton) {
    theme.legend.colorScale = merge(theme.legend.colorScale, SkeletonColorTheme.legend.colorScale);
    theme.pie.colorScale = merge(theme.pie.colorScale, SkeletonColorTheme.pie.colorScale);
  }
  return theme;
};

/**
 * Returns static donut threshold theme
 * @private
 */
export const getDonutThresholdStaticTheme = (themeColor: string, invert?: boolean): ChartThemeDefinition => {
  const theme = getCustomTheme(themeColor, ChartDonutThresholdStaticTheme);

  if (invert && theme.pie.colorScale instanceof Array) {
    const colorScale = [...ChartDonutThresholdStaticTheme.pie.colorScale];
    theme.pie.colorScale = merge(theme.pie.colorScale, colorScale.reverse());
  }

  // Override colorScale
  if (themeColor === ChartThemeColor.skeleton) {
    theme.pie.colorScale = merge(theme.pie.colorScale, SkeletonColorTheme.pie.colorScale);
  }
  return theme;
};

/**
 * Returns donut utilization theme
 * @private
 */
export const getDonutUtilizationTheme = (themeColor: string): ChartThemeDefinition => {
  const theme = getCustomTheme(themeColor, ChartDonutUtilizationDynamicTheme);

  // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale
  theme.legend.colorScale = [theme.legend.colorScale[0], ...ChartDonutUtilizationStaticTheme.legend.colorScale];
  theme.pie.colorScale = [theme.pie.colorScale[0], ...ChartDonutUtilizationStaticTheme.pie.colorScale];

  // Override colorScale
  if (themeColor === ChartThemeColor.skeleton) {
    theme.legend.colorScale = merge(theme.legend.colorScale, SkeletonColorTheme.legend.colorScale);
    theme.pie.colorScale = merge(theme.pie.colorScale, SkeletonColorTheme.pie.colorScale);
  }
  return theme;
};

/**
 * Returns threshold theme
 * @private
 */
export const getThresholdTheme = (themeColor: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, ChartThresholdTheme);
