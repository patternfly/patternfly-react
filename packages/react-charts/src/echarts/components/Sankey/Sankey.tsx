/* eslint-disable camelcase */
import chart_voronoi_flyout_stroke_Fill from '@patternfly/react-tokens/dist/esm/chart_voronoi_flyout_stroke_Fill';
import chart_voronoi_labels_Fill from '@patternfly/react-tokens/dist/esm/chart_voronoi_labels_Fill';

import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import defaultsDeep from 'lodash/defaultsDeep';
import { getMutationObserver } from '../utils/observe';
import { getComputedValue } from '../utils/styles';

import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts/types/dist/option';
import { SankeyChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

// Register minimal required components
echarts.use([SankeyChart, SVGRenderer, TitleComponent, TooltipComponent]);

import { EChartsInitOpts } from 'echarts/types/dist/echarts';
import { ThemeDefinition } from '../themes/Theme';
import { getClassName } from '../utils/styles';
import { getTheme } from '../utils/theme';

/**
 * The Sankey diagram is a specific type of streamgraph (can also be seen as a directed acyclic graph) in which the
 * width of each branch is shown proportionally to the flow quantity. These graphs are typically used to visualize
 * energy or material or cost transfers between processes. They can also visualize the energy accounts, material flow
 * accounts on a regional or national level, and also the breakdown of cost of item or services.
 *
 * Note: Only the minimum requirements for Samkey are imported from echarts. This includes components to support
 * the series, title, and tooltip properties. To include a toolbox; for example, you must include the component
 * (in addition to toolbox props) like so:
 *
 * import * as echarts from 'echarts/core';
 * import { ToolboxComponent } from 'echarts/components';
 * echarts.use([ToolboxComponent]);
 *
 * @beta
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
   * ECharts uses this object to configure its properties; for example, series, title, and tooltip
   *
   * See https://echarts.apache.org/en/option.html
   */
  option?: EChartsOption;
  /**
   * Optional chart configuration
   *
   * See https://echarts.apache.org/en/api.html#echarts.init
   */
  opts?: EChartsInitOpts;
  /**
   * The theme prop specifies a theme to use for determining styles and layout properties for a component. Any styles or
   * props defined in theme may be overwritten by props specified on the component instance.
   *
   * See https://echarts.apache.org/handbook/en/concepts/style/#theme
   */
  theme?: ThemeDefinition;
  /**
   * Specifies the theme color. Valid values are 'blue', 'green', 'multi', etc.
   *
   * Note: Not compatible with theme prop
   *
   * @example themeColor={ChartThemeColor.blue}
   */
  themeColor?: string;
  /**
   * The destination label shown in the tooltip
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
  option,
  opts,
  theme,
  themeColor,
  tooltipDestinationLabel = 'Destination',
  tooltipSourceLabel = 'Source',
  width
}: SankeyProps) => {
  const containerRef = useRef<HTMLDivElement>();
  const echart = useRef<echarts.ECharts>();
  const [chartTheme, setChartTheme] = useState(theme || getTheme(themeColor));

  const getItemColor = useCallback(
    (params: any) => {
      const serie = option?.series[params.seriesIndex];
      const sourceData = serie?.data.find((datum: any) => datum.name === params.data?.source);
      const targetData = serie?.data.find((datum: any) => datum.name === params.data?.target);
      const sourceColor = sourceData?.itemStyle?.color;
      const targetColor = targetData?.itemStyle?.color;
      return { sourceColor, targetColor };
    },
    [option?.series]
  );

  const getSize = () => ({
    ...(height && { height: `${height}px` }),
    ...(width && { width: `${width}px` })
  });

  const getTooltip = useCallback(() => {
    const symbolSize = '10px';
    const tooltip: any = option?.tooltip; // Workaround for CommonTooltipOption
    const valueFormatter = tooltip?.valueFormatter ? tooltip.valueFormatter : (value: number | string) => value;
    const defaults = {
      backgroundColor: getComputedValue(chart_voronoi_flyout_stroke_Fill),
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
                ${valueFormatter(params.value, params.dataIndex)}
              </strong>
            </p>
          `;
        }
        return result.replace(/\s\s+/g, ' ');
      },
      textStyle: {
        color: getComputedValue(chart_voronoi_labels_Fill)
      },
      trigger: 'item',
      triggerOn: 'mousemove'
    };
    return defaultsDeep(option?.tooltip, defaults);
  }, [getItemColor, option?.tooltip, tooltipDestinationLabel, tooltipSourceLabel]);

  React.useEffect(() => {
    echarts.registerTheme('pf-sankey', chartTheme);
    echart.current = echarts.init(containerRef.current, 'pf-v6-sankey', defaultsDeep(opts, { renderer: 'svg' }));

    const getSeries = () => {
      const series: any = option?.series; // Workaround for SeriesOption type
      return series.map((serie: any) => {
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
    };
    echart.current?.setOption({
      ...option,
      series: getSeries(),
      title: option?.title,
      tooltip: getTooltip()
    });

    return () => {
      echart.current?.dispose();
    };
  }, [chartTheme, containerRef, getTooltip, option, opts]);

  // Resize observer
  React.useEffect(() => {
    echart.current?.resize();
  }, [height, width]);

  // Dark theme observer
  React.useEffect(() => {
    let observer = () => {};
    observer = getMutationObserver(nodeSelector, () => {
      setChartTheme(theme || getTheme(themeColor));
    });
    return () => {
      observer();
    };
  }, [nodeSelector]);

  return <div className={getClassName(className)} id={id} ref={containerRef} style={getSize()} />;
};
Sankey.displayName = 'Sankey';
