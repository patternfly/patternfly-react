import * as victory from 'victory';

export interface ChartTooltipProps extends victory.VictoryTooltipProps {
  themeColor?: string;
  themeVariant?: string;
}

declare const ChartTooltip: React.ComponentClass<ChartTooltipProps>;

export default ChartTooltip;
