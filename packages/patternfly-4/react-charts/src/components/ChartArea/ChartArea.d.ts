import * as victory from 'victory';

export interface ChartAreaProps extends victory.VictoryAreaProps {
  themeColor?: string;
  themeVariant?: string;
}

declare const ChartArea: React.ComponentClass<ChartAreaProps>;

export default ChartArea;
