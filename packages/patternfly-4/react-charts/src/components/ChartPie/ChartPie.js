/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryPie } from 'victory';
import { default as ChartTheme } from '../ChartTheme/ChartTheme';
import ChartTooltip from '../ChartTooltip/ChartTooltip';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-pie/
   */
  '': PropTypes.any,
  /**
   * The height props specifies the height the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: innerRadius may need to be set when using this property.
   */
  height: PropTypes.number,
  /**
   * The width props specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: innerRadius may need to be set when using this property.
   */
  width: PropTypes.number
};

// Note: VictoryPie.role must be hoisted
const ChartPie = props => <VictoryPie labelComponent={<ChartTooltip />} theme={ChartTheme.default} {...props} />;
hoistNonReactStatics(ChartPie, VictoryPie);
ChartPie.propTypes = propTypes;

export default ChartPie;
