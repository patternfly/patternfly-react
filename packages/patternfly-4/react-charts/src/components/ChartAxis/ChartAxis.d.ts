import * as victory from 'victory';

export interface ChartAxisProps extends victory.VictoryAxisProps {
  themeColor?: string;
  themeVariant?: string;
}

declare const ChartAxis: React.ComponentClass<ChartAxisProps>;

export default ChartAxis;
