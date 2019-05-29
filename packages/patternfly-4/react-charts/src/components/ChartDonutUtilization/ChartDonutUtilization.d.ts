import * as victory from 'victory';

export interface ChartDonutUtilizationProps extends victory.VictoryPieProps {
  subTitle?: string;
  themeColor?: string;
  themeVariant?: string;
  title: string;
}

declare const ChartDonutUtilization: React.ComponentClass<ChartDonutUtilizationProps>;

export default ChartDonutUtilization;
