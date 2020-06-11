import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { DataGetterPropType, DomainPropType, NumberOrCallback, PaddingProps } from 'victory-core';
import { VictoryBar } from 'victory-bar';
import { ChartContainer } from '../ChartContainer';
import { ChartThemeDefinition } from '../ChartTheme';
import { getBulletComparativeWarningMeasureTheme } from '../ChartUtils';
import { ChartBulletComparativeMeasure } from './ChartBulletComparativeMeasure';

/**
 * See https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/index.d.ts
 * and https://github.com/FormidableLabs/victory/blob/master/packages/victory-bar/src/index.d.ts
 */
export interface ChartBulletComparativeWarningMeasureProps {
  /**
   * Specifies the tooltip capability of the container component. A value of true allows the chart to add a
   * ChartTooltip component to the labelComponent property. This is a shortcut to display tooltips when the labels
   * property is also provided.
   */
  allowTooltip?: boolean;
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
   * The barWidth prop is used to specify the width of each bar. This prop may be given as
   * a number of pixels or as a function that returns a number. When this prop is given as
   * a function, it will be evaluated with the arguments datum, and active. When this value
   * is not given, a default value will be calculated based on the overall dimensions of
   * the chart, and the number of bars.
   */
  barWidth?: NumberOrCallback;
  /**
   * The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of
   * the chart. When this prop is set to true, tooltip pointers will still point to the correct data point, but the
   * center of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders.
   */
  constrainToVisibleArea?: boolean;
  /**
   * The data prop specifies the data to be plotted. Data should be in the form of an array
   * of data points, or an array of arrays of data points for multiple datasets.
   * Each data point may be any format you wish (depending on the `comparativeErrorMeasureDataY` accessor prop),
   * but by default, an object with y properties is expected.
   *
   * @example data={[{ y: 50 }]}
   */
  data?: any[];
  /**
   * The domain prop describes the range of values your chart will cover. This prop can be
   * given as a array of the minimum and maximum expected values for your bar chart,
   * or as an object that specifies separate arrays for x and y.
   * If this prop is not provided, a domain will be calculated from data, or other
   * available information.
   *
   * @example {x: [0, 2], y: [0, 100]}
   *
   * Note: The x domain is expected to be `x: [0, 2]` in order to position all measures properly
   */
  domain?: DomainPropType;
  /**
   * The height props specifies the height the svg viewBox of the chart container.
   * This value should be given as a number of pixels
   */
  height?: number;
  /**
   * The horizontal prop determines whether data will be plotted horizontally.
   * When this prop is set to true, the independent variable will be plotted on the y axis
   * and the dependent variable will be plotted on the x axis.
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
   * like data={[{y: 1, label: "first"}]}.
   *
   * @example ["spring", "summer", "fall", "winter"], (datum) => datum.title
   */
  labels?: string[] | number[] | ((data: any) => string | number | null);
  /**
   * The measureComponent prop takes an entire component which will be used to create the chart
   */
  measureComponent?: React.ReactElement<any>;
  /**
   * The padding props specifies the amount of padding in number of pixels between
   * the edge of the chart and any rendered child components. This prop can be given
   * as a number or as an object with padding specified for top, bottom, left
   * and right.
   */
  padding?: PaddingProps;
  /**
   * The standalone prop determines whether the component will render a standalone svg
   * or a <g> tag that will be included in an external svg. Set standalone to false to
   * compose ChartLine with other components within an enclosing <svg> tag.
   */
  standalone?: boolean;
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartLine as a solo component, implement the theme directly on
   * ChartLine. If you are wrapping ChartLine in ChartChart or ChartGroup,
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

export const ChartBulletComparativeWarningMeasure: React.FunctionComponent<
  ChartBulletComparativeWarningMeasureProps
> = ({
  allowTooltip = true,
  ariaDesc,
  ariaTitle,
  barWidth,
  constrainToVisibleArea = false,
  data,
  domain,
  horizontal = true,
  labelComponent,
  labels,
  measureComponent = <ChartBulletComparativeMeasure />,
  padding,
  standalone = true,
  themeColor,
  themeVariant,
  y,

  // destructure last
  theme = getBulletComparativeWarningMeasureTheme(themeColor, themeVariant),
  height = theme.bar.height,
  width = theme.bar.width
}: ChartBulletComparativeWarningMeasureProps) => {
  // Comparative measure component
  const measure = React.cloneElement(measureComponent, {
    allowTooltip,
    ariaDesc,
    ariaTitle,
    barWidth,
    constrainToVisibleArea,
    data,
    domain,
    height,
    horizontal,
    labelComponent,
    labels,
    padding,
    standalone: false,
    theme,
    width,
    y,
    ...measureComponent.props
  });

  return standalone ? (
    <ChartContainer desc={ariaDesc} height={height} title={ariaTitle} width={width}>
      {measure}
    </ChartContainer>
  ) : (
    <React.Fragment>{measure}</React.Fragment>
  );
};

// Note: VictoryBar.role must be hoisted
hoistNonReactStatics(ChartBulletComparativeWarningMeasure, VictoryBar);
