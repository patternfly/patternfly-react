import { VictoryThemeDefinition } from 'victory';
import { default as DonutTheme } from './themes/theme-donut';
import {
  dynamicDonut as DonutThresholdDynamicTheme,
  staticDonut as DonutThresholdStaticTheme
} from './themes/theme-donut-threshold';
import {
  dynamicDonut as DonutUtilizationDynamicTheme,
  staticDonut as DonutUtilizationStaticTheme
} from './themes/theme-donut-utilization';
import { default as VictoryTheme } from './themes/theme-victory';

export interface ChartThemeDefinition extends VictoryThemeDefinition {
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

export const ChartBaseTheme: ChartThemeDefinition = VictoryTheme;
export const ChartDonutUtilizationDynamicTheme: ChartThemeDefinition = DonutUtilizationDynamicTheme;
export const ChartDonutUtilizationStaticTheme: ChartThemeDefinition = DonutUtilizationStaticTheme;
export const ChartDonutTheme: ChartThemeDefinition = DonutTheme;
export const ChartDonutThresholdDynamicTheme: ChartThemeDefinition = DonutThresholdDynamicTheme;
export const ChartDonutThresholdStaticTheme: ChartThemeDefinition = DonutThresholdStaticTheme;

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
