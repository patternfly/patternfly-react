import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryLegend } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';
import ChartContainer from '../ChartContainer/ChartContainer';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-legend/
   */
  '': PropTypes.any
};

// Note: VictoryLegend.role must be hoisted
const container = (
  <ChartContainer responsive={false}/>
);
const ChartLegend = (props) => (
  <VictoryLegend containerComponent={container} theme={ChartTheme.default} {...props}/>
);
hoistNonReactStatics(ChartLegend, VictoryLegend);
ChartLegend.propTypes = propTypes;

export default ChartLegend;
