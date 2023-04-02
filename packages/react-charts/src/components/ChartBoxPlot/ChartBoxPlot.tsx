import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {
  AnimatePropTypeInterface,
  CategoryPropType,
  D3Scale,
  DataGetterPropType,
  DomainPropType,
  DomainPaddingPropType,
  EventCallbackInterface,
  EventPropTypeInterface,
  OriginType,
  PaddingProps,
  RangePropType,
  ScalePropType,
  SortOrderPropType,
  StringOrNumberOrCallback,
  StringOrNumberOrList,
  VictoryStyleInterface, OrientationTypes
} from 'victory-core';
import {
  VictoryBoxPlot,
  VictoryBoxPlotLabelOrientationInterface,
  VictoryBoxPlotLabelType,
  VictoryBoxPlotProps
} from 'victory-box-plot';
import { ChartContainer } from '../ChartContainer/ChartContainer';
import { ChartThemeDefinition } from '../ChartTheme/ChartTheme';
import { getTheme } from '../ChartUtils/chart-theme';

/**
 * ChartBoxPlot renders a box plot to describe the distribution of a set of data. Data for ChartBoxPlot may be given
 * with summary statistics pre-calculated (min, median, max, q1, q3), or as an array of raw data. ChartBoxPlot can be
 * composed with Chart to create box plot charts.
 *
 * See https://github.com/FormidableLabs/victory/blob/main/packages/victory-bar/src/index.d.ts
 *
 * @beta
 */
