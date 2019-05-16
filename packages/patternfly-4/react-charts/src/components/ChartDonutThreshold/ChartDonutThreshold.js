/* eslint-disable react/require-default-props,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryPie } from 'victory';
import { getDonutThresholdDynamicTheme, getDonutThresholdStaticTheme } from '../ChartUtils/chart-theme';
import ChartContainer from '../ChartContainer/ChartContainer';
import { dynamicDonut as ChartDonutThresholdDynamicTheme } from '../ChartTheme/themes/theme-donut-threshold';
import ChartDonutUtilization from '../ChartDonutUtilization/ChartDonutUtilization';
import ChartTooltip from '../ChartTooltip/ChartTooltip';
import { getChartTransform, getChartTx } from '../ChartUtils/chart-transforms';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-pie/
   */
  '': PropTypes.any,
  /**
   * The data prop specifies the data to be plotted,
   * where data X-value is the slice label (string or number),
   * and Y-value is the corresponding number value represented by the slice
   * Data should be in the form of an array of data points.
   * Each data point may be any format you wish (depending on the `x` and `y` accessor props),
   * but by default, an object with x and y properties is expected.
   *
   * Note: The 'y' prop is expected to represent a percentage
   *
   * @example data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
   */
  data: PropTypes.any,
  /**
   * Specifies the height of the donut threshold chart. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: The parent container must be set to the same height in order to maintain the aspect ratio. Otherwise, the
   * innerRadius may need to be set when using this property.
   */
  donutHeight: PropTypes.number,
  /**
   * The orientation of the donut threshold chart in relation to the legend. Valid values are 'left', 'top', and 'right'
   */
  donutOrientation: PropTypes.oneOf(['left', 'right', 'top']),
  /**
   * Specifies the width of the donut threshold chart. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: The parent container must be set to the same height in order to maintain the aspect ratio. Otherwise, the
   * innerRadius may need to be set when using this property.
   */
  donutWidth: PropTypes.number,
  /**
   * The utilization donut chart to render with the threshold donut chart.
   */
  children: PropTypes.oneOfType([PropTypes.objectOf(ChartDonutUtilization)]),
  /**
   * Specifies the height the svg viewBox of the chart container. This value should be given as a
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
   * When creating a donut chart, this prop determines the number of pixels between
   * the center of the chart and the inner edge of a donut. When this prop is set to zero
   * a regular pie chart is rendered.
   */
  innerRadius: PropTypes.number,
  /**
   * The standalone prop determines whether the component will render a standalone svg
   * or a <g> tag that will be included in an external svg. Set standalone to false to
   * compose VictoryAxis with other components within an enclosing <svg> tag.
   * @default true
   */
  standalone: PropTypes.bool,
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
   *
   * Note: innerRadius may need to be set when using this property.
   */
  width: PropTypes.number
};

const ChartDonutThreshold = ({
  children,
  data = [],
  donutOrientation = 'left',
  legendOrientation,
  standalone = true,
  themeColor,
  themeVariant,

  // destructure last
  theme = getDonutThresholdStaticTheme(themeColor, themeVariant),
  donutHeight = theme.pie.height,
  donutWidth = theme.pie.width,
  height = theme.pie.height,
  innerRadius = ((donutHeight || donutWidth) - 34) / 2,
  width = theme.pie.width,
  ...rest
}) => {
  // Returns computed data representing pie chart percentages
  const getComputedData = () => {
    const computedData = [];
    data.forEach(datum => {
      const i = computedData.length;
      computedData.push({
        x: datum.x,
        y: i > 0 ? datum.y - data[i - 1].y : datum.y
      });
    });
    if (computedData.length) {
      computedData.push({ y: 100 - data[computedData.length - 1].y });
    }
    return computedData;
  };

  const getDonutDx = orientation =>
    orientation === 'right' ? -(theme.pie.height - ChartDonutThresholdDynamicTheme.pie.height) / 2 : 0;

  const getTooltipDx = orientation => {
    switch (orientation) {
      case 'left':
        return (theme.pie.height - ChartDonutThresholdDynamicTheme.pie.height) / 2;
      default:
        return getDonutDx(orientation);
    }
  };

  // Returns tranform coordinate for dynamic donut chart
  const getTransform = () => {
    const ty = Math.round((theme.pie.width - ChartDonutThresholdDynamicTheme.pie.width) / 2);
    let tx = 0;

    if (donutOrientation === 'left') {
      tx = Math.round((theme.pie.height - ChartDonutThresholdDynamicTheme.pie.height) / 2);
    }
    return `translate(${tx}, ${ty})`;
  };

  const renderChildren = () => {
    return React.Children.toArray(children).map(child => {
      const dataVal = child.props.data ? child.props.data.y : 0;
      const orientation = child.props.donutOrientation || donutOrientation;
      const dynamicTheme = getDonutThresholdDynamicTheme(
        child.props.themeColor || themeColor,
        child.props.themeVariant || themeVariant
      );
      return React.cloneElement(child, {
        donutDx: child.props.donutDx || getDonutDx(orientation),
        donutHeight: child.props.donutHeight || ChartDonutThresholdDynamicTheme.pie.height,
        donutOrientation: orientation,
        donutWidth: child.props.donutWidth || ChartDonutThresholdDynamicTheme.pie.width,
        endAngle: child.props.endAngle || 360 * (dataVal / 100),
        height: child.props.height || height,
        showStatic: child.props.showStatic !== undefined || false,
        standalone: false,
        theme: child.props.theme || dynamicTheme,
        tooltipDx: child.props.tooltipDx || getTooltipDx(orientation),
        width: child.props.width || width
      });
    });
  };

  const chart = (
    <React.Fragment>
      <g transform={getChartTransform({ chartWidth: donutWidth, chartOrientation: donutOrientation, width })}>
        <VictoryPie
          data={getComputedData()}
          height={donutHeight}
          innerRadius={innerRadius > 0 ? innerRadius : 0}
          labelComponent={
            <ChartTooltip
              theme={theme}
              dx={getChartTx({
                chartOrientation: donutOrientation,
                chartWidth: donutWidth,
                width
              })}
            />
          }
          standalone={false}
          theme={theme}
          width={donutWidth}
          {...rest}
        />
      </g>
      <g transform={getTransform()}>{renderChildren()}</g>
    </React.Fragment>
  );
  return standalone ? (
    <ChartContainer width={width} height={height}>
      {chart}
    </ChartContainer>
  ) : (
    chart
  );
};

// Note: VictoryPie.role must be hoisted
hoistNonReactStatics(ChartDonutThreshold, VictoryPie);
ChartDonutThreshold.propTypes = propTypes;

export default ChartDonutThreshold;
