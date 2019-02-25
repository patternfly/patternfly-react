import * as victory from 'victory';
// import { OneOf } from '../../typeUtils';

export interface ChartPointProps extends victory.VictoryLegendProps {
  symbol: string;
}

declare const Chartpoint: React.ComponentClass<ChartPointProps>;

export default Chartpoint;
