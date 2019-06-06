import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {
  AnimatePropTypeInterface,
  CategoryPropType,
  ColorScalePropType,
  DataGetterPropType,
  EventPropTypeInterface,
  PaddingProps,
  StringOrNumberOrCallback,
  VictoryLegend,
  VictoryStyleInterface
} from 'victory';
import { Data } from 'victory-core';
import { getDonutUtilizationTheme } from '../ChartUtils/chart-theme';
import { ChartContainer } from '../ChartContainer/ChartContainer';
import { ChartLabel } from '../ChartLabel/ChartLabel';
import { ChartLegend } from '../ChartLegend/ChartLegend';
import { ChartPie, ChartPieProps } from "../ChartPie/ChartPie";
import { DonutUtilizationStyles } from '../ChartTheme/themes/donut-utilization-theme';
import { ChartThemeDefinition, ChartDonutUtilizationStaticTheme } from '../ChartTheme/ChartTheme';
import { getChartOrigin, getChartOriginX, getChartOriginY } from '../ChartUtils/chart-origin';
import { getLegendX, getLegendY } from '../ChartUtils/chart-legend';

export enum ChartDonutUtilizationDonutOrientation {
  left = 'left',
  right = 'right',
  top = 'top'
};

export enum ChartDonutUtilizationLabelOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical'
};

export enum ChartDonutUtilizationLabelPosition {
  centroid = 'centroid',
  endAngle = 'endAngle',
  startAngle = 'startAngle'
};

export enum ChartDonutUtilizationSortOrder {
  ascending = 'ascending',
  descending = 'descending'
};

