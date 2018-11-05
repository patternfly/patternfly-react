import React from 'react';
import PropTypes from 'prop-types';
import { VictoryPie } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-area/
   */
  '': PropTypes.any
};

const ChartDonut = (props) => (
  <VictoryPie innerRadius={88} labelComponent={<ChartTooltip/>} padAngle={1} theme={ChartTheme.default} {...props}/>
);
ChartDonut.propTypes = propTypes;
ChartDonut.role = VictoryPie.role;

export default ChartDonut;
