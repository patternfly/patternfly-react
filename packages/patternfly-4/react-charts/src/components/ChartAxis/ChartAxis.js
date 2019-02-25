import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryAxis } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-chart/
   */
  '': PropTypes.any
};

const ChartAxis = (props) => (
  <VictoryAxis theme={ChartTheme.default} {...props}/>
);
hoistNonReactStatics(ChartAxis, VictoryAxis);
ChartAxis.propTypes = propTypes;

export default ChartAxis;
