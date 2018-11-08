import * as victory from 'victory';

export interface ChartVoronoiContainerProps extends
    victory.VictoryCommonProps,
    victory.VictoryContainerProps,
    victory.VictoryMultiLabeableProps {
  voronoiDimension?: 'x' | 'y';
}

declare const ChartVoronoiContainer: React.ComponentClass<ChartVoronoiContainerProps>;

export default ChartVoronoiContainer;
