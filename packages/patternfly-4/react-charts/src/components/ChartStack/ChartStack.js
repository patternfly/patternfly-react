/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryStack } from 'victory';
import { getTheme } from '../ChartTheme/themes/theme-utils';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-stack/
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

// Note: VictoryStack.getChildren & VictoryStack.role must be hoisted
const ChartStack = ({ children, theme, themeColor, themeVariant, ...props }) => (
  <VictoryStack theme={theme || getTheme(themeColor, themeVariant)} {...props}>
    {children}
  </VictoryStack>
);
hoistNonReactStatics(ChartStack, VictoryStack);
ChartStack.propTypes = propTypes;

export default ChartStack;
