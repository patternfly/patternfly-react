import { VictoryLegend } from 'victory';
import { TextSize } from 'victory-core';
import { ChartLegendProps } from '../ChartLegend';
import { ChartCommonStyles, ChartThemeDefinition } from '../ChartTheme';
import { getPaddingForSide } from "./chart-padding";

interface ChartLegendPaddingXInterface {
  chartWidth: number; // Width of chart (e.g., donut) within SVG
  dx?: number; // Horizontal shift from the x coordinate
  legendData: any[]; // The legend data used to determine width
  legendOrientation: 'horizontal' | 'vertical'; // Orientation of legend
  legendPosition: 'bottom' | 'bottom-left' | 'right'; // Position of legend
  legendProps: any; // The legend props used to determine width
  svgWidth: number; // Overall width of SVG
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
}

interface ChartLegendPaddingYInterface {
  chartHeight: number; // Height of chart (e.g., donut) within SVG
  chartType: string; // The type of chart (e.g., pie) to lookup for props like padding
  dy?: number; // Vertical shift from the x coordinate
  legendData: any[]; // The legend data used to determine width
  legendOrientation: 'horizontal' | 'vertical'; // Orientation of legend
  legendPosition: 'bottom' | 'bottom-left' | 'right'; // Position of legend
  legendProps: any; // The legend props used to determine width
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
}

interface ChartLegendDimensionsInterface {
  legendData: any[]; // The legend data used to determine width
  legendOrientation: 'horizontal' | 'vertical'; // Orientation of legend
  legendProps: ChartLegendProps; // Legend properties
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
}

interface ChartLegendTextSizeInterface {
  legendData: any[]; // The legend data used to determine width
  legendOrientation?: 'horizontal' | 'vertical'; // Orientation of legend
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
}

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
  legendOrientation,
  legendPosition,
  legendProps,
  svgWidth,
  theme
}: ChartLegendPaddingXInterface) => {
  const legendDimensions = getLegendDimensions({
    legendData,
    legendOrientation,
    legendProps,
    theme
  });
  const textSizeWorkAround = getTextSizeWorkAround({
    legendData,
    legendOrientation,
    theme
  });
  switch (legendPosition) {
    case 'bottom':
      return svgWidth > legendDimensions.width - textSizeWorkAround
        ? Math.round((svgWidth - (legendDimensions.width - textSizeWorkAround)) / 2) + dx : dx;
    case 'bottom-left':
      return dx;
    case 'right':
      return chartWidth + ChartCommonStyles.legend.margin + dx;
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
  legendOrientation,
  legendProps,
  theme
}: ChartLegendPaddingYInterface) => {
  // Chart height with padding
  const defaultPadding = {
    bottom: getPaddingForSide('bottom',  theme[chartType as keyof ChartThemeDefinition].padding, 0),
    top: getPaddingForSide('top', theme[chartType as keyof ChartThemeDefinition].padding, 0),
  };
  const chartPadding = defaultPadding.bottom + defaultPadding.top + 4;
  const cHeight = chartHeight ? chartHeight + chartPadding : 0;

  // Legend width with padding
  const legendDimensions = getLegendDimensions({
    legendData,
    legendOrientation,
    legendProps,
    theme
  });
  const legendPadding = (legendData: any[]) => (legendData && legendData.length > 0 ? 15 : 0);
  const lHeight = legendDimensions.height ? legendDimensions.height + legendPadding(legendData) : 0;

  switch (legendPosition) {
    case 'bottom':
    case 'bottom-left':
      return chartHeight + ChartCommonStyles.legend.margin + dy;
    case 'right':
      return cHeight > lHeight ? Math.round((cHeight - lHeight) / 2) + dy : dy;
    default:
      return dy;
  }
};

// Returns an approximation of over-sized text width due to growing character count
//
// See https://github.com/FormidableLabs/victory/issues/864
const getTextSizeWorkAround = ({
  legendData,
  legendOrientation,
  theme
}: ChartLegendTextSizeInterface) => {
  const style = theme.legend.style.labels;
  if (!(legendData && style.fontFamily.includes('overpass'))) {
    return 0;
  }

  // For horizontal legends, account for the growing char count of the last legend item
  let result = legendData[legendData.length - 1].name;

  // For vertical legends, account for the growing char count of the longest legend item
  if (legendOrientation === 'vertical') {
    legendData.forEach(data => {
      if (data.name && data.name.length > result.length) {
        result = data.name;
      }
    });
  }
  const textSize = TextSize.approximateTextSize(result,  style);
  const adjustedTextSize = TextSize.approximateTextSize(result,  {
    ...style,
    characterConstant: 2.5875 // Average pixels per glyph
  });
  return Math.abs(textSize.width - adjustedTextSize.width);
};
