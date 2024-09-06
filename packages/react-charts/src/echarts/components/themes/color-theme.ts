/* eslint-disable camelcase */
import { ThemeDefinition } from './Theme';
import { getComputedStyleValue } from '../utils/styles';

import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import chart_axis_axis_label_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_axis_axis_label_stroke_Color';
import chart_axis_axis_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_axis_axis_stroke_Color';
import chart_candelstick_candle_positive_Color from '@patternfly/react-tokens/dist/esm/chart_candelstick_candle_positive_Color';
import chart_candelstick_candle_negative_Color from '@patternfly/react-tokens/dist/esm/chart_candelstick_candle_negative_Color';
import chart_tooltip_flyoutStyle_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_tooltip_flyoutStyle_stroke_Color';

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
    color: getValue(chart_global_label_Fill)
  };

  const axisProps = {
    axisLabel: {
      color: getValue(chart_axis_axis_label_stroke_Color)
    },
    axisLine: {
      lineStyle: {
        color: getValue(chart_axis_axis_stroke_Color)
      }
    },
    axisTick: {
      lineStyle: {
        color: getValue(chart_axis_axis_stroke_Color)
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
        barBorderColor: getValue(chart_axis_axis_stroke_Color)
      }
    },
    boxplot: {
      itemStyle: {
        borderColor: getValue(chart_axis_axis_stroke_Color)
      }
    },
    candlestick: {
      itemStyle: {
        borderColor: getValue(chart_candelstick_candle_negative_Color),
        borderColor0: getValue(chart_candelstick_candle_positive_Color),
        color: getValue(chart_candelstick_candle_negative_Color),
        color0: getValue(chart_candelstick_candle_positive_Color)
      }
    },
    categoryAxis: { ...axisProps },
    dataZoom: {},
    funnel: {
      itemStyle: {
        borderColor: getValue(chart_axis_axis_stroke_Color)
      }
    },
    gauge: {
      itemStyle: {
        borderColor: getValue(chart_axis_axis_stroke_Color)
      }
    },
    geo: {
      emphasis: {
        itemStyle: {
          areaColor: COLOR_SCALE[0],
          borderColor: getValue(chart_tooltip_flyoutStyle_stroke_Color)
        },
        label: { ...labelProps }
      },
      itemStyle: {
        areaColor: '#eee',
        borderColor: getValue(chart_tooltip_flyoutStyle_stroke_Color)
      },
      label: { ...labelProps }
    },
    graph: {
      color: COLOR_SCALE,
      itemStyle: {
        borderColor: getValue(chart_axis_axis_stroke_Color)
      },
      label: { ...labelProps },
      lineStyle: {
        color: getValue(chart_global_label_Fill)
      }
    },
    label: { ...labelProps },
    legend: {
      textStyle: {
        color: getValue(chart_global_label_Fill)
      }
    },
    line: {},
    logAxis: { ...axisProps },
    map: {
      emphasis: {
        itemStyle: {
          areaColor: COLOR_SCALE[0],
          borderColor: getValue(chart_tooltip_flyoutStyle_stroke_Color)
        },
        label: { ...labelProps }
      },
      itemStyle: {
        areaColor: '#eee',
        borderColor: getValue(chart_tooltip_flyoutStyle_stroke_Color)
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
        borderColor: getValue(chart_axis_axis_stroke_Color)
      }
    },
    pie: {
      itemStyle: {
        borderColor: getValue(chart_axis_axis_stroke_Color)
      }
    },
    radar: {},
    sankey: {
      itemStyle: {
        borderColor: getValue(chart_axis_axis_stroke_Color)
      }
    },
    scatter: {
      itemStyle: {
        borderColor: getValue(chart_axis_axis_stroke_Color)
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
        label: { ...labelProps }
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
      label: { ...labelProps },
      lineStyle: {
        color: '#dae1f5'
      }
    },
    title: {
      subtextStyle: {
        color: getValue(chart_global_label_Fill)
      },
      textStyle: {
        color: getValue(chart_global_label_Fill)
      }
    },
    toolbox: {
      emphasis: {
        iconStyle: {
          borderColor: getValue(chart_tooltip_flyoutStyle_stroke_Color)
        }
      },
      iconStyle: {
        borderColor: getValue(chart_axis_axis_stroke_Color)
      }
    },
    tooltip: {
      axisPointer: {
        crossStyle: {
          color: getValue(chart_tooltip_flyoutStyle_stroke_Color)
        },
        lineStyle: {
          color: getValue(chart_tooltip_flyoutStyle_stroke_Color)
        }
      }
    },
    valueAxis: { ...axisProps },
    visualMap: {
      color: COLOR_SCALE
    }
  };
};
