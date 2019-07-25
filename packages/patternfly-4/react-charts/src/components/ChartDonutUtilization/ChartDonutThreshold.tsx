import * as React from 'react';
import {
  AnimatePropTypeInterface,
  CategoryPropType,
  ColorScalePropType,
  DataGetterPropType,
  EventPropTypeInterface,
  PaddingProps,
  StringOrNumberOrCallback,
  VictoryPie,
  VictoryStyleInterface
} from "victory";
import { Data } from 'victory-core';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ChartContainer } from '../ChartContainer';
import { ChartDonut, ChartDonutProps } from '../ChartDonut';
import { ChartCommonStyles, ChartDonutStyles, ChartThemeDefinition } from "../ChartTheme";
import { getChartOrigin, getDonutThresholdDynamicTheme, getDonutThresholdStaticTheme } from '../ChartUtils';

export enum ChartDonutThresholdDonutOrientation {
  left = 'left',
  right = 'right',
  top = 'top'
};

export enum ChartDonutThresholdLabelOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical'
};

export enum ChartDonutThresholdLabelPosition {
  centroid = 'centroid',
  endAngle = 'endAngle',
  startAngle = 'startAngle'
};

export enum ChartDonutThresholdLegendPosition {
  bottom = 'bottom',
  right = 'right'
};

export enum ChartDonutThresholdSortOrder {
  ascending = 'ascending',
  descending = 'descending'
};

export enum ChartDonutThresholdSubTitlePosition {
  bottom = 'bottom',
  center = 'center',
  right = 'right'
}

