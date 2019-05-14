/* eslint-disable react/require-default-props,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryLegend } from 'victory';
import ChartContainer from '../ChartContainer/ChartContainer';
import ChartPoint from '../ChartPoint/ChartPoint';
import { getTheme } from '../ChartTheme/themes/theme-utils';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-legend/
   */
  '': PropTypes.any,
  /**
   * The height props specifies the height the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  height: PropTypes.number,
  /**
   * The responsive prop specifies whether the rendered container should be a responsive container with a viewBox
   * attribute, or a static container with absolute width and height.
   *
   * Useful when legend is located inside a chart -- default is false.
   */
  responsive: PropTypes.boolean,
  /*
   * Specifies the theme color; blue (default), green, or multi-color. Overridden by the theme property.
   */
  themeColor: PropTypes.string,
  /*
   * Specifies the theme variant; 'dark' or 'light' (default). Overridden by the theme property.
   */
  themeVariant: PropTypes.string,
  /**
   * The width props specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  width: PropTypes.number
};

const ChartLegend = ({
  responsive = false,
  themeColor,
  themeVariant,
  theme = getTheme(themeColor, themeVariant), // destructure last
  ...rest
}) => (
  <VictoryLegend
    containerComponent={<ChartContainer responsive={responsive} />}
    dataComponent={<ChartPoint />}
    theme={theme}
    {...rest}
  />
);

// Note: VictoryLegend.role must be hoisted
hoistNonReactStatics(ChartLegend, VictoryLegend);
ChartLegend.propTypes = propTypes;

export default ChartLegend;
