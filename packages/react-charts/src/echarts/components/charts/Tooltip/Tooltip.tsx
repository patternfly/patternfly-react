import defaultsDeep from 'lodash/defaultsDeep';

import { SankeyOption, SankeyTooltip } from '../Sankey';

export const getLegendTooltip = (series: any[], option: SankeyOption) => {
  const symbolSize = '10px';
  const tooltip: SankeyTooltip = option?.tooltip as any;
  const valueFormatter = tooltip?.valueFormatter ? tooltip.valueFormatter : (value: number | string) => value;

  const defaults = {
    confine: true,
    formatter: (params: any) => {
      let result = '';
      params?.map((param, index) => {
        if (index === 0) {
          result += `<p style="text-align:left;">${param.name}</p>`;
        }
        // Todo: Replace param.marker with custom icon -- see https://github.com/apache/echarts/issues/19826
        result += `
            <p style="text-align:left;">
              <div style="display: inline-block; background-color: ${param.color}; height: ${symbolSize}; width: ${symbolSize};"></div>
              ${param.seriesName}
              <strong style="float:right; margin-left: 20px">
                ${valueFormatter(param.value, param.dataIndex)}
              </strong>
            </p>
          `;
      });
      return result;
    },
    trigger: 'axis'
  };
  return defaultsDeep(tooltip, defaults);
};
