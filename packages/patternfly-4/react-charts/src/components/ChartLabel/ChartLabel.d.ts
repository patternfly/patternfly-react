import * as victory from 'victory';

export interface ChartLabelProps extends victory.VictoryLabelProps {
  themeColor?: string;
  themeVariant?: string;
}

declare const ChartLabel: React.ComponentClass<ChartLabelProps>;

export default ChartLabel;
