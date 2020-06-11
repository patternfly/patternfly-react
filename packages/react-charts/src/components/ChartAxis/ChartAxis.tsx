import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {
  AnimatePropTypeInterface,
  D3Scale,
  DomainPaddingPropType,
  DomainPropType,
  EventCallbackInterface,
  EventPropTypeInterface,
  OrientationTypes,
  PaddingProps,
  RangePropType,
  ScalePropType,
  StringOrNumberOrList,
  TickLabelProps
} from 'victory-core';
import { VictoryAxis, VictoryAxisProps, VictoryAxisTTargetType } from 'victory-axis';
import { ChartContainer } from '../ChartContainer';
import { ChartThemeDefinition } from '../ChartTheme';
import { getAxisTheme, getTheme } from '../ChartUtils';

/**
 * See https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/index.d.ts
 * and https://github.com/FormidableLabs/victory/blob/master/packages/victory-axis/src/index.d.ts
 */
export interface ChartAxisProps extends VictoryAxisProps {
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
   * The axisComponent prop takes in an entire component which will be used
   * to create the axis line. The new element created from the passed axisComponent
   * will be supplied with the following properties: x1, y1, x2, y2, style and events.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If an axisComponent
   * is not supplied, ChartAxis will render its default AxisLine component.
   */
  axisComponent?: React.ReactElement<any>;
  /**
   * The axisLabelComponent prop takes in an entire component which will be used
   * to create the axis label. The new element created from the passed axisLabelComponent
   * will be supplied with the following properties: x, y, verticalAnchor, textAnchor,
   * angle, transform, style and events. Any of these props may be overridden by
   * passing in props to the supplied component, or modified or ignored within
   * the custom component itself. If an axisLabelComponent is not supplied, a new
   * ChartLabel will be created with props described above
   */
  axisLabelComponent?: React.ReactElement<any>;
  /**
   * The axisValue prop may be used instead of axisAngle to position the dependent axis. Ths prop is useful when
   * dependent axes should line up with values on the independent axis.
   */
  axisValue?: number | string | object | Date;
  /**
   * The containerComponent prop takes an entire component which will be used to
   * create a container element for standalone charts.
   * The new element created from the passed containerComponent wil be provided with
   * these props from ChartAxis: height, width, children
   * (the chart itself) and style. Props that are not provided by the
   * child chart component include title and desc, both of which
   * are intended to add accessibility to Victory components. The more descriptive these props
   * are, the more accessible your data will be for people using screen readers.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a dataComponent is
   * not provided, ChartAxis will use the default ChartContainer component.
   *
   * @example <ChartContainer title="Chart of Dog Breeds" desc="This chart shows ..." />
   */
  containerComponent?: React.ReactElement<any>;
  /**
   * This prop specifies whether a given axis is intended to cross another axis.
   */
  crossAxis?: boolean;
  /**
   * The dependentAxis prop specifies whether the axis corresponds to the
   * dependent variable (usually y). This prop is useful when composing axis
   * with other components to form a chart.
   */
  dependentAxis?: boolean;
  /**
   * The domain prop describes the range of values your axis will include. This prop should be
   * given as a array of the minimum and maximum expected values for your axis.
   * If this value is not given it will be calculated based on the scale or tickValues.
   *
   * @example [-1, 1]
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
   * The event prop take an array of event objects. Event objects are composed of
   * a target, an eventKey, and eventHandlers. Targets may be any valid style namespace
   * for a given component, so "axis", "axisLabel", "ticks", "tickLabels", and "grid" are
   * all valid targets for ChartAxis events. The eventKey may optionally be used to select a
   * single element by index rather than an entire set. The eventHandlers object
   * should be given as an object whose keys are standard event names (i.e. onClick)
   * and whose values are event callbacks. The return value of an event handler
   * be used to modify other elemnts. The return value should be given as an object or
   * an array of objects with optional target and eventKey keys, and a mutation
   * key whose value is a function. The target and eventKey keys will default to those
   * corresponding to the element the event handler was attached to. The mutation
   * function will be called with the calculated props for the individual selected
   * element (i.e. a single tick), and the object returned from the mutation function
   * will override the props of the selected element via object assignment.
   *
   * @example
   * events={[
   *   {
   *     target: "grid",
   *     eventKey: 2,
   *     eventHandlers: {
   *       onClick: () => {
   *         return [
   *           {
   *             mutation: (props) => {
   *               return {style: merge({}, props.style, {stroke: "orange"})};
   *             }
   *           }, {
   *             target: "tickLabels",
   *             mutation: () => {
   *               return {text: "hey"};
   *             }
   *           }
   *         ];
   *       }
   *     }
   *   }
   * ]}
   */
  events?: EventPropTypeInterface<VictoryAxisTTargetType, number | string>[];
  /**
   * ChartAxis uses the standard externalEventMutations prop.
   */
  externalEventMutations?: EventCallbackInterface<string | string[], StringOrNumberOrList>[];
  /**
   * When true, this prop reduces the number of tick labels to fit the length of the axis.
   * Labels are removed at approximately even intervals from the original array of labels.
   * This feature only works well for labels that are approximately evenly spaced.
   */
  fixLabelOverlap?: boolean;
  /**
   * The gridComponent prop takes in an entire component which will be used
   * to create grid lines. The new element created from the passed gridComponent
   * will be supplied with the following properties: x1, y1, x2, y2, tick, style and events.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a gridComponent
   * is not supplied, ChartAxis will render its default GridLine component.
   */
  gridComponent?: React.ReactElement<any>;
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
   */
  height?: number;
  /**
   * If true, this value will flip the domain of a given axis.
   */
  invertAxis?: boolean;
  /**
   * The label prop defines the label that will appear along the axis. This
   * prop should be given as a value or an entire, HTML-complete label
   * component. If a label component is given, it will be cloned. The new
   * element's properties x, y, textAnchor, verticalAnchor, and transform
   * will have defaults provided by the axis; styles filled out with
   * defaults provided by the axis, and overrides from the label component.
   * If a value is given, a new ChartLabel will be created with props and
   * styles from the axis.
   */
  label?: any;
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
   * ChartAxis uses the standard name prop
   */
  name?: string;
  /**
   * This value describes how far from the "edge" of its permitted area each axis
   * will be set back in the x-direction.  If this prop is not given,
   * the offset is calculated based on font size, axis orientation, and label padding.
   */
  offsetX?: number;
  /**
   * This value describes how far from the "edge" of its permitted area each axis
   * will be set back in the y-direction.  If this prop is not given,
   * the offset is calculated based on font size, axis orientation, and label padding.
   */
  offsetY?: number;
  /**
   * The orientation prop specifies the position and orientation of your axis.
   * Valid values are 'top', 'bottom', 'left' and 'right'.
   */
  orientation?: OrientationTypes;
  /**
   * The padding props specifies the amount of padding in number of pixels between
   * the edge of the chart and any rendered child components. This prop can be given
   * as a number or as an object with padding specified for top, bottom, left
   * and right.
   */
  padding?: PaddingProps;
  /**
   * The range prop describes the dimensions over which data may be plotted. For cartesian coordinate systems, this
   * corresponds to minimum and maximum svg coordinates in the x and y dimension. In polar coordinate systems this
   * corresponds to a range of angles and radii. When this value is not given it will be calculated from the width,
   * height, and padding, or from the startAngle and endAngle in the case of polar charts. All components in a given
   * chart must share the same range, so setting this prop on children nested within Chart, ChartStack, or
   * ChartGroup will have no effect. This prop is usually not set manually.
   *
   * examples:
   *
   * Cartesian: range={{ x: [50, 250], y: [50, 250] }}
   * Polar: range={{ x: [0, 360], y: [0, 250] }}
   */
  range?: RangePropType;
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
   * Show axis grid and ticks
   */
  showGrid?: boolean;
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
   * The standalone prop determines whether the component will render a standalone svg
   * or a <g> tag that will be included in an external svg. Set standalone to false to
   * compose ChartAxis with other components within an enclosing <svg> tag.
   */
  standalone?: boolean;
  /**
   * The style prop defines the style of the component. The style prop should be given as an object
   * with styles defined for parent, axis, axisLabel, grid, ticks, and tickLabels. Any valid svg
   * styles are supported, but width, height, and padding should be specified via props as they
   * determine relative layout for components in Chart. Functional styles may be defined for
   * grid, tick, and tickLabel style properties, and they will be evaluated with each tick.
   *
   * note: When a component is rendered as a child of another Victory component, or within a custom
   * <svg> element with standalone={false} parent styles will be applied to the enclosing <g> tag.
   * Many styles that can be applied to a parent <svg> will not be expressed when applied to a <g>.
   *
   * note: custom angle and verticalAnchor properties may be included in labels styles.
   */
  style?: {
    parent?: {
      [K in keyof React.CSSProperties]: string | number | ((tick?: any) => string | number);
    };
    axis?: {
      [K in keyof React.CSSProperties]: string | number | ((tick?: any) => string | number);
    };
    axisLabel?: {
      [K in keyof React.CSSProperties]: string | number | ((tick?: any) => string | number);
    };
    grid?: {
      [K in keyof React.CSSProperties]: string | number | ((tick?: any) => string | number);
    };
    ticks?: {
      [K in keyof React.CSSProperties]: string | number | ((tick?: any) => string | number);
    };
    tickLabels?: {
      [K in keyof TickLabelProps]: string | number | ((tick?: any) => string | number);
    };
  };
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartAxis as a solo component, implement the theme directly on
   * ChartAxis. If you are wrapping ChartAxis in ChartChart or ChartGroup,
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
   * The tickComponent prop takes in an entire component which will be used
   * to create tick lines. The new element created from the passed tickComponent
   * will be supplied with the following properties: x1, y1, x2, y2, tick, style and events.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a tickComponent
   * is not supplied, ChartAxis will render its default Tick component.
   */
  tickComponent?: React.ReactElement<any>;
  /**
   * The tickCount prop specifies approximately how many ticks should be drawn on the axis if
   * tickValues are not explicitly provided. This value is calculated by d3 scale and
   * prioritizes returning "nice" values and evenly spaced ticks over an exact number of ticks.
   * If you need an exact number of ticks, please specify them via the tickValues prop.
   * This prop must have a value greater than zero.
   */
  tickCount?: number;
  /**
   * The tickFormat prop specifies how tick values should be expressed visually.
   * tickFormat can be given as a function to be applied to every tickValue, or as
   * an array of display values for each tickValue.
   *
   * @example d3.time.format("%Y"), (x) => x.toPrecision(2), ["first", "second", "third"]
   */
  tickFormat?: any[] | ((tick: any, index: number, ticks: any[]) => string | number);
  /**
   * The tickLabelComponent prop takes in an entire component which will be used
   * to create the tick labels. The new element created from the passed tickLabelComponent
   * will be supplied with the following properties: x, y, verticalAnchor, textAnchor,
   * angle, tick, style and events. Any of these props may be overridden by
   * passing in props to the supplied component, or modified or ignored within
   * the custom component itself. If an tickLabelComponent is not supplied, a new
   * ChartLabel will be created with props described above
   */
  tickLabelComponent?: React.ReactElement<any>;
  /**
   * The tickValues prop explicitly specifies which tick values to draw on the axis.
   *
   * @example ["apples", "bananas", "oranges"], [2, 4, 6, 8]
   */
  tickValues?: any[];
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
}

export const ChartAxis: React.FunctionComponent<ChartAxisProps> = ({
  containerComponent = <ChartContainer />,
  showGrid = false,
  themeColor,
  themeVariant,

  // destructure last
  theme = getTheme(themeColor, themeVariant),
  ...rest
}: ChartAxisProps) => {
  // Clone so users can override container props
  const container = React.cloneElement(containerComponent, {
    theme,
    ...containerComponent.props
  });

  // Note: containerComponent is required for theme
  return (
    <VictoryAxis
      containerComponent={container}
      theme={showGrid ? getAxisTheme(themeColor, themeVariant) : theme}
      {...rest}
    />
  );
};

hoistNonReactStatics(ChartAxis, VictoryAxis);
