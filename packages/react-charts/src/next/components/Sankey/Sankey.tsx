/* eslint-disable camelcase */
import chart_voronoi_flyout_stroke_Fill from '@patternfly/react-tokens/dist/esm/chart_voronoi_flyout_stroke_Fill';
import chart_voronoi_labels_Fill from '@patternfly/react-tokens/dist/esm/chart_voronoi_labels_Fill';

import * as React from 'react';
import * as echarts from 'echarts';
import { useRef } from 'react';
import defaultsDeep from 'lodash/defaultsDeep';

// import { BarChart, SankeyChart } from 'echarts/charts';
// import { CanvasRenderer } from 'echarts/renderers';

// import {
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   DatasetComponent,
//   TransformComponent
// } from 'echarts/components';

// Register the required components
// echarts.use([
//   BarChart,
//   SankeyChart,
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   DatasetComponent,
//   TransformComponent,
//   LabelLayout,
//   UniversalTransition,
//   CanvasRenderer
// ]);

import { theme as chartTheme } from './theme';

/**
 */
export interface SankeyProps {
  destinationLabel?: string;
  height?: number;
  id?: string;
  legend?: {
    symbolSize?: number; // Todo: move into tooltip?
  };
  lineStyle?: any;
  opts?: any;
  series: any[];
  sourceLabel?: string;
  theme?: any;
  title?: any;
  tooltip?: any;
  width?: number;
}

export const Sankey: React.FunctionComponent<SankeyProps> = ({
  destinationLabel = 'Destination',
  height,
  id,
  legend = {
    symbolSize: 10
  },
  lineStyle = {
    color: 'source',
    opacity: 0.6
  },
  opts,
  series,
  sourceLabel = 'Source',
  theme = chartTheme,
  title,
  tooltip = {
    valueFormatter: (value: number | string) => value
  },
  width
}: SankeyProps) => {
  const containerRef = useRef<HTMLDivElement>();
  const echart = useRef<echarts.ECharts>();

  const getItemColor = (params: any) => {
    const serie = series[params.seriesIndex];
    const sourceData = serie?.data.find((datum: any) => datum.name === params.data?.source);
    const targetData = serie?.data.find((datum: any) => datum.name === params.data?.target);
    const sourceColor = sourceData?.itemStyle?.color;
    const targetColor = targetData?.itemStyle?.color;
    return { sourceColor, targetColor };
  };

  const getTooltip = () => {
    const symbolSize = `${legend.symbolSize}px`;
    const defaults = {
      backgroundColor: chart_voronoi_flyout_stroke_Fill.value,
      confine: true,
      formatter: (params: any) => {
        const result = `
          <div style="display: inline-block; background-color: ${params.color}; height: ${symbolSize}; width: ${symbolSize};"></div>
          ${params.name} ${params.value}
        `;
        if (params.data.source && params.data.target) {
          const { sourceColor, targetColor } = getItemColor(params);
          return `
            <p>${sourceLabel}</p>
            <div style="display: inline-block; background-color: ${sourceColor}; height: ${symbolSize}; width: ${symbolSize};"></div>
            ${params.data.source}
            <p style="padding-top: 10px;">${destinationLabel}</p>
            <p style="text-align:left;">
              <div style="display: inline-block; background-color: ${targetColor}; height: ${symbolSize}; width: ${symbolSize};"></div>
              ${params.data.target}
              <strong style="float:right;">
                ${tooltip.valueFormatter(params.value, params.dataIndex)}
              </strong>
            </p>
          `;
        }
        return result.replace(/\s\s+/g, ' ');
      },
      textStyle: {
        color: chart_voronoi_labels_Fill.value
      },
      trigger: 'item',
      triggerOn: 'mousemove'
    };
    return defaultsDeep(tooltip, defaults);
  };

  React.useEffect(() => {
    echarts.registerTheme('pf-v5-sankey', theme);
    echart.current = echarts.init(containerRef.current, 'pf-v5-sankey', opts); // renderer: 'svg'

    const newSeries = series.map((serie: any) => {
      const defaults = {
        data: serie.data.map((datum: any, index: number) => ({
          itemStyle: {
            color: theme?.color[index % theme?.color.length]
          }
        })),
        emphasis: {
          focus: 'adjacency'
        },
        layout: 'none',
        lineStyle,
        type: 'sankey'
      };
      return defaultsDeep(serie, defaults);
    });

    echart.current?.setOption({
      series: newSeries,
      title,
      tooltip: getTooltip()
    });

    return () => {
      echart.current?.dispose();
    };
  }, [containerRef, lineStyle, opts, series, title, tooltip]);

  React.useEffect(() => {
    echart.current?.resize();
  }, [height, width]);

  const getSize = () => ({
    ...(height && { height: `${height}px` }),
    ...(width && { width: `${width}px` })
  });

  return <div id={id} ref={containerRef} style={getSize()} />;
};
Sankey.displayName = 'Sankey';
