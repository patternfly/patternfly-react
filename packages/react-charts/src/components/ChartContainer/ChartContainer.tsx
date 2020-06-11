import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { OriginType, VictoryContainer, VictoryContainerProps } from 'victory-core';
import { ChartThemeDefinition } from '../ChartTheme';
import { getClassName, getTheme } from '../ChartUtils';

/**
 * See https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/index.d.ts
 *
 * Note: VictoryContainer may support other props (e.g., children), but they're undocumented and not typed
 */
export interface ChartContainerProps extends VictoryContainerProps {
  /**
   * The children prop specifies the child or children that will be rendered within the container. It will be set by
   * whatever Victory component is rendering the container.
   *
   * **This prop should not be set manually.**
   */
  children?: React.ReactElement | React.ReactElement[];
  /**
   * The className prop specifies a className that will be applied to the outer-most div rendered by ChartContainer
   */
  className?: string;
  /**
   * The containerId prop may be used to set a deterministic id for the container. When a containerId is not manually
   * set, a unique id will be generated. It is usually necessary to set deterministic ids for automated testing.
   */
  containerId?: number | string;
  /**
   * The containerRef prop may be used to attach a ref to the outermost element rendered by the container.
   *
   * @example containerRef={(ref) => { this.chartRef = ref; }}
   */
  containerRef?: Function;
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
   * render inside a top-level container so that they will always appear above other elements. VictoryTooltip renders
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
   * The title prop specifies the title to be applied to the SVG to assist
   * accessibility for screen readers. The more descriptive this title is, the more
   * useful it will be. If no title prop is passed, it will default to Chart.
   *
   * @example "Popularity of Dog Breeds by Percentage"
   */
  title?: string;
  /**
   * The width props specifies the width of the svg viewBox of the container
   * This value should be given as a number of pixels. If no width prop
   * is given, the width prop from the child component passed will be used.
   */
  width?: number;
}

export const ChartContainer: React.FunctionComponent<ChartContainerProps> = ({
  className,
  themeColor,
  themeVariant,

  // destructure last
  theme = getTheme(themeColor, themeVariant),
  ...rest
}: ChartContainerProps) => {
  const chartClassName = getClassName({ className });

  // Note: className is valid, but Victory is missing a type
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  return <VictoryContainer className={chartClassName} theme={theme} {...rest} />;
};

// Note: VictoryContainer.role must be hoisted
hoistNonReactStatics(ChartContainer, VictoryContainer);
