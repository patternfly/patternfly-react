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
import { EChartsInitOpts } from 'echarts/types/dist/echarts';

/**
 * Sankey diagram is a specific type of streamgraph (can also be seen as a directed acyclic graph) in which the width
 * of each branch is shown proportionally to the flow quantity. These graphs are typically used to visualize energy or
 * material or cost transfers between processes. They can also visualize the energy accounts, material flow accounts
 * on a regional or national level, and also the breakdown of cost of item or services.
 */
export interface SankeyProps {
  /**
   * The className prop specifies a class name that will be applied to outermost element
   */
  className?: string;
  /**
   * Specify height explicitly, in pixels
   */
  height?: number;
  /**
   * The id prop specifies an ID that will be applied to outermost element.
   */
  id?: string;
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
  /**
   * Optional chart configuration
   *
   * See https://echarts.apache.org/en/api.html#echarts.init
   */
  opts?: EChartsInitOpts;
  /**
   * Series component properties
   *
   * See https://echarts.apache.org/en/option.html#series-sankey
   */
  series: any[];
  /**
   * The theme prop specifies a theme to use for determining styles and layout properties for a component. Any styles or
   * props defined in theme may be overwritten by props specified on the component instance.
   *
   * See https://echarts.apache.org/handbook/en/concepts/style/#theme
   */
  theme?: any; // Todo: Add theme type
  /**
   * Title component properties
   *
   * See https://echarts.apache.org/en/option.html#title
   */
  title?: any;
  /**
   * Tooltip component properties
   *
   * See https://echarts.apache.org/en/option.html#tooltip
   */
  tooltip?: any;
  /**
   * This is the destination label shown in the tooltip
   */
  tooltipDestinationLabel?: string;
  /**
   * The source label shown in the tooltip
   */
  tooltipSourceLabel?: string;
  /**
   * Specify width explicitly, in pixels
   */
  width?: number;
}

export const Sankey: React.FunctionComponent<SankeyProps> = ({
  className,
  height,
  id,
  nodeSelector,
  opts,
  series,

  theme,
  title,
  tooltip = {
    valueFormatter: (value: number | string) => value
  },
  tooltipDestinationLabel = 'Destination',
  tooltipSourceLabel = 'Source',
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

  const getSize = () => ({
    ...(height && { height: `${height}px` }),
    ...(width && { width: `${width}px` })
  });

  const getTooltip = useCallback(() => {
    const symbolSize = '10px';
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
            <p>${tooltipSourceLabel}</p>
            <div style="display: inline-block; background-color: ${sourceColor}; height: ${symbolSize}; width: ${symbolSize};"></div>
            ${params.data.source}
            <p style="padding-top: 10px;">${tooltipDestinationLabel}</p>
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
  }, [getItemColor, tooltipDestinationLabel, tooltipSourceLabel, tooltip]);

  React.useEffect(() => {
    echarts.registerTheme('pf-sankey', chartTheme);
    echart.current = echarts.init(containerRef.current, 'pf-v5-sankey', defaultsDeep(opts, { renderer: 'svg' }));

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
        lineStyle: {
          color: 'source',
          opacity: 0.6
        },
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
  }, [chartTheme, containerRef, getTooltip, opts, series, title, tooltip]);

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

  return <div className={getClassName(className)} id={id} ref={containerRef} style={getSize()} />;
};
Sankey.displayName = 'Sankey';
