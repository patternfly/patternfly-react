import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryTooltip } from 'victory';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-tooltip/
   */
  '': PropTypes.any
};

// Note: VictoryTooltip.defaultEvents must be hoisted
const ChartTooltip = (props) => (
  <VictoryTooltip cornerRadius={0} {...props}/>
);
hoistNonReactStatics(ChartTooltip, VictoryTooltip);
ChartTooltip.propTypes = propTypes;

export default ChartTooltip;
