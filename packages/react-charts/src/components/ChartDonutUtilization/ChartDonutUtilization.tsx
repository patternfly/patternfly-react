import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { orderBy } from 'lodash';
import {
  AnimatePropTypeInterface,
  CategoryPropType,
  ColorScalePropType,
  Data,
  DataGetterPropType,
  PaddingProps,
  StringOrNumberOrCallback,
  EventPropTypeInterface,
  VictoryStyleInterface
} from 'victory-core';
import { VictoryPie, VictorySliceProps } from 'victory-pie';
import { ChartContainer } from '../ChartContainer';
import { ChartDonut, ChartDonutProps } from '../ChartDonut';
import { ChartCommonStyles, ChartThemeDefinition, ChartDonutUtilizationStyles } from '../ChartTheme';
import { getDonutUtilizationTheme } from '../ChartUtils';

export enum ChartDonutUtilizationLabelPosition {
  centroid = 'centroid',
  endAngle = 'endAngle',
  startAngle = 'startAngle'
}

export enum ChartDonutUtilizationLegendOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export enum ChartDonutUtilizationLegendPosition {
  bottom = 'bottom',
  right = 'right'
}

export enum ChartDonutUtilizationSortOrder {
  ascending = 'ascending',
  descending = 'descending'
}

export enum ChartDonutUtilizationSubTitlePosition {
  bottom = 'bottom',
  center = 'center',
  right = 'right'
}

/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */
export interface ChartDonutUtilizationProps extends ChartDonutProps {
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
   * The capHeight prop defines a text metric for the font being used: the expected height of capital letters.
   * This is necessary because of SVG, which (a) positions the *bottom* of the text at `y`, and (b) has no notion of
   * line height. The value should ideally use the same units as `lineHeight` and `dy`, preferably ems. If given a
   * unitless number, it is assumed to be ems.
   */
  capHeight?: StringOrNumberOrCallback;
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
   * The colorScale prop is an optional prop that defines the color scale the pie
   * will be created on. This prop should be given as an array of CSS colors, or as a string
   * corresponding to one of the built in color scales. ChartDonutUtilization will automatically assign
   * values from this color scale to the pie slices unless colors are explicitly provided in the
   * data object
   */
  colorScale?: ColorScalePropType;
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
   * these props from ChartDonutUtilization: height, width, children
   * (the chart itself) and style. Props that are not provided by the
   * child chart component include title and desc, both of which
   * are intended to add accessibility to Victory components. The more descriptive these props
   * are, the more accessible your data will be for people using screen readers.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a dataComponent is
   * not provided, ChartDonutUtilization will use the default ChartContainer component.
   *
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
   *
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
  events?: EventPropTypeInterface<'data' | 'labels' | 'parent', StringOrNumberOrCallback | string[] | number[]>[];

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
   * pixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set
   * to the same width in order to maintain the aspect ratio.
   */
  height?: number;
  /**
   * When creating a donut chart, this prop determines the number of pixels between
   * the center of the chart and the inner edge.
   */
  innerRadius?: number | ((props: VictorySliceProps) => number);
  /**
   * Invert the threshold color scale used to represent warnings, errors, etc.
   *
   * Instead of showing a warning at 60% and an error at 90%; for example, this would allow users to show a warning
   * below 60% and an error below 20%
   */
  invert?: boolean;
  /**
   * Allows legend items to wrap. A value of true allows the legend to wrap onto the next line
   * if its container is not wide enough.
   *
   * Note: This is overridden by the legendItemsPerRow property
   */
  legendAllowWrap?: boolean;
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
  labelPosition?: 'startAngle' | 'centroid' | 'endAngle' | ((props: VictorySliceProps) => string);
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
   * The legend position relation to the donut chart. Valid values are 'bottom' and 'right'
   *
   * Note: When adding a legend, padding may need to be adjusted in order to accommodate the extra legend. In some
   * cases, the legend may not be visible until enough padding is applied.
   */
  legendPosition?: 'bottom' | 'right';
  /**
   * The labelRadius prop defines the radius of the arc that will be used for positioning each slice label.
   * If this prop is not set, the label radius will default to the radius of the pie + label padding.
   */
  labelRadius?: number | ((props: VictorySliceProps) => number);
  /**
   * The labels prop defines labels that will appear above each bar in your chart.
   * This prop should be given as an array of values or as a function of data.
   * If given as an array, the number of elements in the array should be equal to
   * the length of the data array. Labels may also be added directly to the data object
   * like data={[{x: 1, y: 1, label: "first"}]}.
   *
   * @example ["spring", "summer", "fall", "winter"], (datum) => datum.title
   */
  labels?: string[] | ((data: any) => string | null);
  /**
   * The name prop is used to reference a component instance when defining shared events.
   */
  name?: string;
  /**
   * Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.
   * **This prop should not be set manually.**
   */
  origin?: { x: number; y: number };
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
  radius?: number | ((props: VictorySliceProps) => number);
  /**
   * The sharedEvents prop is used internally to coordinate events between components. It should not be set manually.
   */
  sharedEvents?: any;
  /**
   * This will show the static, unused portion of the donut chart. It should not be set manually.
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
   *
   * @example {data: {stroke: "black"}, label: {fontSize: 10}}
   */
  style?: VictoryStyleInterface;
  /**
   * The subtitle for the donut chart label
   */
  subTitle?: string;
  /**
   * The label component to render the chart subTitle.
   *
   * When overriding the subTitleComponent prop, title and subTitle will be centered independently. You may choose to
   * use the x and y props of ChartLabel to adjust the center position. For example:
   *
   * <pre>
   * subTitle="Pets"
   * subTitleComponent={<ChartLabel y={130} />}
   * title={100}
   * titleComponent={<ChartLabel y={107} />}
   * </pre>
   *
   * Note: Default label properties may be applied
   */
  subTitleComponent?: React.ReactElement<any>;
  /**
   * The orientation of the subtitle position. Valid values are 'bottom', 'center', and 'right'
   */
  subTitlePosition?: 'bottom' | 'center' | 'right';
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartDonutUtilization as a solo component, implement the theme directly on
   * ChartDonutUtilization. If you are wrapping ChartDonutUtilization in ChartChart, ChartGroup, or ChartThreshold
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
   * The title for the donut chart label
   */
  title?: string;
  /**
   * The label component to render the donut chart title.
   *
   * When centering both title and subTitle props, it's possible to override both styles via an array provided to
   * ChartLabel. The first item in the array is associated with title styles, while the second item in the array is
   * associated with subtitle styles.
   *
   * <pre>
   * subTitle="Pets"
   * title={100}
   * titleComponent={
   *   <ChartLabel style={[{
   *       fill: 'red', // title color
   *       fontSize: 24
   *     }, {
   *       fill: 'blue', // subtitle color
   *       fontSize: 14
   *     }]}
   *   />
   * }
   * </pre>
   *
   * In this case, both title and subTitle will be centered together. However, should you also override the
   * subTitleComponent prop, title and subTitle will be centered independently. You may choose to
   * use the x and y props of ChartLabel to adjust the center position. For example:
   *
   * <pre>
   * subTitle="Pets"
   * subTitleComponent={<ChartLabel y={130} />}
   * title={100}
   * titleComponent={<ChartLabel y={107} />}
   * </pre>
   *
   * Note: Default label properties may be applied
   */
  titleComponent?: React.ReactElement<any>;
  /**
   * The dynamic portion of the chart will change colors when data reaches the given threshold. Colors may be
   * overridden, but defaults shall be provided.
   *
   * @example thresholds={[{ value: 60, color: '#F0AB00' }, { value: 90, color: '#C9190B' }]}
   */
  thresholds?: any[];
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
}

