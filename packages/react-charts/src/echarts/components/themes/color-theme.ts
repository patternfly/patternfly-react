/* eslint-disable camelcase */
import { ThemeDefinition } from './Theme';
import { getComputedValue } from '../utils/styles';

import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import chart_axis_axis_label_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_axis_axis_label_stroke_Color';
import chart_axis_axis_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_axis_axis_stroke_Color';
import chart_candelstick_candle_positive_Color from '@patternfly/react-tokens/dist/esm/chart_candelstick_candle_positive_Color';
import chart_candelstick_candle_negative_Color from '@patternfly/react-tokens/dist/esm/chart_candelstick_candle_negative_Color';
import chart_tooltip_flyoutStyle_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_tooltip_flyoutStyle_stroke_Color';

interface ColorThemeInterface {
  COLOR_SCALE: string[];
}

/**
 * ECharts color theme
 * @private
 * @beta
 */
export const ColorTheme = (props: ColorThemeInterface): ThemeDefinition => {
  const { COLOR_SCALE } = props;

  const axisProps = {
    axisLabel: {
      color: getComputedValue(chart_axis_axis_label_stroke_Color)
    },
    axisLine: {
      lineStyle: {
        color: getComputedValue(chart_axis_axis_stroke_Color)
      }
    },
    axisTick: {
      lineStyle: {
        color: getComputedValue(chart_axis_axis_stroke_Color)
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
    backgroundColor: 'rgba(0,0,0,0)', // See https://echarts.apache.org/en/option.html#backgroundColor
    bar: {
      itemStyle: {
        barBorderColor: getComputedValue(chart_axis_axis_stroke_Color)
      }
    },
    boxplot: {
      itemStyle: {
        borderColor: getComputedValue(chart_axis_axis_stroke_Color)
      }
    },
    candlestick: {
      itemStyle: {
        borderColor: getComputedValue(chart_candelstick_candle_negative_Color),
        borderColor0: getComputedValue(chart_candelstick_candle_positive_Color),
        color: getComputedValue(chart_candelstick_candle_negative_Color),
        color0: getComputedValue(chart_candelstick_candle_positive_Color)
      }
    },
    categoryAxis: { ...axisProps },
    dataZoom: {},
    funnel: {
      itemStyle: {
        borderColor: getComputedValue(chart_axis_axis_stroke_Color)
      }
    },
    gauge: {
      itemStyle: {
        borderColor: getComputedValue(chart_axis_axis_stroke_Color)
      }
    },
    geo: {
      emphasis: {
        itemStyle: {
          areaColor: COLOR_SCALE[0],
          borderColor: getComputedValue(chart_tooltip_flyoutStyle_stroke_Color)
        },
        label: {
          color: getComputedValue(chart_global_label_Fill)
        }
      },
      itemStyle: {
        areaColor: '#eee',
        borderColor: getComputedValue(chart_tooltip_flyoutStyle_stroke_Color)
      },
      label: {
        color: getComputedValue(chart_global_label_Fill)
      }
    },
    graph: {
      color: COLOR_SCALE,
      itemStyle: {
        borderColor: getComputedValue(chart_axis_axis_stroke_Color)
      },
      label: {
        color: getComputedValue(chart_global_label_Fill)
      },
      lineStyle: {
        color: getComputedValue(chart_global_label_Fill)
      }
    },
    label: {
      color: getComputedValue(chart_global_label_Fill)
    },
    legend: {
      textStyle: {
        color: getComputedValue(chart_global_label_Fill)
      }
    },
    line: {},
    logAxis: { ...axisProps },
    map: {
      emphasis: {
        itemStyle: {
          areaColor: COLOR_SCALE[0],
          borderColor: getComputedValue(chart_tooltip_flyoutStyle_stroke_Color)
        },
        label: {
          color: getComputedValue(chart_global_label_Fill)
        }
      },
      itemStyle: {
        areaColor: '#eee',
        borderColor: getComputedValue(chart_tooltip_flyoutStyle_stroke_Color)
      },
      label: {
        color: getComputedValue(chart_global_label_Fill)
      }
    },
    markPoint: {
      emphasis: {
        label: {
          color: getComputedValue(chart_global_label_Fill)
        }
      },
      label: {
        color: getComputedValue(chart_global_label_Fill)
      }
    },
    parallel: {
      itemStyle: {
        borderColor: getComputedValue(chart_axis_axis_stroke_Color)
      }
    },
    pie: {
      itemStyle: {
        borderColor: getComputedValue(chart_axis_axis_stroke_Color)
      }
    },
    radar: {},
    sankey: {
      itemStyle: {
        borderColor: getComputedValue(chart_axis_axis_stroke_Color)
      }
    },
    scatter: {
      itemStyle: {
        borderColor: getComputedValue(chart_axis_axis_stroke_Color)
      }
    },
    textStyle: {},
    timeAxis: { ...axisProps },
    timeline: {
      // See https://echarts.apache.org/examples/en/editor.html?c=doc-example%2Fmix-timeline-all&edit=1&reset=1
      emphasis: {
        controlStyle: {
          color: '#a4b1d7',
          borderColor: '#a4b1d7'
        },
        itemStyle: {
          color: '#ffffff'
        },
        label: {
          color: getComputedValue(chart_global_label_Fill)
        }
      },
      checkpointStyle: {
        color: '#316bf3',
        borderColor: '#ffffff'
      },
      controlStyle: {
        color: '#a4b1d7',
        borderColor: '#a4b1d7'
      },
      itemStyle: {
        color: '#a4b1d7'
      },
      label: {
        color: getComputedValue(chart_global_label_Fill)
      },
      lineStyle: {
        color: '#dae1f5'
      }
    },
    title: {
      subtextStyle: {
        color: getComputedValue(chart_global_label_Fill)
      },
      textStyle: {
        color: getComputedValue(chart_global_label_Fill)
      }
    },
    toolbox: {
      emphasis: {
        iconStyle: {
          borderColor: getComputedValue(chart_tooltip_flyoutStyle_stroke_Color)
        }
      },
      iconStyle: {
        borderColor: getComputedValue(chart_axis_axis_stroke_Color)
      }
    },
    tooltip: {
      axisPointer: {
        crossStyle: {
          color: getComputedValue(chart_tooltip_flyoutStyle_stroke_Color.var)
        },
        lineStyle: {
          color: getComputedValue(chart_tooltip_flyoutStyle_stroke_Color.var)
        }
      }
    },
    valueAxis: { ...axisProps },
    visualMap: {
      color: COLOR_SCALE
    }
  };
};
