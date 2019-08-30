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
  VictoryPie,
  VictoryStyleInterface
} from 'victory';
import { getDonutTheme } from '../ChartUtils/chart-theme';
import { ChartContainer } from '../ChartContainer';
import { ChartLabel } from '../ChartLabel';
import { ChartPie, ChartPieLegendPosition, ChartPieProps } from '../ChartPie';
import { ChartCommonStyles, ChartDonutStyles, ChartThemeDefinition } from '../ChartTheme';
import { getLabelX, getLabelY } from '../ChartUtils';

export enum ChartDonutLabelPosition {
  centroid = 'centroid',
  endAngle = 'endAngle',
  startAngle = 'startAngle'
}

export enum ChartDonutSortOrder {
  ascending = 'ascending',
  descending = 'descending'
}

export enum ChartDonutSubTitlePosition {
  bottom = 'bottom',
  center = 'center',
  right = 'right'
}

/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */
export interface ChartDonutProps extends ChartPieProps {
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
   * @example ["dogs", "cats", "mice"]
   */
  categories?: CategoryPropType;
  /**
   * The colorScale prop is an optional prop that defines the color scale the pie
   * will be created on. This prop should be given as an array of CSS colors, or as a string
   * corresponding to one of the built in color scales. ChartDonut will automatically assign
   * values from this color scale to the pie slices unless colors are explicitly provided in the
   * data object
   */
  colorScale?: ColorScalePropType;
  /**
   * The containerComponent prop takes an entire component which will be used to
   * create a container element for standalone charts.
   * The new element created from the passed containerComponent wil be provided with
   * these props from ChartDonut: height, width, children
   * (the chart itself) and style. Props that are not provided by the
   * child chart component include title and desc, both of which
   * are intended to add accessibility to Victory components. The more descriptive these props
   * are, the more accessible your data will be for people using screen readers.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a dataComponent is
   * not provided, ChartDonut will use the default ChartContainer component.
   * @example <ChartContainer title="Chart of Dog Breeds" desc="This chart shows ..." />
   */
  containerComponent?: React.ReactElement<any>;
  /**
   * Set the cornerRadius for every dataComponent (Slice by default) within ChartDonut
   */
  cornerRadius?: number;
  /**
   * The data prop specifies the data to be plotted,
   * where data X-value is the slice label (string or number),
   * and Y-value is the corresponding number value represented by the slice
   * Data should be in the form of an array of data points.
   * Each data point may be any format you wish (depending on the `x` and `y` accessor props),
   * but by default, an object with x and y properties is expected.
   * @example [{x: 1, y: 2}, {x: 2, y: 3}], [[1, 2], [2, 3]],
   * [[{x: "a", y: 1}, {x: "b", y: 2}], [{x: "a", y: 2}, {x: "b", y: 3}]]
   */
  data?: any[];
  /**
   * The dataComponent prop takes an entire, HTML-complete data component which will be used to
   * create slices for each datum in the pie chart. The new element created from the passed
   * dataComponent will have the property datum set by the pie chart for the point it renders;
   * properties style and pathFunction calculated by ChartDonut; an index property set
   * corresponding to the location of the datum in the data provided to the pie; events bound to
   * the ChartDonut; and the d3 compatible slice object.
   * If a dataComponent is not provided, ChartDonut's Slice component will be used.
   */
  dataComponent?: React.ReactElement<any>;
  /**
   * Defines a horizontal shift from the x coordinate. It should not be set manually.
   */
  donutDx?: number;
  /**
   * Defines a vertical shift from the y coordinate. It should not be set manually.
   */
  donutDy?: number;
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
   * for a given component, so "data" and "labels" are all valid targets for ChartDonut
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
  events?: EventPropTypeInterface<'data' | 'labels' | 'parent', StringOrNumberOrCallback | string[] | number[]>[];
  /**
   * ChartDonut uses the standard externalEventMutations prop.
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
   * Note: When adding a legend, height (the overall SVG height) may need to be larger than donutHeight (the donut size)
   * in order to accommodate the extra legend.
   *
   * By default, donutHeight is the min. of either height or width. This covers most use cases in order to accommodate
   * legends within the same SVG. However, donutHeight (not height) may need to be set in order to adjust the donut height.
   *
   * Typically, the parent container is set to the same width in order to maintain the aspect ratio.
   */
  height?: number;
  /**
   * When creating a donut chart, this prop determines the number of pixels between
   * the center of the chart and the inner edge.
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
   * provide a series label for ChartDonut. If individual labels are required for each
   * data point, they should be created by composing ChartDonut with VictoryScatter
   */
  labelComponent?: React.ReactElement<any>;
  /**
   * The labelPosition prop specifies the angular position of each label relative to its corresponding slice.
   * When this prop is not given, the label will be positioned at the centroid of each slice.
   */
  labelPosition?: 'startAngle' | 'endAngle' | 'centroid';
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
   * Defines a horizontal shift from the x coordinate. It should not be set manually.
   */
  legendDx?: number;
  /**
   * Defines a vertical shift from the y coordinate. It should not be set manually.
   */
  legendDy?: number;
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
   */
  legendPosition?: 'bottom' | 'right';
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
   * compose ChartDonut with other components within an enclosing <svg> tag.
   */
  standalone?: boolean;
  /**
   * The overall start angle of the pie in degrees. This prop is used in conjunction with
   * endAngle to create a pie that spans only a segment of a circle.
   */
  startAngle?: number;
  /**
   * The style prop specifies styles for your pie. ChartDonut relies on Radium,
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
   * The label component to render the chart subTitle.
   *
   * Note: Default label properties may be applied
   */
  subTitleComponent?: React.ReactElement<any>;
  /**
   * Defines a horizontal shift from the x coordinate. It should not be set manually.
   */
  subTitleDx?: number;
  /**
   * Defines a vertical shift from the y coordinate. It should not be set manually.
   */
  subTitleDy?: number;
  /**
   * The orientation of the donut chart in relation to the legend. Valid values are 'bottom', 'center', and 'right'
   */
  subTitlePosition?: 'bottom' | 'center' | 'right';
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartDonut as a solo component, implement the theme directly on
   * ChartDonut. If you are wrapping ChartDonut in ChartChart or ChartGroup,
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
   * The title for the donut chart
   */
  title?: string;
  /**
   * The label component to render the chart title.
   *
   * Note: Default label properties may be applied
   */
  titleComponent?: React.ReactElement<any>;
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

export const ChartDonut: React.FunctionComponent<ChartDonutProps> = ({
  ariaDesc,
  ariaTitle,
  donutDx = 0,
  donutDy = 0,
  legendPosition = ChartCommonStyles.legend.position as ChartPieLegendPosition,
  standalone = true,
  subTitle,
  subTitleComponent = <ChartLabel />,
  subTitleDx = 0,
  subTitleDy = 0,
  subTitlePosition = ChartDonutStyles.label.subTitlePosition as ChartDonutSubTitlePosition,
  themeColor,
  themeVariant,
  title,
  titleComponent = <ChartLabel />,

  // destructure last
  theme = getDonutTheme(themeColor, themeVariant),
  capHeight = 1.1,
  height = theme.pie.height,
  width = theme.pie.width,
  donutHeight = Math.min(height, width),
  donutWidth = Math.min(height, width),
  innerRadius = (Math.min(donutHeight, donutWidth) - 34) / 2,
  ...rest
}: ChartDonutProps) => {
  const donutSize = Math.min(donutHeight, donutWidth);

  // Returns subtitle
  const getSubTitle = () => {
    if (!subTitle || subTitlePosition === ChartDonutSubTitlePosition.center) {
      return null;
    }
    const subTitleProps = subTitleComponent.props ? subTitleComponent.props : {};
    return React.cloneElement(subTitleComponent, {
      style: ChartDonutStyles.label.subTitle,
      text: subTitle,
      textAnchor: subTitlePosition === 'right' ? 'start' : 'middle',
      verticalAnchor: 'middle',
      x: getLabelX({
        chartWidth: donutSize,
        dx: subTitleDx,
        labelPosition: subTitlePosition,
        legendPosition,
        svgWidth: width
      }),
      y: getLabelY({
        chartHeight: donutSize,
        dy: subTitleDy,
        labelPosition: subTitlePosition
      }),
      ...subTitleProps
    });
  };

  // Returns title
  const getTitle = () => {
    if (!title) {
      return null;
    }
    const titleProps = titleComponent ? titleComponent.props : {};
    const showBoth = title && subTitle && subTitlePosition == ChartDonutSubTitlePosition.center;
    return React.cloneElement(titleComponent, {
      ...showBoth && { capHeight },
      style: [ChartDonutStyles.label.title, ChartDonutStyles.label.subTitle],
      text: showBoth ? [title, subTitle] : title,
      textAnchor: 'middle',
      verticalAnchor: 'middle',
      x: getLabelX({
        chartWidth: donutSize,
        dx: donutDx,
        labelPosition: 'center',
        legendPosition,
        svgWidth: width
      }),
      y: getLabelY({
        chartHeight: donutSize,
        dy: donutDy,
        labelPosition: 'center'
      }),
      ...titleProps
    });
  };

  const chart = (
    <ChartPie
      height={height}
      innerRadius={innerRadius > 0 ? innerRadius : 0}
      legendPosition={legendPosition}
      pieDx={donutDx}
      pieDy={donutDy}
      pieHeight={donutSize}
      pieWidth={donutSize}
      standalone={false}
      theme={theme}
      width={width}
      {...rest}
    />
  );

  return standalone ? (
    <ChartContainer desc={ariaDesc} height={height} title={ariaTitle} width={width}>
      {chart}
      {getTitle()}
      {getSubTitle()}
    </ChartContainer>
  ) : (
    <React.Fragment>
      {chart}
      {getTitle()}
      {getSubTitle()}
    </React.Fragment>
  );
};

// Note: VictoryPie.role must be hoisted
hoistNonReactStatics(ChartDonut, VictoryPie);
