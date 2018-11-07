import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryLine } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-line/
   */
  '': PropTypes.any
};

// Note: VictoryLine.role must be hoisted
const ChartLine = (props) => (
  <VictoryLine theme={ChartTheme.default} {...props}/>
);
hoistNonReactStatics(ChartLine, VictoryLine);
ChartLine.propTypes = propTypes;

export default ChartLine;
