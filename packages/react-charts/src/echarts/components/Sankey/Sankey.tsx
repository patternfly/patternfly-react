/* eslint-disable camelcase */
import chart_voronoi_flyout_stroke_Fill from '@patternfly/react-tokens/dist/esm/chart_voronoi_flyout_stroke_Fill';
import chart_voronoi_labels_Fill from '@patternfly/react-tokens/dist/esm/chart_voronoi_labels_Fill';

import * as React from 'react';
import * as echarts from 'echarts';
import { useCallback, useRef, useState } from 'react';
import defaultsDeep from 'lodash/defaultsDeep';
import { getMutationObserver } from '../utils/observe';
import { getComputedStyle } from '../utils/theme';

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

import { getTheme } from './theme';
import { getClassName } from '../utils/misc';

/**
 */
export interface SankeyProps {
  className?: string;
  destinationLabel?: string;
  height?: number;
  id?: string;
  legend?: {
    symbolSize?: number; // Todo: move into tooltip?
  };
  lineStyle?: any;

  /**
   * This creates a Mutation Observer to watch the given DOM selector.
   *
   * When the pf-v6-theme-dark selector is added or removed, this component will be notified to update its computed
   * theme styles. However, if the dark theme is not updated dynamically (e.g., via a toggle), there is no need to add
   * this Mutation Observer.
   *
   * Note: Don't provide ".pf-v6-theme-dark" as the node selector as it won't exist in the page for light theme.
   * The underlying querySelectorAll() function needs to find the element the dark theme selector will be added to.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors
   *
   * @propType string
   * @example <Sankey nodeSelector="html" />
   * @example <Sankey nodeSelector="#main" />
   * @example <Sankey nodeSelector=".chr-scope__default-layout" />
   */
  nodeSelector?: string;
  opts?: any;
  series: any[];
  sourceLabel?: string;
  theme?: any;
  title?: any;
  tooltip?: any;
  width?: number;
}

export const Sankey: React.FunctionComponent<SankeyProps> = ({
  className,
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
  nodeSelector,
  opts,
  series,
  sourceLabel = 'Source',
  theme,
  title,
  tooltip = {
    valueFormatter: (value: number | string) => value
  },
  width
}: SankeyProps) => {
  const containerRef = useRef<HTMLDivElement>();
  const echart = useRef<echarts.ECharts>();
  const [chartTheme, setChartTheme] = useState(theme || getTheme());

  const getItemColor = useCallback(
    (params: any) => {
      const serie = series[params.seriesIndex];
      const sourceData = serie?.data.find((datum: any) => datum.name === params.data?.source);
      const targetData = serie?.data.find((datum: any) => datum.name === params.data?.target);
      const sourceColor = sourceData?.itemStyle?.color;
      const targetColor = targetData?.itemStyle?.color;
      return { sourceColor, targetColor };
    },
    [series]
  );

  const getTooltip = useCallback(() => {
    const symbolSize = `${legend.symbolSize}px`;
    const defaults = {
      backgroundColor: getComputedStyle(chart_voronoi_flyout_stroke_Fill),
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
        color: getComputedStyle(chart_voronoi_labels_Fill)
      },
      trigger: 'item',
      triggerOn: 'mousemove'
    };
    return defaultsDeep(tooltip, defaults);
  }, [destinationLabel, getItemColor, legend.symbolSize, sourceLabel, tooltip]);

  React.useEffect(() => {
    echarts.registerTheme('pf-v5-sankey', chartTheme);
    echart.current = echarts.init(containerRef.current, 'pf-v5-sankey', { renderer: 'svg' }); // renderer: 'svg'

    const newSeries = series.map((serie: any) => {
      const defaults = {
        data: serie.data.map((datum: any, index: number) => ({
          itemStyle: {
            color: chartTheme?.color[index % chartTheme?.color.length]
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
  }, [chartTheme, containerRef, getTooltip, lineStyle, opts, series, title, tooltip]);

  // Resize observer
  React.useEffect(() => {
    echart.current?.resize();
  }, [height, width]);

  // Dark theme observer
  React.useEffect(() => {
    let observer = () => {};
    observer = getMutationObserver(nodeSelector, () => {
      setChartTheme(getTheme());
    });
    return () => {
      observer();
    };
  }, [nodeSelector]);

  const getSize = () => ({
    ...(height && { height: `${height}px` }),
    ...(width && { width: `${width}px` })
  });

  return <div className={getClassName(className)} id={id} ref={containerRef} style={getSize()} />;
};
Sankey.displayName = 'Sankey';
