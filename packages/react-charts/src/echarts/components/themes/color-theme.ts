import chart_echarts_BackgroundColor from '@patternfly/react-tokens/dist/esm/chart_echarts_BackgroundColor';
import chart_echarts_bar_item_style_BarBorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_bar_item_style_BarBorderColor';
import chart_echarts_boxplot_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_boxplot_item_style_BorderColor';
import chart_echarts_candlestick_item_style_positive_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_candlestick_item_style_positive_BorderColor';
import chart_echarts_candlestick_item_style_positive_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_candlestick_item_style_positive_Color';
import chart_echarts_candlestick_item_style_negative_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_candlestick_item_style_negative_Color';
import chart_echarts_candlestick_item_style_negative_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_candlestick_item_style_negative_BorderColor';
import chart_echarts_funnel_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_funnel_item_style_BorderColor';
import chart_echarts_gauge_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_gauge_item_style_BorderColor';
import chart_echarts_geo_emphasis_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_geo_emphasis_item_style_BorderColor';
import chart_echarts_geo_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_geo_item_style_BorderColor';
import chart_echarts_global_axis_axis_line_item_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_axis_line_item_style_Color';
import chart_echarts_global_axis_axis_tick_item_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_axis_tick_item_style_Color';
import chart_echarts_global_axis_split_area_area_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_split_area_area_style_Color';
import chart_echarts_global_label_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_label_Color';
import chart_echarts_graph_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_graph_item_style_BorderColor';
import chart_echarts_graph_line_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_graph_line_style_Color';
import chart_echarts_map_emphasis_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_map_emphasis_item_style_BorderColor';
import chart_echarts_map_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_map_item_style_BorderColor';
import chart_echarts_parallel_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_parallel_item_style_BorderColor';
import chart_echarts_pie_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_pie_item_style_BorderColor';
import chart_echarts_sankey_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_sankey_item_style_BorderColor';
import chart_echarts_scatter_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_scatter_item_style_BorderColor';
import chart_echarts_tooltip_axis_pointer_cross_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_tooltip_axis_pointer_cross_style_Color';
import chart_echarts_tooltip_axis_pointer_line_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_tooltip_axis_pointer_line_style_Color';
import chart_echarts_toolbox_emphasis_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_toolbox_emphasis_item_style_BorderColor';
import chart_echarts_toolbox_item_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_toolbox_item_style_BorderColor';
import chart_echarts_timeline_emphasis_control_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_emphasis_control_style_Color';
import chart_echarts_timeline_emphasis_item_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_emphasis_item_style_Color';
import chart_echarts_timeline_emphasis_control_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_emphasis_control_style_BorderColor';
import chart_echarts_timeline_checkpoint_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_checkpoint_style_Color';
import chart_echarts_timeline_checkpoint_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_checkpoint_style_BorderColor';
import chart_echarts_timeline_control_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_control_style_Color';
import chart_echarts_timeline_control_style_BorderColor from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_control_style_BorderColor';
import chart_echarts_timeline_item_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_item_style_Color';
import chart_echarts_timeline_line_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_line_style_Color';
import chart_echarts_tooltip_backgroundColor from '@patternfly/react-tokens/dist/esm/chart_echarts_tooltip_backgroundColor';
import chart_echarts_tooltip_text_Style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_tooltip_text_Style_Color';

import { ThemeDefinition } from './Theme';
import { getComputedStyleValue } from '../utils/styles';

interface ColorThemeInterface {
  COLOR_SCALE: string[];
}

/**
 * ECharts color theme
 *
 * @private Not intended as public API and subject to change
 * @beta
 */
