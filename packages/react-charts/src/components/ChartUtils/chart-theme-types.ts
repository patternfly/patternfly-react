import { ChartThemeDefinition } from '../ChartTheme/ChartTheme';
import { getComponentTheme, getTheme } from './chart-theme';
import merge from 'lodash/merge';

/**
 * Returns axis theme
 * @private
 */
export const getAxisTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.axis);
};

/**
 * Returns bullet chart theme
 * @private
 */
export const getBulletTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.bullet);
};

/**
 * Returns comparative error measure theme for bullet chart
 * @private
 */
export const getBulletComparativeErrorMeasureTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.bulletComparativeErrorMeasure);
};

/**
 * Returns comparative measure theme for bullet chart
 * @private
 */
export const getBulletComparativeMeasureTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.bulletComparativeMeasure);
};

/**
 * Returns comparative warning measure theme for bullet chart
 * @private
 */
export const getBulletComparativeWarningMeasureTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.bulletComparativeWarningMeasure);
};

/**
 * Returns group title theme for bullet chart
 * @private
 */
export const getBulletGroupTitleTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.bulletGroupTitle);
};

/**
 * Returns primary dot measure theme for bullet chart
 * @private
 */
export const getBulletPrimaryDotMeasureTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.bulletPrimaryDotMeasure);
};

/**
 * Returns primary negative measure theme for bullet chart
 * @private
 */
export const getBulletPrimaryNegativeMeasureTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.bulletPrimaryNegativeMeasure);
};

/**
 * Returns primary segmented measure theme for bullet chart
 * @private
 */
export const getBulletPrimarySegmentedMeasureTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.bulletPrimarySegmentedMeasure);
};

/**
 * Returns qualitative range theme for bullet chart
 * @private
 */
export const getBulletQualitativeRangeTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.bulletQualitativeRange);
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
export const getDonutTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.donut);
};

/**
 * Returns dynamic donut threshold theme
 * @private
 */
export const getDonutThresholdDynamicTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.donutThresholdDynamic);
};

/**
 * Returns static donut threshold theme
 * @private
 */
export const getDonutThresholdStaticTheme = (themeColor: string, invert?: boolean): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  const theme = merge(baseTheme, componentTheme.donutThresholdStatic);

  if (invert && baseTheme.pie.colorScale instanceof Array) {
    const colorScale = [...componentTheme.donutThresholdStatic.pie.colorScale];
    theme.pie.colorScale = merge(baseTheme.pie.colorScale, colorScale.reverse());
  }
  return theme;
};

/**
 * Returns donut utilization theme
 * @private
 */
export const getDonutUtilizationTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.donutUtilization);
};

/**
 * Returns threshold theme
 * @private
 */
export const getThresholdTheme = (themeColor: string): ChartThemeDefinition => {
  const baseTheme = getTheme(themeColor);
  const componentTheme = getComponentTheme(themeColor);
  return merge(baseTheme, componentTheme.threshold);
};
