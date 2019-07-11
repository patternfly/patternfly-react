import * as React from 'react';
import { ChartLegendOrientation, ChartLegendPosition } from "../ChartLegend";
import { ChartCommonStyles, ChartThemeDefinition } from '../ChartTheme';
import { getLegendX, getLegendY, getTheme } from "../ChartUtils";

export enum ChartLegendConfigChartType {
  chart = 'chart',
  pie = 'pie'
};

/**
 * Helper to position a legend component within a component's SVG
 *
 * Example:
 *
 * <ChartLegendWrapper
 *   chartHeight={200}
 *   chartWidth={600}
 *   position="right"
 *   svgHeight={200}
 *   svgWidth={800}
 * >
 *   <ChartLegend data={[{ name: 'Cats' }, { name: 'Dogs' }]} orientation="vertical"/>
 * </ChartLegendWrapper>
 */
export interface ChartLegendWrapperProps {
  /**
   * Specifies the height of the chart. This value should be given as a number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: When adding a legend, height (the overall SVG height) may need to be larger than chartHeight (the chart size)
   * in order to accommodate the extra legend.
   *
   * By default, chartHeight is the min. of either height or width. This covers most use cases in order to accommodate
   * legends within the same SVG. However, chartHeight (not height) may need to be set in order to adjust the chart
   * height
   */
  chartHeight?: number;
  /**
   * Specifies the width of the chart. This value should be given as a number of pixels.
   *
   * Because Victory renders responsive containers, the width and width props do not determine the width and
   * width of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   *
   * Note: When adding a legend, width (the overall SVG width) may need to be larger than chartHeight (the chart size)
   * in order to accommodate the extra legend.
   *
   * By default, chartHeight is the min. of either width or width. This covers most use cases in order to accommodate
   * legends within the same SVG. However, chartHeight (not width) may need to be set in order to adjust the chart
   * width
   */
  chartWidth?: number;
  /**
   * The type of chart the legend will apply to. Valid types are; 'area', 'bar', 'line', 'pie', and 'stack'
   *
   * Note: This is used to calculate padding defined by the theme
   */
  chartType?: string;
  /**
   * The legend child to render
   */
  children?: React.ReactNode;
  /**
   * Defines a horizontal shift from the x coordinate.
   */
  dx?: number;
  /**
   * Defines a vertical shift from the y coordinate.
   */
  dy?: number;
  /**
   * The orientation prop takes a string that defines whether legend data
   * are displayed in a row or column. When orientation is "horizontal",
   * legend items will be displayed in a single row. When orientation is
   * "vertical", legend items will be displayed in a single column. Line
   * and text-wrapping is not currently supported, so "vertical"
   * orientation is both the default setting and recommended for
   * displaying many series of data.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The legend position relation to the donut chart. Valid values are 'bottom', 'bottom-left', and 'right'
   */
  position?: 'bottom' | 'bottom-left' | 'right';
  /**
   * Specifies the height the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  svgHeight?: number;
  /**
   * Specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  svgWidth?: number;
  /**
   * The theme prop takes a style object with nested data, labels, and parent objects.
   * You can create this object yourself, or you can use a theme provided by
   * When using ChartLegend as a solo component, implement the theme directly on
   * ChartLegend. If you are wrapping ChartLegend in ChartChart or
   * ChartGroup, please call the theme on the outermost wrapper component instead.
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
}

export const ChartLegendWrapper: React.FunctionComponent<ChartLegendWrapperProps> = ({
  chartType = 'chart',
  children,
  dx = 0,
  dy = 0,
  position = ChartCommonStyles.legend.position as ChartLegendPosition,
  themeColor,
  themeVariant,

  // destructure last
  theme = getTheme(themeColor, themeVariant),
  orientation = theme.legend.orientation as ChartLegendOrientation,
  svgHeight = theme.chart.height,
  svgWidth = theme.chart.width,
  chartHeight = svgHeight,
  chartWidth = svgWidth
}: ChartLegendWrapperProps) => {
  // Render children
  const renderChildren = () =>
    React.Children.toArray(children).map((child: any) => {
      const childProps = child.props ? child.props : {};
      if (childProps.data) {
        return React.cloneElement(child as React.ReactElement<any>, {
          orientation,
          standalone: false,
          theme,
          x: getLegendX({
            chartWidth,
            dx,
            legendData: childProps.data,
            legendOrientation: childProps.legendOrientation ? childProps.legendOrientation : orientation,
            legendPosition: position,
            legendProps: childProps,
            theme,
            svgWidth
          }),
          y: getLegendY({
            chartHeight,
            chartType,
            dy,
            legendData: childProps.data,
            legendOrientation: childProps.legendOrientation ? childProps.legendOrientation : orientation,
            legendProps: childProps,
            legendPosition: position,
            theme
          }),
          ...childProps,
        });
      }
      return child;
    });

  return (
    <React.Fragment>
      {renderChildren()}
    </React.Fragment>
  );
};
