import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryStack } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-stack/
   */
  '': PropTypes.any
};

// Note: VictoryStack.getChildren & VictoryStack.role must be hoisted
const ChartStack = ({children, ...props}) => (
  <VictoryStack theme={ChartTheme.default} {...props}>
    {children}
  </VictoryStack>
);
hoistNonReactStatics(ChartStack, VictoryStack);
ChartStack.propTypes = propTypes;

export default ChartStack;