/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */
export interface ChartDonutUtilizationProps extends ChartPieProps {
  /**
   * See Victory type docs: https://formidable.com/open-source/victory/docs/victory-pie/
   */
  ' '?: any;
  /**
   * The animate prop specifies props for VictoryAnimation to use.
   * The animate prop should also be used to specify enter and exit
   * transition configurations with the `onExit` and `onEnter` namespaces respectively.
   * @example
   * {duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}
   */
  animate?: AnimatePropTypeInterface;
  /**
   * The categories prop specifies how categorical data for a chart should be ordered.
   * This prop should be given as an array of string values, or an object with
   * these arrays of values specified for x and y. If this prop is not set,
   * categorical data will be plotted in the order it was given in the data array
   * @example ["dogs", "cats", "mice"]
   */
  categories?: CategoryPropType;
  /**
   * The colorScale prop is an optional prop that defines the color scale the pie
   * will be created on. This prop should be given as an array of CSS colors, or as a string
   * corresponding to one of the built in color scales. ChartDonutUtilization will automatically assign
   * values from this color scale to the pie slices unless colors are explicitly provided in the
   * data object
   */
  colorScale?: ColorScalePropType;
  /**
   * The containerComponent prop takes an entire component which will be used to
   * create a container element for standalone charts.
   * The new element created from the passed containerComponent wil be provided with
   * these props from ChartDonutUtilization: height, width, children
   * (the chart itself) and style. Props that are not provided by the
   * child chart component include title and desc, both of which
   * are intended to add accessibility to Victory components. The more descriptive these props
   * are, the more accessible your data will be for people using screen readers.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a dataComponent is
   * not provided, ChartDonutUtilization will use the default ChartContainer component.
   * @example <ChartContainer title="Chart of Dog Breeds" desc="This chart shows ..." />
   */
  containerComponent?: React.ReactElement<any>;
  /**
   * Set the cornerRadius for every dataComponent (Slice by default) within ChartDonutUtilization
   */
  cornerRadius?: number;
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
  data?: any;
  /**
   * The dataComponent prop takes an entire, HTML-complete data component which will be used to
   * create slices for each datum in the pie chart. The new element created from the passed
   * dataComponent will have the property datum set by the pie chart for the point it renders;
   * properties style and pathFunction calculated by ChartDonutUtilization; an index property set
   * corresponding to the location of the datum in the data provided to the pie; events bound to
   * the ChartDonutUtilization; and the d3 compatible slice object.
   * If a dataComponent is not provided, ChartDonutUtilization's Slice component will be used.
   */
  dataComponent?: React.ReactElement<any>;
  /**
   * Defines a horizontal shift from the x coordinate. This should not be set manually.
   */
  donutDx?: number;
  /**
   * Defines a vertical shift from the y coordinate. This should not be set manually.
   */
  donutDy?: number;
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
  donutHeight?: number;
  /**
   * The orientation of the donut chart in relation to the legend. Valid values are 'left', 'top', and 'right'
   */
  donutOrientation?: 'left' | 'right' | 'top';
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
  donutWidth?: number;
  /**
   * The overall end angle of the pie in degrees. This prop is used in conjunction with
   * startAngle to create a pie that spans only a segment of a circle.
   */
  endAngle?: number;
  /**
   * Similar to data accessor props `x` and `y`, this prop may be used to functionally
   * assign eventKeys to data
   */
  eventKey?: StringOrNumberOrCallback;
  /**
   * The event prop takes an array of event objects. Event objects are composed of
   * a target, an eventKey, and eventHandlers. Targets may be any valid style namespace
   * for a given component, so "data" and "labels" are all valid targets for ChartDonutUtilization
   * events. The eventKey may optionally be used to select a single element by index rather than
   * an entire set. The eventHandlers object should be given as an object whose keys are standard
   * event names (i.e. onClick) and whose values are event callbacks. The return value
   * of an event handler is used to modify elemnts. The return value should be given
   * as an object or an array of objects with optional target and eventKey keys,
   * and a mutation key whose value is a function. The target and eventKey keys
   * will default to those corresponding to the element the event handler was attached to.
   * The mutation function will be called with the calculated props for the individual selected
   * element (i.e. a single bar), and the object returned from the mutation function
   * will override the props of the selected element via object assignment.
   * @examples
   * events={[
   *   {
   *     target: "data",
   *     eventKey: 1,
   *     eventHandlers: {
   *       onClick: () => {
   *         return [
   *            {
   *              eventKey: 2,
   *              mutation: (props) => {
   *                return {style: merge({}, props.style, {fill: "orange"})};
   *              }
   *            }, {
   *              eventKey: 2,
   *              target: "labels",
   *              mutation: () => {
   *                return {text: "hey"};
   *              }
   *            }
   *          ];
   *       }
   *     }
   *   }
   * ]}
   */
  events?: EventPropTypeInterface<"data" | "labels" | "parent", StringOrNumberOrCallback | string[] | number[]>[];
  /**
   * ChartDonutUtilization uses the standard externalEventMutations prop.
   */
  externalEventMutations?: any[];
  /**
   * The groupComponent prop takes an entire component which will be used to
   * create group elements for use within container elements. This prop defaults
   * to a <g> tag on web, and a react-native-svg <G> tag on mobile
   */
  groupComponent?: React.ReactElement<any>;
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
  height?: number;
  /**
   * When creating a donut chart, this prop determines the number of pixels between
   * the center of the chart and the inner edge of a donut. When this prop is set to zero
   * a regular pie chart is rendered.
   */
  innerRadius?: number;
  /**
   * The labelComponent prop takes in an entire label component which will be used
   * to create a label for the area. The new element created from the passed labelComponent
   * will be supplied with the following properties: x, y, index, data, verticalAnchor,
   * textAnchor, angle, style, text, and events. any of these props may be overridden
   * by passing in props to the supplied component, or modified or ignored within
   * the custom component itself. If labelComponent is omitted, a new ChartLabel
   * will be created with props described above. This labelComponent prop should be used to
   * provide a series label for ChartDonutUtilization. If individual labels are required for each
   * data point, they should be created by composing ChartDonutUtilization with VictoryScatter
   */
  labelComponent?: React.ReactElement<any>;
  /**
   * The labelPosition prop specifies the angular position of each label relative to its corresponding slice.
   * When this prop is not given, the label will be positioned at the centroid of each slice.
   */
  labelPosition?: 'startAngle' | 'endAngle' | 'centroid';
  /**
   * The legend component to render with chart. This overrides other legend props.
   */
  legendComponent?: React.ReactElement<any>;
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
  legendData?: any[];
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
   */
  legendOrientation?: 'horizontal' | 'vertical';
  /**
   * The labelRadius prop defines the radius of the arc that will be used for positioning each slice label.
   * If this prop is not set, the label radius will default to the radius of the pie + label padding.
   */
  labelRadius?: number;
  /**
   * The labels prop defines labels that will appear above each bar in your chart.
   * This prop should be given as an array of values or as a function of data.
   * If given as an array, the number of elements in the array should be equal to
   * the length of the data array. Labels may also be added directly to the data object
   * like data={[{x: 1, y: 1, label: "first"}]}.
   * @example ["spring", "summer", "fall", "winter"], (datum) => datum.title
   */
  labels?: string[] | ((data: any) => string);
  /**
   * The name prop is used to reference a component instance when defining shared events.
   */
  name?: string;
  /**
   * Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.
   * **This prop should not be set manually.**
   */
  origin?: { x: number, y: number };
  /**
   * The padAngle prop determines the amount of separation between adjacent data slices
   * in number of degrees
   */
  padAngle?: number;
  /**
   * The padding props specifies the amount of padding in number of pixels between
   * the edge of the chart and any rendered child components. This prop can be given
   * as a number or as an object with padding specified for top, bottom, left
   * and right.
   */
  padding?: PaddingProps;
  /**
   * Specifies the radius of the chart. If this property is not provided it is computed
   * from width, height, and padding props
   */
  radius?: number;
  /**
   * The sharedEvents prop is used internally to coordinate events between components. It should not be set manually.
   */
  sharedEvents?: any;
  /**
   * This will show the static, unused portion of the donut chart
   */
  showStatic?: boolean;
  /**
   * Use the sortKey prop to indicate how data should be sorted. This prop
   * is given directly to the lodash sortBy function to be executed on the
   * final dataset.
   */
  sortKey?: string | string[] | Function;
  /**
   * The sortOrder prop specifies whether sorted data should be returned in ascending or descending order.
   */
  sortOrder?: 'ascending' | 'descending';
  /**
   * The standalone prop determines whether the component will render a standalone svg
   * or a <g> tag that will be included in an external svg. Set standalone to false to
   * compose ChartDonutUtilization with other components within an enclosing <svg> tag.
   */
  standalone?: boolean;
  /**
   * The overall start angle of the pie in degrees. This prop is used in conjunction with
   * endAngle to create a pie that spans only a segment of a circle.
   */
  startAngle?: number;
  /**
   * The style prop specifies styles for your pie. ChartDonutUtilization relies on Radium,
   * so valid Radium style objects should work for this prop. Height, width, and
   * padding should be specified via the height, width, and padding props.
   * @example {data: {stroke: "black"}, label: {fontSize: 10}}
   */
  style?: VictoryStyleInterface;
  /**
   * The subtitle for the donut chart
   */
  subTitle?: string;
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartDonutUtilization as a solo component, implement the theme directly on
   * ChartDonutUtilization. If you are wrapping ChartDonutUtilization in ChartChart, ChartGroup, or ChartThreshold
   * please call the theme on the outermost wrapper component instead.
   */
  theme?: ChartThemeDefinition;
  /**
   * Specifies the theme color. Valid values are 'blue', 'green', 'grey' (recomended), 'multi', etc.
   *
   * Note: Not compatible with theme prop
   *
   * @example themeColor={ChartThemeColor.blue}
   */
  themeColor?: string;
  /**
   * Specifies the theme variant. Valid values are 'dark' or 'light'
   *
   * Note: Not compatible with theme prop
   *
   * @example themeVariant={ChartThemeVariant.light}
   */
  themeVariant?: string;
  /**
   * The title for the donut chart
   */
  title?: string;
  /**
   * The dynamic portion of the chart will change colors when data reaches the given threshold. Colors may be
   * overridden, but defaults shall be provided.
   *
   * @example thresholds={[{ value: 60, color: '#F0AB00' }, { value: 90, color: '#C9190B' }]}
   */
  thresholds?: any[];
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
  width?: number;
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
  x?: DataGetterPropType;
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
  y?: DataGetterPropType;
}

