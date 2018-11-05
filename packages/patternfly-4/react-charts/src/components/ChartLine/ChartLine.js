import React from 'react';
import PropTypes from 'prop-types';
import { VictoryLine } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-line/
   */
  '': PropTypes.any
};

const ChartLine = (props) => (
  <VictoryLine theme={ChartTheme.default} {...props}/>
);
ChartLine.propTypes = propTypes;
ChartLine.role = VictoryLine.role;

export default ChartLine;
