import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { CoordinatesPropType, OriginType } from 'victory-core';
import { VictoryCursorContainer, VictoryCursorContainerProps } from 'victory-cursor-container';
import { ChartLabel } from '../ChartLabel';
import { ChartThemeDefinition } from '../ChartTheme';
import { getClassName, getTheme } from '../ChartUtils';

/**
 * See https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/index.d.ts
 * and https://github.com/FormidableLabs/victory/blob/master/packages/victory-cursor-container/src/index.d.ts
 */
export interface ChartCursorContainerProps extends VictoryCursorContainerProps {
  /**
   * he children prop specifies the child or children that will be rendered within the container. It will be set by
   * whatever Victory component is rendering the container.
   *
   * **This prop should not be set manually.**
   */
  children?: React.ReactElement | React.ReactElement[];
  /**
   * The className prop specifies a className that will be applied to the outer-most div rendered by the container
   */
  className?: string;
  /**
   * The containerId prop may be used to set a deterministic id for the container. When a containerId is not manually
   * set, a unique id will be generated. It is usually necessary to set deterministic ids for automated testing.
   */
  containerId?: number | string;
  /**
   * The cursorComponent prop takes a component instance which will be used to render a cursor element. The new element
   * created will be supplied with x1, y1, x2 and y2 positioning props.
   */
  cursorComponent?: React.ReactElement<any>;
  /**
   * When the cursorDimension prop is set, the cursor will be a line to inspect the given dimension (either "x" or "y").
   * When this prop is not specified, the cursor will be a 2-dimensional crosshair. For example, if you would like to
   * inspect the time of time-series data, set dimension={"x"}; the cursor will then be a vertical line that will
   * inspect the time value of the current mouse position.
   */
  cursorDimension?: 'x' | 'y';
  /**
   * The cursorLabel prop defines the label that will appear next to the cursor. A label will only appear if cursorLabel
   * is set. This prop should be given as a function of a point (an Object with x and y properties).
   *
   * example: cursorLabel={(point) => point.x}
   */
  cursorLabel?: (point: CoordinatesPropType) => any | void;
  /**
   * The cursorLabelComponent prop takes a component instance which will be used to render a label for the cursor. The
   * new element created from the passed cursorLabelComponent will be supplied with the following props: x, y, active,
   * text. If cursorLabelComponent is omitted, a new ChartLabel will be created with the props described above.
   */
  cursorLabelComponent?: React.ReactElement;
  /**
   * The cursorLabelOffset prop determines the pixel offset of the cursor label from the cursor point. This prop should
   * be an Object with x and y properties, or a number to be used for both dimensions.
   */
  cursorLabelOffset?: number | CoordinatesPropType;
  /**
   * Whenever the mouse is not over the chart, the cursor will not be displayed. If instead you would like to keep it
   * displayed, use the defaultCursorValue prop to set the default value. The prop should be a point (an Object with x
   * and y properties) for 2-dimensional cursors, or a number for 1-dimensional cursors.
   *
   * examples: defaultCursorValue={{x: 1, y: 1}}, defaultCursorValue={0}
   */
  defaultCursorValue?: number | CoordinatesPropType;
  /**
   * The desc prop specifies the description of the chart/SVG to assist with
   * accessibility for screen readers. The more info about the chart provided in
   * the description, the more usable it will be for people using screen readers.
   * This prop defaults to an empty string.
   *
   * @example "Golden retreivers make up 30%, Labs make up 25%, and other dog breeds are
   * not represented above 5% each."
   */
  desc?: string;
  /**
   * When the disable prop is set to true, ChartCursorContainer events will not fire.
   */
  disable?: boolean;
  /**
   * The events prop attaches arbitrary event handlers to the container component.
   * Event handlers passed from other Victory components are called with their
   * corresponding events as well as scale, style, width, height, and data when
   * applicable. Use the invert method to convert event coordinate information to
   * data. `scale.x.invert(evt.offsetX)`.
   *
   * @example {{ onClick: (evt) => alert(`x: ${evt.clientX}, y: ${evt.clientY}`)}}
   */
  events?: React.DOMAttributes<any>;
  /**
   * The height props specifies the height the svg viewBox of the container.
   * This value should be given as a number of pixels. If no height prop
   * is given, the height prop from the child component passed will be used.
   */
  height?: number;
  /**
   * The name prop is used to reference a component instance when defining shared events.
   */
  name?: string;
  /**
   * If provided, the onCursorChange function will be called every time the cursor value changes. onCursorChange is
   * called with value (the updated cursor value) and props (the props used by ChartCursorContainer). A common use for
   * onCursorChange is to save the cursor value to state and use it in another part of the view.
   *
   * example: onCursorChange={(value, props) => this.setState({cursorValue: value})}
   */
  onCursorChange?: (value: CoordinatesPropType, props: VictoryCursorContainerProps) => void;
  /**
   * Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.
   *
   * **This prop should not be set manually.**
   */
  origin?: OriginType;
  /**
   * Victory components can pass a boolean polar prop to specify whether a label is part of a polar chart.
   *
   * **This prop should not be set manually.**
   */
  polar?: boolean;
  /**
   * The portalComponent prop takes a component instance which will be used as a container for children that should
   * render inside a top-level container so that they will always appear above other elements. ChartTooltip renders
   * inside a portal so that tooltips always render above data. VictoryPortal is used to define elements that should
   * render in the portal container. This prop defaults to Portal, and should only be overridden when changing rendered
   * elements from SVG to another type of element e.g., react-native-svg elements.
   */
  portalComponent?: React.ReactElement;
  /**
   * The portalZIndex prop determines the z-index of the div enclosing the portal component. If a portalZIndex prop is
   * not set, the z-index of the enclosing div will be set to 99.
   */
  portalZIndex?: number;
  /**
   * The responsive prop specifies whether the rendered container should be a responsive container
   * with a viewBox attribute, or a static container with absolute width and height.
   *
   * @default true
   */
  responsive?: boolean;
  /**
   * The style prop specifies styles for your ChartContainer. Any valid inline style properties
   * will be applied. Height and width should be specified via the height
   * and width props, as they are used to calculate the alignment of
   * components within the container. Styles from the child component will
   * also be passed, if any exist.
   *
   * @example {border: 1px solid red}
   */
  style?: React.CSSProperties;
  /**
   * The tabIndex prop specifies the description of the chart/SVG to assist with accessibility.
   */
  tabIndex?: number;
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
   * The width props specifies the width of the svg viewBox of the container
   * This value should be given as a number of pixels. If no width prop
   * is given, the width prop from the child component passed will be used.
   */
  width?: number;
}

export const ChartCursorContainer: React.FunctionComponent<ChartCursorContainerProps> = ({
  className,
  themeColor,
  themeVariant,

  // destructure last
  theme = getTheme(themeColor, themeVariant),
  cursorLabelComponent = <ChartLabel />, // Note that Victory provides its own label component here
  ...rest
}: ChartCursorContainerProps) => {
  const chartClassName = getClassName({ className });
  const chartCursorLabelComponent = React.cloneElement(cursorLabelComponent, {
    theme,
    ...cursorLabelComponent.props
  });

  // Note: theme is required by voronoiContainerMixin
  return (
    // Note: className is valid, but Victory is missing a type
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    <VictoryCursorContainer
      className={chartClassName}
      cursorLabelComponent={chartCursorLabelComponent}
      theme={theme}
      {...rest}
    />
  );
};
ChartCursorContainer.defaultProps = (VictoryCursorContainer as any).defaultProps;

// Note: VictoryCursorContainer.defaultEvents & VictoryContainer.role must be hoisted
hoistNonReactStatics(ChartCursorContainer, VictoryCursorContainer);
