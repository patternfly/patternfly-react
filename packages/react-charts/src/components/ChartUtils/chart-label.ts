import { Helpers, TextSize } from 'victory-core';
import { getPieOrigin } from './chart-origin';
import { ChartCommonStyles, ChartThemeDefinition } from '../ChartTheme';

interface ChartBulletLabelInterface {
  dx?: number; // Horizontal shift from the x coordinate
  dy?: number; // Vertical shift from the x coordinate
  chartHeight?: number; // Width of chart within SVG
  chartWidth?: number; // Width of chart (e.g., donut) within SVG
  labelPosition?: 'bottom' | 'left' | 'top' | 'top-left'; // Position of label
  legendPosition?: 'bottom' | 'bottom-left' | 'right'; // Position of legend
  svgHeight?: number; // Overall height of SVG
  svgWidth?: number; // Overall width of SVG
  width?: number; // Chart width
}

interface ChartPieLabelInterface {
  dx?: number; // Horizontal shift from the x coordinate
  dy?: number; // Horizontal shift from the y coordinate
  height: number; // Chart height
  labelPosition?: 'bottom' | 'center' | 'right'; // Position of label
  legendPosition?: 'bottom' | 'right'; // Position of legend
  padding: any; // Chart padding
  width: number; // Chart width
}

interface ChartLabelTextSizeInterface {
  text: any; // The text to size
  theme: ChartThemeDefinition; // The theme that will be applied to the chart
}

// Returns x coordinate for bullet labels
export const getBulletLabelX = ({ chartWidth, dx = 0, labelPosition }: ChartBulletLabelInterface) =>
  labelPosition === 'top' && chartWidth ? Math.round(chartWidth / 2) : dx;

// Returns y coordinate for bullet labels
export const getBulletLabelY = ({ chartHeight, dy = 0, labelPosition }: ChartBulletLabelInterface) => {
  switch (labelPosition) {
    case 'bottom':
      return chartHeight + ChartCommonStyles.label.margin + dy;
    case 'left':
      return chartHeight ? Math.round(chartHeight / 2) + dy : dy;
    default:
      return dy;
  }
};

// Returns x coordinate for pie labels
export const getPieLabelX = ({
  dx = 0,
  height,
  labelPosition,
  legendPosition,
  padding,
  width
}: ChartPieLabelInterface) => {
  const origin = getPieOrigin({ height, padding, width });
  const radius = Helpers.getRadius({ height, width, padding });

  switch (labelPosition) {
    case 'bottom':
    case 'center':
      return origin.x + dx;
    case 'right':
      switch (legendPosition) {
        case 'bottom':
          return origin.x + ChartCommonStyles.label.margin + dx + radius;
        case 'right':
          return origin.x + ChartCommonStyles.label.margin + dx;
        default:
          return dx;
      }
    default:
      return dx;
  }
};

// Returns x coordinate for pie labels
export const getPieLabelY = ({ dy = 0, height, labelPosition, padding, width }: ChartPieLabelInterface) => {
  const origin = getPieOrigin({ height, padding, width });
  const radius = Helpers.getRadius({ height, width, padding });

  switch (labelPosition) {
    case 'center':
    case 'right':
      return origin.y + dy;
    case 'bottom':
      return origin.y + radius + ChartCommonStyles.label.margin * 2 + dy;
    default:
      return dy;
  }
};

// Average pixels per glyph for overpass / Red Hat fonts
export const overpassFontCharacterConstant = '2.5875';

// Returns an approximate size for the give text
export const getLabelTextSize = ({ text, theme }: ChartLabelTextSizeInterface): { height: number; width: number } => {
  const style: any = theme.legend.style.labels;

  // The approximateTextSize function returns height and width, but Victory incorrectly typed it as number
  return TextSize.approximateTextSize(text, {
    ...style,
    characterConstant: overpassFontCharacterConstant
  }) as any;
};
