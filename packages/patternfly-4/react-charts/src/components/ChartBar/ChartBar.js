/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryBar } from 'victory';
import { getTheme } from '../ChartTheme/themes/theme-utils';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-bar/
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

// Note: VictoryBar.getDomain & VictoryBar.role must be hoisted
const ChartBar = ({ theme, themeColor, themeVariant, ...rest }) => (
  <VictoryBar theme={theme || getTheme(themeColor, themeVariant)} {...rest} />
);
hoistNonReactStatics(ChartBar, VictoryBar);
ChartBar.propTypes = propTypes;

export default ChartBar;
