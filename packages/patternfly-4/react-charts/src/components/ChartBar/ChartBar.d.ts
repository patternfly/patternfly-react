import * as victory from 'victory';

export interface ChartBarProps extends victory.VictoryBarProps {
  themeColor?: string;
  themeVariant?: string;
}

declare const ChartBar: React.ComponentClass<ChartBarProps>;

export default ChartBar;
