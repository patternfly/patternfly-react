import React from 'react';
import PropTypes from 'prop-types';
import { VictoryPie } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-pie/
   */
  '': PropTypes.any
};

const ChartPie = (props) => (
  <VictoryPie labelComponent={<ChartTooltip/>} theme={ChartTheme.default} {...props}/>
);
ChartPie.propTypes = propTypes;
ChartPie.role = VictoryPie.role;

export default ChartPie;
