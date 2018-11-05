import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-chart/
   */
  '': PropTypes.any
};

const Chart = ({children, ...props}) => (
  <VictoryChart theme={ChartTheme.default} {...props}>
    {children}
  </VictoryChart>
);
Chart.propTypes = propTypes;

export default Chart;
