import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryPie } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-area/
   */
  '': PropTypes.any
};

// Note: VictoryPie.role must be hoisted
const ChartDonut = (props) => (
  <VictoryPie innerRadius={88} labelComponent={<ChartTooltip/>} padAngle={1} theme={ChartTheme.default} {...props}/>
);
hoistNonReactStatics(ChartDonut, VictoryPie);
ChartDonut.propTypes = propTypes;

export default ChartDonut;
