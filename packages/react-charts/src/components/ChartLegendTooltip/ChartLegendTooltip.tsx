import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {
  NumberOrCallback,
  OrientationTypes,
  StringOrNumberOrCallback,
  TextAnchorType,
  VictoryNumberCallback,
  VictoryStyleObject
} from 'victory-core';
import { VictoryTooltip } from 'victory-tooltip';
import { ChartCursorTooltip, ChartCursorTooltipProps } from '../ChartCursorTooltip';
import { ChartLegendTooltipContent, defaultLegendProps } from './ChartLegendTooltipContent';
import { ChartLegendTooltipStyles, ChartThemeDefinition } from '../ChartTheme';
import { ChartTooltip } from '../ChartTooltip';
import { getLegendTooltipSize, getTheme } from '../ChartUtils';

/**
 * The ChartLegendTooltip is based on ChartCursorTooltip, which is intended to be used with a voronoi cursor
 * container. This works best with charts such as area and line, for example.
 *
 * See https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/index.d.ts
 * and https://github.com/FormidableLabs/victory/blob/master/packages/victory-tooltip/src/index.d.ts
 */
export interface ChartLegendTooltipProps extends ChartCursorTooltipProps {
  /**
   * The active prop specifies whether the tooltip component should be displayed.
   */
  active?: boolean;
  /**
   * When true, tooltip events will set the active prop on both data and label elements.
   */
  activateData?: boolean;
  /**
   * The angle prop specifies the angle to rotate the tooltip around its origin point.
   */
  angle?: string | number;
  /**
   * The center prop determines the position of the center of the tooltip flyout. This prop should be given as an object
   * that describes the desired x and y svg coordinates of the center of the tooltip. This prop is useful for
   * positioning the flyout of a tooltip independent from the pointer. When ChartTooltip is used with
   * ChartVoronoiContainer, the center prop is what enables the mouseFollowTooltips option. When this prop is set,
   * non-zero pointerLength values will no longer be respected.
   */
  center?: { x: number; y: number };
  /**
   * The centerOffset prop determines the position of the center of the tooltip flyout in relation to the flyout
   * pointer. This prop should be given as an object of x and y, where each is either a numeric offset value or a
   * function that returns a numeric value. When this prop is set, non-zero pointerLength values will no longer be
   * respected.
   */
  centerOffset?: {
    x?: NumberOrCallback;
    y?: NumberOrCallback;
  };
  /**
   * The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of
   * the chart. When this prop is set to true, tooltip pointers will still point to the correct data point, but the
   * center of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders.
   */
  constrainToVisibleArea?: boolean;
  /**
   * The cornerRadius prop determines corner radius of the flyout container. This prop may be given as a positive number
   * or a function of datum.
   */
  cornerRadius?: NumberOrCallback;
  /**
   * Victory components can pass a data prop to their label component. This can be useful in custom components that need
   * to make use of the entire dataset.
   */
  data?: any[];
  /**
   * Victory components can pass a datum prop to their label component. This can be used to calculate functional styles,
   * and determine text.
   */
  datum?: {};
  /**
   * The dx prop defines a horizontal shift from the x coordinate.
   */
  dx?: NumberOrCallback;
  /**
   * The dy prop defines a vertical shift from the y coordinate.
   */
  dy?: NumberOrCallback;
  /**
   * The events prop attaches arbitrary event handlers to the label component. This prop should be given as an object of
   * event names and corresponding event handlers. When events are provided via Victory’s event system, event handlers
   * will be called with the event, the props of the component is attached to, and an eventKey.
   * Examples: events={{onClick: (evt) => alert("x: " + evt.clientX)}}
   */
  events?: { [key: string]: (event: React.SyntheticEvent<any>) => void };
  /**
   * The flyoutComponent prop takes a component instance which will be used to create the flyout path for each tooltip.
   * The new element created from the passed flyoutComponent will be supplied with the following properties: x, y, dx, dy,
   * index, datum, cornerRadius, pointerLength, pointerWidth, width, height, orientation, style, and events.
   * Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within
   * the custom component itself. If flyoutComponent is omitted, a default Flyout component will be created with props
   * described above.
   * Examples: flyoutComponent={<Flyout x={50} y={50}/>}, flyoutComponent={<MyCustomFlyout/>}
   */
  flyoutComponent?: React.ReactElement<any>;
  /**
   * The flyoutHeight prop defines the height of the tooltip flyout. This prop may be given as a positive number or a function
   * of datum. If this prop is not set, height will be determined based on an approximate text size calculated from the
   * text and style props provided to ChartTooltip.
   */
  flyoutHeight?: NumberOrCallback;
  /**
   * The style prop applies SVG style properties to the rendered flyout container. These props will be passed to the
   * flyoutComponent.
   */
  flyoutStyle?: VictoryStyleObject;
  /**
   * The flyoutWidth prop defines the width of the tooltip flyout. This prop may be given as a positive number or a
   * function of datum. If this prop is not set, flyoutWidth will be determined based on an approximate text size
   * calculated from the text and style props provided to VictoryTooltip.
   */
  flyoutWidth?: NumberOrCallback;
  /**
   * The groupComponent prop takes a component instance which will be used to create group elements for use within
   * container elements. This prop defaults to a <g> tag.}
   */
  groupComponent?: React.ReactElement<any>;
  /**
   * This prop refers to the height of the svg that ChartLegendTooltip is rendered within. This prop is passed from
   * parents of ChartLegendTooltip, and should not be set manually. In versions before ^33.0.0 this prop referred to
   * the height of the tooltip flyout. Please use flyoutHeight instead
   *
   * **This prop should not be set manually.**
   */
  height?: number;
  /**
   * The horizontal prop determines whether to plot the flyouts to the left / right of the (x, y) coordinate rather than top / bottom.
   * This is useful when an orientation prop is not provided, and data will determine the default orientation. i.e.
   * negative values result in a left orientation and positive values will result in a right orientation by default.
   */
  horizontal?: boolean;
  /**
   * The ChartLegendTooltip is based on ChartCursorTooltip, which is intended to be used with a voronoi cursor
   * container. When isCursorTooltip is true (default), ChartCursorTooltip is used. If false, ChartTooltip is used.
   */
  isCursorTooltip?: boolean;
  /**
   * The index prop represents the index of the datum in the data array.
   */
  index?: number | string;
  /**
   * The labelComponent prop takes a component instance which will be used to render each tooltip label. The new element
   * created from the passed labelComponent will be supplied with the following properties: x, y, index, datum,
   * verticalAnchor, textAnchor, style, text, and events. Any of these props may be overridden by passing in props to
   * the supplied component, or modified or ignored within the custom component itself. If labelComponent is omitted, a
   * new ChartLabel will be created with the props described above.
   * Examples: labelComponent={<ChartLabel dy={20}/>}, labelComponent={<MyCustomLabel/>}
   */
  labelComponent?: React.ReactElement<any>;
  /**
   * Defines how the labelComponent text is horizontally positioned relative to its `x` and `y` coordinates. Valid
   * values are 'start', 'middle', 'end', and 'inherit'.
   */
  labelTextAnchor?: TextAnchorType | (() => TextAnchorType);
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
   * The orientation prop determines which side of the (x, y) coordinate the tooltip should be rendered on.
   * This prop can be given as “top”, “bottom”, “left”, “right”, or as a function of datum that returns one of these
   * values. If this prop is not provided it will be determined from the sign of the datum, and the value of the
   * horizontal prop.
   */
  orientation?: OrientationTypes | VictoryNumberCallback;
  /**
   * The pointerLength prop determines the length of the triangular pointer extending from the flyout. This prop may be
   * given as a positive number or a function of datum.
   */
  pointerLength?: NumberOrCallback;
  /**
   * This prop determines which side of the tooltip flyout the pointer should originate on. When this prop is not set,
   * it will be determined based on the overall orientation of the flyout in relation to its data point, and any center
   * or centerOffset values. Valid values are 'top', 'bottom', 'left' and 'right.
   */
  pointerOrientation?: OrientationTypes | ((...args: any[]) => OrientationTypes);
  /**
   * The pointerWidth prop determines the width of the base of the triangular pointer extending from
   * the flyout. This prop may be given as a positive number or a function of datum.
   */
  pointerWidth?: NumberOrCallback;
  /**
   * When renderInPortal is true, rendered tooltips will be wrapped in VictoryPortal and rendered within the Portal element
   * within ChartContainer. Note: This prop should not be set to true when using a custom container element.
   */
  renderInPortal?: boolean;
  /**
   * The style prop applies CSS properties to the rendered `<text>` element.
   */
  style?: React.CSSProperties | React.CSSProperties[];
  /**
   * The text prop defines the text ChartTooltip will render. The text prop may be given as a string, number, or
   * function of datum. When ChartLabel is used as the labelComponent, strings may include newline characters, which
   * ChartLabel will split in to separate <tspan/> elements.
   */
  text?: StringOrNumberOrCallback | string[] | number[];
  /**
   * The theme prop specifies a theme to use for determining styles and layout properties for a component. Any styles or
   * props defined in theme may be overwritten by props specified on the component instance.
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
   * The title prop specifies a title to render with the legend.
   * This prop should be given as a string, or an array of strings for multi-line titles.
   *
   * Example: title={(datum) => datum.x}
   */
  title?: string | string[] | Function;
  /**
   * This prop refers to the width of the svg that ChartLegendTooltip is rendered within. This prop is passed from
   * parents of ChartLegendTooltip, and should not be set manually. In versions before ^33.0.0 this prop referred to the
   * width of the tooltip flyout. Please use flyoutWidth instead
   *
   * **This prop should not be set manually.**
   */
  width?: number;
  /**
   * The x prop defines the x coordinate to use as a basis for horizontal positioning.
   */
  x?: number;
  /**
   * The y prop defines the y coordinate to use as a basis for vertical positioning.
   */
  y?: number;
}

