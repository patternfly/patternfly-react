import { victory } from '@types/victory';

export interface ChartProps extends victory.VictoryChartProps {}

declare const Chart: React.ComponentClass<ChartProps>;

export default Chart;
