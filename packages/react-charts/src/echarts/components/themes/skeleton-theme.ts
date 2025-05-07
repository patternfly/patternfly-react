import chart_echarts_BackgroundColor from '@patternfly/react-tokens/dist/esm/chart_echarts_BackgroundColor';
import chart_echarts_global_axis_axis_line_item_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_axis_line_item_style_Color';
import chart_echarts_global_axis_axis_tick_item_style_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_global_axis_axis_tick_item_style_Color';
import chart_echarts_skeleton_label_Color from '@patternfly/react-tokens/dist/esm/chart_echarts_skeleton_label_Color';

import { ThemeDefinition } from '../themes/Theme';
import { getComputedStyleValue } from '../utils/styles';

interface ColorThemeInterface {
  COLOR_SCALE: string[];
}

/**
 * ECharts skeleton color theme
 *
 * @private Not intended as public API and subject to change
 */
export const ColorTheme = (props: ColorThemeInterface): ThemeDefinition => {
  const { COLOR_SCALE } = props;

  const labelProps = {
    backgroundColor: COLOR_SCALE[0],
    color: getComputedStyleValue(chart_echarts_skeleton_label_Color)
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
    color: COLOR_SCALE,
    backgroundColor: getComputedStyleValue(chart_echarts_BackgroundColor), // See https://echarts.apache.org/en/option.html#backgroundColor
    bar: {
      itemStyle: {
        barBorderColor: COLOR_SCALE[0]
      }
    },
    boxplot: {
      itemStyle: {
        borderColor: COLOR_SCALE[0]
      }
    },
    candlestick: {
      itemStyle: {
        borderColor: COLOR_SCALE[0],
        borderColor0: COLOR_SCALE[1],
        color: COLOR_SCALE[0],
        color0: COLOR_SCALE[1]
      }
    },
    categoryAxis: { ...axisProps },
    dataZoom: {},
    funnel: {
      itemStyle: {
        borderColor: COLOR_SCALE[0]
      }
    },
    gauge: {
      itemStyle: {
        borderColor: COLOR_SCALE[0]
      }
    },
    geo: {
      emphasis: {
        itemStyle: {
          areaColor: COLOR_SCALE[0],
          borderColor: COLOR_SCALE[0]
        },
        label: { ...labelProps }
      },
      itemStyle: {
        areaColor: COLOR_SCALE[0],
        borderColor: COLOR_SCALE[0]
      },
      label: { ...labelProps }
    },
    graph: {
      color: COLOR_SCALE,
      itemStyle: {
        borderColor: COLOR_SCALE[0]
      },
      label: { ...labelProps },
      lineStyle: {
        color: COLOR_SCALE[0]
      }
    },
    label: { ...labelProps },
    legend: {
      textStyle: { ...labelProps }
    },
    line: {},
    logAxis: { ...axisProps },
    map: {
      emphasis: {
        itemStyle: {
          areaColor: COLOR_SCALE[0],
          borderColor: COLOR_SCALE[0]
        },
        label: { ...labelProps }
      },
      itemStyle: {
        areaColor: COLOR_SCALE[0],
        borderColor: COLOR_SCALE[0]
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
        borderColor: COLOR_SCALE[0]
      }
    },
    pie: {
      itemStyle: {
        borderColor: COLOR_SCALE[0]
      }
    },
    radar: {},
    sankey: {
      itemStyle: {
        borderColor: COLOR_SCALE[0]
      }
    },
    scatter: {
      itemStyle: {
        borderColor: COLOR_SCALE[0]
      }
    },
    textStyle: {},
    timeAxis: { ...axisProps },
    timeline: {
      emphasis: {
        controlStyle: {
          color: COLOR_SCALE[0],
          borderColor: COLOR_SCALE[0]
        },
        itemStyle: {
          color: COLOR_SCALE[0]
        },
        label: { ...labelProps }
      },
      checkpointStyle: {
        color: COLOR_SCALE[0],
        borderColor: COLOR_SCALE[0]
      },
      controlStyle: {
        color: COLOR_SCALE[0],
        borderColor: COLOR_SCALE[0]
      },
      itemStyle: {
        color: COLOR_SCALE[0]
      },
      label: { ...labelProps },
      lineStyle: {
        color: COLOR_SCALE[0]
      }
    },
    title: {
      subtextStyle: { ...labelProps },
      textStyle: { ...labelProps }
    },
    toolbox: {
      emphasis: {
        iconStyle: {
          borderColor: COLOR_SCALE[0]
        }
      },
      iconStyle: {
        borderColor: COLOR_SCALE[0]
      }
    },
    tooltip: {
      axisPointer: {
        crossStyle: {
          color: COLOR_SCALE[0]
        },
        lineStyle: {
          color: COLOR_SCALE[0]
        }
      }
    },
    valueAxis: { ...axisProps },
    visualMap: {
      color: COLOR_SCALE
    }
  };
};
