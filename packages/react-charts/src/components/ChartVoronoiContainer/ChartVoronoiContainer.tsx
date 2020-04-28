import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryVoronoiContainer, VictoryVoronoiContainerProps } from 'victory-voronoi-container';
import { ChartThemeDefinition } from '../ChartTheme';
import { ChartTooltip } from '../ChartTooltip';
import { getClassName, getTheme } from '../ChartUtils';

export enum ChartVoronoiDimension {
  x = 'x',
  y = 'y'
}

/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
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
   * Specifies the tooltip capability of the container component. A value of true allows the chart to add a
   * ChartTooltip component to the labelComponent property. This is a shortcut to display tooltips when the labels
   * property is also provided.
   */
  allowTooltip?: boolean;
  /**
   * The className prop specifies a className that will be applied to the outer-most div rendered by the container
   */
  className?: string;
  /**
   * The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of
   * the chart. When this prop is set to true, tooltip pointers will still point to the correct data point, but the
   * center of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders.
   */
  constrainToVisibleArea?: boolean;
  /**
   * When the disable prop is set to true, ChartVoronoiContainer events will not fire.
   */
  disable?: boolean;
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
   * When the mouseFollowTooltip prop is set on VictoryVoronoiContainer, The position of the center of the tooltip
   * follows the position of the mouse.
   */
  mouseFollowTooltips?: boolean;
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
   * The style prop specifies styles for your VictoryContainer. Any valid inline style properties
   * will be applied. Height and width should be specified via the height
   * and width props, as they are used to calculate the alignment of
   * components within the container. Styles from the child component will
   * also be passed, if any exist.
   *
   * @example {border: 1px solid red}
   */
  style?: React.CSSProperties;
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
}

export const ChartVoronoiContainer: React.FunctionComponent<ChartVoronoiContainerProps> = ({
  className,
  allowTooltip = true,
  constrainToVisibleArea = false,
  themeColor,
  themeVariant,

  // destructure last
  theme = getTheme(themeColor, themeVariant),
  labelComponent = allowTooltip ? <ChartTooltip /> : undefined,
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
