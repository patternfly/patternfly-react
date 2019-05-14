import * as victory from 'victory';

export interface ChartGroupProps extends victory.VictoryGroupProps {
  themeColor?: string;
  themeVariant?: string;
}

declare const ChartGroup: React.ComponentClass<ChartGroupProps>;

export default ChartGroup;
