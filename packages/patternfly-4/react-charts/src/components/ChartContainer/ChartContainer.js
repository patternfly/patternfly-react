import React from 'react';
import PropTypes from 'prop-types';
import { VictoryContainer } from 'victory';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-container/
   */
  '': PropTypes.any
};

const ChartContainer = (props) => (
  <VictoryContainer {...props}/>
);
ChartContainer.propTypes = propTypes;
ChartContainer.role = VictoryContainer.role;

export default ChartContainer;
