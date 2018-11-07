import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryGroup } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-group/
   */
  '': PropTypes.any
};

// Note: VictoryGroup.role must be hoisted
const ChartGroup = ({children, ...props}) => (
  <VictoryGroup theme={ChartTheme.default} {...props}>
    {children}
  </VictoryGroup>
);
hoistNonReactStatics(ChartGroup, VictoryGroup);
ChartGroup.propTypes = propTypes;

export default ChartGroup;