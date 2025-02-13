/* eslint-disable camelcase */
import chart_echarts_bar_item_style_BarBorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_bar_item_style_BarBorderColor';
import chart_echarts_boxplot_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_boxplot_item_style_BorderWidth';
import chart_echarts_candlestick_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_candlestick_item_style_BorderWidth';
import chart_echarts_datazoom_HandleSize from '@patternfly/react-tokens/dist/esm/chart_echarts_datazoom_HandleSize';
import chart_echarts_funnel_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_funnel_item_style_BorderWidth';
import chart_echarts_gauge_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_gauge_item_style_BorderWidth';
import chart_echarts_geo_emphasis_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_gauge_item_style_BorderWidth';
import chart_echarts_geo_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_gauge_item_style_BorderWidth';
import chart_echarts_graph_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_graph_item_style_BorderWidth';
import chart_echarts_graph_line_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_graph_line_style_BorderWidth';
import chart_echarts_graph_Smooth from '@patternfly/react-tokens/dist/esm/chart_echarts_graph_Smooth';
import chart_echarts_graph_Symbol from '@patternfly/react-tokens/dist/esm/chart_echarts_graph_Symbol';
import chart_echarts_graph_SymbolSize from '@patternfly/react-tokens/dist/esm/chart_echarts_graph_SymbolSize';
import chart_echarts_line_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_line_item_style_BorderWidth';
import chart_echarts_line_line_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_line_line_style_BorderWidth';
import chart_echarts_line_Smooth from '@patternfly/react-tokens/dist/esm/chart_echarts_line_Smooth';
import chart_echarts_line_Symbol from '@patternfly/react-tokens/dist/esm/chart_echarts_line_Symbol';
import chart_echarts_line_SymbolSize from '@patternfly/react-tokens/dist/esm/chart_echarts_line_SymbolSize';
import chart_echarts_map_emphasis_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_map_emphasis_item_style_BorderWidth';
import chart_echarts_map_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_map_item_style_BorderWidth';
import chart_echarts_parallel_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_parallel_item_style_BorderWidth';
import chart_echarts_pie_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_pie_item_style_BorderWidth';
import chart_echarts_radar_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_radar_item_style_BorderWidth';
import chart_echarts_radar_line_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_radar_line_style_BorderWidth';
import chart_echarts_radar_Smooth from '@patternfly/react-tokens/dist/esm/chart_echarts_radar_Smooth';
import chart_echarts_radar_Symbol from '@patternfly/react-tokens/dist/esm/chart_echarts_radar_Symbol';
import chart_echarts_radar_SymbolSize from '@patternfly/react-tokens/dist/esm/chart_echarts_radar_SymbolSize';
import chart_echarts_sankey_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_sankey_item_style_BorderWidth';
import chart_echarts_scatter_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_scatter_item_style_BorderWidth';
import chart_echarts_timeline_control_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_control_style_BorderWidth';
import chart_echarts_timeline_emphasis_control_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_emphasis_control_style_BorderWidth';
import chart_echarts_timeline_item_style_BorderWidth from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_item_style_BorderWidth';
import chart_echarts_timeline_line_style_Width from '@patternfly/react-tokens/dist/esm/chart_echarts_timeline_line_style_Width';
import chart_echarts_tooltip_axis_pointer_cross_style_Width from '@patternfly/react-tokens/dist/esm/chart_echarts_tooltip_axis_pointer_cross_style_Width';
import chart_echarts_tooltip_axis_pointer_line_style_Width from '@patternfly/react-tokens/dist/esm/chart_echarts_tooltip_axis_pointer_line_style_Width';

import { ThemeDefinition } from './Theme';
import { getComputedStyleValue } from '../utils/styles';

interface ThemeInterface {
  isComputedTheme?: boolean;
}

/**
 * Base theme containing EChart properties only
 * @private
 */
