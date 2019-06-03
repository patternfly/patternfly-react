/* eslint-disable react/require-default-props,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryChart, VictoryZoomContainer } from 'victory';
import { getTheme } from '../ChartUtils/chart-theme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-chart/
   */
  '': PropTypes.any,
  /**
   * Specifies the zoom capability of the container component. A value of true allows the chart to
   * zoom in and out. Zoom events are controlled by scrolling. When zoomed in, panning events are
   * controlled by dragging. By default this value is set to false.
   *
   * Note: Only compatible with charts that display an x, y axis
   */
  allowZoom: PropTypes.bool,
  /**
   * Specifies the height the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  height: PropTypes.number,
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
  themeVariant: PropTypes.string,
  /**
   * Specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  width: PropTypes.number
};

const Chart = ({
  allowZoom = false,
  children,
  themeColor,
  themeVariant,
  theme = getTheme(themeColor, themeVariant), // destructure last
  containerComponent = allowZoom ? <VictoryZoomContainer /> : undefined,
  ...rest
}) => (
  <VictoryChart containerComponent={containerComponent} theme={theme} {...rest}>
    {children}
  </VictoryChart>
);

hoistNonReactStatics(Chart, VictoryChart);
Chart.propTypes = propTypes;

export default Chart;