export const ChartDonutUtilization: React.FunctionComponent<ChartDonutUtilizationProps> = ({
  data,
  donutDx = 0,
  donutDy = 0,
  donutOrientation = 'left',
  legendComponent,
  legendData,
  legendOrientation = DonutUtilizationStyles.legend.orientation as ChartDonutUtilizationLabelOrientation,
  showStatic = true,
  standalone = true,
  subTitle,
  themeColor,
  themeVariant,
  thresholds,
  title,
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
}: ChartDonutUtilizationProps) => {
  // Returns computed data representing pie chart slices
  const getComputedData = () => {
    const datum = getData();
    const computedData: [{ x?: any, y: any}] = [{ x: datum[0]._x, y: datum[0]._y || 0 }];
    if (showStatic) {
      computedData.push({ y: datum[0]._x ? Math.abs(100 - datum[0]._y) : 100 });
    }
    return computedData;
  };

  const getData = () => {
    const datum = [{ ...data }];
    const accessorTypes = ['x', 'y'];
    return Data.formatData(datum, { x, y, ...rest }, accessorTypes);
  };

  // Returns thresholds with default color scale
  const getDonutThresholds = () => {
    const result = [];
    if (thresholds) {
      const numColors = DonutUtilizationStyles.thresholds.colorScale.length;
      for (let i = 0; i < thresholds.length; i++) {
        result.push({
          color: thresholds[i].color ? thresholds[i].color : DonutUtilizationStyles.thresholds.colorScale[i % numColors],
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
            theme
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
      const datum = getData();
      const donutThresholds = getDonutThresholds();
      for (let i = 0; i < donutThresholds.length; i++) {
        if (datum[0]._y >= donutThresholds[i].value) {
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
    ? (VictoryLegend as any).getDimensions({
        data: legendData,
        orientation: legendOrientation,
        theme
      })
    : {};

  const chart = (
    <React.Fragment>
      <ChartLabel
        style={[DonutUtilizationStyles.label.title, DonutUtilizationStyles.label.subTitle] as any} // Todo: Array supported, but @types/victory is wrong
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
