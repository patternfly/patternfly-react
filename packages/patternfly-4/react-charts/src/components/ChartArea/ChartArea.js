/* eslint-disable react/require-default-props,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryArea } from 'victory';
import { getTheme } from '../ChartTheme/themes/theme-utils';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-area/
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

const ChartArea = ({
  themeColor,
  themeVariant,
  theme = getTheme(themeColor, themeVariant), // destructure last
  ...rest
}) => <VictoryArea theme={theme} {...rest} />;

// Note: VictoryArea.role must be hoisted
hoistNonReactStatics(ChartArea, VictoryArea);
ChartArea.propTypes = propTypes;

export default ChartArea;
