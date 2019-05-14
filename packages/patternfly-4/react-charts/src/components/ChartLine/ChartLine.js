/* eslint-disable react/require-default-props,react/prop-types */
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

const ChartLine = ({
  themeColor,
  themeVariant,
  theme = getTheme(themeColor, themeVariant), // destructure last
  ...rest
}) => (
  <VictoryLine theme={theme} {...rest} />
);

// Note: VictoryLine.role must be hoisted
hoistNonReactStatics(ChartLine, VictoryLine);
ChartLine.propTypes = propTypes;

export default ChartLine;
