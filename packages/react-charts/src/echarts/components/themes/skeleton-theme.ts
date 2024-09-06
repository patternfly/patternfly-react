/* eslint-disable camelcase */
import { ThemeDefinition } from '../themes/Theme';
import { getComputedStyleValue } from '../utils/styles';

import chart_axis_axis_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_axis_axis_stroke_Color';
import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';

interface ColorThemeInterface {
  COLOR_SCALE: string[];
  isComputedTheme?: boolean;
}

/**
 * ECharts skeleton color theme
 * @private
 */
export const ColorTheme = (props: ColorThemeInterface): ThemeDefinition => {
  const { COLOR_SCALE, isComputedTheme } = props;

  const getValue = (token) => (isComputedTheme ? getComputedStyleValue(token) : token.var);

  const labelProps = {
    color: 'rgba(0,0,0,0)' // Make transparent
  };

  const axisProps = {
    axisLabel: { ...labelProps },
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
    color: COLOR_SCALE,
    // backgroundColor: 'rgba(0,0,0,0)',
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
        borderColor: '#ccc'
      },
      label: { ...labelProps },
      lineStyle: {
        color: COLOR_SCALE[0]
      }
    },
    label: { ...labelProps },
    legend: {
      textStyle: {
        color: COLOR_SCALE[0]
      }
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
