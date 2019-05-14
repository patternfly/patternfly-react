import * as victory from 'victory';

export interface ChartDonutProps extends victory.VictoryPieProps {
  subTitle?: string;
  themeColor?: string;
  themeVariant?: string;
  title: string;
}

declare const ChartDonut: React.ComponentClass<ChartDonutProps>;

export default ChartDonut;
