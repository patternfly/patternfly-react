interface ChartThemeColorInterface {
  blue: string;
  cyan: string;
  default: string;
  gold: string;
  gray: string;
  green: string;
  multi: string;
  multiOrdered: string;
  multiUnordered: string;
  orange: string;
  purple: string;
}

/**
 * The color family to be applied to a theme. For example, 'blue' represents an ordered list of colors
 * (i.e., a color scale) composed of the blue color family defined by PatternFly core.
 *
 * For example, the 'blue' color scale looks like:
 *
 * chart_color_blue_100
 * chart_color_blue_200
 * chart_color_blue_300
 * chart_color_blue_400
 * chart_color_blue_500
 *
 * In this case, the chart_color_blue_100 value would be applied to the first data point in a chart.
 * The chart_color_blue_200 value would be applied to the second data point in a chart. And so on...
 *
 * If legend data is provided to a chart, those colors would be synced with the legend as well.
 *
 * The 'multiOrdered' color family is intended for ordered charts; donut, pie, bar, & stack
 * The 'multiUnordered' color family is intended for unordered charts; area & line
 * The 'multi' defaults to the 'multiOrdered' color family
 *
 * Note: These values are not intended to be applied directly as a component's fill style. For example, "multi" would
 * not be a valid fill color. Please use chart variables from PatternFly core (e.g., via the react-charts package)
 *
 * @public
 */
export const ChartThemeColor: ChartThemeColorInterface = {
  blue: 'blue',
  cyan: 'cyan',
  default: 'blue',
  gold: 'gold',
  gray: 'gray',
  green: 'green',
  multi: 'multi',
  multiOrdered: 'multi-ordered',
  multiUnordered: 'multi-unordered',
  orange: 'orange',
  purple: 'purple'
};
