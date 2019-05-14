/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryLabel } from 'victory';
import { getTheme } from '../ChartTheme/themes/theme-utils';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-label/
   */
  '': PropTypes.any,
  /*
   * Specifies the theme color; blue (default), green, or multi-color. Overridden by the theme property.
   */
  themeColor: PropTypes.string,
  /*
   * Specifies the theme variant; 'dark' or 'light' (default). Overridden by the theme property.
   */
  themeVariant: PropTypes.string
};

// Note: VictoryLabel.role must be hoisted
const ChartLabel = ({ theme, themeColor, themeVariant, ...rest }) => (
  <VictoryLabel theme={theme || getTheme(themeColor, themeVariant)} {...rest} />
);
hoistNonReactStatics(ChartLabel, VictoryLabel);
ChartLabel.propTypes = propTypes;

export default ChartLabel;
