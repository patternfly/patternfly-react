import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryLabel } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-label/
   */
  '': PropTypes.any
};

// Note: VictoryLabel.role must be hoisted
const ChartLabel = props => <VictoryLabel theme={ChartTheme.default} {...props} />;
hoistNonReactStatics(ChartLabel, VictoryLabel);
ChartLabel.propTypes = propTypes;

export default ChartLabel;
