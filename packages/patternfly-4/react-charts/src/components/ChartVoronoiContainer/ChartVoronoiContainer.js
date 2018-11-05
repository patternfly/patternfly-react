import React from 'react';
import PropTypes from 'prop-types';
import { VictoryContainer, VictoryVoronoiContainer } from 'victory';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-voronoi-container/
   */
  '': PropTypes.any
};

const ChartVoronoiContainer = (props) => (
  <VictoryVoronoiContainer labelComponent={<ChartTooltip/>} {...props}/>
);
ChartVoronoiContainer.defaultEvents = VictoryVoronoiContainer.defaultEvents;
ChartVoronoiContainer.propTypes = propTypes;
ChartVoronoiContainer.role = VictoryContainer.role;

export default ChartVoronoiContainer;
