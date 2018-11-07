import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryPie } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-pie/
   */
  '': PropTypes.any
};

// Note: VictoryPie.role must be hoisted
const ChartPie = (props) => (
  <VictoryPie labelComponent={<ChartTooltip/>} theme={ChartTheme.default} {...props}/>
);
hoistNonReactStatics(ChartPie, VictoryPie);
ChartPie.propTypes = propTypes;

export default ChartPie;
