/* eslint-disable camelcase */
import chart_echarts_global_label_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_label_Color';
import chart_echarts_global_axis_label_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_label_Color';
import chart_echarts_global_axis_line_item_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_line_item_style_Color';
import chart_echarts_global_axis_tick_item_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_tick_item_style_Color';
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

import { ThemeDefinition } from './Theme';
import { getComputedStyleValue } from '../utils/styles';

interface ColorThemeInterface {
  COLOR_SCALE: string[];
  isComputedTheme?: boolean;
}

/**
 * ECharts color theme
 * @private
 * @beta
 */
export const ColorTheme = (props: ColorThemeInterface): ThemeDefinition => {
  const { COLOR_SCALE, isComputedTheme } = props;

  const getValue = (token) => (isComputedTheme ? getComputedStyleValue(token) : token.var);

  const labelProps = {
    color: getValue(chart_echarts_global_label_Color)
  };

  const axisProps = {
    axisLabel: {
      color: getValue(chart_echarts_global_axis_label_Color)
    },
    axisLine: {
      lineStyle: {
        color: getValue(chart_echarts_global_axis_line_item_style_Color)
      }
    },
    axisTick: {
      lineStyle: {
        color: getValue(chart_echarts_global_axis_tick_item_style_Color)
      }
    },
    splitArea: {
      areaStyle: {
        color: COLOR_SCALE
      }
    },
    splitLine: {
      lineStyle: {
        color: [COLOR_SCALE[0]]
      }
    }
  };

  return {
    color: COLOR_SCALE, // See https://echarts.apache.org/en/option.html#color
    backgroundColor: getValue(chart_echarts_BackgroundColor), // See https://echarts.apache.org/en/option.html#backgroundColor
    bar: {
      itemStyle: {
        barBorderColor: getValue(chart_echarts_bar_item_style_BarBorderColor)
      }
    },
    boxplot: {
      itemStyle: {
        borderColor: getValue(chart_echarts_boxplot_item_style_BorderColor)
      }
    },
    candlestick: {
      itemStyle: {
        borderColor: getValue(chart_echarts_candlestick_item_style_negative_BorderColor),
        borderColor0: getValue(chart_echarts_candlestick_item_style_positive_BorderColor),
        color: getValue(chart_echarts_candlestick_item_style_negative_Color),
        color0: getValue(chart_echarts_candlestick_item_style_positive_Color)
      }
    },
    categoryAxis: { ...axisProps },
    dataZoom: {},
    funnel: {
      itemStyle: {
        borderColor: getValue(chart_echarts_funnel_item_style_BorderColor)
      }
    },
    gauge: {
      itemStyle: {
        borderColor: getValue(chart_echarts_gauge_item_style_BorderColor)
      }
    },
    geo: {
      emphasis: {
        itemStyle: {
          areaColor: COLOR_SCALE[1],
          borderColor: getValue(chart_echarts_geo_emphasis_item_style_BorderColor)
        },
        label: { ...labelProps }
      },
      itemStyle: {
        areaColor: COLOR_SCALE[0],
        borderColor: getValue(chart_echarts_geo_item_style_BorderColor)
      },
      label: { ...labelProps }
    },
    graph: {
      color: COLOR_SCALE,
      itemStyle: {
        borderColor: getValue(chart_echarts_graph_item_style_BorderColor)
      },
      label: { ...labelProps },
      lineStyle: {
        color: getValue(chart_echarts_graph_line_style_Color)
      }
    },
    label: { ...labelProps },
    legend: {
      textStyle: {
        color: getValue(chart_echarts_global_label_Color)
      }
    },
    line: {},
    logAxis: { ...axisProps },
    map: {
      emphasis: {
        itemStyle: {
          areaColor: COLOR_SCALE[1],
          borderColor: getValue(chart_echarts_map_emphasis_item_style_BorderColor)
        },
        label: { ...labelProps }
      },
      itemStyle: {
        areaColor: COLOR_SCALE[0],
        borderColor: getValue(chart_echarts_map_item_style_BorderColor)
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
        borderColor: getValue(chart_echarts_parallel_item_style_BorderColor)
      }
    },
    pie: {
      itemStyle: {
        borderColor: getValue(chart_echarts_pie_item_style_BorderColor)
      }
    },
    radar: {},
    sankey: {
      itemStyle: {
        borderColor: getValue(chart_echarts_sankey_item_style_BorderColor)
      }
    },
    scatter: {
      itemStyle: {
        borderColor: getValue(chart_echarts_scatter_item_style_BorderColor)
      }
    },
    textStyle: {},
    timeAxis: { ...axisProps },
    timeline: {
      emphasis: {
        controlStyle: {
          color: getValue(chart_echarts_timeline_emphasis_control_style_Color),
          borderColor: getValue(chart_echarts_timeline_emphasis_control_style_BorderColor)
        },
        itemStyle: {
          color: getValue(chart_echarts_timeline_emphasis_item_style_Color)
        },
        label: { ...labelProps }
      },
      checkpointStyle: {
        color: getValue(chart_echarts_timeline_checkpoint_style_Color),
        borderColor: getValue(chart_echarts_timeline_checkpoint_style_BorderColor)
      },
      controlStyle: {
        color: getValue(chart_echarts_timeline_control_style_Color),
        borderColor: getValue(chart_echarts_timeline_control_style_BorderColor)
      },
      itemStyle: {
        color: getValue(chart_echarts_timeline_item_style_Color)
      },
      label: { ...labelProps },
      lineStyle: {
        color: getValue(chart_echarts_timeline_line_style_Color)
      }
    },
    title: {
      subtextStyle: { ...labelProps },
      textStyle: { ...labelProps }
    },
    toolbox: {
      emphasis: {
        iconStyle: {
          borderColor: getValue(chart_echarts_toolbox_emphasis_item_style_BorderColor)
        }
      },
      iconStyle: {
        borderColor: getValue(chart_echarts_toolbox_item_style_BorderColor)
      }
    },
    tooltip: {
      axisPointer: {
        crossStyle: {
          color: getValue(chart_echarts_tooltip_axis_pointer_cross_style_Color)
        },
        lineStyle: {
          color: getValue(chart_echarts_tooltip_axis_pointer_line_style_Color)
        }
      }
    },
    valueAxis: { ...axisProps },
    visualMap: {
      color: COLOR_SCALE
    }
  };
};
