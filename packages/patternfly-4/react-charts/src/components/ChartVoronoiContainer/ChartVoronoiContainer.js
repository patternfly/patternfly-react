import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryVoronoiContainer } from 'victory';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-voronoi-container/
   */
  '': PropTypes.any
};

// Note: VictoryVoronoiContainer.defaultEvents & VictoryContainer.role must be hoisted
const ChartVoronoiContainer = (props) => (
  <VictoryVoronoiContainer labelComponent={<ChartTooltip/>} {...props}/>
);
hoistNonReactStatics(ChartVoronoiContainer, VictoryVoronoiContainer);
ChartVoronoiContainer.propTypes = propTypes;

export default ChartVoronoiContainer;
