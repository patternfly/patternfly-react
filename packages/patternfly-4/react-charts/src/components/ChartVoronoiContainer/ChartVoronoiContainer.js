/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryVoronoiContainer } from 'victory';
import { getTheme } from '../ChartTheme/themes/theme-utils';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-voronoi-container/
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

// Note: VictoryVoronoiContainer.defaultEvents & VictoryContainer.role must be hoisted
const ChartVoronoiContainer = ({ theme, themeColor, themeVariant, ...rest }) => {
  const chartTheme = theme || getTheme(themeColor, themeVariant);
  return <VictoryVoronoiContainer labelComponent={<ChartTooltip theme={chartTheme} />} theme={chartTheme} {...rest} />;
};
hoistNonReactStatics(ChartVoronoiContainer, VictoryVoronoiContainer);
ChartVoronoiContainer.propTypes = propTypes;

export default ChartVoronoiContainer;
