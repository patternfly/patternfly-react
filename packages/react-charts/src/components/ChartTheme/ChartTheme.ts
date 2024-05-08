import { VictoryThemeDefinition } from 'victory-core';

/**
 * Chart component theme definition
 * @private
 * @beta
 */
export interface ChartComponentThemeDefinitionInterface {
  axis?: VictoryThemeDefinition;
  bullet?: VictoryThemeDefinition;
  bulletComparativeErrorMeasure?: VictoryThemeDefinition;
  bulletComparativeMeasure?: VictoryThemeDefinition;
  bulletComparativeWarningMeasure: VictoryThemeDefinition;
  bulletGroupTitle?: VictoryThemeDefinition;
  bulletPrimaryDotMeasure?: VictoryThemeDefinition;
  bulletPrimaryNegativeMeasure?: VictoryThemeDefinition;
  bulletPrimarySegmentedMeasure?: VictoryThemeDefinition;
  bulletQualitativeRange?: VictoryThemeDefinition;
  donut?: VictoryThemeDefinition;
  donutThresholdDynamic?: VictoryThemeDefinition;
  donutThresholdStatic?: VictoryThemeDefinition;
  donutUtilization?: VictoryThemeDefinition;
  label?: {
    backgroundStyle?: {
      fill?: string;
    };
    style?: {
      fill?: string;
      stroke?: string;
    };
  };
  threshold?: VictoryThemeDefinition;
}

/**
 * Chart theme definition
 *
 * Note: Victory incorrectly typed ThemeBaseProps.padding as number instead of PaddingProps
 *
 * @public
 */
export interface ChartThemeDefinitionInterface extends VictoryThemeDefinition {}

/**
 * Chart theme definition
 * @public
 */
export type ChartThemeDefinition = ChartThemeDefinitionInterface;

/**
 * Chart component theme definition
 * @private
 * @beta
 */
export type ChartComponentThemeDefinition = ChartComponentThemeDefinitionInterface;
