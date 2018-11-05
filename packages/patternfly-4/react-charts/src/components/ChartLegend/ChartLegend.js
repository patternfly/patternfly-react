import React from 'react';
import PropTypes from 'prop-types';
import { VictoryLegend } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';
import ChartContainer from '../ChartContainer/ChartContainer';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-legend/
   */
  '': PropTypes.any
};

const container = (
  <ChartContainer responsive={false}/>
);
const ChartLegend = (props) => (
  <VictoryLegend containerComponent={container} theme={ChartTheme.default} {...props}/>
);
ChartLegend.propTypes = propTypes;
ChartLegend.role = VictoryLegend.role;

export default ChartLegend;
