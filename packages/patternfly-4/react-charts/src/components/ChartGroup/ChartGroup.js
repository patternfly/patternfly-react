import React from 'react';
import PropTypes from 'prop-types';
import { VictoryGroup } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-group/
   */
  '': PropTypes.any
};

const ChartGroup = ({children, ...props}) => (
  <VictoryGroup theme={ChartTheme.default} {...props}>
    {children}
  </VictoryGroup>
);
ChartGroup.propTypes = propTypes;
ChartGroup.role = VictoryGroup.role;

export default ChartGroup;