import { VictoryLegend } from 'victory';
import { ChartLegendProps } from '../ChartLegend/ChartLegend';
import { ChartThemeDefinition } from '../ChartTheme/ChartTheme';
import { CommonStyles } from '../ChartTheme/themes/common-theme';

interface ChartLegendPaddingXInterface {
  chartWidth: number; // Width of chart (e.g., donut) within SVG
  dx?: number; // Horizontal shift from the x coordinate
  legendData: any[]; // The legend data used to determine width
  legendOrientation: string; // Orientation of legend (e.g., vertical, horizontal)
  legendPosition: string; // Position of legend (e.g., bottom, right)
  legendWidth: number; // Width of legend within SVG
  svgWidth: number; // Overall width of SVG
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
}

interface ChartLegendPaddingYInterface {
  chartHeight: number; // Height of chart (e.g., donut) within SVG
  chartType: string; // The type of chart (e.g., pie) to lookup for props like padding
  dy?: number; // Vertical shift from the x coordinate
  legendData: any[]; // The legend data used to determine width
  legendHeight: number; // Height of legend within SVG
  legendPosition: string; // Position of legend (e.g., bottom, right)
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
}

interface ChartLegendDimensionsInterface {
  legendData: any[]; // The legend data used to determine width
  legendOrientation: string; // Orientation of legend (e.g., vertical, horizontal)
  legendProps: ChartLegendProps; // Legend properties
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
}

// Returns chart padding
export const getChartPadding = (chartType: string = 'chart', theme: ChartThemeDefinition) => {
  const offset = 4;
  const padding = theme && theme[chartType as keyof ChartThemeDefinition]
    ? theme[chartType as keyof ChartThemeDefinition].padding * 2 : 0;
  return padding + offset;
};


// Returns legend dimensions
export const getLegendDimensions = ({
  legendData,
  legendOrientation,
  legendProps,
  theme
}: ChartLegendDimensionsInterface) => {
  if (legendData || legendProps.data) {
    return (VictoryLegend as any).getDimensions({
      data: legendData,
      orientation: legendOrientation,
      theme,
      ...legendProps // override above
    });
  }
  return {};
}

// Returns x coordinate for legend
export const getLegendX = ({
  chartWidth,
  dx = 0,
  legendData,
  legendPosition,
  legendOrientation,
  legendWidth,
  svgWidth
}: ChartLegendPaddingXInterface) => {
  if (!legendWidth) {
    return 0;
  }
  const borderPadding = getBorderPaddingWorkAround(legendData, legendOrientation);

  const test = Math.round((svgWidth - (legendWidth - borderPadding)) / 2) + dx;

  switch (legendPosition) {
    case 'bottom':
      return svgWidth > legendWidth - borderPadding
        ? Math.round((svgWidth - (legendWidth - borderPadding)) / 2) + dx : dx;
    case 'right':
      return chartWidth + CommonStyles.legend.margin + dx;
    default:
      return dx;
  }
};

// Returns y coordinate for legend
export const getLegendY = ({
  chartHeight,
  dy = 0,
  legendPosition,
  chartType,
  legendData,
  legendHeight,
  theme
}: ChartLegendPaddingYInterface) => {
  const getLegendPadding = (legendData: any[]) => (legendData && legendData.length > 0 ? 15 : 0);
  const dHeight = chartHeight ? chartHeight + getChartPadding(chartType, theme) : 0;
  const lHeight = legendHeight ? legendHeight + getLegendPadding(legendData) : 0;

  switch (legendPosition) {
    case 'bottom':
      return chartHeight + CommonStyles.legend.margin + dy;
    case 'left':
      return dHeight > lHeight ? Math.round((dHeight - lHeight) / 2) + dy : dy;
    case 'right':
      return dHeight > lHeight ? Math.round((dHeight - lHeight) / 2) + dy : dy;
    default:
      return dy;
  }
};

const getBorderPaddingWorkAround = (legendData: any[], legendOrientation: string) => {
  const offset = .4;
  let result = 0;
  if (legendData && legendOrientation === 'vertical') {
    // For vertical legends, the greatest number of chars affects right-side border padding
    legendData.forEach(data => {
      if (data.name && data.name.length > result) {
        result = data.name.length;
      }
    });
  } else if (legendData && legendData[legendData.length - 1].name) {
    // For horizontal legends, the number of chars for the last legend item affects right-side border padding
    result = legendData[legendData.length - 1].name.length;
  }
  return result + result * offset;
};
