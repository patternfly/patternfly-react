import {ChartCommonStyles, ChartThemeDefinition} from '../ChartTheme';
import { TextSize } from 'victory-core';

interface ChartLabelPaddingXInterface {
  dx?: number; // Horizontal shift from the x coordinate
  chartWidth: number; // Width of chart (e.g., donut) within SVG
  labelPosition?: 'bottom' | 'center' | 'left' | 'right' | 'top' | 'top-left'; // Position of label
  legendPosition?: 'bottom' | 'bottom-left' | 'right'; // Position of legend
  svgWidth?: number; // Overall width of SVG
}

interface ChartLabelPaddingYInterface {
  dy?: number; // Vertical shift from the x coordinate
  chartHeight: number; // Width of chart (e.g., donut) within SVG
  labelPosition?: 'bottom' | 'center' | 'left' | 'right' | 'top' | 'top-left'; // Position of label
}

interface ChartLabelTextSizeInterface {
  text: any; // The text to size
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
}

// Returns x coordinate for label
export const getLabelX = ({
  chartWidth,
  dx = 0,
  labelPosition,
  legendPosition,
  svgWidth
}: ChartLabelPaddingXInterface) => {
  if (!chartWidth) {
    return 0;
  }
  switch (labelPosition) {
    case 'center':
      switch (legendPosition) {
        case 'bottom':
          return Math.round(svgWidth / 2) + dx;
        default:
          return Math.round(chartWidth / 2) + dx;
      }
    case 'bottom':
    case 'top':
      return Math.round(chartWidth / 2) + dx;
    case 'right':
      switch (legendPosition) {
        case 'bottom':
          return Math.round(svgWidth / 2) + Math.round(chartWidth / 2) + ChartCommonStyles.label.margin + dx;
        case 'right':
          return chartWidth + ChartCommonStyles.label.margin + dx;
        default:
          return dx;
      }
    case 'left':
    case 'top-left':
    default:
      return dx;
  }
};

// Returns y coordinate for label
export const getLabelY = ({
  chartHeight,
  dy = 0,
  labelPosition
}: ChartLabelPaddingYInterface) => {
  if (!chartHeight) {
    return 0;
  }
  switch (labelPosition) {
    case 'center':
    case 'left':
    case 'right':
      return Math.round(chartHeight / 2) + dy;
    case 'bottom':
      return chartHeight + ChartCommonStyles.label.margin + dy;
    case 'top':
    case 'top-left':
    default:
      return dy;
  }
};

// Average pixels per glyph for overpass / Red Hat fonts
export const overpassFontCharacterConstant = 2.5875;

// Returns an approximate size for the give text
export const getLabelTextSize = ({
  text,
  theme
}: ChartLabelTextSizeInterface): {height: number, width: number} => {
  const style = theme.legend.style.labels;
  return TextSize.approximateTextSize(text,  {
    ...style,
    characterConstant: overpassFontCharacterConstant
  });
};
