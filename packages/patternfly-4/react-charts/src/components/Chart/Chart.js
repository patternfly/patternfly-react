/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryChart } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-chart/
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
   * The width props specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  width: PropTypes.number
};

const Chart = ({ children, ...rest }) => (
  <VictoryChart theme={ChartTheme.default} {...rest}>
    {children}
  </VictoryChart>
);
hoistNonReactStatics(Chart, VictoryChart);
Chart.propTypes = propTypes;

export default Chart;
