import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {
  NumberOrCallback,
  OrientationTypes,
  StringOrNumberOrCallback,
  VictoryStyleObject,
  VictoryTooltip,
  VictoryTooltipProps,
} from 'victory';
import { ChartThemeDefinition } from '../ChartTheme';
import { getTheme } from '../ChartUtils';

/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */
export interface ChartTooltipProps extends VictoryTooltipProps {
  /**
   * See Victory type docs: https://formidable.com/open-source/victory/docs/victory-tooltip/
   */
  ' '?: any;
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
  dx?: StringOrNumberOrCallback;
  /**
   * The dy prop defines a vertical shift from the y coordinate.
   */
  dy?: StringOrNumberOrCallback;
  /**
   * The events prop attaches arbitrary event handlers to the label component. This prop should be given as an object of
   * event names and corresponding event handlers. When events are provided via Victory’s event system, event handlers
   * will be called with the event, the props of the component is attached to, and an eventKey.
   * Examples: events={{onClick: (evt) => alert("x: " + evt.clientX)}}
   */
  events?: {};
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
   * The style prop applies SVG style properties to the rendered flyout container. These props will be passed to the
   * flyoutComponent.
   */
  flyoutStyle?: VictoryStyleObject;
  /**
   * The groupComponent prop takes a component instance which will be used to create group elements for use within
   * container elements. This prop defaults to a <g> tag.}
   */
  groupComponent?: React.ReactElement<any>;
  /**
   * The height prop defines the height of the tooltip flyout. This prop may be given as a positive number or a function
   * of datum. If this prop is not set, height will be determined based on an approximate text size calculated from the
   * text and style props provided to ChartTooltip.
   */
  height?: NumberOrCallback;
  /**
   * The horizontal prop determines whether to plot the flyouts to the left / right of the (x, y) coordinate rather than top / bottom.
   * This is useful when an orientation prop is not provided, and data will determine the default orientation. i.e.
   * negative values result in a left orientation and positive values will result in a right orientation by default.
   */
  horizontal?: boolean;
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
   * The orientation prop determines which side of the (x, y) coordinate the tooltip should be rendered on.
   * This prop can be given as “top”, “bottom”, “left”, “right”, or as a function of datum that returns one of these
   * values. If this prop is not provided it will be determined from the sign of the datum, and the value of the
   * horizontal prop.
   */
  orientation?: OrientationTypes;
  /**
   * The pointerLength prop determines the length of the triangular pointer extending from the flyout. This prop may be
   * given as a positive number or a function of datum.
   */
  pointerLength?: NumberOrCallback;
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
  style?: React.CSSProperties;
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
   * Specifies the theme color. Valid values are 'blue', 'green', 'grey' (recomended), 'multi', etc.
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
   * The width prop defines the width of the tooltip flyout. This prop may be given as a positive number or a function
   * of datum. If this prop is not set, width will be determined based on an approximate text size calculated from the
   * text and style props provided to ChartTooltip.
   */
  width?: NumberOrCallback;
  /**
   * The x prop defines the x coordinate to use as a basis for horizontal positioning.
   */
  x?: number;
  /**
   * The y prop defines the y coordinate to use as a basis for vertical positioning.
   */
  y?: number;
}

export const ChartTooltip: React.FunctionComponent<ChartTooltipProps> = ({
  themeColor,
  themeVariant,
  theme = getTheme(themeColor, themeVariant), // destructure last
  ...rest
}: ChartTooltipProps) => <VictoryTooltip theme={theme} {...rest} />;

// Note: VictoryTooltip.defaultEvents must be hoisted
hoistNonReactStatics(ChartTooltip, VictoryTooltip);
