import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

/* eslint-disable camelcase */
import chart_legend_Margin from '@patternfly/react-tokens/dist/esm/chart_legend_Margin';

import {
  AnimatePropTypeInterface,
  D3Scale,
  DomainPropType,
  DomainPaddingPropType,
  EventCallbackInterface,
  EventPropTypeInterface,
  PaddingProps,
  RangePropType,
  ScalePropType,
  StringOrNumberOrCallback,
  StringOrNumberOrList,
  VictoryStyleInterface,
  VictoryStyleObject
} from 'victory-core';
import { AxesType, VictoryChart, VictoryChartProps } from 'victory-chart';
import { ChartContainer } from '../ChartContainer';
import { ChartLegend, ChartLegendOrientation, ChartLegendPosition } from '../ChartLegend';
import { ChartCommonStyles, ChartThemeDefinition } from '../ChartTheme';
import {
  getChartTheme,
  getClassName,
  getComputedLegend,
  getLabelTextSize,
  getPaddingForSide,
  getPatternDefs,
  getDefaultData,
  useDefaultPatternProps
} from '../ChartUtils';

/**
 * Chart is a wrapper component that reconciles the domain for all its children, controls the layout of the chart,
 * and coordinates animations and shared events.
 *
 * See https://github.com/FormidableLabs/victory/blob/main/packages/victory-chart/src/victory-chart.tsx
 */
