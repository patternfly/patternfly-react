import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {
  AnimatePropTypeInterface,
  CategoryPropType,
  DataGetterPropType,
  EventCallbackInterface,
  EventPropTypeInterface,
  Helpers,
  NumberOrCallback,
  OriginType,
  PaddingProps,
  SliceNumberOrCallback,
  SortOrderPropType,
  StringOrNumberOrCallback,
  StringOrNumberOrList,
  VictoryStyleInterface
} from 'victory-core';
import {
  SliceProps,
  VictoryPie,
  VictoryPieProps,
  VictorySliceLabelPositionType,
  VictorySliceTTargetType
} from 'victory-pie';
import { ChartContainer } from '../ChartContainer';
import { ChartLegend, ChartLegendOrientation } from '../ChartLegend';
import { ChartCommonStyles, ChartThemeDefinition } from '../ChartTheme';
import { ChartTooltip } from '../ChartTooltip';
import { getComputedLegend, useDefaultPatternProps, getPaddingForSide, getPatternDefs, getTheme } from '../ChartUtils';

export enum ChartPieLabelPosition {
  centroid = 'centroid',
  endAngle = 'endAngle',
  startAngle = 'startAngle'
}

export enum ChartPieLegendPosition {
  bottom = 'bottom',
  right = 'right'
}

export enum ChartPieSortOrder {
  ascending = 'ascending',
  descending = 'descending'
}

/**
 * ChartPie renders a dataset as a pie chart.
 *
 * See https://github.com/FormidableLabs/victory/blob/main/packages/victory-pie/src/index.d.ts
 */
