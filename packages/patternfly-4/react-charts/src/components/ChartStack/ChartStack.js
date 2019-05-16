/* eslint-disable react/require-default-props,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryStack } from 'victory';
import { getTheme } from '../ChartUtils/chart-theme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-stack/
   */
  '': PropTypes.any,
  /**
   * Specifies the theme color. Valid values are 'blue', 'green', 'grey' (recomended), 'multi', etc.
   *
   * Note: Not compatible with theme prop
   *
   * @example themeColor={ChartThemeColor.blue}
   */
  themeColor: PropTypes.string,
  /**
   * Specifies the theme variant. Valid values are 'dark' or 'light'
   *
   * Note: Not compatible with theme prop
   *
   * @example themeVariant={ChartThemeVariant.light}
   */
  themeVariant: PropTypes.string
};

const ChartStack = ({
  children,
  themeColor,
  themeVariant,
  theme = getTheme(themeColor, themeVariant), // destructure last
  ...rest
}) => (
  <VictoryStack theme={theme} {...rest}>
    {children}
  </VictoryStack>
);

// Note: VictoryStack.getChildren & VictoryStack.role must be hoisted
hoistNonReactStatics(ChartStack, VictoryStack);
ChartStack.propTypes = propTypes;

export default ChartStack;
