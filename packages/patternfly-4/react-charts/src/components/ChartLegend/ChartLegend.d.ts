import * as victory from 'victory';

export interface ChartLegendProps extends victory.VictoryLegendProps {
  responsive: boolean;
}

declare const ChartLegend: React.ComponentClass<ChartLegendProps>;

export default ChartLegend;
