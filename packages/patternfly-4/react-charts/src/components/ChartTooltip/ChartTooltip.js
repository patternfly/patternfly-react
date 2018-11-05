import React from 'react';
import PropTypes from 'prop-types';
import { VictoryTooltip } from 'victory';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-tooltip/
   */
  '': PropTypes.any
};

const ChartTooltip = (props) => (
  <VictoryTooltip cornerRadius={0} {...props}/>
);
ChartTooltip.defaultEvents = VictoryTooltip.defaultEvents;
ChartTooltip.propTypes = propTypes;

export default ChartTooltip;
