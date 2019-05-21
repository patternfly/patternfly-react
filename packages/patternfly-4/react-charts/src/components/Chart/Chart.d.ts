import * as victory from 'victory';

export interface ChartProps extends victory.VictoryChartProps {
  themeColor?: string;
  themeVariant?: string;
}

declare const Chart: React.ComponentClass<ChartProps>;

export default Chart;