export const ChartDonutUtilization: React.FunctionComponent<ChartDonutUtilizationProps> = ({
  allowTooltip = true,
  ariaDesc,
  ariaTitle,
  containerComponent = <ChartContainer />,
  data,
  invert = false,
  legendPosition = ChartCommonStyles.legend.position as ChartDonutUtilizationLegendPosition,
  padding,
  showStatic = true,
  standalone = true,
  themeColor,
  themeVariant,
  thresholds,
  x,
  y,

  // destructure last
  theme = getDonutUtilizationTheme(themeColor, themeVariant),
  height = theme.pie.height,
  width = theme.pie.width,
  ...rest
}: ChartDonutUtilizationProps) => {
  // Returns computed data representing pie chart slices
  const getComputedData = () => {
    const datum = getData();
    const computedData: [{ x?: any; y: any }] = [{ x: datum[0]._x, y: datum[0]._y || 0 }];
    if (showStatic) {
      computedData.push({ y: datum[0]._x ? Math.abs(100 - datum[0]._y) : 100 });
    }
    return computedData;
  };

  const getData = () => {
    const datum = [{ ...data }];
    return Data.formatData(datum, { x, y, ...rest }, ['x', 'y']).sort((a: any, b: any) => a._y - b._y);
  };

  // Returns thresholds with default color scale
  const getDonutThresholds = () => {
    const result = [];
    if (thresholds) {
      // Ensure thresholds are in sorted order
      const sThresholds = orderBy(thresholds, 'value', invert ? 'desc' : 'asc');
      const numColors = ChartDonutUtilizationStyles.thresholds.colorScale.length;
      for (let i = 0; i < sThresholds.length; i++) {
        result.push({
          color: sThresholds[i].color
            ? sThresholds[i].color
            : ChartDonutUtilizationStyles.thresholds.colorScale[i % numColors],
          value: sThresholds[i].value
        });
      }
    }
    return result;
  };

  // Returns theme based on threshold and current value
  const getThresholdTheme = () => {
    const newTheme = { ...theme };

    if (data) {
      const datum = getData();
      const donutThresholds = getDonutThresholds();
      const mergeThemeProps = (i: number) => {
        // Merge just the first color of dynamic (blue, green, etc.) with static (gray) for expected colorScale
        newTheme.pie.colorScale[0] = donutThresholds[i].color;
        newTheme.legend.colorScale[0] = donutThresholds[i].color;
      };
      for (let i = 0; i < donutThresholds.length; i++) {
        if (invert) {
          if (datum[0]._y <= donutThresholds[i].value) {
            mergeThemeProps(i);
          }
        } else {
          if (datum[0]._y >= donutThresholds[i].value) {
            mergeThemeProps(i);
          }
        }
      }
    }
    return newTheme;
  };

  // Dynamic donut chart
  const chart = (
    <ChartDonut
      allowTooltip={allowTooltip}
      data={getComputedData()}
      height={height}
      key="pf-chart-donut-utilization"
      legendPosition={legendPosition}
      padding={padding}
      standalone={false}
      theme={getThresholdTheme()}
      width={width}
      {...rest}
    />
  );

  // Clone so users can override container props
  const container = React.cloneElement(
    containerComponent,
    {
      desc: ariaDesc,
      height,
      title: ariaTitle,
      width,
      theme,
      ...containerComponent.props
    },
    [chart]
  );

  return standalone ? <React.Fragment>{container}</React.Fragment> : <React.Fragment>{chart}</React.Fragment>;
};

// Note: VictoryPie.role must be hoisted
hoistNonReactStatics(ChartDonutUtilization, VictoryPie);
