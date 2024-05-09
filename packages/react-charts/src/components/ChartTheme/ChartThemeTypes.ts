import { ChartComponentThemeDefinition, ChartThemeDefinition } from './ChartTheme';
import { AxisTheme } from './themes/components/axis-theme';
import { BaseComponentTheme, BaseTheme } from './themes/base-theme';
import {
  BulletTheme,
  BulletComparativeErrorMeasureTheme,
  BulletComparativeMeasureTheme,
  BulletComparativeWarningMeasureTheme,
  BulletGroupTitleTheme,
  BulletPrimaryDotMeasureTheme,
  BulletPrimaryNegativeMeasureTheme,
  BulletPrimarySegmentedMeasureTheme,
  BulletQualitativeRangeTheme
} from './themes/components/bullet-theme';
import { DonutTheme } from './themes/components/donut-theme';
import { DonutThresholdDynamicTheme, DonutThresholdStaticTheme } from './themes/components/donut-threshold-theme';
import { DonutUtilizationDynamicTheme, DonutUtilizationStaticTheme } from './themes/components/donut-utilization-theme';
import { ThresholdTheme } from './themes/components/threshold-theme';

/**
 * Axis theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartAxisTheme: ChartThemeDefinition = AxisTheme;

/**
 * Base theme
 * @private
 */
export const ChartBaseTheme: ChartThemeDefinition = BaseTheme;

/**
 * Base component theme
 * @private
 * @beta
 */
export const ChartBaseComponentTheme: ChartComponentThemeDefinition = BaseComponentTheme;

/**
 * Bullet comparative error measure theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartBulletComparativeErrorMeasureTheme: ChartThemeDefinition = BulletComparativeErrorMeasureTheme;

/**
 * Bullet comparative measure theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartBulletComparativeMeasureTheme: ChartThemeDefinition = BulletComparativeMeasureTheme;

/**
 * Bullet comparative measure warning theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartBulletComparativeWarningMeasureTheme: ChartThemeDefinition = BulletComparativeWarningMeasureTheme;

/**
 * Bullet group title theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartBulletGroupTitleTheme: ChartThemeDefinition = BulletGroupTitleTheme;

/**
 * Bullet primary dot measure theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartBulletPrimaryDotMeasureTheme: ChartThemeDefinition = BulletPrimaryDotMeasureTheme;

/**
 * Bullet primary negative measure theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartBulletPrimaryNegativeMeasureTheme: ChartThemeDefinition = BulletPrimaryNegativeMeasureTheme;

/**
 * Bullet primary segmented measure theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartBulletPrimarySegmentedMeasureTheme: ChartThemeDefinition = BulletPrimarySegmentedMeasureTheme;

/**
 * Bullet qualitative range theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartBulletQualitativeRangeTheme: ChartThemeDefinition = BulletQualitativeRangeTheme;

/**
 * Bullet theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartBulletTheme: ChartThemeDefinition = BulletTheme;

/**
 * Donut utilization dynamic theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartDonutUtilizationDynamicTheme: ChartThemeDefinition = DonutUtilizationDynamicTheme;

/**
 * Donut utilization static theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartDonutUtilizationStaticTheme: ChartThemeDefinition = DonutUtilizationStaticTheme;

/**
 * Donut theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartDonutTheme: ChartThemeDefinition = DonutTheme;

/**
 * Donut threshold dynamic theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartDonutThresholdDynamicTheme: ChartThemeDefinition = DonutThresholdDynamicTheme;

/**
 * Donut threshold static theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartDonutThresholdStaticTheme: ChartThemeDefinition = DonutThresholdStaticTheme;

/**
 * Threshold static theme
 * @private
 * @deprecated See ChartBaseComponentTheme
 */
export const ChartThresholdTheme: ChartThemeDefinition = ThresholdTheme;
