// Returns chart padding
export const getChartPadding = (chartType = 'chart', theme) => {
  const offset = 4;
  const padding = theme && theme[chartType] ? theme[chartType].padding * 2 : 0;
  return padding + offset;
};

// Returns legend padding
export const getLegendPadding = legendData => (legendData && legendData.length > 0 ? 15 : 0);

// Returns x coordinate for legend
export const getLegendX = ({ chartOrientation, legendOrientation, legendWidth, theme, width }) => {
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

// Returns y coordinate for legend
export const getLegendY = ({
  chartDy = 0,
  chartHeight,
  chartOrientation,
  chartType,
  height,
  legendData,
  legendHeight,
  theme
}) => {
  // Todo: Get padding for other types of charts
  const dHeight = chartHeight ? chartHeight + getChartPadding(chartType, theme) : 0;
  const lHeight = legendHeight ? legendHeight + getLegendPadding(legendData) : 0;

  switch (chartOrientation) {
    case 'left':
      return dHeight > lHeight ? Math.round((dHeight - lHeight) / 2) + chartDy : 0;
    case 'right':
      return dHeight > lHeight ? Math.round((dHeight - lHeight) / 2) + chartDy : 0;
    case 'top':
      return height > lHeight ? height - lHeight + chartDy : 0;
    default:
      return chartDy;
  }
};
