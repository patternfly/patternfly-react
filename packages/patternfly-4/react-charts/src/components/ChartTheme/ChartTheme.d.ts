import { VictoryThemeDefinition } from "victory";

interface ChartBaseThemeInterface extends VictoryThemeDefinition {}
interface ChartDonutThemeInterface extends VictoryThemeDefinition {}
interface ChartDonutThresholdDynamicTheme extends VictoryThemeDefinition {}
interface ChartDonutThresholdStaticTheme extends VictoryThemeDefinition {}
interface ChartDonutUtilizationDynamicTheme extends VictoryThemeDefinition {}
interface ChartDonutUtilizationStaticTheme extends VictoryThemeDefinition {}

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

export declare const ChartBaseTheme: ChartBaseThemeInterface;
export declare const ChartDonutThresholdDynamicTheme: ChartDonutThresholdDynamicTheme;
export declare const ChartDonutThresholdStaticTheme: ChartDonutThresholdStaticTheme;
export declare const ChartDonutUtilizationDynamicTheme: ChartDonutUtilizationDynamicTheme;
export declare const ChartDonutUtilizationStaticTheme: ChartDonutUtilizationStaticTheme;
export declare const ChartDonutTheme: ChartDonutThemeInterface;
export declare const ChartThemeColor: ChartThemeColorInterface;
export declare const ChartThemeVariant: ChartThemeVariantInterface;
