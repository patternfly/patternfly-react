import { EChartsInitOpts } from 'echarts/types/dist/echarts';
import { EChartsOption } from 'echarts/types/dist/option';
import {
  AngleAxisOption,
  AriaOption,
  AxisPointerOption,
  BrushOption,
  CalendarOption,
  DatasetOption,
  DataZoomComponentOption,
  GeoOption,
  GraphicComponentLooseOption,
  GridOption,
  LegendComponentOption,
  ParallelCoordinateSystemOption,
  PolarOption,
  RadarOption,
  RadiusAxisOption,
  SingleAxisOption,
  TimelineOption,
  TitleOption,
  ToolboxComponentOption,
  VisualMapComponentOption,
  XAXisOption,
  YAXisOption
} from 'echarts/types/dist/shared';

// The properties below exist to document properties in the example docs. Some EChart types are not exported and too
// complex to recreate here. Attempting to duplicate each EChart type would be error-prone. For documentation purposes,
// we shall define simple types here, which avoids having to duplicate EChart's complex object types.

/**
 * See https://echarts.apache.org/en/option.html#tooltip
 *
 * @private Not intended as public API and subject to change
 */
export interface TooltipOptionProps {
  /**
   * Whether to show tooltip content all the time -- see https://echarts.apache.org/en/option.html#tooltip.alwaysShowContent
   */
  alwaysShowContent?: boolean;
  /**
   * Which DOM element to append the tooltip to -- see https://echarts.apache.org/en/option.html#tooltip.appendTo
   */
  appendTo?: string | HTMLElement | Function;
  /**
   * Configuration item for axisPointer -- see https://echarts.apache.org/en/option.html#tooltip.axisPointer
   */
  axisPointer?: Object;
  /**
   * The background color of tooltip's floating layer -- see https://echarts.apache.org/en/option.html#tooltip.backgroundColor
   */
  backgroundColor?: string;
  /**
   * The border color of tooltip's floating layer -- see https://echarts.apache.org/en/option.html#tooltip.borderColor
   */
  borderColor?: string;
  /**
   * The border width of tooltip's floating layer -- see https://echarts.apache.org/en/option.html#tooltip.borderWidth
   */
  borderWidth?: number;
  /**
   * Specify the classes for the tooltip root DOM -- see https://echarts.apache.org/en/option.html#tooltip.className
   */
  className?: string;
  /**
   * Whether confine tooltip content in the view rect of chart instance -- see https://echarts.apache.org/en/option.html#tooltip.confine
   */
  confine?: boolean;
  /**
   * The destination label shown in the tooltip -- for Sankey only
   */
  destinationLabel?: string;
  /**
   * Whether mouse is allowed to enter the floating layer of tooltip -- see https://echarts.apache.org/en/option.html#tooltip.enterable
   */
  enterable?: boolean;
  /**
   * Extra CSS style for floating layer -- see https://echarts.apache.org/en/option.html#tooltip.extraCssText
   */
  extraCssText?: string;
  /**
   * The content formatter of tooltip's floating layer -- see https://echarts.apache.org/en/option.html#tooltip.formatter
   */
  formatter?: string | Function;
  /**
   * Delay time for hiding tooltip -- see https://echarts.apache.org/en/option.html#tooltip.hideDelay
   */
  hideDelay?: number;
  /**
   * Tooltip order for multiple series -- see https://echarts.apache.org/en/option.html#tooltip.order
   */
  order?: string;
  /**
   * The floating layer of tooltip space around content -- see https://echarts.apache.org/en/option.html#tooltip.padding
   */
  padding?: number;
  /**
   * The position of the tooltip's floating layer -- see https://echarts.apache.org/en/option.html#tooltip.position
   */
  position?: string[];
  /**
   * Render mode for tooltip -- see https://echarts.apache.org/en/option.html#tooltip.renderMode
   */
  renderMode?: string;
  /**
   * Whether to show the tooltip component -- see https://echarts.apache.org/en/option.html#tooltip.show
   */
  show?: boolean;
  /**
   * Whether to show the tooltip floating layer -- see https://echarts.apache.org/en/option.html#tooltip.showContent
   */
  showContent?: boolean;
  /**
   * Delay time for showing tooltip -- see https://echarts.apache.org/en/option.html#tooltip.showDelay
   */
  showDelay?: number;
  /**
   * The source label shown in the tooltip -- for Sankey only
   */
  sourceLabel?: string;
  /**
   * The text style of tooltip's floating layer -- see https://echarts.apache.org/en/option.html#tooltip.textStyle
   */
  textStyle?: Object;
  /**
   * The transition duration of tooltip's animation, in seconds -- see https://echarts.apache.org/en/option.html#tooltip.transitionDuration
   */
  transitionDuration?: number;
  /**
   * Type of triggering -- see https://echarts.apache.org/en/option.html#tooltip.trigger
   */
  trigger?: string;
  /**
   * Conditions to trigger tooltip -- see https://echarts.apache.org/en/option.html#tooltip.triggerOn
   */
  triggerOn?: 'mousemove' | 'click' | 'mousemove|click' | 'none';
  /**
   * Callback function for formatting the value section in tooltip -- see https://echarts.apache.org/en/option.html#tooltip.valueFormatter
   */
  valueFormatter?: string;
}

