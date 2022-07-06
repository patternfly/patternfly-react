import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {
  Helpers,
  NumberOrCallback,
  OrientationOrCallback,
  StringOrNumberOrCallback,
  TextAnchorType,
  VictoryStyleObject
} from 'victory-core';
import { VictoryTooltip } from 'victory-tooltip';
import { ChartCursorTooltip, ChartCursorTooltipProps } from '../ChartCursorTooltip';
import { ChartLegendTooltipContent } from './ChartLegendTooltipContent';
import { ChartLegendTooltipStyles, ChartThemeDefinition } from '../ChartTheme';
import { ChartTooltip } from '../ChartTooltip';
import {
  getLegendTooltipDataProps,
  getLegendTooltipSize,
  getLegendTooltipVisibleData,
  getLegendTooltipVisibleText,
  getTheme
} from '../ChartUtils';

/**
 * The ChartLegendTooltip is based on ChartCursorTooltip, which is intended to be used with a voronoi cursor
 * container. This works best with charts such as area and line, for example.
 *
 * See https://github.com/FormidableLabs/victory/blob/main/packages/victory-tooltip/src/index.d.ts
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
   * The activePoints prop specifies the active data
   *
   * Note: This prop should not be set manually.
   *
   * @private
   * @hide
   */
  activePoints?: any[];
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
   *
   * @propType { x: number | Function, y: number | Function }
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
   *
   * @propType number | Function
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
   *
   * @propType number | Function
   */
  dx?: NumberOrCallback;
  /**
   * The dy prop defines a vertical shift from the y coordinate.
   *
   * @propType number | Function
   */
  dy?: NumberOrCallback;
  /**
   * The events prop attaches arbitrary event handlers to the label component. This prop should be given as an object of
   * event names and corresponding event handlers. When events are provided via Victory’s event system, event handlers
   * will be called with the event, the props of the component is attached to, and an eventKey.
   *
   * @propType object
   * @example events={{onClick: (evt) => alert("x: " + evt.clientX)}}
   */
  events?: { [key: string]: (event: React.SyntheticEvent<any>) => void };
  /**
   * The flyoutComponent prop takes a component instance which will be used to create the flyout path for each tooltip.
   * The new element created from the passed flyoutComponent will be supplied with the following properties: x, y, dx, dy,
   * index, datum, cornerRadius, pointerLength, pointerWidth, width, height, orientation, style, and events.
   * Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within
   * the custom component itself. If flyoutComponent is omitted, a default Flyout component will be created with props
   * described above.
   *
   * @example flyoutComponent={<Flyout x={50} y={50}/>}, flyoutComponent={<MyCustomFlyout/>}
   */
  flyoutComponent?: React.ReactElement<any>;
  /**
   * The flyoutHeight prop defines the height of the tooltip flyout. This prop may be given as a positive number or a function
   * of datum. If this prop is not set, height will be determined based on an approximate text size calculated from the
   * text and style props provided to ChartTooltip.
   *
   * @propType number | Function
   */
  flyoutHeight?: NumberOrCallback;
  /**
   * The style prop applies SVG style properties to the rendered flyout container. These props will be passed to the
   * flyoutComponent.
   *
   * @propType number | Function
   */
  flyoutStyle?: VictoryStyleObject;
  /**
   * The flyoutWidth prop defines the width of the tooltip flyout. This prop may be given as a positive number or a
   * function of datum. If this prop is not set, flyoutWidth will be determined based on an approximate text size
   * calculated from the text and style props provided to VictoryTooltip.
   *
   * @propType number | Function
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
   * Note: This prop should not be set manually.
   *
   * @private
   * @hide
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
   *
   * @example labelComponent={<ChartLabel dy={20}/>}, labelComponent={<MyCustomLabel/>}
   */
  labelComponent?: React.ReactElement<any>;
  /**
   * Defines how the labelComponent text is horizontally positioned relative to its `x` and `y` coordinates. Valid
   * values are 'start', 'middle', 'end', and 'inherit'.
   *
   * @propType string | Function
   */
  labelTextAnchor?: TextAnchorType | (() => TextAnchorType);
  /**
   * Specify data via the data prop. ChartLegend expects data as an array of objects with name (required), symbol, and
   * labels properties. The childName is used to sync the data series associated with the given chart child name.
   *
   * The data prop must be given as an array.
   *
   * @example
   *
   * legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}
   * legendData={[{ childName: `cats`, name: `Total cats` }, { childName: `dogs`, name: 'Total dogs' }]}
   */
  legendData?: {
    childName?: string;
    name?: string;
    labels?: {
      fill?: string;
    };
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
   *
   * @propType string | Function
   */
  orientation?: OrientationOrCallback;
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
   * The pointerLength prop determines the length of the triangular pointer extending from the flyout. This prop may be
   * given as a positive number or a function of datum.
   *
   * @propType number | Function
   */
  pointerLength?: NumberOrCallback;
  /**
   * This prop determines which side of the tooltip flyout the pointer should originate on. When this prop is not set,
   * it will be determined based on the overall orientation of the flyout in relation to its data point, and any center
   * or centerOffset values. Valid values are 'top', 'bottom', 'left' and 'right.
   *
   * @propType string | Function
   */
  pointerOrientation?: OrientationOrCallback;
  /**
   * The pointerWidth prop determines the width of the base of the triangular pointer extending from
   * the flyout. This prop may be given as a positive number or a function of datum.
   *
   * @propType number | Function
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
   *
   * @propType number | string | Function | string[] | number[]
   */
  text?: StringOrNumberOrCallback | string[] | number[];
  /**
   * The theme prop specifies a theme to use for determining styles and layout properties for a component. Any styles or
   * props defined in theme may be overwritten by props specified on the component instance.
   *
   * Note: Theme may be overridden when flyout is rendered
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
   * Note: This prop should not be set manually.
   *
   * @private
   * @hide
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

interface FlyoutProps {
  height: number; // legend height
  width: number; // legend width
}

export const ChartLegendTooltip: React.FunctionComponent<ChartLegendTooltipProps> = ({
  activePoints,
  datum,
  center = { x: 0, y: 0 },
  flyoutHeight,
  flyoutWidth,
  height,
  isCursorTooltip = true,
  labelComponent = <ChartLegendTooltipContent />,
  legendData,
  patternScale,
  text,
  themeColor,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  themeVariant,
  title,
  width,

  // destructure last
  theme = getTheme(themeColor),
  ...rest
}: ChartLegendTooltipProps) => {
  const pointerLength = theme && theme.tooltip ? Helpers.evaluateProp(theme.tooltip.pointerLength) : 10;
  const legendTooltipProps = () => ({
    legendData: getLegendTooltipVisibleData({ activePoints, legendData, text, theme }),
    legendProps: getLegendTooltipDataProps(
      labelComponent.props.legendComponent ? labelComponent.props.legendComponent.props : undefined
    ),
    text: getLegendTooltipVisibleText({ activePoints, legendData, text }),
    theme
  });

  // Returns flyout height based on legend size
  const getFlyoutHeight = ({ height }: FlyoutProps) => {
    const _flyoutHeight = height + ChartLegendTooltipStyles.flyout.padding;
    return title ? _flyoutHeight : _flyoutHeight - 10;
  };

  // Returns flyout width based on legend size
  const getFlyoutWidth = ({ width }: FlyoutProps) => width + ChartLegendTooltipStyles.flyout.padding;

  // Returns the tooltip content component
  const getTooltipContentComponent = (props: FlyoutProps) =>
    React.cloneElement(labelComponent, {
      center,
      flyoutHeight: flyoutHeight || getFlyoutHeight(props),
      flyoutWidth: flyoutWidth || getFlyoutWidth(props),
      height,
      legendData,
      patternScale,
      title,
      width,
      ...labelComponent.props
    });

  // Returns the tooltip component
  const getTooltipComponent = () => {
    // There must be at least one active, visible item or else this will return zero for height & width.
    const legendSize = getLegendTooltipSize(legendTooltipProps());
    if (legendSize.height === 0 && legendSize.width === 0) {
      return null;
    }
    const _flyoutWidth = getFlyoutWidth(legendSize);
    const tooltipComponent = isCursorTooltip ? <ChartCursorTooltip /> : <ChartTooltip />;
    return React.cloneElement(tooltipComponent, {
      activePoints,
      center,
      datum,
      flyoutHeight: flyoutHeight || getFlyoutHeight(legendSize),
      flyoutWidth: flyoutWidth || getFlyoutWidth(legendSize),
      height,
      labelComponent: getTooltipContentComponent(legendSize),
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
