import { defaults } from 'lodash';
import { Helpers, PaddingProps, TextSize } from 'victory-core';
import { VictoryLegend } from 'victory-legend';
import { ChartLegendOrientation, ChartLegendPosition, ChartLegendProps } from '../ChartLegend';
import { ChartCommonStyles, ChartThemeDefinition } from '../ChartTheme';
import { overpassFontCharacterConstant } from './chart-label';
import { getPieOrigin } from './chart-origin';
import * as React from 'react';

interface ChartLegendInterface {
  allowWrap?: boolean; // Allow legend items to wrap to the next line
  chartType?: string; // The type of chart (e.g., pie) to lookup for props
  dx?: number; // Horizontal shift from the x coordinate
  dy?: number; // Vertical shift from the x coordinate
  height: number; // Overall height of SVG
  legendComponent: React.ReactElement<any>; // The base legend component to render
  orientation?: 'horizontal' | 'vertical'; // Orientation of legend
  padding: PaddingProps; // Chart padding
  position: 'bottom' | 'bottom-left' | 'right'; // The legend position
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
  width: number; // Overall width of SVG
}

interface ChartLegendDimensionsInterface {
  legendData: any[]; // The legend data used to determine width
  legendOrientation: 'horizontal' | 'vertical'; // Orientation of legend
  legendProps: ChartLegendProps; // Legend properties
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
}

interface ChartLegendPositionInterface {
  chartType?: string; // The type of chart (e.g., pie) to lookup for props
  dx?: number; // Horizontal shift from the x coordinate
  dy?: number; // Vertical shift from the x coordinate
  height?: number; // Overall height of SVG
  legendData: any[]; // The legend data used to determine width
  legendOrientation: 'horizontal' | 'vertical'; // Orientation of legend
  legendPosition: 'bottom' | 'bottom-left' | 'right'; // Position of legend
  legendProps: any; // The legend props used to determine width
  padding?: PaddingProps; // Chart padding
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
  width?: number; // Overall width of SVG
}

interface ChartLegendTextMaxSizeInterface {
  legendData: any[]; // The legend data used to determine width
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
}

interface ChartLegendTextSizeInterface {
  legendData: any[]; // The legend data used to determine width
  legendOrientation?: 'horizontal' | 'vertical'; // Orientation of legend
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
}

// Returns a legend which has been positioned per the given chart properties
export const getComputedLegend = ({
  allowWrap = true,
  chartType = 'chart',
  dx = 0,
  dy = 0,
  height,
  legendComponent,
  padding,
  position = ChartCommonStyles.legend.position as ChartLegendPosition,
  theme,
  width,

  // destructure last
  orientation = theme.legend.orientation as ChartLegendOrientation
}: ChartLegendInterface) => {
  // Get the number of legend items per row
  const legendItemsProps = legendComponent.props ? legendComponent.props : {};
  const legendItemsPerRow = allowWrap
    ? getLegendItemsPerRow({
        chartType,
        dx,
        height,
        legendData: legendItemsProps.data,
        legendOrientation: legendItemsProps.legendOrientation ? legendItemsProps.legendOrientation : orientation,
        legendPosition: position,
        legendProps: legendItemsProps,
        padding,
        theme,
        width
      })
    : undefined;

  // Include new itemsPerRow prop when determining x and y position
  const legendPositionProps = defaults({}, legendComponent.props, {
    itemsPerRow: legendItemsPerRow
  });

  const legendX = getLegendX({
    chartType,
    dx,
    height,
    legendData: legendPositionProps.data,
    legendOrientation: legendPositionProps.legendOrientation ? legendPositionProps.legendOrientation : orientation,
    legendPosition: position,
    legendProps: legendPositionProps,
    padding,
    theme,
    width
  });

  const legendY = getLegendY({
    chartType,
    dy,
    height,
    legendData: legendPositionProps.data,
    legendOrientation: legendPositionProps.legendOrientation ? legendPositionProps.legendOrientation : orientation,
    legendProps: legendPositionProps,
    legendPosition: position,
    padding,
    theme,
    width
  });

  // Clone legend with updated props
  const legendProps = defaults({}, legendComponent.props, {
    itemsPerRow: legendItemsPerRow,
    orientation,
    standalone: false,
    theme,
    x: legendX > 0 ? legendX : 0,
    y: legendY > 0 ? legendY : 0
  });
  return React.cloneElement(legendComponent, legendProps);
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
};