/**
 * See https://echarts.apache.org/en/option.html
 *
 * @private Not intended as public API and subject to change
 */
export interface ChartsOptionProps {
  /**
   * The angle axis in Polar Coordinate -- see https://echarts.apache.org/en/option.html#angleAxis
   */
  angleAxis?: AngleAxisOption | AngleAxisOption[];
  /**
   * Whether to enable animation -- see https://echarts.apache.org/en/option.html#animation
   */
  animation?: boolean;
  /**
   * Delay before updating the first animation -- see https://echarts.apache.org/en/option.html#animationDelay
   */
  animationDelay?: number;
  /**
   * Delay before updating animation -- see https://echarts.apache.org/en/option.html#animationDelayUpdate
   */
  animationDelayUpdate?: number;
  /**
   * Duration of the first animation -- see https://echarts.apache.org/en/option.html#animationDuration
   */
  animationDuration?: number;
  /**
   * Time for animation to complete -- see https://echarts.apache.org/en/option.html#animationDurationUpdate
   */
  animationDurationUpdate?: number;
  /**
   * Easing method used for the first animation -- see https://echarts.apache.org/en/option.html#animationEasing
   */
  animationEasing?: string;
  /**
   * Easing method used for animation -- see https://echarts.apache.org/en/option.html#animationEasingUpdate
   */
  animationEasingUpdate?: string;
  /**
   * Whether to set graphic number threshold to animation -- see https://echarts.apache.org/en/option.html#animationThreshold
   */
  animationThreshold?: number;
  /**
   * The W3C has developed the WAI-ARIA, the Accessible Rich Internet Applications Suite, which is dedicated to making web content and web applications accessible -- see https://echarts.apache.org/en/option.html#aria
   */
  aria?: AriaOption;
  /**
   * This is the global configurations of axisPointer -- see https://echarts.apache.org/en/option.html#axisPointer
   */
  axisPointer?: AxisPointerOption | AxisPointerOption[];
  /**
   * Background color - see https://echarts.apache.org/en/option.html#backgroundColor
   */
  backgroundColor?: string;
  /**
   * Sets the type of compositing operation to apply when drawing a new shape -- see https://echarts.apache.org/en/option.html#blendMode
   */
  blendMode?: string;
  /**
   * Brush is an area-selecting component -- see https://echarts.apache.org/en/option.html#brush
   */
  brush?: BrushOption | BrushOption[];
  /**
   * Calendar coordinates -- see https://echarts.apache.org/en/option.html#calendar
   */
  calendar?: CalendarOption | CalendarOption[];
  /**
   * The color list of palette -- see https://echarts.apache.org/en/option.html#color
   */
  color?: string[];
  /**
   * Dataset brings convenience in data management separated with styles and enables data reuse by different series -- see https://echarts.apache.org/en/option.html#dataset
   */
  dataset?: DatasetOption | DatasetOption[];
  /**
   * Data zoom component is used for zooming a specific area -- see https://echarts.apache.org/en/option.html#dataZoom
   */
  dataZoom?: DataZoomComponentOption | DataZoomComponentOption[];
  /**
   * ECharts will automatically detect it via backgroundColor by default and adjust the text color accordingly - see https://echarts.apache.org/en/option.html#darkMode
   */
  darkMode?: boolean | 'auto';
  /**
   * ECharts will automatically detect it via backgroundColor by default and adjust the text color accordingly -- see https://echarts.apache.org/en/option.html#darkMode
   */
  /**
   * Geographic coordinate system component -- see https://echarts.apache.org/en/option.html#geo
   */
  geo?: GeoOption | GeoOption[];
  /**
   * Graphic component enables creating graphic elements in ECharts -- see https://echarts.apache.org/en/option.html#graphic
   */
  graphic?: GraphicComponentLooseOption | GraphicComponentLooseOption[];
  /**
   * Drawing grid in rectangular coordinate -- see https://echarts.apache.org/en/option.html#grid
   */
  grid?: GridOption | GridOption[];
  /**
   * When the number of element of the whole chart is larger than hoverLayerThreshold, a separate hover layer is used to render hovered elements -- see https://echarts.apache.org/en/option.html#hoverLayerThreshold
   */
  hoverLayerThreshold?: number;
  /**
   * Legend component -- see https://echarts.apache.org/en/option.html#legend
   */
  legend?: LegendComponentOption | LegendComponentOption[];
  /**
   * See Responsive Mobile-End for details -- see https://echarts.apache.org/en/option.html#media
   */
  media?: Object;
  /**
   * Option array used in timeline -- see https://echarts.apache.org/en/option.html#options
   */
  options?: EChartsOption[];
  /**
   * Parallel Coordinates is a common way of visualizing high-dimensional geometry and analyzing multivariate data -- see https://echarts.apache.org/en/option.html#parallel
   */
  parallel?: ParallelCoordinateSystemOption | ParallelCoordinateSystemOption[];
  /**
   * This component is the coordinate axis for parallel coordinate -- see https://echarts.apache.org/en/option.html#parallelAxis
   *
   * @type ParallelAxisOption | ParallelAxisOption[]
   */
  parallelAxis?: Object;
  /**
   * Polar coordinate can be used in scatter and line chart -- see https://echarts.apache.org/en/option.html#polar
   */
  polar?: PolarOption | PolarOption[];
  /**
   * Coordinate for radar charts -- see https://echarts.apache.org/en/option.html#radar
   */
  radar?: RadarOption | RadarOption[];
  /**
   * Radial axis of polar coordinate -- see https://echarts.apache.org/en/option.html#radiusAxis
   */
  radiusAxis?: RadiusAxisOption | RadiusAxisOption[];
  /**
   * Properties for various chart types -- see https://echarts.apache.org/en/option.html#series
   *
   * @type SeriesOption | SeriesOption[]
   */
  series?: Object;
  /**
   * An axis with a single dimension -- see https://echarts.apache.org/en/option.html#singleAxis
   */
  singleAxis?: SingleAxisOption | SingleAxisOption[];
  /**
   * Animation configurations of state switchment -- see https://echarts.apache.org/en/option.html#stateAnimation
   */
  stateAnimation?: Object;
  /**
   * Timeline component -- see https://echarts.apache.org/en/option.html#timeline
   *
   * @type TimelineOption | SliderTimelineOption
   */
  timeline?: TimelineOption | Object;
  /**
   * Title component, including main title and subtitle -- see https://echarts.apache.org/en/option.html#title
   */
  title?: TitleOption | TitleOption[];
  /**
   * A group of utility tools -- see https://echarts.apache.org/en/option.html#toolbox
   */
  toolbox?: ToolboxComponentOption | ToolboxComponentOption[];
  /**
   * Tooltip component -- see https://echarts.apache.org/en/option.html#tooltip
   */
  tooltip?: TooltipOptionProps | TooltipOptionProps[];
  /**
   * Whether to use UTC in display -- see https://echarts.apache.org/en/option.html#useUTC
   */
  useUTC?: boolean;
  /**
   * Visual map is a type of component for visual encoding -- see https://echarts.apache.org/en/option.html#visualMap
   */
  visualMap?: VisualMapComponentOption | VisualMapComponentOption[];
  /**
   * The x-axis in cartesian(rectangular) coordinate -- see https://echarts.apache.org/en/option.html#xAxis
   */
  xAxis?: XAXisOption | XAXisOption[];
  /**
   * The y-axis in cartesian(rectangular) coordinate -- see https://echarts.apache.org/en/option.html#yAxis
   */
  yAxis?: YAXisOption | YAXisOption[];
}

