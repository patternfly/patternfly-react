import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryContainer } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-container/
   */
  '': PropTypes.any
};

// Note: VictoryContainer.role must be hoisted
const ChartContainer = props => <VictoryContainer {...props} theme={ChartTheme.default} />;
hoistNonReactStatics(ChartContainer, VictoryContainer);
ChartContainer.propTypes = propTypes;

export default ChartContainer;
