import React from 'react';
import PropTypes from 'prop-types';
import { VictoryArea } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-area/
   */
  '': PropTypes.any
};

const ChartArea = (props) => (
  <VictoryArea theme={ChartTheme.default} {...props}/>
);
ChartArea.propTypes = propTypes;
ChartArea.role = VictoryArea.role;

export default ChartArea;