/**
 * This component is based on the Apache ECharts chart library. It provides additional functionality, custom
 * components, and theming for PatternFly. This provides a collection of React based components you can use to build
 * PatternFly patterns with consistent markup, styling, and behavior.
 *
 * See https://echarts.apache.org/en/api.html#echarts
 *
 * @private Not intended as public API and subject to change
 * @beta
 */
export interface Charts {
  /**
   * The className prop specifies a class name that will be applied to outermost element
   */
  className?: string;
  /**
   * Specify height explicitly, in pixels
   */
  height?: number;
  /**
   * The id prop specifies an ID that will be applied to outermost element.
   */
  id?: string;
  /**
   * Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.
   */
  isLegendTooltip?: boolean;
  /**
   * Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.
   */
  isSvgRenderer?: boolean;
  /**
   * This creates a Mutation Observer to watch the given DOM selector.
   *
   * When the pf-v6-theme-dark selector is added or removed, this component will be notified to update its computed
   * theme styles. However, if the dark theme is not updated dynamically (e.g., via a toggle), there is no need to add
   * this Mutation Observer.
   *
   * Note: Don't provide ".pf-v6-theme-dark" as the node selector as it won't exist in the page for light theme.
   * The underlying querySelectorAll() function needs to find the element the dark theme selector will be added to.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors
   *
   * @propType string
   * @example <Charts nodeSelector="html" />
   * @example <Charts nodeSelector="#main" />
   * @example <Charts nodeSelector=".chr-scope__default-layout" />
   */
  nodeSelector?: string;
  /**
   * ECharts uses this object to configure its properties; for example, series, title, and tooltip
   *
   * See https://echarts.apache.org/en/option.html
   */
  option?: ChartsOptionProps;
  /**
   * Optional chart configuration
   *
   * See https://echarts.apache.org/en/api.html#echarts.init
   */
  opts?: EChartsInitOpts;
  /**
   * The theme prop specifies a theme to use for determining styles and layout properties for a component. Any styles or
   * props defined in theme may be overwritten by props specified on the component instance.
   *
   * See https://echarts.apache.org/handbook/en/concepts/style/#theme
   *
   * @type ThemeDefinition
   */
  theme?: any;
  /**
   * Specifies the theme color. Valid values are 'blue', 'green', 'multi', etc.
   *
   * Note: Not compatible with theme prop
   *
   * @example themeColor={ChartThemeColor.blue}
   */
  themeColor?: string;
  /**
   * Specify width explicitly, in pixels
   */
  width?: number;
}
