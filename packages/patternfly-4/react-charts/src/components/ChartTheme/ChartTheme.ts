import { VictoryThemeDefinition } from 'victory';
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
  default: string;
  green: string;
  grey: string;
  multi: string;
}

interface ChartThemeVariantInterface {
  dark: string;
  default: string;
  light: string;
}

export const ChartThemeColor: ChartThemeColorInterface = {
  blue: 'blue',
  default: 'blue',
  green: 'green',
  grey: 'grey',
  multi: 'multi'
};

export const ChartThemeVariant: ChartThemeVariantInterface = {
  dark: 'dark',
  default: 'light',
  light: 'light'
};

export type ChartThemeDefinition = ChartThemeDefinitionInterface;

export const ChartBaseTheme: ChartThemeDefinition = BaseTheme;
export const ChartDonutUtilizationDynamicTheme: ChartThemeDefinition = DonutUtilizationDynamicTheme;
export const ChartDonutUtilizationStaticTheme: ChartThemeDefinition = DonutUtilizationStaticTheme;
export const ChartDonutTheme: ChartThemeDefinition = DonutTheme;
export const ChartDonutThresholdDynamicTheme: ChartThemeDefinition = DonutThresholdDynamicTheme;
export const ChartDonutThresholdStaticTheme: ChartThemeDefinition = DonutThresholdStaticTheme;