export const BaseTheme = (props: ThemeInterface = {}): ThemeDefinition => {
  const { isComputedTheme } = props;

  const getValue = (token) => (isComputedTheme ? getComputedStyleValue(token) : token.var);

  const axisProps = {
    axisLabel: {
      show: true
    },
    axisLine: {
      lineStyle: {},
      show: true
    },
    axisTick: {
      lineStyle: {},
      show: true
    },
    splitArea: {
      areaStyle: {},
      show: false
    },
    splitLine: {
      lineStyle: {},
      show: false
    }
  };

  return {
    bar: {
      itemStyle: {
        barBorderWidth: getValue(chart_echarts_bar_item_style_BarBorderWidth)
      }
    },
    boxplot: {
      itemStyle: {
        borderWidth: getValue(chart_echarts_boxplot_item_style_BorderWidth)
      }
    },
    candlestick: {
      itemStyle: {
        borderWidth: getValue(chart_echarts_candlestick_item_style_BorderWidth)
      }
    },
    categoryAxis: { ...axisProps },
    dataZoom: {
      handleSize: getValue(chart_echarts_datazoom_HandleSize),
      textStyle: {}
    },
    funnel: {
      itemStyle: {
        borderWidth: getValue(chart_echarts_funnel_item_style_BorderWidth)
      }
    },
    gauge: {
      itemStyle: {
        borderWidth: getValue(chart_echarts_gauge_item_style_BorderWidth)
      }
    },
    geo: {
      emphasis: {
        itemStyle: {
          borderWidth: getValue(chart_echarts_geo_emphasis_item_style_BorderWidth)
        },
        label: {}
      },
      itemStyle: {
        borderWidth: getValue(chart_echarts_geo_item_style_BorderWidth)
      },
      label: {}
    },
    graph: {
      itemStyle: {
        borderWidth: getValue(chart_echarts_graph_item_style_BorderWidth)
      },
      label: {},
      lineStyle: {
        width: getValue(chart_echarts_graph_line_style_BorderWidth)
      },
      smooth: getValue(chart_echarts_graph_Smooth),
      symbolSize: getValue(chart_echarts_graph_SymbolSize),
      symbol: getValue(chart_echarts_graph_Symbol)
    },
    label: {},
    legend: {
      textStyle: {}
    },
    line: {
      itemStyle: {
        borderWidth: getValue(chart_echarts_line_item_style_BorderWidth)
      },
      lineStyle: {
        width: getValue(chart_echarts_line_line_style_BorderWidth)
      },
      smooth: getValue(chart_echarts_line_Smooth),
      symbolSize: getValue(chart_echarts_line_SymbolSize),
      symbol: getValue(chart_echarts_line_Symbol)
    },
    logAxis: { ...axisProps },
    map: {
      emphasis: {
        itemStyle: {
          borderWidth: getValue(chart_echarts_map_emphasis_item_style_BorderWidth)
        },
        label: {}
      },
      itemStyle: {
        borderWidth: getValue(chart_echarts_map_item_style_BorderWidth)
      },
      label: {
        label: {}
      }
    },
    markPoint: {
      emphasis: {
        label: {}
      },
      label: {}
    },
    parallel: {
      itemStyle: {
        borderWidth: getValue(chart_echarts_parallel_item_style_BorderWidth)
      }
    },
    pie: {
      itemStyle: {
        borderWidth: getValue(chart_echarts_pie_item_style_BorderWidth)
      }
    },
    radar: {
      itemStyle: {
        borderWidth: getValue(chart_echarts_radar_item_style_BorderWidth)
      },
      lineStyle: {
        width: getValue(chart_echarts_radar_line_style_BorderWidth)
      },
      smooth: getValue(chart_echarts_radar_Smooth),
      symbolSize: getValue(chart_echarts_radar_SymbolSize),
      symbol: getValue(chart_echarts_radar_Symbol)
    },
    sankey: {
      itemStyle: {
        borderWidth: getValue(chart_echarts_sankey_item_style_BorderWidth)
      }
    },
    scatter: {
      itemStyle: {
        borderWidth: getValue(chart_echarts_scatter_item_style_BorderWidth)
      }
    },
    textStyle: {},
    timeAxis: { ...axisProps },
    timeline: {
      emphasis: {
        controlStyle: {
          borderWidth: getValue(chart_echarts_timeline_emphasis_control_style_BorderWidth)
        },
        itemStyle: {},
        label: {}
      },
      checkpointStyle: {},
      controlStyle: {
        borderWidth: getValue(chart_echarts_timeline_control_style_BorderWidth)
      },
      itemStyle: {
        borderWidth: getValue(chart_echarts_timeline_item_style_BorderWidth)
      },
      label: {},
      lineStyle: {
        width: getValue(chart_echarts_timeline_line_style_Width)
      }
    },
    title: {
      subtextStyle: {},
      textStyle: {}
    },
    toolbox: {
      emphasis: {
        iconStyle: {}
      },
      iconStyle: {}
    },
    tooltip: {
      axisPointer: {
        crossStyle: {
          width: getValue(chart_echarts_tooltip_axis_pointer_cross_style_Width)
        },
        lineStyle: {
          width: getValue(chart_echarts_tooltip_axis_pointer_line_style_Width)
        }
      }
    },
    valueAxis: { ...axisProps },
    visualMap: {}
  };
};
