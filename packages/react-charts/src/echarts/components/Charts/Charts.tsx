import { FunctionComponent, useEffect } from 'react';
import { useCallback, useReducer, useRef } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import defaultsDeep from 'lodash/defaultsDeep';

import * as echarts from 'echarts/core';
import { EChartsInitOpts } from 'echarts/types/dist/echarts';
import { EChartsOption } from 'echarts/types/dist/option';
import { TooltipOption } from 'echarts/types/dist/shared';

import { getLineSeries } from '../Line';
import { getSankeySeries } from '../Sankey';

import { ThemeDefinition } from '../themes/Theme';
import { getMutationObserver } from '../utils/observe';
import { getClassName } from '../utils/styles';
import { getTheme } from '../utils/theme';
import { getLegendTooltip, getSankeyTooltip } from '../utils/tooltip';
import { ThemeColor } from '../themes/ThemeColor';

/**
 * See https://echarts.apache.org/en/option.html#tooltip
 *
 * @public
 * @beta
 */
export interface TooltipOptionProps extends TooltipOption {
  /**
   * The destination label shown in the tooltip -- for Sankey only
   */
  destinationLabel?: string;
  /**
   * The source label shown in the tooltip -- for Sankey only
   */
  sourceLabel?: string;
}

/**
 * See https://echarts.apache.org/en/option.html
 *
 * @public
 * @beta
 */
export interface ChartsOptionProps extends EChartsOption {
  /**
   * Tooltip component -- see https://echarts.apache.org/en/option.html#tooltip
   */
  tooltip?: TooltipOptionProps | TooltipOptionProps[];
}

/**
 * This component is based on the Apache ECharts chart library. It provides additional functionality, custom
 * components, and theming for PatternFly. This provides a collection of React based components you can use to build
 * PatternFly patterns with consistent markup, styling, and behavior.
 *
 * See https://echarts.apache.org/en/api.html#echarts
 *
 * @public
 * @beta
 */
export interface ChartsProps {
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
   * Flag indicating to use the legend tooltip (default). This may be overridden by the `option.tooltip` property.
   */
  isLegendTooltip?: boolean;
  /**
   * Flag indicating to use the SVG renderer (default). This may be overridden by the `opts.renderer` property.
   */
  isSvgRenderer?: boolean;
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
   * @example <Charts nodeSelector="html" />
   * @example <Charts nodeSelector="#main" />
   * @example <Charts nodeSelector=".chr-scope__default-layout" />
   */
  nodeSelector?: string;
  /**
   * ECharts uses this object to configure its properties; for example, series, title, and tooltip
   *
   * See https://echarts.apache.org/en/option.html
   */
  option?: ChartsOptionProps;
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
   * Specify width explicitly, in pixels
   */
  width?: number;
}
export const Charts: FunctionComponent<ChartsProps> = ({
  className,
  height,
  id,
  isLegendTooltip = true,
  isSvgRenderer = true,
  nodeSelector,
  option,
  opts,
  theme,
  themeColor,
  width,
  ...rest
}: ChartsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const echart = useRef<echarts.ECharts>(null);
  const [update, forceUpdate] = useReducer((x) => x + 1, 0);

  const getSize = () => ({
    ...(height && { height: `${height}px` }),
    ...(width && { width: `${width}px` })
  });

  const getTooltip = useCallback(
    (series: any[], tooltipType: string, isSkeleton: boolean, echart) => {
      // Skeleton should not have any interactions
      if (isSkeleton) {
        return undefined;
      } else if (tooltipType === 'sankey') {
        return getSankeyTooltip(series, option);
      } else if (tooltipType === 'legend') {
        return getLegendTooltip(series, option, echart);
      }
      return option.tooltip;
    },
    [option]
  );

  const getSeries = useCallback(
    (chartTheme: ThemeDefinition, isSkeleton: boolean) => {
      let tooltipType;
      const series: any = cloneDeep(option?.series);
      const newSeries = [];

      series.map((serie: any) => {
        switch (serie.type) {
          case 'sankey':
            tooltipType = 'sankey'; // Overrides legend tooltip
            newSeries.push(getSankeySeries(serie, chartTheme, isSkeleton));
            break;
          case 'line':
            if (!tooltipType) {
              tooltipType = 'legend';
            }
            newSeries.push(getLineSeries(serie, chartTheme, isSkeleton));
            break;
          default:
            newSeries.push(serie);
            break;
        }
      });
      return { series, tooltipType };
    },
    [option?.series]
  );

  useEffect(() => {
    const isSkeleton = themeColor === ThemeColor.skeleton;
    const chartTheme = theme ? theme : getTheme(themeColor);
    const renderer = isSvgRenderer ? 'svg' : 'canvas';

    echart.current = echarts.init(
      containerRef.current,
      chartTheme,
      defaultsDeep(opts, { height, renderer, width }) // height and width are necessary here for unit tests
    );

    const { series, tooltipType } = getSeries(chartTheme, isSkeleton);
    echart.current?.setOption({
      ...option,
      ...(isLegendTooltip && { tooltip: getTooltip(series, tooltipType, isSkeleton, echart.current) }),
      series
    });

    return () => {
      echart.current?.dispose();
    };
  }, [
    containerRef,
    getSeries,
    getTooltip,
    height,
    isLegendTooltip,
    isSvgRenderer,
    option,
    opts,
    theme,
    themeColor,
    update,
    width
  ]);

  // Resize observer
  useEffect(() => {
    echart.current?.resize();
  }, [height, width]);

  // Dark theme observer
  useEffect(() => {
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
Charts.displayName = 'Charts';
