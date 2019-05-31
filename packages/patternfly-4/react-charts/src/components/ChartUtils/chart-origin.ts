interface ChartOriginInterface {
  chartDx?: number;
  chartDy?: number;
  chartHeight: number;
  chartOrientation: string;
  chartWidth: number;
  height: number;
  width: number;
}

interface ChartOriginXInterface {
  chartDx?: number;
  chartOrientation: string;
  chartWidth: number;
  width: number;
}

interface ChartOriginYInterface {
  chartDy?: number;
  chartHeight: number;
  chartOrientation: string;
  height: number;
}

// Returns origin x and y coordinates
export const getChartOrigin = ({
  chartDx = 0,
  chartDy = 0,
  chartHeight,
  chartOrientation,
  chartWidth,
  height,
  width
}: ChartOriginInterface) => ({
  x: getChartOriginX({ chartDx, chartOrientation, chartWidth, width }),
  y: getChartOriginY({ chartDy, chartHeight, chartOrientation, height })
});

// Returns origin x coordinate
export const getChartOriginX = ({ chartDx = 0, chartOrientation, chartWidth, width }: ChartOriginXInterface) => {
  switch (chartOrientation) {
    case 'left':
      return (chartWidth ? Math.round(chartWidth / 2) : 0) + chartDx;
    case 'right':
      return (width > chartWidth ? Math.round(width - chartWidth / 2) : 0) + chartDx;
    case 'top':
      return (width ? Math.round(width / 2) : 0) + chartDx;
    default:
      return 0;
  }
};

// Returns origin y coordinate
export const getChartOriginY = ({ chartDy = 0, chartHeight, chartOrientation, height }: ChartOriginYInterface) => {
  switch (chartOrientation) {
    case 'bottom':
      return chartDy; // TBD...
    default:
      return (chartHeight ? Math.round(chartHeight / 2) : 0) + chartDy;
  }
};
