import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
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
hoistNonReactStatics(Chart, VictoryChart);
Chart.propTypes = propTypes;

export default Chart;
