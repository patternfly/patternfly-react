/* eslint-disable react/require-default-props,react/prop-types,import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { map, property } from 'lodash';
import { VictoryLegend } from 'victory';
import { Data } from 'victory-core';
import { getDonutUtilizationTheme } from '../ChartUtils/chart-theme';
import ChartContainer from '../ChartContainer/ChartContainer';
import ChartLabel from '../ChartLabel/ChartLabel';
import ChartLegend from '../ChartLegend/ChartLegend';
import ChartPie from '../ChartPie/ChartPie';
import { styles } from '../ChartTheme/themes/theme-donut-utilization';
import { ChartDonutUtilizationStaticTheme } from '../ChartTheme/ChartTheme';
import { getChartOrigin, getChartOriginX, getChartOriginY } from '../ChartUtils/chart-origin';
import { getLegendX, getLegendY } from '../ChartUtils/chart-legend';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-pie/
   */
  '': PropTypes.any,
  /**
   * The data prop specifies the data to be plotted,
   * where data X-value is the slice label (string or number),
   * and Y-value is the corresponding number value represented by the slice
   * Data should be in the form of a single data point.
   * The data point may be any format you wish (depending on the `x` and `y` accessor props),
   * but by default, an object with x and y properties is expected.
   *
   * Note: The Y-value is expected to represent a percentage
   *
   * @example data={{ x: 'GBps capacity', y: 75 }}
   */
  data: PropTypes.object,
  /**
   * Defines a horizontal shift from the x coordinate. This should not be set manually.
   */
  donutDx: PropTypes.number,
  /**
   * Defines a vertical shift from the y coordinate. This should not be set manually.
   */
  donutDy: PropTypes.number,
  /**
   * Specifies the height of the donut chart. This value should be given as a
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
   * The orientation of the donut chart in relation to the legend. Valid values are 'left', 'top', and 'right'
   */
  donutOrientation: PropTypes.oneOf(['left', 'right', 'top']),
  /**
   * Specifies the width of the donut chart. This value should be given as a
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
   * Specifies the height the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: The parent container must be set to the same height in order to maintain the aspect ratio. Otherwise, the
   * innerRadius may need to be set when using this property.
   */
  height: PropTypes.number,
  /**
   * When creating a donut chart, this prop determines the number of pixels between
   * the center of the chart and the inner edge of a donut. When this prop is set to zero
   * a regular pie chart is rendered.
   */
  innerRadius: PropTypes.number,
  /**
   * The legend component to render with chart. This overrides other legend props.
   */
  legendComponent: PropTypes.node,
  /**
   * The data prop specifies the data to be plotted,
   * where data X-value is the slice label (string or number),
   * and Y-value is the corresponding number value represented by the slice
   * Data should be in the form of an array of data points.
   * Each data point may be any format you wish (depending on the `x` and `y` accessor props),
   * but by default, an object with x and y properties is expected.
   *
   * Note: Not compatible with legendComponent prop.
   *
   * @example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}
   */
  legendData: PropTypes.arrayOf(PropTypes.object),
  /**
   * The orientation prop takes a string that defines whether legend data
   * are displayed in a row or column. When orientation is "horizontal",
   * legend items will be displayed in a single row. When orientation is
   * "vertical", legend items will be displayed in a single column. Line
   * and text-wrapping is not currently supported, so "vertical"
   * orientation is both the default setting and recommended for
   * displaying many series of data.
   *
   * Note: May need to set legendHeight and legendWidth in order to position properly.
   * Not compatible with legendComponent prop.
   *
   * @default 'vertical'
   */
  legendOrientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * This will show the static, unused portion of the donut chart
   */
  showStatic: PropTypes.bool,
  /**
   * The subtitle for the donut chart
   */
  subTitle: PropTypes.string,
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
   * The dynamic portion of the chart will change colors when data reaches the given threshold. Colors may be
   * overridden, but defaults shall be provided.
   *
   * @example thresholds={[{ value: 60, color: '#F0AB00' }, { value: 90, color: '#C9190B' }]}
   */
  thresholds: PropTypes.arrayOf(PropTypes.object),
  /**
   * The title for the donut chart
   */
  title: PropTypes.string,
  /**
   * Specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: The parent container must be set to the same width in order to maintain the aspect ratio. Otherwise, the
   * innerRadius may need to be set when using this property.
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

const ChartDonutUtilization = ({
  data,
  donutDx = 0,
  donutDy = 0,
  donutOrientation = 'left',
  legendComponent,
  legendData,
  legendOrientation = styles.legend.orientation,
  showStatic = true,
  standalone = true,
  subTitle,
  themeColor,
  themeVariant,
  thresholds,
  title,
  transform,
  x,
  y,

  // destructure last
  theme = getDonutUtilizationTheme(themeColor, themeVariant),
  donutHeight = theme.pie.height,
  donutWidth = theme.pie.width,
  height = theme.pie.height,
  innerRadius = ((donutHeight || donutWidth) - 34) / 2,
  width = theme.pie.width,
  ...rest
}) => {
  // Returns computed data representing pie chart slices
  const getComputedData = () => {
    const datum = getData();
    const computedData = [{ x: datum[0]._x, y: datum[0]._y || 0 }];
    if (showStatic) {
      computedData.push({ y: datum[0]._x ? Math.abs(100 - datum[0]._y) : 100 });
    }
    return computedData;
  };

  const getData = () => {
    const datum = [{ ...data }];
    const accessorTypes = ['x', 'y'];
    return Data.formatData(datum, { x, y }, accessorTypes);
  };

  // Returns thresholds with default color scale
  const getDonutThresholds = () => {
    const result = [];
    if (thresholds) {
      const numColors = styles.thresholds.colorScale.length;
      for (let i = 0; i < thresholds.length; i++) {
        result.push({
          color: thresholds[i].color ? thresholds[i].color : styles.thresholds.colorScale[i % numColors],
          value: thresholds[i].value
        });
      }
    }
    return result;
  };

  // Returns legend
  const getLegend = () => {
    if (legendComponent) {
      return legendComponent;
    }
    if (legendData) {
      return (
        <ChartLegend
          data={legendData}
          orientation={legendOrientation}
          standalone={false}
          theme={theme}
          x={getLegendX({
            chartOrientation: donutOrientation,
            legendOrientation,
            legendWidth: legendDimensions.width,
            theme,
            width
          })}
          y={getLegendY({
            chartDy: donutDy,
            chartHeight: donutHeight,
            chartOrientation: donutOrientation,
            chartType: 'pie',
            height,
            legendData,
            legendHeight: legendDimensions.height,
            legendOrientation,
            legendWidth: legendDimensions.width,
            theme,
            width
          })}
        />
      );
    }
    return null;
  };

  // Returns theme based on threshold and current value
  const getThresholdTheme = () => {
    const newTheme = { ...theme };

    if (data) {
      const datum = [{ ...data }];
      const donutThresholds = getDonutThresholds();
      const yVal = map(datum, property(y || 'y'));

      for (let i = 0; i < donutThresholds.length; i++) {
        if (yVal >= donutThresholds[i].value) {
          // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale
          newTheme.pie.colorScale = [donutThresholds[i].color, ...ChartDonutUtilizationStaticTheme.pie.colorScale];
          newTheme.legend.colorScale = [
            donutThresholds[i].color,
            ...ChartDonutUtilizationStaticTheme.legend.colorScale
          ];
        }
      }
    }
    return newTheme;
  };

  // Legend dimensions
  const legendDimensions = legendData
    ? VictoryLegend.getDimensions({
        data: legendData,
        orientation: legendOrientation,
        theme
      })
    : {};

  const chart = (
    <React.Fragment>
      <ChartLabel
        style={[styles.label.title, styles.label.subTitle]}
        text={title && subTitle ? [title, subTitle] : title}
        textAnchor="middle"
        verticalAnchor="middle"
        x={getChartOriginX({
          chartDx: donutDx,
          chartWidth: donutWidth,
          chartOrientation: donutOrientation,
          width
        })}
        y={getChartOriginY({
          chartDy: donutDy,
          chartHeight: donutHeight,
          chartOrientation: donutOrientation,
          height
        })}
      />
      <ChartPie
        data={getComputedData()}
        height={donutHeight}
        innerRadius={innerRadius > 0 ? innerRadius : 0}
        origin={getChartOrigin({
          chartDx: donutDx,
          chartDy: donutDy,
          chartHeight: donutHeight,
          chartWidth: donutWidth,
          chartOrientation: donutOrientation,
          height,
          width
        })}
        standalone={false}
        theme={getThresholdTheme()}
        width={donutWidth}
        {...rest}
      />
    </React.Fragment>
  );

  return standalone ? (
    <ChartContainer height={height} width={width}>
      {chart}
      {getLegend()}
    </ChartContainer>
  ) : (
    <React.Fragment>
      {chart}
      {getLegend()}
    </React.Fragment>
  );
};

// Note: ChartPie.role must be hoisted
hoistNonReactStatics(ChartDonutUtilization, ChartPie);
ChartDonutUtilization.propTypes = propTypes;

export default ChartDonutUtilization;