/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */
export interface ChartDonutThresholdProps extends ChartDonutProps {
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
   * The ariaDesc prop specifies the description of the chart/SVG to assist with
   * accessibility for screen readers.
   *
   * Note: Overridden by the desc prop of containerComponent
   */
  ariaDesc?: string;
  /**
   * The ariaTitle prop specifies the title to be applied to the SVG to assist
   * accessibility for screen readers.
   *
   * Note: Overridden by the title prop of containerComponent
   */
  ariaTitle?: string;
  /**
   * The categories prop specifies how categorical data for a chart should be ordered.
   * This prop should be given as an array of string values, or an object with
   * these arrays of values specified for x and y. If this prop is not set,
   * categorical data will be plotted in the order it was given in the data array
   * @example ["dogs", "cats", "mice"]
   */
  categories?: CategoryPropType;
  /**
   * The utilization donut chart to render with the threshold donut chart
   */
  children?: React.ReactElement<any>;
  /**
   * The colorScale prop is an optional prop that defines the color scale the pie
   * will be created on. This prop should be given as an array of CSS colors, or as a string
   * corresponding to one of the built in color scales. ChartDonutThreshold will automatically assign
   * values from this color scale to the pie slices unless colors are explicitly provided in the
   * data object
   */
  colorScale?: ColorScalePropType;
  /**
   * The containerComponent prop takes an entire component which will be used to
   * create a container element for standalone charts.
   * The new element created from the passed containerComponent wil be provided with
   * these props from ChartDonutThreshold: height, width, children
   * (the chart itself) and style. Props that are not provided by the
   * child chart component include title and desc, both of which
   * are intended to add accessibility to Victory components. The more descriptive these props
   * are, the more accessible your data will be for people using screen readers.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a dataComponent is
   * not provided, ChartDonutThreshold will use the default ChartContainer component.
   * @example <ChartContainer title="Chart of Dog Breeds" desc="This chart shows ..." />
   */
  containerComponent?: React.ReactElement<any>;
  /**
   * Set the cornerRadius for every dataComponent (Slice by default) within ChartDonutThreshold
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
   * @example data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
   */
  data?: any[];
  /**
   * The dataComponent prop takes an entire, HTML-complete data component which will be used to
   * create slices for each datum in the pie chart. The new element created from the passed
   * dataComponent will have the property datum set by the pie chart for the point it renders;
   * properties style and pathFunction calculated by ChartDonutThreshold; an index property set
   * corresponding to the location of the datum in the data provided to the pie; events bound to
   * the ChartDonutThreshold; and the d3 compatible slice object.
   * If a dataComponent is not provided, ChartDonutThreshold's Slice component will be used.
   */
  dataComponent?: React.ReactElement<any>;
  /**
   * The desc prop specifies the description of the chart/SVG to assist with
   * accessibility for screen readers. The more info about the chart provided in
   * the description, the more usable it will be for people using screen readers.
   * This prop defaults to an empty string.
   *
   * Note: Overridden by containerComponent
   *
   * @example "Golden retreivers make up 30%, Labs make up 25%, and other dog breeds are
   * not represented above 5% each."
   */
  desc?: string;
  /**
   * Specifies the height of the donut chart. This value should be given as a number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: When adding a legend, height (the overall SVG height) may need to be larger than donutHeight (the donut size)
   * in order to accommodate the extra legend.
   *
   * By default, donutHeight is the min. of either height or width. This covers most use cases in order to accommodate
   * legends within the same SVG. However, donutHeight (not height) may need to be set in order to adjust the donut
   * height.
   *
   * Note: innerRadius may need to be set when using this property.
   */
  donutHeight?: number;
  /**
   * Specifies the width of the donut chart. This value should be given as a number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: When adding a legend, width (the overall SVG width) may need to be larger than donutWidth (the donut size)
   * in order to accommodate the extra legend.
   *
   * By default, donutWidth is the min. of either height or width. This covers most use cases in order to accommodate
   * legends within the same SVG. However, donutWidth (not width) may need to be set in order to adjust the donut width.
   *
   * Note: innerRadius may need to be set when using this property.
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
   * for a given component, so "data" and "labels" are all valid targets for ChartDonutThreshold
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
   * ChartDonutThreshold uses the standard externalEventMutations prop.
   */
  externalEventMutations?: any[];
  /**
   * The groupComponent prop takes an entire component which will be used to
   * create group elements for use within container elements. This prop defaults
   * to a <g> tag on web, and a react-native-svg <G> tag on mobile
   */
  groupComponent?: React.ReactElement<any>;
  /**
   * Specifies the height the svg viewBox of the chart container. This value should be given as a number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: When adding a legend, height (the overall SVG height) may need to be larger than donutHeight (the donut size)
   * in order to accommodate the extra legend.
   *
   * By default, donutHeight is the min. of either height or width. This covers most use cases in order to accommodate
   * legends within the same SVG. However, donutHeight (not height) may need to be set in order to adjust the donut height.
   *
   * Typically, the parent container is set to the same height in order to maintain the aspect ratio.
   */
  height?: number;
  /**
   * When creating a donut chart, this prop determines the number of pixels between
   * the center of the chart and the inner edge.
   */
  innerRadius?: number;
  /**
   * Invert the threshold color scale used to represent warnings, errors, etc.
   */
  invert?: boolean;
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
   * The legend position relation to the donut chart. Valid values are 'bottom' and 'right'
   */
  legendPosition?: 'bottom' | 'right';
  /**
   * The name prop is used to reference a component instance when defining shared events.
   */
  name?: string;
  /**
   * Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.
   * It should not be set manually.**
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
   *
   * Note: innerRadius may need to be set when using this property.
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
   * compose ChartDonutThreshold with other components within an enclosing <svg> tag.
   */
  standalone?: boolean;
  /**
   * The overall start angle of the pie in degrees. This prop is used in conjunction with
   * endAngle to create a pie that spans only a segment of a circle.
   */
  startAngle?: number;
  /**
   * The style prop specifies styles for your pie. ChartDonutThreshold relies on Radium,
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
   * The orientation of the donut chart in relation to the legend. Valid values are 'bottom', 'center', and 'right'
   */
  subTitlePosition?: 'bottom' | 'center' | 'right';
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartDonutThreshold as a solo component, implement the theme directly on
   * ChartDonutThreshold. If you are wrapping ChartDonutThreshold in ChartChart or ChartGroup,
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
   * Specifies the width of the svg viewBox of the chart container. This value should be given as a number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: When adding a legend, width (the overall SVG width) may need to be larger than donutWidth (the donut size)
   * in order to accommodate the extra legend.
   *
   * By default, donutWidth is the min. of either height or width. This covers most use cases in order to accommodate
   * legends within the same SVG. However, donutWidth (not width) may need to be set in order to adjust the donut width.
   *
   * Typically, the parent container is set to the same width in order to maintain the aspect ratio.
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

export const ChartDonutThreshold: React.FunctionComponent<ChartDonutThresholdProps> = ({
  ariaDesc,
  ariaTitle,
  children,
  data = [],
  invert = false,
  labels = [], // Don't show any tooltip labels by default, let consumer override if needed
  legendComponent,
  legendData,
  legendPosition = ChartCommonStyles.legend.position as ChartDonutThresholdLegendPosition,
  standalone = true,
  subTitlePosition = ChartDonutStyles.label.subTitlePosition as ChartDonutThresholdSubTitlePosition,
  themeColor,
  themeVariant,
  x,
  y,

  // destructure last
  theme = getDonutThresholdStaticTheme(themeColor, themeVariant, invert),
  height = theme.pie.height,
  width = theme.pie.width,
  donutHeight = Math.min(height, width),
  donutWidth = Math.min(height, width),
  ...rest
}: ChartDonutThresholdProps) => {
  const donutSize = Math.min(donutHeight, donutWidth);

  // Returns computed data representing pie chart slices
  const getComputedData = () => {
    // Format and sort data. Sorting ensures thresholds are displayed in the correct order and simplifies calculations.
    const datum = Data.formatData(data, {x, y, ...rest}, ['x', 'y']).sort((a: any,b: any) => a._y - b._y);

    // Data must be offset so that the sum of all data point y-values (including the final slice) == 100.
    const [prev, computedData] = datum.reduce((acc: [number, any], dataPoint: {_x: number | string, _y: number}) => {
      return [
        dataPoint._y, // Set the previous value to current y value
        [
          ...acc[1],
          {
            x: dataPoint._x, // Conditionally add x property only if it is in the original data object
            y: dataPoint._y - acc[0] // Must be offset by previous value
          }
        ]
      ];
    }, [0, []]);

    return [
      ...computedData,
      {
        y: prev ? (100 - prev) : 0
      }
    ];
  };

  // Returns the horizontal shift for the donut utilization chart
  const getDonutDx = (dynamicTheme: ChartThemeDefinition, legendPosition: string) => {
    const dynamicWidth = donutSize - (theme.pie.width - dynamicTheme.pie.width);
    switch (legendPosition) {
      case 'right':
        return Math.round((donutSize - dynamicWidth) / 2);
      default:
        return 0;
    }
  };

  // Returns the vertical shift for the donut utilization chart
  const getDonutDy = (dynamicTheme: ChartThemeDefinition) => {
    const dynamicHeight = donutSize - (theme.pie.height - dynamicTheme.pie.height);
    return Math.round((donutSize - dynamicHeight) / 2);
  }

  // Returns the horizontal shift for the donut utilization legend
  const getLegendDx = (dynamicTheme: ChartThemeDefinition, position: string) => {
    const dynamicWidth = donutSize - (theme.pie.width - dynamicTheme.pie.width);
    switch (position) {
      case 'right':
        return getDonutDx(dynamicTheme, legendPosition) + Math.round((donutSize - dynamicWidth) / 2);
      default:
        return 0;
    }
  };

  // Returns the vertical shift for the donut utilization legend
  const getLegendDy = (dynamicTheme: ChartThemeDefinition, position: string) => {
    const dynamicWidth = donutSize - (theme.pie.width - dynamicTheme.pie.width);
    switch (position) {
      case 'bottom':
        return getDonutDy(dynamicTheme) + Math.round((donutSize - dynamicWidth) / 2);
      default:
        return getDonutDy(dynamicTheme);
    }
  }

  // Returns the horizontal shift for the donut utilization subtitle
  const getSubTitleDx = (dynamicTheme: ChartThemeDefinition, position: string) => {
    const dynamicWidth = donutSize - (theme.pie.width - dynamicTheme.pie.width);
    switch (position) {
      case 'right':
        return getDonutDx(dynamicTheme, legendPosition) + Math.round((donutSize - dynamicWidth) / 2);
      default:
        return Math.round((donutSize - dynamicWidth) / 2);
    }
  };

  // Returns the vertical shift for the donut utilization subtitle
  const getSubTitleDy = (dynamicTheme: ChartThemeDefinition, position: string) => {
    return getLegendDy(dynamicTheme, position);
  }

  // Render dynamic utilization donut cart
  const renderChildren = () =>
    React.Children.toArray(children).map(child => {
      if (child.props) {
        const { data: childData, ...childProps } = child.props;
        const datum = Data.formatData([childData], childProps, ['x', 'y']); // Format child data independently of this component's props
        const dynamicTheme = childProps.theme ||
          getDonutThresholdDynamicTheme(childProps.themeColor || themeColor,
            childProps.themeVariant || themeVariant);
        const legendPos = childProps.legendPosition || legendPosition;
        const subTitlePos = childProps.subTitlePosition || subTitlePosition;
        const donutSizeDiff = theme.pie.height - dynamicTheme.pie.height; // static - dynamic chart heights
        const childDountSize = donutSize > donutSizeDiff ? donutSize - donutSizeDiff : 0; // not visible < 50px
        return React.cloneElement(child, {
          data: childData,
          donutDx: getDonutDx(dynamicTheme, legendPos),
          donutDy: getDonutDy(dynamicTheme),
          donutHeight: childDountSize,
          donutWidth: childDountSize,
          endAngle: 360 * (datum[0]._y ? datum[0]._y / 100 : 0),
          height,
          invert,
          legendDx: getLegendDx(dynamicTheme, legendPos),
          legendDy: getLegendDy(dynamicTheme, legendPos),
          legendPosition: legendPos,
          showStatic: false,
          standalone: false,
          subTitleDx: getSubTitleDx(dynamicTheme, subTitlePos),
          subTitleDy: getSubTitleDy(dynamicTheme, subTitlePos),
          subTitlePosition: subTitlePos,
          theme: dynamicTheme,
          width,
          ...childProps,
        });
      }
      return child;
    });

  // Static threshold dount chart
  const chart = (
    <ChartDonut
      data={getComputedData()}
      height={donutSize}
      labels={labels}
      origin={getChartOrigin({
        chartHeight: donutSize,
        chartWidth: donutSize,
        legendPosition,
        svgWidth: width
      })}
      standalone={false}
      theme={theme}
      width={donutSize}
      {...rest}
    />
  );

  return standalone ? (
    <ChartContainer desc={ariaDesc} height={height} title={ariaTitle} width={width}>
      {chart}
      {renderChildren()}
    </ChartContainer>
  ) : (
    <React.Fragment>
      {chart}
      {renderChildren()}
    </React.Fragment>
  );
};

// Note: VictoryPie.role must be hoisted
hoistNonReactStatics(ChartDonutThreshold, VictoryPie);
