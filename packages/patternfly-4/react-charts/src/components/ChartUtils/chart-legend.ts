import { ChartThemeDefinition } from '../ChartTheme/ChartTheme';

interface ChartLegendPaddingXInterface {
  chartOrientation: string;
  legendOrientation: string;
  legendWidth: number;
  theme: ChartThemeDefinition;
  width: number;
}

interface ChartLegendPaddingYInterface {
  chartDy?: number;
  chartHeight: number;
  chartOrientation: string;
  chartType: string;
  height: number;
  legendData: any[]
  legendHeight: number;
  theme: ChartThemeDefinition;
}

// Returns chart padding
export const getChartPadding = (chartType: string = 'chart', theme: ChartThemeDefinition) => {
  const offset = 4;
  const padding = theme && theme[chartType as keyof ChartThemeDefinition]
    ? theme[chartType as keyof ChartThemeDefinition].padding * 2 : 0;
  return padding + offset;
};

// Returns legend padding
export const getLegendPadding = (legendData: any[]) => (legendData && legendData.length > 0 ? 15 : 0);

// Returns x coordinate for legend
export const getLegendX = ({
  chartOrientation,
  legendOrientation,
  legendWidth,
  theme,
  width
}: ChartLegendPaddingXInterface) => {
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
}: ChartLegendPaddingYInterface) => {
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
