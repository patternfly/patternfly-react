import React from 'react';
import PropTypes from 'prop-types';
import { VictoryStack } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-stack/
   */
  '': PropTypes.any
};

const ChartStack = ({children, ...props}) => (
  <VictoryStack theme={ChartTheme.default} {...props}>
    {children}
  </VictoryStack>
);
ChartStack.getChildren = VictoryStack.getChildren;
ChartStack.propTypes = propTypes;
ChartStack.role = VictoryStack.role;

export default ChartStack;
