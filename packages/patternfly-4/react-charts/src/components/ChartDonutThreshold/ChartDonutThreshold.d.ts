import * as victory from 'victory';

export interface ChartDonutThresholdProps extends victory.VictoryPieProps {
  subTitle?: string;
  themeColor?: string;
  themeVariant?: string;
  title: string;
}

declare const ChartDonutThreshold: React.ComponentClass<ChartDonutThresholdProps>;

export default ChartDonutThreshold;