export const ChartLegendTooltip: React.FunctionComponent<ChartLegendTooltipProps> = ({
  datum,
  center = { x: 0, y: 0 },
  flyoutHeight,
  flyoutWidth,
  height,
  isCursorTooltip = true,
  labelComponent = <ChartLegendTooltipContent />,
  legendData,
  text,
  themeColor,
  themeVariant,
  title,
  width,

  // destructure last
  theme = getTheme(themeColor, themeVariant),
  ...rest
}: ChartLegendTooltipProps) => {
  const pointerLength = theme && theme.tooltip ? theme.tooltip.pointerLength : 10;

  // Returns the tooltip content component
  const getTooltipContentComponent = () =>
    React.cloneElement(labelComponent, {
      center,
      data: legendData,
      flyoutHeight: flyoutHeight || getFlyoutHeight(),
      flyoutWidth: flyoutWidth || getFlyoutWidth(),
      height,
      title,
      width,
      ...labelComponent.props
    });

  // Returns legend props
  const getLegendProps = () => {
    const getKeyValue = (key: string) =>
      labelComponent.props[key] ? labelComponent.props[key] : (defaultLegendProps as any)[key];
    return {
      legendData,
      legendProps: {
        borderPadding: getKeyValue('borderPadding'),
        gutter: getKeyValue('gutter'),
        orientation: getKeyValue('orientation'),
        padding: getKeyValue('padding'),
        rowGutter: getKeyValue('rowGutter'),
        style: getKeyValue('style')
      },
      text,
      theme
    };
  };

  // Returns flyout height based on legend size
  const getFlyoutHeight = () => {
    const _flyoutHeight = getLegendTooltipSize(getLegendProps()).height + ChartLegendTooltipStyles.flyout.padding;
    return title ? _flyoutHeight : _flyoutHeight - 10;
  };

  // Returns flyout width based on legend size
  const getFlyoutWidth = () => getLegendTooltipSize(getLegendProps()).width + ChartLegendTooltipStyles.flyout.padding;

  // Returns the tooltip component
  const getTooltipComponent = () => {
    const _flyoutWidth = getFlyoutWidth();
    const tooltipComponent = isCursorTooltip ? <ChartCursorTooltip /> : <ChartTooltip />;
    return React.cloneElement(tooltipComponent, {
      center,
      datum,
      flyoutHeight: flyoutHeight || getFlyoutHeight(),
      flyoutWidth: flyoutWidth || getFlyoutWidth(),
      height,
      labelComponent: getTooltipContentComponent(),
      ...(flyoutWidth === undefined && {
        showPointer: width > _flyoutWidth + center.x + pointerLength || center.x > _flyoutWidth + pointerLength
      }),
      text,
      theme,
      width,
      ...rest
    });
  };

  return getTooltipComponent();
};
ChartLegendTooltip.displayName = 'ChartLegendTooltip';

// Note: VictoryTooltip.defaultEvents must be hoisted
hoistNonReactStatics(ChartLegendTooltip, VictoryTooltip);
