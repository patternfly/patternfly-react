import defaultsDeep from 'lodash/defaultsDeep';

import { EChartsOption } from 'echarts/types/dist/option';
import { ThemeDefinition } from '../../themes/Theme';
import { TooltipOption } from 'echarts/types/dist/shared';

/**
 * ECharts uses this object to configure tooltip properties
 *
 * See https://echarts.apache.org/en/option.html#tooltip
 *
 * @beta
 */
export interface SankeyTooltip extends TooltipOption {
  /**
   * The destination label shown in the tooltip
   */
  destinationLabel?: string;
  /**
   * The source label shown in the tooltip
   */
  sourceLabel?: string;
}

/**
 * ECharts uses this object to configure its properties; for example, series, title, and tooltip
 *
 * See https://echarts.apache.org/en/option.html
 *
 * @beta
 */
export interface SankeyOption extends EChartsOption {
  /**
   * The chart tooltip
   */
  tooltip?: SankeyTooltip | SankeyTooltip[];
}

const getItemColor = (series: any[], formatterParams: any) => {
  const serie = series[formatterParams.seriesIndex];
  const sourceData = serie?.data.find((datum: any) => datum.name === formatterParams.data?.source);
  const targetData = serie?.data.find((datum: any) => datum.name === formatterParams.data?.target);
  const sourceColor = sourceData?.itemStyle?.color;
  const targetColor = targetData?.itemStyle?.color;
  return { sourceColor, targetColor };
};

export const getSankeyTooltip = (series: any[], option: SankeyOption) => {
  const symbolSize = '10px';
  const tooltip: SankeyTooltip = option?.tooltip as any;
  const sourceLabel = tooltip?.sourceLabel ? tooltip.sourceLabel : '';
  const destinationLabel = tooltip?.destinationLabel ? tooltip.destinationLabel : '';
  const valueFormatter = tooltip?.valueFormatter ? tooltip.valueFormatter : (value: number | string) => value;

  const defaults = {
    confine: true,
    formatter: (params: any) => {
      const result = `
          <div style="display: inline-block; background-color: ${params.color}; height: ${symbolSize}; width: ${symbolSize};"></div>
          ${params.name} ${params.value}
        `;
      if (params?.data?.source && params?.data?.target) {
        const { sourceColor, targetColor } = getItemColor(series, params);
        return `
            <p>${sourceLabel}</p>
            <div style="display: inline-block; background-color: ${sourceColor}; height: ${symbolSize}; width: ${symbolSize};"></div>
            ${params.data.source}
            <p style="padding-top: 10px;">${destinationLabel}</p>
            <p style="text-align:left;">
              <div style="display: inline-block; background-color: ${targetColor}; height: ${symbolSize}; width: ${symbolSize};"></div>
              ${params.data.target}
              <strong style="float:right;">
                ${valueFormatter(params.value, params.dataIndex)}
              </strong>
            </p>
          `;
      }
      return result.replace(/\s\s+/g, ' ');
    },
    trigger: 'item',
    triggerOn: 'mousemove'
  };
  return defaultsDeep(tooltip, defaults);
};

export const getSankeySeries = (serie: any, theme: ThemeDefinition, isSkeleton: boolean) => {
  const defaults = {
    data: serie.data.map((datum: any, index: number) => ({
      itemStyle: {
        color: theme?.color[index % theme?.color.length]
      }
    })),
    ...(isSkeleton ? { draggable: false } : {}),
    emphasis: {
      ...(isSkeleton ? { disabled: true } : { focus: 'adjacency' })
    },
    layout: 'none',
    lineStyle: {
      color: 'source',
      opacity: 0.6
    },
    type: 'sankey'
  };
  return defaultsDeep(serie, defaults);
};