export interface ChartPieProps extends VictoryPieProps {
  /**
   * Specifies the tooltip capability of the container component. A value of true allows the chart to add a
   * ChartTooltip component to the labelComponent property. This is a shortcut to display tooltips when the labels
   * property is also provided.
   */
  allowTooltip?: boolean;
  /**
   * The animate prop specifies props for VictoryAnimation to use.
   * The animate prop should also be used to specify enter and exit
   * transition configurations with the `onExit` and `onEnter` namespaces respectively.
   *
   * @propType boolean | object
   * @example
   * {duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}
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
   * The colorScale prop is an optional prop that defines the color scale the pie
   * will be created on. This prop should be given as an array of CSS colors, or as a string
   * corresponding to one of the built in color scales. ChartPie will automatically assign
   * values from this color scale to the pie slices unless colors are explicitly provided in the
   * data object
   */
  colorScale?: string[];
  /**
   * The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of
   * the chart. When this prop is set to true, tooltip pointers will still point to the correct data point, but the
   * center of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders.
   */
  constrainToVisibleArea?: boolean;
  /**
   * The containerComponent prop takes an entire component which will be used to
   * create a container element for standalone charts.
   * The new element created from the passed containerComponent wil be provided with
   * these props from ChartPie: height, width, children
   * (the chart itself) and style. Props that are not provided by the
   * child chart component include title and desc, both of which
   * are intended to add accessibility to Victory components. The more descriptive these props
   * are, the more accessible your data will be for people using screen readers.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a dataComponent is
   * not provided, ChartPie will use the default ChartContainer component.
   *
   * @example <ChartContainer title="Chart of Dog Breeds" desc="This chart shows ..." />
   */
  containerComponent?: React.ReactElement<any>;
  /**
   * Set the cornerRadius for every dataComponent (Slice by default) within ChartPie
   *
   * @propType number | Function
   */
  cornerRadius?: SliceNumberOrCallback<SliceProps, 'cornerRadius'>;
  /**
   * The data prop specifies the data to be plotted,
   * where data X-value is the slice label (string or number),
   * and Y-value is the corresponding number value represented by the slice
   * Data should be in the form of an array of data points.
   * Each data point may be any format you wish (depending on the `x` and `y` accessor props),
   * but by default, an object with x and y properties is expected.
   *
   * @example [{x: 1, y: 2}, {x: 2, y: 3}], [[1, 2], [2, 3]],
   * [[{x: "a", y: 1}, {x: "b", y: 2}], [{x: "a", y: 2}, {x: "b", y: 3}]]
   */
  data?: any[];
  /**
   * The dataComponent prop takes an entire, HTML-complete data component which will be used to
   * create slices for each datum in the pie chart. The new element created from the passed
   * dataComponent will have the property datum set by the pie chart for the point it renders;
   * properties style and pathFunction calculated by ChartPie; an index property set
   * corresponding to the location of the datum in the data provided to the pie; events bound to
   * the ChartPie; and the d3 compatible slice object.
   * If a dataComponent is not provided, ChartPie's Slice component will be used.
   */
  dataComponent?: React.ReactElement<any>;
  /**
   * The overall end angle of the pie in degrees. This prop is used in conjunction with
   * startAngle to create a pie that spans only a segment of a circle.
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
  events?: EventPropTypeInterface<VictorySliceTTargetType, StringOrNumberOrCallback | string[] | number[]>[];
  /**
   * ChartPie uses the standard externalEventMutations prop.
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
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: When adding a legend, height (the overall SVG height) may need to be larger than pieHeight (the pie size)
   * in order to accommodate the extra legend.
   *
   * By default, pieHeight is the min. of either height or width. This covers most use cases in order to accommodate
   * legends within the same SVG. However, pieHeight (not height) may need to be set in order to adjust the pie height.
   *
   * Typically, the parent container is set to the same width in order to maintain the aspect ratio.
   */
  height?: number;
  /**
   * When creating a donut chart, this prop determines the number of pixels between
   * the center of the chart and the inner edge. When this prop is set to zero
   * a regular pie chart is rendered.
   *
   * @propType number | Function
   */
  innerRadius?: NumberOrCallback;
  /**
   * The labelComponent prop takes in an entire label component which will be used
   * to create a label for the area. The new element created from the passed labelComponent
   * will be supplied with the following properties: x, y, index, data, verticalAnchor,
   * textAnchor, angle, style, text, and events. any of these props may be overridden
   * by passing in props to the supplied component, or modified or ignored within
   * the custom component itself. If labelComponent is omitted, a new ChartLabel
   * will be created with props described above. This labelComponent prop should be used to
   * provide a series label for ChartPie. If individual labels are required for each
   * data point, they should be created by composing ChartPie with VictoryScatter
   */
  labelComponent?: React.ReactElement<any>;
  /**
   * The labelPosition prop specifies the angular position of each label relative to its corresponding slice.
   * This prop should be given as "startAngle", "endAngle", "centroid", or as a function that returns one of these
   * values. When this prop is not given, the label will be positioned at the centroid of each slice.
   *
   * @propType string | Function
   */
  labelPosition?: VictorySliceLabelPositionType | ((props: SliceProps) => VictorySliceLabelPositionType);
  /**
   * The labelRadius prop defines the radius of the arc that will be used for positioning each slice label.
   * If this prop is not set, the label radius will default to the radius of the pie + label padding.
   *
   * @propType number | Function
   */
  labelRadius?: number | ((props: SliceProps) => number);
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
   * The legend position relation to the pie chart. Valid values are 'bottom' and 'right'
   *
   * Note: When adding a legend, padding may need to be adjusted in order to accommodate the extra legend. In some
   * cases, the legend may not be visible until enough padding is applied.
   */
  legendPosition?: 'bottom' | 'right';
  /**
   * The name prop is typically used to reference a component instance when defining shared events. However, this
   * optional prop may also be applied to child elements as an ID prefix. This is a workaround to ensure Victory
   * based components output unique IDs when multiple charts appear in a page.
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
   * The padAngle prop determines the amount of separation between adjacent data slices
   * in number of degrees
   *
   * @propType number | Function
   */
  padAngle?: NumberOrCallback;
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
   * Moves the given pattern index to top of scale, used to sync patterns with ChartDonutThreshold
   *
   * Note: This prop should not be set manually.
   *
   * @private
   * @hide
   */
  patternUnshiftIndex?: number;
  /**
   * Specifies the radius of the chart. If this property is not provided it is computed
   * from width, height, and padding props
   *
   * @propType number | Function
   */
  radius?: NumberOrCallback;
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
   * Use the sortKey prop to indicate how data should be sorted. This prop
   * is given directly to the lodash sortBy function to be executed on the final dataset.
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
   * compose ChartPie with other components within an enclosing <svg> tag.
   */
  standalone?: boolean;
  /**
   * The overall start angle of the pie in degrees. This prop is used in conjunction with
   * endAngle to create a pie that spans only a segment of a circle.
   */
  startAngle?: number;
  /**
   * The style prop specifies styles for your pie. ChartPie relies on Radium,
   * so valid Radium style objects should work for this prop. Height, width, and
   * padding should be specified via the height, width, and padding props.
   *
   * @propType { parent: object, data: object, labels: object }
   * @example {data: {stroke: "black"}, label: {fontSize: 10}}
   */
  style?: VictoryStyleInterface;
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartPie as a solo component, implement the theme directly on
   * ChartPie. If you are wrapping ChartPie in ChartChart or ChartGroup,
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
   * Specifies the theme variant. Valid values are 'dark' or 'light'
   *
   * Note: Not compatible with theme prop
   *
   * @deprecated Use PatternFly's pf-theme-dark CSS selector
   */
  themeVariant?: string;
  /**
   * Specifies the width of the svg viewBox of the chart container. This value should be given as a number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set
   * to the same width in order to maintain the aspect ratio.
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
}

export const ChartPie: React.FunctionComponent<ChartPieProps> = ({
  allowTooltip = true,
  ariaDesc,
  ariaTitle,
  colorScale,
  constrainToVisibleArea = false,
  containerComponent = <ChartContainer />,
  hasPatterns,
  legendAllowWrap = false,
  legendComponent = <ChartLegend />,
  legendData,
  legendPosition = ChartCommonStyles.legend.position as ChartPieLegendPosition,
  name,
  patternScale,
  patternUnshiftIndex,

  padding,
  radius,
  standalone = true,
  style,
  themeColor,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  themeVariant,

  // destructure last
  theme = getTheme(themeColor),
  labelComponent = allowTooltip ? (
    <ChartTooltip constrainToVisibleArea={constrainToVisibleArea} theme={theme} />
  ) : (
    undefined
  ),
  legendOrientation = theme.legend.orientation as ChartLegendOrientation,
  height = theme.pie.height,
  width = theme.pie.width,
  ...rest
}: ChartPieProps) => {
  const defaultPadding = {
    bottom: getPaddingForSide('bottom', padding, theme.pie.padding),
    left: getPaddingForSide('left', padding, theme.pie.padding),
    right: getPaddingForSide('right', padding, theme.pie.padding),
    top: getPaddingForSide('top', padding, theme.pie.padding)
  };

  const { defaultColorScale, defaultPatternScale, isPatternDefs, patternId } = useDefaultPatternProps({
    colorScale,
    hasPatterns,
    patternScale,
    themeColorScale: theme.pie.colorScale as string[]
  });

  // Ensure non-negative value is returned
  const getDefaultRadius = () => {
    const result = Helpers.getRadius({
      height,
      width,
      padding: defaultPadding
    });
    return result > -1 ? result : undefined;
  };
  const chartRadius = radius ? radius : getDefaultRadius();

  // Merge pattern IDs with `style.data.fill` property
  const getDefaultStyle = () => {
    if (!defaultPatternScale) {
      return style;
    }
    const _style = style ? { ...style } : {};
    _style.data = {
      fill: ({ slice }: any) => {
        const pattern = defaultPatternScale[slice.index % defaultPatternScale.length];
        return pattern ? pattern : defaultColorScale[slice.index % defaultColorScale.length];
      },
      ..._style.data
    };
    return _style;
  };

  const chart = (
    <VictoryPie
      colorScale={colorScale}
      height={height}
      key="pf-chart-pie"
      labelComponent={labelComponent}
      padding={padding}
      radius={chartRadius}
      standalone={false}
      style={getDefaultStyle()}
      theme={theme}
      width={width}
      {...rest}
    />
  );

  const legend = React.cloneElement(legendComponent, {
    colorScale,
    data: legendData,
    ...(name && { name: `${name}-${(legendComponent as any).type.displayName}` }),
    key: 'pf-chart-pie-legend',
    orientation: legendOrientation,
    theme,
    ...legendComponent.props
  });

  // Returns a computed legend
  const getLegend = () => {
    if (!legend.props.data) {
      return null;
    }
    return getComputedLegend({
      allowWrap: legendAllowWrap,
      chartType: 'pie',
      height,
      legendComponent: legend,
      padding: defaultPadding,
      position: legendPosition,
      theme,
      width,
      ...(defaultPatternScale && { patternScale: defaultPatternScale })
    });
  };

  // Clone so users can override container props
  const container = standalone
    ? React.cloneElement(
        containerComponent,
        {
          desc: ariaDesc,
          height,
          title: ariaTitle,
          width,
          theme,
          ...containerComponent.props
        },
        [
          chart,
          getLegend(),
          isPatternDefs && getPatternDefs({ patternId, colorScale: defaultColorScale, patternUnshiftIndex })
        ]
      )
    : null;

  return standalone ? (
    <React.Fragment>{container}</React.Fragment>
  ) : (
    <React.Fragment>
      {chart}
      {getLegend()}
      {isPatternDefs && getPatternDefs({ patternId, colorScale: defaultColorScale, patternUnshiftIndex })}
    </React.Fragment>
  );
};
ChartPie.displayName = 'ChartPie';

// Note: VictoryPie.role must be hoisted
hoistNonReactStatics(ChartPie, VictoryPie);
