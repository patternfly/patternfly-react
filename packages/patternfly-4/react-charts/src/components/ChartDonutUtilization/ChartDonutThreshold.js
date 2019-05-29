/* eslint-disable react/require-default-props,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Data } from 'victory-core';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { getDonutThresholdDynamicTheme, getDonutThresholdStaticTheme } from '../ChartUtils/chart-theme';
import ChartContainer from '../ChartContainer/ChartContainer';
import ChartPie from '../ChartPie/ChartPie';
import { getChartOrigin } from '../ChartUtils/chart-origin';

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
   * Note: The Y-value is expected to represent a percentage
   *
   * @example data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
   */
  data: PropTypes.arrayOf(PropTypes.object),
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
   * The utilization donut chart to render with the threshold donut chart
   */
  children: PropTypes.node,
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
  width: PropTypes.number,
  /**
   * The x prop specifies how to access the X value of each data point.
   * If given as a function, it will be run on each data point, and returned value will be used.
   * If given as an integer, it will be used as an array index for array-type data points.
   * If given as a string, it will be used as a property key for object-type data points.
   * If given as an array of strings, or a string containing dots or brackets,
   * it will be used as a nested object property path (for details see Lodash docs for _.get).
   * If `null` or `undefined`, the data value will be used as is (identity function/pass-through).
   * @example 0, 'x', 'x.value.nested.1.thing', 'x[2].also.nested', null, d => Math.sin(d)
   */
  x: PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.string, PropTypes.array]),
  /**
   * The y prop specifies how to access the Y value of each data point.
   * If given as a function, it will be run on each data point, and returned value will be used.
   * If given as an integer, it will be used as an array index for array-type data points.
   * If given as a string, it will be used as a property key for object-type data points.
   * If given as an array of strings, or a string containing dots or brackets,
   * it will be used as a nested object property path (for details see Lodash docs for _.get).
   * If `null` or `undefined`, the data value will be used as is (identity function/pass-through).
   * @example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)
   */
  y: PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.string, PropTypes.array])
};

const ChartDonutThreshold = ({
  children,
  data = [],
  donutOrientation = 'left',
  legendOrientation,
  standalone = true,
  themeColor,
  themeVariant,
  x,
  y,

  // destructure last
  theme = getDonutThresholdStaticTheme(themeColor, themeVariant),
  donutHeight = theme.pie.height,
  donutWidth = theme.pie.width,
  height = theme.pie.height,
  innerRadius = ((donutHeight || donutWidth) - 34) / 2,
  width = theme.pie.width,
  ...rest
}) => {
  // Returns computed data representing pie chart slices
  const getComputedData = () => {
    const computedData = [];
    const datum = getData(data);
    let prevYVal = 0;
    datum.forEach(dataPoint => {
      computedData.push({ x: dataPoint._x, y: dataPoint._y ? Math.abs(dataPoint._y - prevYVal) : 0 });
      prevYVal = dataPoint._y;
    });
    computedData.push({ y: prevYVal ? Math.abs(100 - prevYVal) : 0 });
    return computedData;
  };

  const getData = datum => {
    const accessorTypes = ['x', 'y'];
    return Data.formatData(datum, { x, y }, accessorTypes);
  };

  // Returns the horizontal shift for the dynamic utilization donut cart
  const getDynamicDonutDx = (dynamicTheme, orientation) => {
    switch (orientation) {
      case 'left':
        return Math.round((theme.pie.width - dynamicTheme.pie.width) / 2);
      case 'right':
        return -Math.round((theme.pie.width - dynamicTheme.pie.width) / 2);
      default:
        return 0;
    }
  };

  // Returns the vertical shift for the dynamic utilization donut cart
  const getDynamicDonutDy = dynamicTheme => Math.round((theme.pie.height - dynamicTheme.pie.height) / 2);

  // Render dynamic utilization donut cart
  const renderChildren = () =>
    React.Children.toArray(children).map(child => {
      const datum = getData([{ ...child.props.data }]);
      const orientation = child.props.donutOrientation || donutOrientation;
      const dynamicTheme =
        child.props.theme ||
        getDonutThresholdDynamicTheme(child.props.themeColor || themeColor, child.props.themeVariant || themeVariant);
      return React.cloneElement(child, {
        donutDx: child.props.donutDx || getDynamicDonutDx(dynamicTheme, orientation),
        donutDy: child.props.donutDy || getDynamicDonutDy(dynamicTheme),
        donutHeight: child.props.donutHeight || dynamicTheme.pie.height,
        donutOrientation: orientation,
        donutWidth: child.props.donutWidth || dynamicTheme.pie.width,
        endAngle: child.props.endAngle || 360 * (datum[0]._y ? datum[0]._y / 100 : 100),
        height: child.props.height || height,
        showStatic: child.props.showStatic || false,
        standalone: false,
        theme: dynamicTheme,
        width: child.props.width || width
      });
    });

  // Static threshold dount chart
  const chart = (
    <React.Fragment>
      <ChartPie
        data={getComputedData()}
        height={donutHeight}
        innerRadius={innerRadius > 0 ? innerRadius : 0}
        origin={getChartOrigin({
          chartHeight: donutHeight,
          chartWidth: donutWidth,
          chartOrientation: donutOrientation,
          height,
          width
        })}
        standalone={false}
        theme={theme}
        width={donutWidth}
        {...rest}
      />
      {renderChildren()}
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

// Note: ChartPie.role must be hoisted
hoistNonReactStatics(ChartDonutThreshold, ChartPie);
ChartDonutThreshold.propTypes = propTypes;

export default ChartDonutThreshold;
