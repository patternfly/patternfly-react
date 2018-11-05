import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryBar } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-bar/
   */
  '': PropTypes.any
};

// Note: VictoryBar.getDomain & VictoryBar.role must be hoisted
const ChartBar = (props) => (
  <VictoryBar theme={ChartTheme.default} {...props}/>
);
hoistNonReactStatics(ChartBar, VictoryBar);
ChartBar.propTypes = propTypes;

export default ChartBar;
