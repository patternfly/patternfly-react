import defaultsDeep from 'lodash/defaultsDeep';

import { ChartsOptionProps } from '../Charts';
import { getMarker, getSymbol } from './symbol';

/**
 * Returns a custom legend tooltip for Line charts
 *
 * @param series
 * @param option
 * @param echart
 * @private Not intended as public API and subject to change
 */
export const getLegendTooltip = (series: any[], option: ChartsOptionProps, echart: any) => {
  const tooltip = option?.tooltip as any;
  const valueFormatter = tooltip?.valueFormatter ? tooltip.valueFormatter : (value: number | string) => value;

  const defaults = {
    confine: true,
    formatter: (params: any) => {
      let result = '';
      params?.map((param, index) => {
        if (index === 0) {
          result += `<p style="text-align:left; padding-bottom: 5px;">${param.name}</p>`;
        }
        const symbol = getSymbol(series, param.seriesIndex, echart);
        const marker = getMarker(series[param.seriesIndex], symbol, param.color);
        const formattedValue = valueFormatter(param.value, param.dataIndex);
        const seriesName = `<span style="margin-left: 10px;">${param.seriesName}</span>`;
        const value = `<strong style="float:right; margin-left: 20px;">${formattedValue}</strong>`;

        result += `<p style="text-align:left;">${marker}${seriesName}${value}</p>`;
      });
      return result;
    },
    trigger: 'axis'
  };
  return defaultsDeep(tooltip, defaults);
};

/**
 * Returns source and target colors from given series
 *
 * @param series
 * @param formatterParams
 * @private Not intended as public API and subject to change
 */
const getItemColor = (series: any[], formatterParams: any) => {
  const serie = series[formatterParams.seriesIndex];
  const sourceData = serie?.data.find((datum: any) => datum.name === formatterParams.data?.source);
  const targetData = serie?.data.find((datum: any) => datum.name === formatterParams.data?.target);
  const sourceColor = sourceData?.itemStyle?.color;
  const targetColor = targetData?.itemStyle?.color;
  return { sourceColor, targetColor };
};

/**
 * Returns a custom legend tooltip for Sankey chart
 *
 * @param series
 * @param option
 * @private Not intended as public API and subject to change
 */
export const getSankeyTooltip = (series: any[], option: ChartsOptionProps) => {
  const symbolSize = '10px';
  const tooltip = option?.tooltip as any;
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
