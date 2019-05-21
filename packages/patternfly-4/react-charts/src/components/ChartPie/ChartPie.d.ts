import * as victory from 'victory';

export interface ChartPieProps extends victory.VictoryPieProps {
  themeColor?: string;
  themeVariant?: string;
}

declare const ChartPie: React.ComponentClass<ChartPieProps>;

export default ChartPie;
