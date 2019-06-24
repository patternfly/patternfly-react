import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {
  VictoryVoronoiContainer,
  VictoryVoronoiContainerProps
} from 'victory';
import { ChartThemeDefinition } from '../ChartTheme';
import { ChartTooltip } from '../ChartTooltip';
import { getTheme } from '../ChartUtils';

export enum ChartVoronoiDimension {
  x = 'x',
  y = 'y'
};

/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */
export interface ChartVoronoiContainerProps extends VictoryVoronoiContainerProps {
  /**
   * See Victory type docs: https://formidable.com/open-source/victory/docs/victory-voronoi-container
   */
  ' '?: any;
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
  voronoiDimension?: "x" | "y";
  /**
   * When the voronoiPadding prop is given, the area of the chart that will trigger voronoi events is
   * reduced by the given padding on every side. By default, no padding is applied, and the entire range
   * of a given chart may trigger voronoi events. This prop should be given as a number.
   */
  voronoiPadding?: number;
}

export const ChartVoronoiContainer: React.FunctionComponent<ChartVoronoiContainerProps> = ({
  themeColor,
  themeVariant,

  // destructure last
  theme = getTheme(themeColor, themeVariant),
  labelComponent = <ChartTooltip theme={theme} />,
  ...rest
}: ChartVoronoiContainerProps) => {
  // Note: theme is required by voronoiContainerMixin, but VictoryVoronoiContainer is missing a prop type

  // @ts-ignore
  return <VictoryVoronoiContainer labelComponent={labelComponent} theme={theme} {...rest} />;
}
ChartVoronoiContainer.defaultProps = (VictoryVoronoiContainer as any).defaultProps;

// Note: VictoryVoronoiContainer.defaultEvents & VictoryContainer.role must be hoisted
hoistNonReactStatics(ChartVoronoiContainer, VictoryVoronoiContainer);