export interface ChartProps extends VictoryChartProps {
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
   * The backgroundComponent prop takes a component instance which will be responsible for rendering a background if the
   * Chart's style component includes background styles. The new element created from the passed backgroundComponent
   * will be provided with the following properties calculated by Chart: height, polar, scale, style, x, y, width.
   * All of these props on Background should take prececence over what VictoryChart is trying to set.
   */
  backgroundComponent?: React.ReactElement;
  /**
   * The children to render with the chart
   */
  children?: React.ReactNode | React.ReactNode[];
  /**
   * The containerComponent prop takes an entire component which will be used to
   * create a container element for standalone charts.
   * The new element created from the passed containerComponent wil be provided with
   * these props from ChartArea: height, width, children
   * (the chart itself) and style. Props that are not provided by the
   * child chart component include title and desc, both of which
   * are intended to add accessibility to Victory components. The more descriptive these props
   * are, the more accessible your data will be for people using screen readers.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a dataComponent is
   * not provided, ChartArea will use the default ChartContainer component.
   *
   * @example <ChartContainer title="Chart of Dog Breeds" desc="This chart shows ..." />
   */
  containerComponent?: React.ReactElement<any>;
  /**
   * Note: This prop should not be set manually.
   *
   * @private
   * @hide
   */
  defaultAxes?: AxesType;
  /**
   * Note: This prop should not be set manually.
   *
   * @private
   * @hide
   */
  defaultPolarAxes?: AxesType;
  /**
   * The domain prop describes the range of values your chart will include. This prop can be
   * given as a array of the minimum and maximum expected values for your chart,
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
   * The endAngle props defines the overall end angle of a polar chart in degrees. This prop is used in conjunction with
   * startAngle to create polar chart that spans only a segment of a circle, or to change overall rotation of the chart.
   * This prop should be given as a number of degrees. Degrees are defined as starting at the 3 o'clock position, and
   * proceeding counterclockwise.
   */
  endAngle?: number;
  /**
   * Similar to data accessor props `x` and `y`, this prop may be used to functionally
   * assign eventKeys to data
   *
   * @propType number | string | Function
   */
  eventKey?: StringOrNumberOrCallback;
  /**
   * The event prop takes an array of event objects. Event objects are composed of
   * a target, an eventKey, and eventHandlers. Targets may be any valid style namespace
   * for a given component, so "data" and "labels" are all valid targets for ChartPie
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
   *
   * @propType object[]
   * @example
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
  events?: EventPropTypeInterface<string, string[] | number[] | string | number>[];
  /**
   * Chart uses the standard externalEventMutations prop.
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
   * The hasPatterns prop is an optional prop that indicates whether a pattern is shown for a chart.
   * SVG patterns are dynamically generated (unique to each chart) in order to apply colors from the selected
   * color theme or custom color scale. Those generated patterns are applied in a specific order (via a URL), similar
   * to the color theme ordering defined by PatternFly. If the multi-color theme was in use; for example, colorized
   * patterns would be displayed in that same order. Create custom patterns via the patternScale prop.
   *
   * Note: Not all components are supported; for example, ChartLine, ChartBullet, ChartThreshold, etc.
   *
   * @example hasPatterns={ true }
   * @example hasPatterns={[ true, true, false ]}
   * @beta
   */
  hasPatterns?: boolean | boolean[];
  /**
   * Specifies the height the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set
   * to the same width in order to maintain the aspect ratio.
   */
  height?: number;
  /**
   * The horizontal prop determines whether data will be plotted horizontally. When this prop is set to true, the
   * independent variable will be plotted on the y axis and the dependent variable will be plotted on the x axis.
   */
  horizontal?: boolean;
  /**
   * When the innerRadius prop is set, polar charts will be hollow rather than circular.
   *
   * @propType number | Function
   */
  innerRadius?: number;
  /**
   * Allows legend items to wrap. A value of true allows the legend to wrap onto the next line
   * if its container is not wide enough.
   *
   * Note: This is overridden by the legendItemsPerRow property
   */
  legendAllowWrap?: boolean;
  /**
   * The legend component to render with chart.
   *
   * Note: Use legendData so the legend width can be calculated and positioned properly.
   * Default legend properties may be applied
   */
  legendComponent?: React.ReactElement<any>;
  /**
   * Specify data via the data prop. ChartLegend expects data as an
   * array of objects with name (required), symbol, and labels properties.
   * The data prop must be given as an array.
   *
   * @example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}
   */
  legendData?: {
    name?: string;
    symbol?: {
      fill?: string;
      type?: string;
    };
  }[];
  /**
   * The orientation prop takes a string that defines whether legend data
   * are displayed in a row or column. When orientation is "horizontal",
   * legend items will be displayed in a single row. When orientation is
   * "vertical", legend items will be displayed in a single column. Line
   * and text-wrapping is not currently supported, so "vertical"
   * orientation is both the default setting and recommended for
   * displaying many series of data.
   */
  legendOrientation?: 'horizontal' | 'vertical';
  /**
   * The legend position relation to the chart. Valid values are 'bottom', 'bottom-left', and 'right'
   *
   * Note: When adding a legend, padding may need to be adjusted in order to accommodate the extra legend. In some
   * cases, the legend may not be visible until enough padding is applied.
   */
  legendPosition?: 'bottom' | 'bottom-left' | 'right';
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
   * The name prop is typically used to reference a component instance when defining shared events. However, this
   * optional prop may also be applied to child elements as an ID prefix. This is a workaround to ensure Victory
   * based components output unique IDs when multiple charts appear in a page.
   */
  name?: string;
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
   * The patternScale prop is an optional prop that defines patterns to apply, where applicable. This prop should be
   * given as a string array of pattern URLs. Patterns will be assigned to children by index and will repeat when there
   * are more children than patterns in the provided patternScale. Use null to omit the pattern for a given index.
   *
   * Note: Not all components are supported; for example, ChartLine, ChartBullet, ChartThreshold, etc.
   *
   * @example patternScale={[ 'url("#pattern1")', 'url("#pattern2")', null ]}
   * @beta
   */
  patternScale?: string[];
  /**
   * Note: This prop should not be set manually.
   *
   * @private
   * @hide
   */
  prependDefaultAxes?: boolean;
  /**
   * Victory components can pass a boolean polar prop to specify whether a label is part of a polar chart.
   */
  polar?: boolean;
  /**
   * The range prop describes the dimensions over which data may be plotted. For cartesian coordinate systems, this
   * corresponds to minimum and maximum svg coordinates in the x and y dimension. In polar coordinate systems this
   * corresponds to a range of angles and radii. When this value is not given it will be calculated from the width,
   * height, and padding, or from the startAngle and endAngle in the case of polar charts. All components in a given
   * chart must share the same range, so setting this prop on children nested within Chart, ChartStack, or
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
   * Convenience prop to hide both x and y axis, which are shown by default. Alternatively, the axis can be hidden via
   * chart styles.
   */
  showAxis?: boolean;
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
   * The standalone prop determines whether the component will render a standalone svg
   * or a <g> tag that will be included in an external svg. Set standalone to false to
   * compose Chart with other components within an enclosing <svg> tag.
   */
  standalone?: boolean;
  /**
   * The startAngle props defines the overall start angle of a polar chart in degrees. This prop is used in conjunction
   * with endAngle to create polar chart that spans only a segment of a circle, or to change overall rotation of the
   * chart. This prop should be given as a number of degrees. Degrees are defined as starting at the 3 o'clock position,
   * and proceeding counterclockwise.
   */
  startAngle?: number;
  /**
   * The style prop defines the style of the component. The style prop should be given as an object with styles defined
   * for data, labels and parent. Any valid svg styles are supported, but width, height, and padding should be specified
   * via props as they determine relative layout for components in Chart.
   *
   * @propType { parent: object, background: object }
   * @propType { parent: object, background: object }
   */
  style?: Pick<VictoryStyleInterface, 'parent'> & { background?: VictoryStyleObject };
  /**
   * The theme prop specifies a theme to use for determining styles and layout properties for a component. Any styles or
   * props defined in theme may be overwritten by props specified on the component instance.
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
   * Specifies the theme variant. Valid values are 'dark' or 'light'
   *
   * Note: Not compatible with theme prop
   *
   * @deprecated Use PatternFly's pf-theme-dark CSS selector
   */
  themeVariant?: string;
  /**
   * Specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set
   * to the same width in order to maintain the aspect ratio.
   */
  width?: number;
}

