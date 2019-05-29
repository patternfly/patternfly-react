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

export const ChartBaseTheme = VictoryTheme;
export const ChartDonutUtilizationDynamicTheme = DonutUtilizationDynamicTheme;
export const ChartDonutUtilizationStaticTheme = DonutUtilizationStaticTheme;
export const ChartDonutTheme = DonutTheme;
export const ChartDonutThresholdDynamicTheme = DonutThresholdDynamicTheme;
export const ChartDonutThresholdStaticTheme = DonutThresholdStaticTheme;

export const ChartThemeColor = {
  blue: 'blue',
  default: 'blue',
  green: 'green',
  grey: 'grey',
  multi: 'multi'
};

export const ChartThemeVariant = {
  dark: 'dark',
  default: 'light',
  light: 'light'
};
