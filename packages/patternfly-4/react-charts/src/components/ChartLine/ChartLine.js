/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryLine } from 'victory';
import { getTheme } from '../ChartTheme/themes/theme-utils';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-line/
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

// Note: VictoryLine.role must be hoisted
const ChartLine = ({ theme, themeColor, themeVariant, ...rest }) => (
  <VictoryLine theme={theme || getTheme(themeColor, themeVariant)} {...rest} />
);
hoistNonReactStatics(ChartLine, VictoryLine);
ChartLine.propTypes = propTypes;

export default ChartLine;
