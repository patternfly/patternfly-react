import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { OriginType } from 'victory-core';
import { VictoryVoronoiContainer, VictoryVoronoiContainerProps } from 'victory-voronoi-container';
import { ChartThemeDefinition } from '../ChartTheme';
import { ChartTooltip } from '../ChartTooltip';
import { getClassName, getTheme } from '../ChartUtils';

export enum ChartVoronoiDimension {
  x = 'x',
  y = 'y'
}

/**
 * See https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/index.d.ts
 * and https://github.com/FormidableLabs/victory/blob/master/packages/victory-voronoi-container/src/index.d.ts
 */
export interface ChartVoronoiContainerProps extends VictoryVoronoiContainerProps {
  /**
   * When the activateData prop is set to true, the active prop will be set to true on all
   * data components within a voronoi area. When this prop is set to false, the onActivated
   * and onDeactivated callbacks will still fire, but no mutations to data components will
   * occur via Victory’s event system.
   */
  activateData?: boolean;
  /**
   * When the activateLabels prop is set to true, the active prop will be set to true on all
   * labels corresponding to points within a voronoi area. When this prop is set to false,
   * the onActivated and onDeactivated callbacks will still fire, but no mutations to label
   * components will occur via Victory’s event system. Labels defined directly on
   * ChartVoronoiContainer via the labels prop will still appear when this prop is set to false.
   */
  activateLabels?: boolean;
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
   * The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of
   * the chart. When this prop is set to true, tooltip pointers will still point to the correct data point, but the
   * center of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders.
   */
  constrainToVisibleArea?: boolean;
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
   * When the disable prop is set to true, ChartVoronoiContainer events will not fire.
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
   * When a labels prop is provided to ChartVoronoiContainer it will render a label component
   * rather than activating labels on the child components it renders. This is useful for
   * creating multi- point tooltips. This prop should be given as a function which will be called
   * once for each active point. The labels function will be called with the arguments point,
   * index, and points, where point refers to a single active point, index refers to the position
   * of that point in the array of active points, and points is an array of all active points.
   */
  labels?: (point: any, index: number, points: any[]) => string;
  /**
   * The labelComponent prop specified the component that will be rendered when labels are defined
   * on ChartVoronoiContainer. If the labels prop is omitted, no label component will be rendered.
   */
  labelComponent?: React.ReactElement<any>;
  /**
   * When the mouseFollowTooltip prop is set on ChartVoronoiContainer, The position of the center of the tooltip
   * follows the position of the mouse.
   */
  mouseFollowTooltips?: boolean;
  /**
   * The name prop is used to reference a component instance when defining shared events.
   */
  name?: string;
  /**
   * The onActivated prop accepts a function to be called whenever new data points are activated.
   * The function is called with the parameters points (an array of active data objects) and props
   * (the props used by ChartVoronoiContainer).
   */
  onActivated?: (points: any[], props: VictoryVoronoiContainerProps) => void;
  /**
   * The onDeactivated prop accepts a function to be called whenever points are deactivated. The
   * function is called with the parameters points (an array of the newly-deactivated data objects)
   * and props (the props used by ChartVoronoiContainer).
   */
  onDeactivated?: (points: any[], props: VictoryVoronoiContainerProps) => void;
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
   * When the radius prop is set, the voronoi areas associated with each data point will be no larger
   * than the given radius. This prop should be given as a number.
   */
  radius?: number;
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
   * The voronoiBlacklist prop is used to specify a list of components to ignore when calculating a
   * shared voronoi diagram. Components with a name prop matching an element in the voronoiBlacklist
   * array will be ignored by ChartVoronoiContainer. Ignored components will never be flagged as
   * active, and will not contribute date to shared tooltips or labels.
   */
  voronoiBlacklist?: string[];
  /**
   * When the voronoiDimension prop is set, voronoi selection will only take the given dimension into
   * account. For example, when dimension is set to “x”, all data points matching a particular x mouse
   * position will be activated regardless of y value. When this prop is not given, voronoi selection
   * is determined by both x any y values.
   */
  voronoiDimension?: 'x' | 'y';
  /**
   * When the voronoiPadding prop is given, the area of the chart that will trigger voronoi events is
   * reduced by the given padding on every side. By default, no padding is applied, and the entire range
   * of a given chart may trigger voronoi events. This prop should be given as a number.
   */
  voronoiPadding?: number;
  /**
   * The width props specifies the width of the svg viewBox of the container
   * This value should be given as a number of pixels. If no width prop
   * is given, the width prop from the child component passed will be used.
   */
  width?: number;
}

export const ChartVoronoiContainer: React.FunctionComponent<ChartVoronoiContainerProps> = ({
  className,
  constrainToVisibleArea = false,
  themeColor,
  themeVariant,

  // destructure last
  theme = getTheme(themeColor, themeVariant),
  labelComponent = <ChartTooltip />, // Note that Victory provides its own tooltip component here
  ...rest
}: ChartVoronoiContainerProps) => {
  const chartClassName = getClassName({ className });
  const chartLabelComponent = React.cloneElement(labelComponent, {
    constrainToVisibleArea,
    theme,
    ...labelComponent.props
  });

  // Note: theme is required by voronoiContainerMixin
  return (
    // Note: className is valid, but Victory is missing a type
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    <VictoryVoronoiContainer className={chartClassName} labelComponent={chartLabelComponent} theme={theme} {...rest} />
  );
};
ChartVoronoiContainer.defaultProps = (VictoryVoronoiContainer as any).defaultProps;

// Note: VictoryVoronoiContainer.defaultEvents & VictoryContainer.role must be hoisted
hoistNonReactStatics(ChartVoronoiContainer, VictoryVoronoiContainer);
