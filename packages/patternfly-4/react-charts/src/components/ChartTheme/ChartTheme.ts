import { VictoryThemeDefinition } from 'victory';
import { AxisTheme } from './themes/axis-theme';
import { BaseTheme } from './themes/base-theme';
import { DonutTheme } from './themes/donut-theme';
import {
  DonutThresholdDynamicTheme,
  DonutThresholdStaticTheme
} from './themes/donut-threshold-theme';
import {
  DonutUtilizationDynamicTheme,
  DonutUtilizationStaticTheme
} from './themes/donut-utilization-theme';

export interface ChartThemeDefinitionInterface extends VictoryThemeDefinition {
  area?: any;
  axis?: any;
  bar?: any;
  boxplot?: any;
  candlestick?: any;
  chart?: any;
  errorbar?: any;
  group?: any;
  legend?: any;
  line?: any;
  pie?: any;
  scatter?: any;
  stack?: any;
  tooltip?: any;
  voronoi?: any;
}

interface ChartThemeColorInterface {
  blue: string;
  cyan: string;
  default: string;
  gold: string;
  gray: string;
  green: string;
  multi: string;
  multiOrdered: string;
  multiUnordered: string;
  orange: string;
  purple: string;
}

interface ChartThemeVariantInterface {
  dark: string;
  default: string;
  light: string;
}

/**
 * The multiOrdered theme is intended for ordered charts; donut, pie, bar, & stack
 * The multiUnordered theme is intended for unordered charts; area & line
 *
 * Note: multi defaults to multiOrdered
 */
export const ChartThemeColor: ChartThemeColorInterface = {
  blue: 'blue',
  cyan: 'cyan',
  default: 'blue',
  gold: 'gold',
  gray: 'gray',
  green: 'green',
  multi: 'multi',
  multiOrdered: 'multi-ordered',
  multiUnordered: 'multi-unordered',
  orange: 'orange',
  purple: 'purple'
};

export const ChartThemeVariant: ChartThemeVariantInterface = {
  dark: 'dark',
  default: 'light',
  light: 'light'
};

export type ChartThemeDefinition = ChartThemeDefinitionInterface;

export const ChartAxisTheme: ChartThemeDefinition = AxisTheme;
export const ChartBaseTheme: ChartThemeDefinition = BaseTheme;
export const ChartDonutUtilizationDynamicTheme: ChartThemeDefinition = DonutUtilizationDynamicTheme;
export const ChartDonutUtilizationStaticTheme: ChartThemeDefinition = DonutUtilizationStaticTheme;
export const ChartDonutTheme: ChartThemeDefinition = DonutTheme;
export const ChartDonutThresholdDynamicTheme: ChartThemeDefinition = DonutThresholdDynamicTheme;
export const ChartDonutThresholdStaticTheme: ChartThemeDefinition = DonutThresholdStaticTheme;