export interface ChartBoxPlotProps extends VictoryBoxPlotProps {
  /**
   * The animate prop specifies props for VictoryAnimation to use.
   * The animate prop should also be used to specify enter and exit
   * transition configurations with the `onExit` and `onEnter` namespaces respectively.
   *
   * @propType boolean | object
   * @example {duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}
   */
  animate?: boolean | AnimatePropTypeInterface;
  /**
   * The boxWidth prop specifies how wide each box should be. If the whiskerWidth prop is not set, this prop will also
   * determine the width of the whisker crosshair.
   */
  boxWidth?: number;
  /**
   * The categories prop specifies how categorical data for a chart should be ordered.
   * This prop should be given as an array of string values, or an object with
   * these arrays of values specified for x and y. If this prop is not set,
   * categorical data will be plotted in the order it was given in the data array
   *
   * @propType string[] | { x: string[], y: string[] }
   * @example ["dogs", "cats", "mice"]
   */
  categories?: CategoryPropType;
  /**
   * The containerComponent prop takes an entire component which will be used to
   * create a container element for standalone charts.
   * The new element created from the passed containerComponent wil be provided with
   * these props from ChartBoxPlot: height, width, children
   * (the chart itself) and style. Props that are not provided by the
   * child chart component include title and desc, both of which
   * are intended to add accessibility to Victory components. The more descriptive these props
   * are, the more accessible your data will be for people using screen readers.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a dataComponent is
   * not provided, ChartBoxPlot will use the default ChartContainer component.
   *
   * @example <ChartContainer title="Chart of Dog Breeds" desc="This chart shows..." />
   */
  containerComponent?: React.ReactElement<any>;
  /**
   * The data prop for ChartBoxPlot may be given in a variety of formats:
   *
   * @example
   * As an array of standard data objects with values specified for x and y When given in this format, repeated values
   * for x will be used for calculating summary statistics
   *
   * data={[
   *   { x: 1, y: 2 },
   *   { x: 1, y: 3 },
   *   { x: 1, y: 5 },
   *   { x: 2, y: 1 },
   *   { x: 2, y: 4 },
   *   { x: 2, y: 5 },
   *   ...
   * ]}
   *
   * @example As an array of data objects where y is given as an array of values When given in this format, array values
   * are used for calculating summary statistics.
   *
   * data={[
   *   { x: 1, y: [1, 2, 3, 5] },
   *   { x: 2, y: [3, 2, 8, 10] },
   *   { x: 3, y: [2, 8, 6, 5] },
   *   { x: 4, y: [1, 3, 2, 9] }
   * ]}
   *
   * @example As an array of data objects with pre-calculated summary statistics(min, median, max, q1, q3) When given in
   * this format, ChartBoxPlot will not perform statistical analysis. Pre-calculating summary statistics for large
   * datasets will improve performance.
   *
   * data={[
   *   { x: 1, min: 2, median: 5, max: 10, q1: 3, q3: 7 },
   *   { x: 2, min: 1, median: 4, max: 9, q1: 3, q3: 6 },
   *   { x: 3, min: 1, median: 6, max: 12, q1: 4, q3: 10 },
   * ]}
   *
   * Use the x, y, min, max, median, q1, and q3 data accessor props to specify custom data formats.
   */
  data?: any[];
  /**
   * The domain prop describes the range of values your chart will cover. This prop can be
   * given as a array of the minimum and maximum expected values for your bar chart,
   * or as an object that specifies separate arrays for x and y.
   * If this prop is not provided, a domain will be calculated from data, or other
   * available information.
   *
   * @propType number[] | { x: number[], y: number[] }
   * @example [low, high], { x: [low, high], y: [low, high] }
   *
   * [-1, 1], {x: [0, 100], y: [0, 1]}
   */
  domain?: DomainPropType;
  /**
   * The domainPadding prop specifies a number of pixels of padding to add to the
   * beginning and end of a domain. This prop is useful for explicitly spacing ticks farther
   * from the origin to prevent crowding. This prop should be given as an object with
   * numbers specified for x and y.
   *
   * @propType number | number[] | { x: number[], y: number[] }
   * @example [left, right], { x: [left, right], y: [bottom, top] }
   *
   * {x: [10, -10], y: 5}
   */
  domainPadding?: DomainPaddingPropType;
  /**
   * Similar to data accessor props `x` and `y`, this prop may be used to functionally
   * assign eventKeys to data
   *
   * @propType number | string | Function
   */
  eventKey?: StringOrNumberOrCallback;
  /**
   * The event prop take an array of event objects. Event objects are composed of
   * a target, an eventKey, and eventHandlers. Targets may be any valid style namespace
   * for a given component, so "data" and "labels" are all valid targets for ChartBoxPlot events.
   * The eventKey may optionally be used to select a single element by index rather than an entire
   * set. The eventHandlers object should be given as an object whose keys are standard
   * event names (i.e. onClick) and whose values are event callbacks. The return value
   * of an event handler is used to modify elemnts. The return value should be given
   * as an object or an array of objects with optional target and eventKey keys,
   * and a mutation key whose value is a function. The target and eventKey keys
   * will default to those corresponding to the element the event handler was attached to.
   * The mutation function will be called with the calculated props for the individual selected
   * element (i.e. a single bar), and the object returned from the mutation function
   * will override the props of the selected element via object assignment.
   *
   * @propType object[]
   * @example
   *
   * events={[
   *   {
   *     target: "data",
   *     eventKey: "thisOne",
   *     eventHandlers: {
   *       onClick: () => {
   *         return [
   *            {
   *              eventKey: "theOtherOne",
   *              mutation: (props) => {
   *                return {style: merge({}, props.style, {fill: "orange"})};
   *              }
   *            }, {
   *              eventKey: "theOtherOne",
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
  events?: EventPropTypeInterface<string, StringOrNumberOrCallback>[];
  /**
   * ChartBoxPlot uses the standard externalEventMutations prop.
   *
   * @propType object[]
   */
  externalEventMutations?: EventCallbackInterface<string | string[], StringOrNumberOrList>[];
  /**
   * The groupComponent prop takes an entire component which will be used to
   * create group elements for use within container elements. This prop defaults
   * to a <g> tag on web, and a react-native-svg <G> tag on mobile
   */
  groupComponent?: React.ReactElement<any>;
  /**
   * The height props specifies the height the svg viewBox of the chart container.
   * This value should be given as a number of pixels
   */
  height?: number;
  /**
   * The horizontal prop determines whether the bars will be laid vertically or
   * horizontally. The bars will be vertical if this prop is false or unspecified,
   * or horizontal if the prop is set to true.
   */
  horizontal?: boolean;
  /**
   * The labelOrientation prop determines where labels are placed relative to their corresponding data. If this prop is
   * not set, it will be set to "top" for horizontal charts, and "right" for vertical charts.
   */
  labelOrientation?: OrientationTypes | VictoryBoxPlotLabelOrientationInterface;
  /**
   * When the boolean labels prop is set to true, the values for min, max, median, q1, and q3 will be displayed for
   * each box. For more granular label control, use the individual minLabels, maxLabels, medianLabels, q1Labels, and
   * q3Labels props.
   */
  labels?: boolean;
  /**
   * Use the max data accessor prop to define the max value of a box plot.
   *
   * @propType string | array[string] | function
   * @example Specify which property in an array of data objects should be used as the max value
   *
   * max="max_value"
   *
   * @example Use a function to translate each element in a data array into a max value
   *
   * max={() => 10}
   *
   * @example Specify which property in an array of nested data objects should be used as a max value
   *
   * max="bonds.max", max={["bonds", "max"]}
   */
  max?: StringOrNumberOrCallback | string[];
  /**
   * The maxComponent prop takes a component instance which will be responsible for rendering an element to represent
   * the maximum value of the box plot. The new element created from the passed maxComponent will be provided with the
   * following props calculated by ChartBoxPlot: datum, index, scale, style, events, majorWhisker and minorWhisker.
   * The majorWhisker and minorWhisker props are given as objects with values for x1, y1, x2 and y2 that describes the
   * lines that make up the major and minor whisker. Any of these props may be overridden by passing in props to the
   * supplied component, or modified or ignored within the custom component itself. If a maxComponent is not provided,
   * ChartBoxPlot will use its default Whisker component.
   */
  maxComponent?: React.ReactElement;
  /**
   * The maxDomain prop defines a maximum domain value for a chart. This prop is useful in situations where the maximum
   * domain of a chart is static, while the minimum value depends on data or other variable information. If the domain
   * prop is set in addition to maximumDomain, domain will be used.
   *
   * Note: The x value supplied to the maxDomain prop refers to the independent variable, and the y value refers to the
   * dependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to
   * the y axis.
   *
   * @example
   *
   * maxDomain={0}
   * maxDomain={{ y: 0 }}
   */
  maxDomain?: number | { x?: number; y?: number };
  /**
   * The maxLabelComponent prop takes a component instance which will be used to render the label corresponding to the
   * maximum value for each box. The new element created from the passed maxLabelComponent will be supplied with the
   * following props: x, y, datum, index, scale, verticalAnchor, textAnchor, angle, transform, style and events. Any of
   * these props may be overridden by passing in props to the supplied component, or modified or ignored within the
   * custom component itself. If maxLabelComponent is omitted, a new ChartLabel will be created with props described
   * above.
   */
  maxLabelComponent?: React.ReactElement;
  /**
   * The maxLabels prop defines the labels that will appear above each point. This prop should be given as a boolean,
   * an array or as a function of the props corresponding to that label. When given as a boolean value, the max value
   * of each datum will be used for the label.
   *
   * @example
   *
   * maxLabels={["first", "second", "third"]}
   * maxLabels={({ datum }) => Math.round(datum.max)}
   */
  maxLabels?: VictoryBoxPlotLabelType;
  /**
   * Use the median data accessor prop to define the median value of a box plot.
   *
   * @propType string | array[string] | function
   * @example Specify which property in an array of data objects should be used as the median value
   *
   * median="median_value"
   *
   * @example Use a function to translate each element in a data array into a median value
   *
   * median={() => 10}
   *
   * @example Specify which property in an array of nested data objects should be used as a median value
   *
   * median="bonds.median", median={["bonds", "median"]}
   */
  median?: StringOrNumberOrCallback | string[];
  /**
   * The medianComponent prop takes a component instance which will be responsible for rendering an element to represent
   * the median value of the box plot. The new element created from the passed medianComponent will be provided with the
   * following props calculated by ChartBoxPlot: datum, index, scale, style, events, x1, y1, x2 and y2 Any of these
   * props may be overridden by passing in props to the supplied component, or modified or ignored within the custom
   * component itself. If a medianComponent is not provided, ChartBoxPlot will use its default Line component.
   */
  medianComponent?: React.ReactElement;
  /**
   * The medianLabelComponent prop takes a component instance which will be used to render the label corresponding to
   * the median value for each box. The new element created from the passed medianLabelComponent will be supplied with
   * the following props: x, y, datum, index, scale, verticalAnchor, textAnchor, angle, transform, style and events. Any
   * of these props may be overridden by passing in props to the supplied component, or modified or ignored within the
   * custom component itself. If medianLabelComponent is omitted, a new ChartLabel will be created with props
   * described above.
   */
  medianLabelComponent?: React.ReactElement;
  /**
   * The medianLabels prop defines the labels that will appear above each point. This prop should be given as a boolean,
   * an array or as a function of the props corresponding to that label. When given as a boolean value, the median value
   * of each datum will be used for the label.
   *
   * @propType string | function | boolean
   * @example
   *
   * medianLabels={["first", "second", "third"]}
   * medianLabels={({ datum }) => Math.round(datum.median)}
   */
  medianLabels?: VictoryBoxPlotLabelType;
  /**
   * Use the min data accessor prop to define the min value of a box plot.
   *
   * @propType string | array[string] | function
   * @example Specify which property in an array of data objects should be used as the min value
   *
   * min="min_value"
   *
   * @example Use a function to translate each element in a data array into a min value
   *
   * min={() => 10}
   *
   * @example Specify which property in an array of nested data objects should be used as a min value
   *
   * min="bonds.min", min={["bonds", "min"]}
   */
  min?: StringOrNumberOrCallback | string[];
  /**
   * The minComponent prop takes a component instance which will be responsible for rendering an element to represent
   * the minimum value of the box plot. The new element created from the passed minComponent will be provided with the
   * following props calculated by ChartBoxPlot: datum, index, scale, style, events, majorWhisker and minorWhisker.
   * The majorWhisker and minorWhisker props are given as objects with values for x1, y1, x2 and y2 that describes the
   * lines that make up the major and minor whisker. Any of these props may be overridden by passing in props to the
   * supplied component, or modified or ignored within the custom component itself. If a minComponent is not provided,
   * ChartBoxPlot will use its default Whisker component.
   */
  minComponent?: React.ReactElement;
  /**
   * The minDomain prop defines a minimum domain value for a chart. This prop is useful in situations where the minimum
   * domain of a chart is static, while the maximum value depends on data or other variable information. If the domain
   * prop is set in addition to minimumDomain, domain will be used.
   *
   * Note: The x value supplied to the minDomain prop refers to the independent variable, and the y value refers to the
   * dependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to
   * the y axis.
   *
   * @example
   *
   * minDomain={0}
   * minDomain={{ y: 0 }}
   */
  minDomain?: number | { x?: number; y?: number };
  /**
   * The minLabelComponent prop takes a component instance which will be used to render the label corresponding to the
   * minimum value for each box. The new element created from the passed minLabelComponent will be supplied with the
   * following props: x, y, datum, index, scale, verticalAnchor, textAnchor, angle, transform, style and events. Any of
   * these props may be overridden by passing in props to the supplied component, or modified or ignored within the
   * custom component itself. If minLabelComponent is omitted, a new ChartLabel will be created with props described
   * above.
   */
  minLabelComponent?: React.ReactElement;
  /**
   * The minLabels prop defines the labels that will appear above each point. This prop should be given as a boolean, an
   * array or as a function of the props corresponding to that label. When given as a boolean value, the min value of
   * each datum will be used for the label.
   *
   * @propType string | function | boolean
   * @example
   *
   * minLabels={["first", "second", "third"]}
   * minLabels={({ datum }) => Math.round(datum.min)}
   */
  minLabels?: VictoryBoxPlotLabelType;
  /**
   * The name prop is used to reference a component instance when defining shared events.
   */
  name?: string;
  /**
   * Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.
   *
   * Note: It will not typically be necessary to set an origin prop manually
   *
   * @propType { x: number, y: number }
   */
  origin?: OriginType;
  /**
   * The padding props specifies the amount of padding in number of pixels between
   * the edge of the chart and any rendered child components. This prop can be given
   * as a number or as an object with padding specified for top, bottom, left
   * and right.
   *
   * @propType number | { top: number, bottom: number, left: number, right: number }
   */
  padding?: PaddingProps;
  /**
   * Victory components can pass a boolean polar prop to specify whether a label is part of a polar chart.
   *
   * Note: This prop should not be set manually.
   *
   * @private
   * @hide
   */
  polar?: boolean;
  /**
   * Use the q1 data accessor prop to define the q1 value of a box plot.
   *
   * @propType string | array[string] | function
   * @example Specify which property in an array of data objects should be used as the q1 value
   *
   * q1="q1_value"
   *
   * @example Use a function to translate each element in a data array into a q1 value
   *
   * q1={() => 10}
   *
   * @example Specify which property in an array of nested data objects should be used as a q1 value
   *
   * q1="bonds.q1", q1={["bonds", "q1"]}
   */
  q1?: StringOrNumberOrCallback | string[];
  /**
   * The q1Component prop takes a component instance which will be responsible for rendering an element to represent the
   * q1 value of the box plot. The new element created from the passed q1Component will be provided with the following
   * props calculated by ChartBoxPlot: datum, index, scale, style, events, x, y, width and height Any of these props
   * may be overridden by passing in props to the supplied component, or modified or ignored within the custom component
   * itself. If a q1Component is not provided, ChartBoxPlot will use its default Box component.
   */
  q1Component?: React.ReactElement;
  /**
   * The q1LabelComponent prop takes a component instance which will be used to render the label corresponding to the q1
   * value for each box. The new element created from the passed q1LabelComponent will be supplied with the following
   * props: x, y, datum, index, scale, verticalAnchor, textAnchor, angle, transform, style and events. Any of these
   * props may be overridden by passing in props to the supplied component, or modified or ignored within the custom
   * component itself. If q1LabelComponent is omitted, a new ChartLabel will be created with props described above.
   */
  q1LabelComponent?: React.ReactElement;
  /**
   * The q1Labels prop defines the labels that will appear above each point. This prop should be given as a boolean, an
   * array or as a function of the props corresponding to that label. When given as a boolean value, the q1 value of
   * each datum will be used for the label.
   *
   * @propType string | function | boolean
   * @example
   *
   * q1Labels={["first", "second", "third"]}
   * q1Labels={({ datum }) => Math.round(datum.q1)}
   */
  q1Labels?: VictoryBoxPlotLabelType;
  /**
   * Use the q3 data accessor prop to define the q3 value of a box plot.
   *
   * @propType string | array[string] | function
   * @example Specify which property in an array of data objects should be used as the q3 value
   *
   * q3="q3_value"
   *
   * @example Use a function to translate each element in a data array into a q3 value
   *
   * q3={() => 10}
   *
   * @example Specify which property in an array of nested data objects should be used as a q3 value
   *
   * q3="bonds.q3", q3={["bonds", "q3"]}
   */
  q3?: StringOrNumberOrCallback | string[];
  /**
   * The q3Component prop takes a component instance which will be responsible for rendering an element to represent the
   * q3 value of the box plot. The new element created from the passed q3Component will be provided with the following
   * props calculated by ChartBoxPlot: datum, index, scale, style, events, x, y, width and height Any of these props
   * may be overridden by passing in props to the supplied component, or modified or ignored within the custom component
   * itself. If a q3Component is not provided, ChartBoxPlot will use its default Box component.
   */
  q3Component?: React.ReactElement;
  /**
   * The q3LabelComponent prop takes a component instance which will be used to render the label corresponding to the q3
   * value for each box. The new element created from the passed q3LabelComponent will be supplied with the following
   * props: x, y, datum, index, scale, verticalAnchor, textAnchor, angle, transform, style and events. Any of these
   * props may be overridden by passing in props to the supplied component, or modified or ignored within the custom
   * component itself. If q3LabelComponent is omitted, a new ChartLabel will be created with props described above.
   */
  q3LabelComponent?: React.ReactElement;
  /**
   * The q3Labels prop defines the labels that will appear above each point. This prop should be given as a boolean, an
   * array or as a function of the props corresponding to that label. When given as a boolean value, the q3 value of
   * each datum will be used for the label.
   *
   * @propType string | function | boolean
   * @example
   *
   * q3Labels={["first", "second", "third"]}
   * q3Labels={({ datum }) => Math.round(datum.q3)}
   */
  q3Labels?: VictoryBoxPlotLabelType;
  /**
   * The range prop describes the dimensions over which data may be plotted. For cartesian coordinate systems, this
   * corresponds to minimum and maximum svg coordinates in the x and y dimension. In polar coordinate systems this
   * corresponds to a range of angles and radii. When this value is not given it will be calculated from the width,
   * height, and padding, or from the startAngle and endAngle in the case of polar charts. All components in a given
   * chart must share the same range, so setting this prop on children nested within Chart or
   * ChartGroup will have no effect. This prop is usually not set manually.
   *
   * @propType number[] | { x: number[], y: number[] }
   * @example [low, high] | { x: [low, high], y: [low, high] }
   *
   * Cartesian: range={{ x: [50, 250], y: [50, 250] }}
   * Polar: range={{ x: [0, 360], y: [0, 250] }}
   */
  range?: RangePropType;
  /**
   * The samples prop specifies how many individual points to plot when plotting
   * y as a function of x. Samples is ignored if x props are provided instead.
   */
  samples?: number;
  /**
   * The scale prop determines which scales your chart should use. This prop can be
   * given as a string specifying a supported scale ("linear", "time", "log", "sqrt"),
   * as a d3 scale function, or as an object with scales specified for x and y
   *
   * @propType string | { x: string, y: string }
   * @example d3Scale.time(), {x: "linear", y: "log"}
   */
  scale?:
    | ScalePropType
    | D3Scale
    | {
        x?: ScalePropType | D3Scale;
        y?: ScalePropType | D3Scale;
      };
  /**
   * The sharedEvents prop is used internally to coordinate events between components.
   *
   * Note: This prop should not be set manually.
   *
   * @private
   * @hide
   */
  sharedEvents?: { events: any[]; getEventState: Function };
  /**
   * By default domainPadding is coerced to existing quadrants. This means that if a given domain only includes positive
   * values, no amount of padding applied by domainPadding will result in a domain with negative values. This is the
   * desired behavior in most cases. For users that need to apply padding without regard to quadrant, the
   * singleQuadrantDomainPadding prop may be used. This prop may be given as a boolean or an object with boolean values
   * specified for "x" and/or "y". When this prop is false (or false for a given dimension), padding will be applied
   * without regard to quadrant. If this prop is not specified, domainPadding will be coerced to existing quadrants.
   *
   * Note: The x value supplied to the singleQuadrantDomainPadding prop refers to the independent variable, and the y
   * value refers to the dependent variable. This may cause confusion in horizontal charts, as the independent variable
   * will corresponds to the y axis.
   *
   * @example
   *
   * singleQuadrantDomainPadding={false}
   * singleQuadrantDomainPadding={{ x: false }}
   */
  singleQuadrantDomainPadding?: boolean | { x?: boolean; y?: boolean };
  /**
   * Use the sortKey prop to indicate how data should be sorted. This prop
   * is given directly to the lodash sortBy function to be executed on the
   * final dataset.
   *
   * @propType number | string | Function | string[]
   */
  sortKey?: DataGetterPropType;
  /**
   * The sortOrder prop specifies whether sorted data should be returned in 'ascending' or 'descending' order.
   *
   * @propType string
   */
  sortOrder?: SortOrderPropType;
  /**
   * The standalone prop determines whether the component will render a standalone svg
   * or a <g> tag that will be included in an external svg. Set standalone to false to
   * compose ChartBoxPlot with other components within an enclosing <svg> tag.
   */
  standalone?: boolean;
  /**
   * The style prop specifies styles for your ChartBoxPlot. Any valid inline style properties
   * will be applied. Height, width, and padding should be specified via the height,
   * width, and padding props, as they are used to calculate the alignment of
   * components within chart.
   *
   * @propType { parent: object, data: object, labels: object }
   * @example {data: {fill: "red"}, labels: {fontSize: 12}}
   */
  style?: VictoryStyleInterface;
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartBoxPlot as a solo component, implement the theme directly on
   * ChartBoxPlot. If you are wrapping ChartBoxPlot in ChartChart or ChartGroup,
   * please call the theme on the outermost wrapper component instead.
   *
   * @propType object
   */
  theme?: ChartThemeDefinition;
  /**
   * Specifies the theme color. Valid values are 'blue', 'green', 'multi', etc.
   *
   * Note: Not compatible with theme prop
   *
   * @example themeColor={ChartThemeColor.blue}
   */
  themeColor?: string;
  /**
   * The whiskerWidth prop specifies how wide each whisker crosshair should be. If the whiskerWidth prop is not set, the
   * width of the whisker crosshair will match the width of the box.
   */
  whiskerWidth?: number;
  /**
   * The width props specifies the width of the svg viewBox of the chart container
   * This value should be given as a number of pixels
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
   *
   * @propType number | string | Function | string[]
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
   *
   * @propType number | string | Function | string[]
   * @example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)
   */
  y?: DataGetterPropType;
  /**
   * Use y0 data accessor prop to determine how the component defines the baseline y0 data.
   * This prop is useful for defining custom baselines for components like ChartBoxPlot.
   * This prop may be given in a variety of formats.
   *
   * @propType number | string | Function | string[]
   * @example 'last_quarter_profit', () => 10, 1, 'employees.salary', ["employees", "salary"]
   */
  y0?: DataGetterPropType;
}

export const ChartBoxPlot: React.FunctionComponent<ChartBoxPlotProps> = ({
  containerComponent = <ChartContainer />,
  themeColor,

  // destructure last
  theme = getTheme(themeColor),
  ...rest
}: ChartBoxPlotProps) => {
  // Clone so users can override container props
  const container = React.cloneElement(containerComponent, {
    theme,
    ...containerComponent.props
  });

  // Note: containerComponent is required for theme
  return <VictoryBoxPlot containerComponent={container} theme={theme} {...rest} />;
};
ChartBoxPlot.displayName = 'ChartBoxPlot';

// Note: VictoryBar.getDomain & VictoryBar.role must be hoisted
hoistNonReactStatics(ChartBoxPlot, VictoryBoxPlot);
