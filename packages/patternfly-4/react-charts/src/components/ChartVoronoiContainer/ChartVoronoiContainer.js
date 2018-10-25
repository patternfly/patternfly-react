import React from 'react';
import PropTypes from 'prop-types';
import { VictoryVoronoiContainer } from 'victory';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-voronoi-container/
   */
  '': PropTypes.any
};

export default class ChartVoronoiContainer extends VictoryVoronoiContainer {
  static propTypes = propTypes;
  static defaultProps = Object.assign({}, VictoryVoronoiContainer.defaultProps, {
    labelComponent: <ChartTooltip/>,
    responsive: false // True overrides absolute width and height
  });

  // Required for componentDocs
  render() {
    return super.render();
  }
}