export const Chart: React.FunctionComponent<ChartProps> = ({
  ariaDesc,
  ariaTitle,
  children,
  colorScale,
  hasPatterns,
  legendAllowWrap = false,
  legendComponent = <ChartLegend />,
  legendData,
  legendPosition = ChartCommonStyles.legend.position as ChartLegendPosition,
  name,
  padding,
  patternScale,
  showAxis = true,
  themeColor,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  themeVariant,

  // destructure last
  theme = getChartTheme(themeColor, showAxis),
  containerComponent = <ChartContainer />,
  legendOrientation = theme.legend.orientation as ChartLegendOrientation,
  height = theme.chart.height,
  width = theme.chart.width,
  ...rest
}: ChartProps) => {
  const defaultPadding = {
    bottom: getPaddingForSide('bottom', padding, theme.chart.padding),
    left: getPaddingForSide('left', padding, theme.chart.padding),
    right: getPaddingForSide('right', padding, theme.chart.padding),
    top: getPaddingForSide('top', padding, theme.chart.padding)
  };

  const { defaultColorScale, defaultPatternScale, isPatternDefs, patternId } = useDefaultPatternProps({
    colorScale,
    patternScale,
    hasPatterns,
    themeColorScale: theme.chart.colorScale as string[]
  });

  // Add pattern props for legend tooltip
  let labelComponent;
  if (
    containerComponent.props.labelComponent &&
    containerComponent.props.labelComponent.type.displayName === 'ChartLegendTooltip'
  ) {
    labelComponent = React.cloneElement(containerComponent.props.labelComponent, {
      theme,
      ...(defaultPatternScale && { patternScale: defaultPatternScale }),
      ...containerComponent.props.labelComponent.props
    });
  }

  // Clone so users can override container props
  const container = React.cloneElement(containerComponent, {
    desc: ariaDesc,
    title: ariaTitle,
    theme,
    ...containerComponent.props,
    className: getClassName({ className: containerComponent.props.className }), // Override VictoryContainer class name
    ...(labelComponent && { labelComponent }) // Override label component props
  });

  const legend = React.cloneElement(legendComponent, {
    data: legendData,
    ...(name && { name: `${name}-${(legendComponent as any).type.displayName}` }),
    orientation: legendOrientation,
    theme,
    ...legendComponent.props
  });

  // Returns a computed legend
  const getLegend = () => {
    if (!legend.props.data) {
      return null;
    }
    let dx = 0;
    let dy = 0;
    let xAxisLabelHeight = 0;
    let legendTitleHeight = legend.props.title ? 10 : 0;

    // Adjust for axis label
    React.Children.toArray(children).map((child: any) => {
      if (child.type.role === 'axis' && child.props.label && !child.props.dependentAxis) {
        xAxisLabelHeight = getLabelTextSize({ text: child.props.label, theme }).height + 10;
        legendTitleHeight = 0;
      }
    });

    if (legendPosition === ChartLegendPosition.bottom) {
      dy += xAxisLabelHeight + legendTitleHeight;
    } else if (legendPosition === ChartLegendPosition.bottomLeft) {
      dy += xAxisLabelHeight + legendTitleHeight;
      dx = -10;
    }

    // Adjust legend position when axis is hidden
    if (!showAxis) {
      dy -= chart_legend_Margin.value;
    }

    return getComputedLegend({
      allowWrap: legendAllowWrap,
      chartType: 'chart',
      colorScale,
      dx,
      dy,
      height,
      legendComponent: legend,
      padding: defaultPadding,
      position: legendPosition,
      theme,
      width,
      ...(defaultPatternScale && { patternScale: defaultPatternScale })
    });
  };

  // Render children
  const renderChildren = () =>
    React.Children.toArray(children).map((child, index) => {
      if (React.isValidElement(child)) {
        const { ...childProps } = child.props;
        return React.cloneElement(child, {
          colorScale,
          ...(defaultPatternScale && { patternScale: defaultPatternScale }),
          ...(name &&
            typeof (child as any).name !== undefined && {
              name: `${name}-${(child as any).type.displayName}-${index}`
            }),
          theme,
          ...childProps,
          ...((child as any).type.displayName === 'ChartPie' && {
            data: getDefaultData(childProps.data, defaultPatternScale)
          }) // Override child props
        });
      }
      return child;
    });

  // Note: containerComponent is required for theme
  return (
    <VictoryChart
      colorScale={colorScale}
      containerComponent={container}
      height={height}
      padding={defaultPadding}
      theme={theme}
      width={width}
      {...rest}
    >
      {renderChildren()}
      {getLegend()}
      {isPatternDefs && getPatternDefs({ patternId, colorScale: defaultColorScale })}
    </VictoryChart>
  );
};
Chart.displayName = 'Chart';

hoistNonReactStatics(Chart, VictoryChart);
