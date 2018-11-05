import React from 'react';
import PropTypes from 'prop-types';
import { VictoryLabel } from 'victory';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-label/
   */
  '': PropTypes.any
};

const ChartLabel = (props) => (
  <VictoryLabel {...props}/>
);
ChartLabel.propTypes = propTypes;
ChartLabel.role = VictoryLabel.role;

export default ChartLabel;
