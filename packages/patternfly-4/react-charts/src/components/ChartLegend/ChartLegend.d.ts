import * as victory from 'victory';
import { OneOf } from '../../typeUtils';

export interface ChartLegendProps extends victory.VictoryLegendProps {
  title?: OneOf<string, []>;
}

declare const ChartLegend: React.ComponentClass<ChartLegendProps>;

export default ChartLegend;
