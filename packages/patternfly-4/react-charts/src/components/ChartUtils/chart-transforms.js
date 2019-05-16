// Returns overall height width including padding
export const getChartPadding = theme => {
  const offset = 4;
  const padding = theme && theme.pie ? theme.pie.padding * 2 : 0;
  return padding + offset;
};

export const getChartTransform = ({ chartDx, chartOrientation, chartWidth, width }) =>
  `translate(${getChartTx({ chartDx, chartOrientation, chartWidth, width })}, 0)`;

// Returns translate x coordinate for chart and title
export const getChartTx = ({ chartDx = 0, chartOrientation, chartWidth, width }) => {
  switch (chartOrientation) {
    case 'right':
      return width > chartWidth ? width - chartWidth + chartDx : 0;
    case 'top':
      return width > chartWidth ? Math.round((width - chartWidth) / 2) : 0;
    default:
      return chartDx;
  }
};

// Returns overall legend height including padding
export const getLegendPadding = legendData => (legendData && legendData.length > 0 ? 15 : 0);

// Returns translate x coordinate for legend
export const getLegendTx = ({ chartOrientation, legendOrientation, legendWidth, theme, width }) => {
  if (!legendWidth) {
    return 0;
  }
  const offset = legendOrientation === 'vertical' ? 22 : 4;
  const gutter = legendOrientation === 'vertical' ? theme.legend.gutter : 0;
  const padding = gutter + offset;
  switch (chartOrientation) {
    case 'left':
      return width > legendWidth ? width - legendWidth : 0;
    case 'top':
      return width > legendWidth - padding ? Math.round((width - (legendWidth - padding)) / 2) : 0;
    default:
      return 0;
  }
};

// Returns legend x coordinate for translate function
export const getLegendTy = ({ chartHeight, chartOrientation, height, legendData, legendHeight, theme }) => {
  const dHeight = chartHeight ? chartHeight + getChartPadding(theme) : 0;
  const lHeight = legendHeight ? legendHeight + getLegendPadding(legendData) : 0;

  switch (chartOrientation) {
    case 'left':
      return dHeight > lHeight ? Math.round((dHeight - lHeight) / 2) : 0;
    case 'right':
      return dHeight > lHeight ? Math.round((dHeight - lHeight) / 2) : 0;
    case 'top':
      return height > lHeight ? height - lHeight : 0;
    default:
      return 0;
  }
};

export const getLegendTransform = ({
  chartHeight,
  chartOrientation,
  height,
  legendData,
  legendHeight,
  legendOrientation,
  legendWidth,
  theme,
  width
}) => {
  const transform = `translate(${getLegendTx({
    chartOrientation,
    legendOrientation,
    legendWidth,
    theme,
    width
  })}, ${getLegendTy({
    chartHeight,
    chartOrientation,
    height,
    legendData,
    legendHeight,
    theme
  })})`;
  return transform;
};
