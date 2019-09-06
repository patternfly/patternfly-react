interface ChartOriginInterface {
  chartHeight: number; // Height of chart (e.g., donut) within SVG
  chartWidth: number; // Width of chart (e.g., donut) within SVG
  dx?: number; // Horizontal shift from the x coordinate
  dy?: number; // vertical shift from the x coordinate
  legendPosition?: 'bottom' | 'bottom-left' | 'right'; // Position of legend
  svgWidth: number; // Overall width of SVG
}

interface ChartOriginXInterface {
  chartWidth: number; // Width of chart (e.g., donut) within SVG
  dx?: number; // Horizontal shift from the x coordinate
  legendPosition?: 'bottom' | 'bottom-left' | 'right'; // Position of legend
  svgWidth: number; // Overall width of SVG
}

interface ChartOriginYInterface {
  chartHeight: number; // Height of chart (e.g., donut) within SVG
  dy?: number; // vertical shift from the x coordinate
  legendPosition?: 'bottom' | 'bottom-left' | 'right'; // Position of legend
}

// Returns origin x and y coordinates
export const getChartOrigin = ({
  chartHeight,
  chartWidth,
  dx = 0,
  dy = 0,
  legendPosition,
  svgWidth
}: ChartOriginInterface) => ({
  x: getChartOriginX({ chartWidth, dx, legendPosition, svgWidth }),
  y: getChartOriginY({ chartHeight, dy, legendPosition })
});

// Returns origin x coordinate
export const getChartOriginX = ({
  chartWidth,
  dx = 0,
  legendPosition,
  svgWidth
}: ChartOriginXInterface) => {
  switch (legendPosition) {
    case 'bottom':
      return Math.round(svgWidth / 2) + dx;
    default:
      return Math.round(chartWidth / 2) + dx;
  }
};

// Returns origin y coordinate
export const getChartOriginY = ({
  chartHeight,
  dy = 0,
  legendPosition
}: ChartOriginYInterface) => {
  switch (legendPosition) {
    default:
      return Math.round(chartHeight / 2) + dy;
  }
};
