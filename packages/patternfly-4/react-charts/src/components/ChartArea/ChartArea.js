import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryArea } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-area/
   */
  '': PropTypes.any
};

// Note: VictoryArea.role must be hoisted
const ChartArea = (props) => (
  <VictoryArea theme={ChartTheme.default} {...props}/>
);
hoistNonReactStatics(ChartArea, VictoryArea);
ChartArea.propTypes = propTypes;

export default ChartArea;
