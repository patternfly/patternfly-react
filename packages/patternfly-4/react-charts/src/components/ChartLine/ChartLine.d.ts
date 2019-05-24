import * as victory from 'victory';

export interface ChartLineProps extends victory.VictoryLineProps {
  themeColor?: string;
  themeVariant?: string;
}

declare const ChartLine: React.ComponentClass<ChartLineProps>;

export default ChartLine;
