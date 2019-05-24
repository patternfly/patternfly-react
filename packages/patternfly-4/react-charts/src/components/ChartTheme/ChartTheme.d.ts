import { VictoryThemeInterface, VictoryThemeDefinition } from "victory";

interface ChartBaseThemeInterface extends VictoryThemeDefinition {}
interface ChartDonutThemeInterface extends VictoryThemeDefinition {}

interface ChartThemeColorInterface {
  blue: string;
  default: string;
  green: string;
  multi: string;
}

interface ChartThemeVariantInterface {
  dark: string;
  default: string;
  light: string;
}

export declare const ChartThemeColor: ChartThemeColorInterface, ChartThemeVariant: ChartThemeVariantInterface, ChartBaseTheme: ChartBaseThemeInterface, ChartDonutTheme: ChartDonutThemeInterface;
