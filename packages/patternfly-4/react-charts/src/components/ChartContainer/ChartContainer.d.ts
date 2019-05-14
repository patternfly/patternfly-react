import * as victory from 'victory';

export interface ChartContainerProps extends victory.VictoryContainerProps {
  themeColor?: string;
  themeVariant?: string;
}

declare const ChartContainer: React.ComponentClass<ChartContainerProps>;

export default ChartContainer;
