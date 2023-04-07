import cloneDeep from 'lodash/cloneDeep';

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
} from '../ChartTheme/ChartThemeTypes';
import { getTheme, getCustomTheme } from './chart-theme';

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
export const getBulletComparativeErrorMeasureTheme = (themeColor: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, ChartBulletComparativeErrorMeasureTheme);

/**
 * Returns comparative measure theme for bullet chart
 * @private
 */
export const getBulletComparativeMeasureTheme = (themeColor: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, ChartBulletComparativeMeasureTheme);

/**
 * Returns comparative warning measure theme for bullet chart
 * @private
 */
export const getBulletComparativeWarningMeasureTheme = (themeColor: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, ChartBulletComparativeWarningMeasureTheme);

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
export const getBulletPrimaryNegativeMeasureTheme = (themeColor: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, ChartBulletPrimaryNegativeMeasureTheme);

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
export const getBulletQualitativeRangeTheme = (themeColor: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, ChartBulletQualitativeRangeTheme);

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
  return getCustomTheme(themeColor, staticTheme);
};

/**
 * Returns donut utilization theme
 * @private
 */
export const getDonutUtilizationTheme = (themeColor: string): ChartThemeDefinition => {
  const theme = getCustomTheme(themeColor, ChartDonutUtilizationDynamicTheme);

  // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale
  theme.pie.colorScale = [theme.pie.colorScale[0], ...ChartDonutUtilizationStaticTheme.pie.colorScale];
  theme.legend.colorScale = [theme.legend.colorScale[0], ...ChartDonutUtilizationStaticTheme.legend.colorScale];
  return theme;
};

/**
 * Returns threshold theme
 * @private
 */
export const getThresholdTheme = (themeColor: string): ChartThemeDefinition =>
  getCustomTheme(themeColor, ChartThresholdTheme);
