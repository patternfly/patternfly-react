import { VictoryLegend } from 'victory';
import { Helpers, TextSize } from 'victory-core';
import { ChartLegendProps } from '../ChartLegend';
import { ChartCommonStyles, ChartThemeDefinition } from '../ChartTheme';
import { overpassFontCharacterConstant } from './chart-label';
import {getPieOrigin} from "./chart-origin";

interface ChartLegendInterface {
  chartType?: string; // The type of chart (e.g., pie) to lookup for props
  dx?: number; // Horizontal shift from the x coordinate
  dy?: number; // Vertical shift from the x coordinate
  height?: number; // Overall height of SVG
  legendData: any[]; // The legend data used to determine width
  legendOrientation: 'horizontal' | 'vertical'; // Orientation of legend
  legendPosition: 'bottom' | 'bottom-left' | 'right'; // Position of legend
  legendProps: any; // The legend props used to determine width
  padding?: any; // Chart padding
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
  width?: number; // Overall width of SVG
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
};

// Returns x coordinate for legend
export const getLegendX = ({
  chartType,
  ...rest
}: ChartLegendInterface) => (chartType === 'pie') ? getPieLegendX(rest) : getChartLegendX(rest);

// Returns y coordinate for legend
export const getLegendY = ({
  chartType,
  ...rest
}: ChartLegendInterface) => {
  switch (chartType) {
    case 'pie':
      return getPieLegendY(rest);
    case 'bullet':
      return getBulletLegendY(rest);
    default:
      return getChartLegendY(rest);
  }
}

// Returns y coordinate for bullet legends
export const getBulletLegendY = ({
  dy = 0,
  height,
  legendPosition,
  legendData,
  legendOrientation,
  legendProps,
  padding,
  theme,
  width
}: ChartLegendInterface) => {
  const { left, right } = Helpers.getPadding({padding});
  const chartSize = {
    height: height, // Fixed size
    width: width - left - right
  };

  switch (legendPosition) {
    case 'bottom':
    case 'bottom-left':
      return chartSize.height + ChartCommonStyles.legend.margin + dy;
    case 'right': {
      // Legend height with padding
      const legendDimensions = getLegendDimensions({
        legendData,
        legendOrientation,
        legendProps,
        theme
      });
      const legendPadding = (legendData: any[]) => (legendData && legendData.length > 0 ? 17 : 0);
      return (chartSize.height - legendDimensions.height) / 2 + legendPadding(legendData);
    }
    default:
      return dy;
  }
};

// Returns x coordinate for chart legends
export const getChartLegendX = ({
  dx = 0,
  height,
  legendData,
  legendOrientation,
  legendPosition,
  legendProps,
  padding,
  theme,
  width
}: ChartLegendInterface) => {
  const { top, bottom, left, right } = Helpers.getPadding({padding});
  const chartSize = {
    height: Math.abs(height - (bottom + top)),
    width: Math.abs(width - (left + right))
  };
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
      return width > legendDimensions.width - textSizeWorkAround
        ? Math.round((width - (legendDimensions.width - textSizeWorkAround)) / 2) + dx : dx;
    case 'bottom-left':
      return left + dx;
    case 'right':
      return chartSize.width + ChartCommonStyles.legend.margin + left + dx;
    default:
      return dx;
  }
};

// Returns y coordinate for chart legends
export const getChartLegendY = ({
  dy = 0,
  height,
  legendPosition,
  legendData,
  legendOrientation,
  legendProps,
  padding,
  theme,
  width
}: ChartLegendInterface) => {
  const { top, bottom, left, right } = Helpers.getPadding({padding});
  const chartSize = {
    height: Math.abs(height - (bottom + top)),
    width: Math.abs(width - (left + right))
  };

  switch (legendPosition) {
    case 'bottom':
    case 'bottom-left':
      return chartSize.height + ChartCommonStyles.legend.margin * 2 + top + dy;
    case 'right': {
      // Legend height with padding
      const legendDimensions = getLegendDimensions({
        legendData,
        legendOrientation,
        legendProps,
        theme
      });
      const originX = chartSize.height / 2 + top;
      const legendPadding = (legendData: any[]) => (legendData && legendData.length > 0 ? 2 : 0);
      return (originX - legendDimensions.height / 2) + legendPadding(legendData);
    }
    default:
      return dy;
  }
};

// Returns x coordinate for pie legends
export const getPieLegendX = ({
  dx = 0,
  height,
  legendData,
  legendOrientation,
  legendPosition,
  legendProps,
  padding,
  theme,
  width
}: ChartLegendInterface) => {
  const origin = getPieOrigin({ height, padding, width });
  const radius = Helpers.getRadius({ height, width, padding });
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
      return width > legendDimensions.width - textSizeWorkAround
        ? Math.round((width - (legendDimensions.width - textSizeWorkAround)) / 2) + dx : dx;
    case 'right':
      return origin.x + ChartCommonStyles.label.margin + dx + radius;
    default:
      return dx;
  }
};

// Returns y coordinate for pie legends
export const getPieLegendY = ({
  dy = 0,
  height,
  legendPosition,
  legendData,
  legendOrientation,
  legendProps,
  padding,
  theme,
  width
}: ChartLegendInterface) => {
  const origin = getPieOrigin({ height, padding, width });
  const radius = Helpers.getRadius({ height, width, padding });

  switch (legendPosition) {
    case 'bottom':
      return origin.y + ChartCommonStyles.legend.margin + radius + dy;
    case 'right': {
      // Legend height with padding
      const legendDimensions = getLegendDimensions({
        legendData,
        legendOrientation,
        legendProps,
        theme
      });
      const legendPadding = (legendData: any[]) => (legendData && legendData.length > 0 ? 2 : 0);
      return (origin.y - legendDimensions.height / 2) + legendPadding(legendData);
    }
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
  if (!(legendData && legendData.length)) {
    return 0;
  }

  // For horizontal legends, account for the growing char count of the last legend item
  let result = legendData[legendData.length - 1].name;

  // For vertical legends, account for the growing char count of the longest legend item
  if (legendOrientation === 'vertical') {
    legendData.forEach((data) => {
      if (data.name && data.name.length > result.length) {
        result = data.name;
      }
    });
  }
  const textSize = TextSize.approximateTextSize(result,  style);
  const adjustedTextSize = TextSize.approximateTextSize(result,  {
    ...style,
    characterConstant: overpassFontCharacterConstant
  });
  return Math.abs(textSize.width - adjustedTextSize.width);
};