export const ColorTheme = (props: ColorThemeInterface): ThemeDefinition => {
  const { COLOR_SCALE } = props;

  const labelProps = {
    color: getComputedStyleValue(chart_echarts_global_label_Color)
  };

  const axisProps = {
    axisLabel: { ...labelProps },
    axisLine: {
      lineStyle: {
        color: getComputedStyleValue(chart_echarts_global_axis_axis_line_item_style_Color)
      }
    },
    axisTick: {
      lineStyle: {
        color: getComputedStyleValue(chart_echarts_global_axis_axis_tick_item_style_Color)
      }
    },
    splitArea: {
      areaStyle: {
        color: getComputedStyleValue(chart_echarts_global_axis_split_area_area_style_Color)
      }
    },
    splitLine: {
      lineStyle: {
        color: getComputedStyleValue(chart_echarts_global_axis_axis_tick_item_style_Color) // Grid
      }
    }
  };

  return {
    color: COLOR_SCALE, // See https://echarts.apache.org/en/option.html#color
    backgroundColor: getComputedStyleValue(chart_echarts_BackgroundColor), // See https://echarts.apache.org/en/option.html#backgroundColor
    bar: {
      itemStyle: {
        barBorderColor: getComputedStyleValue(chart_echarts_bar_item_style_BarBorderColor)
      }
    },
    boxplot: {
      itemStyle: {
        borderColor: getComputedStyleValue(chart_echarts_boxplot_item_style_BorderColor)
      }
    },
    candlestick: {
      itemStyle: {
        borderColor: getComputedStyleValue(chart_echarts_candlestick_item_style_negative_BorderColor),
        borderColor0: getComputedStyleValue(chart_echarts_candlestick_item_style_positive_BorderColor),
        color: getComputedStyleValue(chart_echarts_candlestick_item_style_negative_Color),
        color0: getComputedStyleValue(chart_echarts_candlestick_item_style_positive_Color)
      }
    },
    categoryAxis: { ...axisProps },
    dataZoom: {},
    funnel: {
      itemStyle: {
        borderColor: getComputedStyleValue(chart_echarts_funnel_item_style_BorderColor)
      }
    },
    gauge: {
      itemStyle: {
        borderColor: getComputedStyleValue(chart_echarts_gauge_item_style_BorderColor)
      }
    },
    geo: {
      emphasis: {
        itemStyle: {
          areaColor: COLOR_SCALE[1],
          borderColor: getComputedStyleValue(chart_echarts_geo_emphasis_item_style_BorderColor)
        },
        label: { ...labelProps }
      },
      itemStyle: {
        areaColor: COLOR_SCALE[0],
        borderColor: getComputedStyleValue(chart_echarts_geo_item_style_BorderColor)
      },
      label: { ...labelProps }
    },
    graph: {
      color: COLOR_SCALE,
      itemStyle: {
        borderColor: getComputedStyleValue(chart_echarts_graph_item_style_BorderColor)
      },
      label: { ...labelProps },
      lineStyle: {
        color: getComputedStyleValue(chart_echarts_graph_line_style_Color)
      }
    },
    label: { ...labelProps },
    legend: {
      textStyle: {
        color: getComputedStyleValue(chart_echarts_global_label_Color)
      }
    },
    line: {},
    logAxis: { ...axisProps },
    map: {
      emphasis: {
        itemStyle: {
          areaColor: COLOR_SCALE[1],
          borderColor: getComputedStyleValue(chart_echarts_map_emphasis_item_style_BorderColor)
        },
        label: { ...labelProps }
      },
      itemStyle: {
        areaColor: COLOR_SCALE[0],
        borderColor: getComputedStyleValue(chart_echarts_map_item_style_BorderColor)
      },
      label: { ...labelProps }
    },
    markPoint: {
      emphasis: {
        label: { ...labelProps }
      },
      label: { ...labelProps }
    },
    parallel: {
      itemStyle: {
        borderColor: getComputedStyleValue(chart_echarts_parallel_item_style_BorderColor)
      }
    },
    pie: {
      itemStyle: {
        borderColor: getComputedStyleValue(chart_echarts_pie_item_style_BorderColor)
      }
    },
    radar: {},
    sankey: {
      itemStyle: {
        borderColor: getComputedStyleValue(chart_echarts_sankey_item_style_BorderColor)
      }
    },
    scatter: {
      itemStyle: {
        borderColor: getComputedStyleValue(chart_echarts_scatter_item_style_BorderColor)
      }
    },
    textStyle: {},
    timeAxis: { ...axisProps },
    timeline: {
      emphasis: {
        controlStyle: {
          color: getComputedStyleValue(chart_echarts_timeline_emphasis_control_style_Color),
          borderColor: getComputedStyleValue(chart_echarts_timeline_emphasis_control_style_BorderColor)
        },
        itemStyle: {
          color: getComputedStyleValue(chart_echarts_timeline_emphasis_item_style_Color)
        },
        label: { ...labelProps }
      },
      checkpointStyle: {
        color: getComputedStyleValue(chart_echarts_timeline_checkpoint_style_Color),
        borderColor: getComputedStyleValue(chart_echarts_timeline_checkpoint_style_BorderColor)
      },
      controlStyle: {
        color: getComputedStyleValue(chart_echarts_timeline_control_style_Color),
        borderColor: getComputedStyleValue(chart_echarts_timeline_control_style_BorderColor)
      },
      itemStyle: {
        color: getComputedStyleValue(chart_echarts_timeline_item_style_Color)
      },
      label: { ...labelProps },
      lineStyle: {
        color: getComputedStyleValue(chart_echarts_timeline_line_style_Color)
      }
    },
    title: {
      subtextStyle: { ...labelProps },
      textStyle: { ...labelProps }
    },
    toolbox: {
      emphasis: {
        iconStyle: {
          borderColor: getComputedStyleValue(chart_echarts_toolbox_emphasis_item_style_BorderColor)
        }
      },
      iconStyle: {
        borderColor: getComputedStyleValue(chart_echarts_toolbox_item_style_BorderColor)
      }
    },
    tooltip: {
      backgroundColor: getComputedStyleValue(chart_echarts_tooltip_backgroundColor),
      axisPointer: {
        crossStyle: {
          color: getComputedStyleValue(chart_echarts_tooltip_axis_pointer_cross_style_Color)
        },
        lineStyle: {
          color: getComputedStyleValue(chart_echarts_tooltip_axis_pointer_line_style_Color)
        }
      },
      textStyle: {
        color: getComputedStyleValue(chart_echarts_tooltip_text_Style_Color)
      }
    },
    valueAxis: { ...axisProps },
    visualMap: {
      color: COLOR_SCALE
    }
  };
};
