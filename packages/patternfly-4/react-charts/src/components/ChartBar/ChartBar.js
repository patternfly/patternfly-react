import React from 'react';
import PropTypes from 'prop-types';
import { VictoryBar } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-bar/
   */
  '': PropTypes.any
};

const ChartBar = (props) => (
  <VictoryBar theme={ChartTheme.default} {...props}/>
);
ChartBar.getDomain = VictoryBar.getDomain;
ChartBar.propTypes = propTypes;
ChartBar.role = VictoryBar.role;

export default ChartBar;
