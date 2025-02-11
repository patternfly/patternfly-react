/* eslint-disable camelcase */
import chart_voronoi_flyout_stroke_Fill from '@patternfly/react-tokens/dist/esm/chart_voronoi_flyout_stroke_Fill';
import chart_voronoi_labels_Fill from '@patternfly/react-tokens/dist/esm/chart_voronoi_labels_Fill';

import * as React from 'react';
import { useCallback, useReducer, useRef } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import defaultsDeep from 'lodash/defaultsDeep';
import { getMutationObserver } from '../utils/observe';
import { getComputedStyleValue } from '../utils/styles';

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
import { getComputedTheme, getTheme } from '../utils/theme';
import { ThemeColor } from '../themes/ThemeColor';

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
   * Flag indicating the theme should use computed property values (default). For Sankey, using CSS variables can cause
   * flashing (e.g., on mouse hover), but computed values eliminate flashing.
   *
   * Note: This is experimental (for testing purposes) and may not apply to all properties nor custom themes
   *
   * @private
   * @hide
   */
  isComputedTheme?: boolean;
  /**
   * Flag indicating to use the legend tooltip (default)
   */
  isLegendTooltip?: boolean;
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
  isComputedTheme = true,
  isLegendTooltip = true,
  nodeSelector,
  option,
  opts,
  theme,
  themeColor,
  tooltipDestinationLabel = 'Destination',
  tooltipSourceLabel = 'Source',
  width,
  ...rest
}: SankeyProps) => {
  const containerRef = useRef<HTMLDivElement>();
  const echart = useRef<echarts.ECharts>();
  const [update, forceUpdate] = useReducer((x) => x + 1, 0);

  const series: any = cloneDeep(option?.series);
  const tooltip: any = cloneDeep(option?.tooltip);

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

  const getLegendTooltip = useCallback(() => {
    const symbolSize = '10px';
    const valueFormatter = tooltip?.valueFormatter ? tooltip.valueFormatter : (value: number | string) => value;
    const defaults = {
      backgroundColor: getComputedStyleValue(chart_voronoi_flyout_stroke_Fill),
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
        color: getComputedStyleValue(chart_voronoi_labels_Fill)
      },
      trigger: 'item',
      triggerOn: 'mousemove'
    };
    return defaultsDeep(tooltip, defaults);
  }, [getItemColor, tooltip, tooltipDestinationLabel, tooltipSourceLabel]);

  React.useEffect(() => {
    const isSkeleton = themeColor === ThemeColor.skeleton;
    const getChartTheme = () => (isComputedTheme ? getComputedTheme(themeColor) : getTheme(themeColor));
    const chartTheme = theme ? theme : getChartTheme();
    echart.current = echarts.init(
      containerRef.current,
      chartTheme,
      defaultsDeep(opts, { height, renderer: 'svg', width })
    );

    const getSeries = () =>
      series.map((serie: any) => {
        const defaults = {
          data: serie.data.map((datum: any, index: number) => ({
            itemStyle: {
              color: chartTheme?.color[index % chartTheme?.color.length]
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
      });

    echart.current?.setOption({
      ...option,
      ...(isLegendTooltip && { tooltip: getLegendTooltip() }),
      ...(isSkeleton && { tooltip: undefined }), // Skeleton should not have any interactions
      series: getSeries()
    });

    return () => {
      echart.current?.dispose();
    };
  }, [containerRef, getLegendTooltip, isComputedTheme, option, opts, series, theme, themeColor, update]);

  // Resize observer
  React.useEffect(() => {
    echart.current?.resize();
  }, [height, width]);

  // Dark theme observer
  React.useEffect(() => {
    let observer = () => {};
    observer = getMutationObserver(nodeSelector, () => {
      forceUpdate();
    });
    return () => {
      observer();
    };
  }, [nodeSelector]);

  return <div className={getClassName(className)} id={id} ref={containerRef} style={getSize()} {...rest} />;
};
Sankey.displayName = 'Sankey';
