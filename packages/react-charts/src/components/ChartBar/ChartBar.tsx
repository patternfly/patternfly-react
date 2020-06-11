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
  NumberOrCallback,
  OriginType,
  PaddingProps,
  RangePropType,
  ScalePropType,
  SortOrderPropType,
  StringOrNumberOrCallback,
  StringOrNumberOrList,
  VictoryStyleInterface
} from 'victory-core';
import { VictoryBar, VictoryBarAlignmentType, VictoryBarProps, VictoryBarTTargetType } from 'victory-bar';
import { ChartContainer } from '../ChartContainer';
import { ChartThemeDefinition } from '../ChartTheme';
import { getTheme } from '../ChartUtils';

/**
 * See https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/index.d.ts
 * and https://github.com/FormidableLabs/victory/blob/master/packages/victory-bar/src/index.d.ts
 */
export interface ChartBarProps extends VictoryBarProps {
  /**
   * The alignment prop specifies how bars should be aligned relative to their data points.
   * This prop may be given as “start”, “middle” or “end”. When this prop is not specified,
   * bars will have “middle” alignment relative to their data points.
   */
  alignment?: VictoryBarAlignmentType;
  /**
   * The animate prop specifies props for VictoryAnimation to use.
   * The animate prop should also be used to specify enter and exit
   * transition configurations with the `onExit` and `onEnter` namespaces respectively.
   *
   * @example
   * {duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}
   */
  animate?: boolean | AnimatePropTypeInterface;
  /**
   * The barRatio prop specifies an approximate ratio between bar widths and spaces between bars.
   * When width is not specified via the barWidth prop or in bar styles, the barRatio prop will
   * be used to calculate a default width for each bar given the total number of bars in the data series
   * and the overall width of the chart.
   */
  barRatio?: number;
  /**
   * The barWidth prop is used to specify the width of each bar. This prop may be given as
   * a number of pixels or as a function that returns a number. When this prop is given as
   * a function, it will be evaluated with the arguments datum, and active. When this value
   * is not given, a default value will be calculated based on the overall dimensions of
   * the chart, and the number of bars.
   */
  barWidth?: NumberOrCallback;
  /**
   * The categories prop specifies how categorical data for a chart should be ordered.
   * This prop should be given as an array of string values, or an object with
   * these arrays of values specified for x and y. If this prop is not set,
   * categorical data will be plotted in the order it was given in the data array
   *
   * @example ["dogs", "cats", "mice"]
   */
  categories?: CategoryPropType;
  /**
   * The containerComponent prop takes an entire component which will be used to
   * create a container element for standalone charts.
   * The new element created from the passed containerComponent wil be provided with
   * these props from ChartBar: height, width, children
   * (the chart itself) and style. Props that are not provided by the
   * child chart component include title and desc, both of which
   * are intended to add accessibility to Victory components. The more descriptive these props
   * are, the more accessible your data will be for people using screen readers.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a dataComponent is
   * not provided, ChartBar will use the default ChartContainer component.
   *
   * @example <ChartContainer title="Chart of Dog Breeds" desc="This chart shows..." />
   */
  containerComponent?: React.ReactElement<any>;
  /**
   * The cornerRadius prop specifies a radius to apply to each bar.
   * If this prop is given as a single number, the radius will only be applied to the top of each bar.
   * When this prop is given as a function, it will be evaluated with the arguments datum, and active.
   */
  cornerRadius?:
    | NumberOrCallback
    | {
        top?: number | (NumberOrCallback);
        topLeft?: number | (NumberOrCallback);
        topRight?: number | (NumberOrCallback);
        bottom?: number | (NumberOrCallback);
        bottomLeft?: number | (NumberOrCallback);
        bottomRight?: number | (NumberOrCallback);
      };
  /**
   * The data prop specifies the data to be plotted. Data should be in the form of an array
   * of data points, or an array of arrays of data points for multiple datasets.
   * Each data point may be any format you wish (depending on the `x` and `y` accessor props),
   * but by default, an object with x and y properties is expected.
   *
   * @example [{x: 1, y: 2}, {x: 2, y: 3}], [[1, 2], [2, 3]],
   * [[{x: "a", y: 1}, {x: "b", y: 2}], [{x: "a", y: 2}, {x: "b", y: 3}]]
   */
  data?: any[];
  /**
   * The dataComponent prop takes an entire component which will be used to create a bar.
   * The new element created from the passed dataComponent will be provided with the
   * following properties calculated by ChartBar: a scale, style, events, interpolation,
   * and an array of modified data objects (including x, y, and calculated y0 and y1).
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a dataComponent is
   * not provided, ChartBar will use its default Bar component.
   */
  dataComponent?: React.ReactElement<any>;
  /**
   * The domain prop describes the range of values your chart will cover. This prop can be
   * given as a array of the minimum and maximum expected values for your bar chart,
   * or as an object that specifies separate arrays for x and y.
   * If this prop is not provided, a domain will be calculated from data, or other
   * available information.
   *
   * @example [-1, 1], {x: [0, 100], y: [0, 1]}
   */
  domain?: DomainPropType;
  /**
   * The domainPadding prop specifies a number of pixels of padding to add to the
   * beginning and end of a domain. This prop is useful for explicitly spacing ticks farther
   * from the origin to prevent crowding. This prop should be given as an object with
   * numbers specified for x and y.
   */
  domainPadding?: DomainPaddingPropType;
  /**
   * Similar to data accessor props `x` and `y`, this prop may be used to functionally
   * assign eventKeys to data
   */
  eventKey?: StringOrNumberOrCallback;
  /**
   * The event prop take an array of event objects. Event objects are composed of
   * a target, an eventKey, and eventHandlers. Targets may be any valid style namespace
   * for a given component, so "data" and "labels" are all valid targets for VictoryBar events.
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
   * @example
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
  events?: EventPropTypeInterface<VictoryBarTTargetType, number | string | number[] | string[]>[];
  /**
   * ChartBar uses the standard externalEventMutations prop.
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
   * The labelComponent prop takes in an entire label component which will be used
   * to create a label for the bar. The new element created from the passed labelComponent
   * will be supplied with the following properties: x, y, index, data, verticalAnchor,
   * textAnchor, angle, style, text, and events. any of these props may be overridden
   * by passing in props to the supplied component, or modified or ignored within
   * the custom component itself. If labelComponent is omitted, a new ChartLabel
   * will be created with props described above. This labelComponent prop should be used to
   * provide a series label for ChartBar. If individual labels are required for each
   * data point, they should be created by composing ChartBar with VictoryScatter
   */
  labelComponent?: React.ReactElement<any>;
  /**
   * The labels prop defines labels that will appear above each bar in your chart.
   * This prop should be given as an array of values or as a function of data.
   * If given as an array, the number of elements in the array should be equal to
   * the length of the data array. Labels may also be added directly to the data object
   * like data={[{x: 1, y: 1, label: "first"}]}.
   *
   * @example ["spring", "summer", "fall", "winter"], (datum) => datum.title
   */
  labels?: string[] | number[] | ((data: any) => string | number | null);
  /**
   * The maxDomain prop defines a maximum domain value for a chart. This prop is useful in situations where the maximum
   * domain of a chart is static, while the minimum value depends on data or other variable information. If the domain
   * prop is set in addition to maximumDomain, domain will be used.
   *
   * note: The x value supplied to the maxDomain prop refers to the independent variable, and the y value refers to the
   * dependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to
   * the y axis.
   *
   * examples:
   *
   * maxDomain={0}
   * maxDomain={{ y: 0 }}
   */
  maxDomain?: number | { x?: number; y?: number };
  /**
   * The minDomain prop defines a minimum domain value for a chart. This prop is useful in situations where the minimum
   * domain of a chart is static, while the maximum value depends on data or other variable information. If the domain
   * prop is set in addition to minimumDomain, domain will be used.
   *
   * note: The x value supplied to the minDomain prop refers to the independent variable, and the y value refers to the
   * dependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to
   * the y axis.
   *
   * examples:
   *
   * minDomain={0}
   * minDomain={{ y: 0 }}
   */
  minDomain?: number | { x?: number; y?: number };
  /**
   * The name prop is used to reference a component instance when defining shared events.
   */
  name?: string;
  /**
   * Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.
   *
   * **This prop should not be set manually.**
   */
  origin?: OriginType;
  /**
   * The padding props specifies the amount of padding in number of pixels between
   * the edge of the chart and any rendered child components. This prop can be given
   * as a number or as an object with padding specified for top, bottom, left
   * and right.
   */
  padding?: PaddingProps;
  /**
   * Victory components can pass a boolean polar prop to specify whether a label is part of a polar chart.
   *
   * **This prop should not be set manually.**
   */
  polar?: boolean;
  /**
   * The range prop describes the dimensions over which data may be plotted. For cartesian coordinate systems, this
   * corresponds to minimum and maximum svg coordinates in the x and y dimension. In polar coordinate systems this
   * corresponds to a range of angles and radii. When this value is not given it will be calculated from the width,
   * height, and padding, or from the startAngle and endAngle in the case of polar charts. All components in a given
   * chart must share the same range, so setting this prop on children nested within Chart or
   * ChartGroup will have no effect. This prop is usually not set manually.
   *
   * examples:
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
   * **This prop should not be set manually.**
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
   * note: The x value supplied to the singleQuadrantDomainPadding prop refers to the independent variable, and the y
   * value refers to the dependent variable. This may cause confusion in horizontal charts, as the independent variable
   * will corresponds to the y axis.
   *
   * examples:
   *
   * singleQuadrantDomainPadding={false}
   * singleQuadrantDomainPadding={{ x: false }}
   */
  singleQuadrantDomainPadding?: boolean | { x?: boolean; y?: boolean };
  /**
   * Use the sortKey prop to indicate how data should be sorted. This prop
   * is given directly to the lodash sortBy function to be executed on the
   * final dataset.
   */
  sortKey?: DataGetterPropType;
  /**
   * The sortOrder prop specifies whether sorted data should be returned in 'ascending' or 'descending' order.
   */
  sortOrder?: SortOrderPropType;
  /**
   * The standalone prop determines whether the component will render a standalone svg
   * or a <g> tag that will be included in an external svg. Set standalone to false to
   * compose ChartBar with other components within an enclosing <svg> tag.
   */
  standalone?: boolean;
  /**
   * The style prop specifies styles for your ChartBar. Any valid inline style properties
   * will be applied. Height, width, and padding should be specified via the height,
   * width, and padding props, as they are used to calculate the alignment of
   * components within chart.
   *
   * @example {data: {fill: "red"}, labels: {fontSize: 12}}
   */
  style?: VictoryStyleInterface;
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartBar as a solo component, implement the theme directly on
   * ChartBar. If you are wrapping ChartBar in ChartChart or ChartGroup,
   * please call the theme on the outermost wrapper component instead.
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
   * Specifies the theme variant. Valid values are 'dark' or 'light'
   *
   * Note: Not compatible with theme prop
   *
   * @example themeVariant={ChartThemeVariant.light}
   */
  themeVariant?: string;
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
   * @example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)
   */
  y?: DataGetterPropType;
  /**
   * Use y0 data accessor prop to determine how the component defines the baseline y0 data.
   * This prop is useful for defining custom baselines for components like ChartBar.
   * This prop may be given in a variety of formats.
   *
   * @example 'last_quarter_profit', () => 10, 1, 'employees.salary', ["employees", "salary"]
   */
  y0?: DataGetterPropType;
}

export const ChartBar: React.FunctionComponent<ChartBarProps> = ({
  containerComponent = <ChartContainer />,
  themeColor,
  themeVariant,

  // destructure last
  theme = getTheme(themeColor, themeVariant),
  ...rest
}: ChartBarProps) => {
  // Clone so users can override container props
  const container = React.cloneElement(containerComponent, {
    theme,
    ...containerComponent.props
  });

  // Note: containerComponent is required for theme
  return <VictoryBar containerComponent={container} theme={theme} {...rest} />;
};

// Note: VictoryBar.getDomain & VictoryBar.role must be hoisted
hoistNonReactStatics(ChartBar, VictoryBar);
