import { ChartCommonStyles } from '../ChartTheme';

interface ChartLabelPaddingXInterface {
  dx?: number; // Horizontal shift from the x coordinate
  chartWidth: number; // Width of chart (e.g., donut) within SVG
  labelPosition?: 'bottom' | 'center' | 'right'; // Position of label
  legendPosition?: 'bottom' | 'bottom-left' | 'right'; // Position of legend
  svgWidth: number; // Overall width of SVG
}

interface ChartLabelPaddingYInterface {
  dy?: number; // Vertical shift from the x coordinate
  chartHeight: number; // Width of chart (e.g., donut) within SVG
  labelPosition?: 'bottom' | 'center' | 'right'; // Position of label
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
      return Math.round(chartHeight / 2) + dy;
    case 'bottom':
      return chartHeight + ChartCommonStyles.label.margin + dy;
    case 'right':
      return Math.round(chartHeight / 2) + dy;
    default:
      return dy;
  }
};
