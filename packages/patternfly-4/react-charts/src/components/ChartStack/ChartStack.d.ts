import * as victory from 'victory';

export interface ChartStackProps extends victory.VictoryStackProps {
  themeColor?: string;
  themeVariant?: string;
}

declare const ChartStack: React.ComponentClass<ChartStackProps>;

export default ChartStack;