// Returns true if the legend is smaller than its container
export const doesLegendFit = ({
  dx = 0,
  height,
  legendPosition,
  legendData,
  legendOrientation,
  legendProps,
  padding,
  theme,
  width
}: ChartLegendPositionInterface) => {
  const { left, right } = Helpers.getPadding({ padding });
  const chartSize = {
    height, // Fixed size
    width: width - left - right
  };
  const legendDimensions = getLegendDimensions({
    legendData,
    legendOrientation,
    legendProps,
    theme
  });

  let occupiedWidth = 0;
  switch (legendPosition) {
    case 'bottom-left':
      occupiedWidth = left + dx;
      break;
    case 'right':
      occupiedWidth = chartSize.width + ChartCommonStyles.legend.margin + left + dx;
      break;
    default:
      occupiedWidth = dx;
      break;
  }
  return width - occupiedWidth > legendDimensions.width;
};

// Returns the number of legend items per row
export const getLegendItemsPerRow = ({
  dx,
  height,
  legendPosition,
  legendData,
  legendOrientation,
  legendProps,
  padding,
  theme,
  width
}: ChartLegendPositionInterface) => {
  let itemsPerRow = legendData ? legendData.length : 0;
  for (let i = itemsPerRow; i > 0; i--) {
    const fits = doesLegendFit({
      dx,
      height,
      legendPosition,
      legendData,
      legendOrientation,
      legendProps: {
        ...legendProps,
        itemsPerRow: i
      },
      padding,
      theme,
      width
    });
    if (fits) {
      itemsPerRow = i;
      break;
    }
  }
  return itemsPerRow;
};

// Returns x coordinate for legend
export const getLegendX = ({ chartType, ...rest }: ChartLegendPositionInterface) =>
  chartType === 'pie' ? getPieLegendX(rest) : getChartLegendX(rest);

// Returns y coordinate for legend
export const getLegendY = ({ chartType, ...rest }: ChartLegendPositionInterface) => {
  switch (chartType) {
    case 'pie':
      return getPieLegendY(rest);
    case 'bullet':
      return getBulletLegendY(rest);
    default:
      return getChartLegendY(rest);
  }
};

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
}: ChartLegendPositionInterface) => {
  const { left, right } = Helpers.getPadding({ padding });
  const chartSize = {
    height, // Fixed size
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
      const legendPadding = (legendDataArr: any[]) => (legendDataArr && legendDataArr.length > 0 ? 17 : 0);
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
}: ChartLegendPositionInterface) => {
  const { top, bottom, left, right } = Helpers.getPadding({ padding });
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
        ? Math.round((width - (legendDimensions.width - textSizeWorkAround)) / 2) + dx
        : dx;
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
}: ChartLegendPositionInterface) => {
  const { top, bottom, left, right } = Helpers.getPadding({ padding });
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
      const legendPadding = (legendDataArr: any[]) => (legendDataArr && legendDataArr.length > 0 ? 2 : 0);
      return originX - legendDimensions.height / 2 + legendPadding(legendData);
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
}: ChartLegendPositionInterface) => {
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
        ? Math.round((width - (legendDimensions.width - textSizeWorkAround)) / 2) + dx
        : dx;
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
}: ChartLegendPositionInterface) => {
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
      const legendPadding = (legendDataArr: any[]) => (legendDataArr && legendDataArr.length > 0 ? 2 : 0);
      return origin.y - legendDimensions.height / 2 + legendPadding(legendData);
    }
    default:
      return dy;
  }
};

// Returns an approximation of longest text width based on legend styles
export const getMaxLegendTextSize = ({ legendData, theme }: ChartLegendTextMaxSizeInterface) => {
  const style: any = theme && theme.legend && theme.legend.style ? theme.legend.style.labels : undefined;
  if (!(legendData && legendData.length)) {
    return 0;
  }

  let result = '';
  legendData.forEach(data => {
    if (data.name && data.name.length > result.length) {
      result = data.name;
    }
  });

  // The approximateTextSize function returns height and width, but Victory incorrectly typed it as number
  const adjustedTextSize: any = TextSize.approximateTextSize(result, {
    ...style,
    characterConstant: overpassFontCharacterConstant
  });

  return adjustedTextSize.width;
};

// Returns an approximation of over-sized text width due to growing character count
//
// See https://github.com/FormidableLabs/victory/issues/864
const getTextSizeWorkAround = ({ legendData, legendOrientation, theme }: ChartLegendTextSizeInterface) => {
  const style: any = theme && theme.legend && theme.legend.style ? theme.legend.style.labels : undefined;
  if (!(legendData && legendData.length)) {
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
  // The approximateTextSize function returns height and width, but Victory incorrectly typed it as number
  const textSize: any = TextSize.approximateTextSize(result, style);
  const adjustedTextSize: any = TextSize.approximateTextSize(result, {
    ...style,
    characterConstant: overpassFontCharacterConstant
  });
  return Math.abs(textSize.width - adjustedTextSize.width);
};
