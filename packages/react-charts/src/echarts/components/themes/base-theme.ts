/* eslint-disable camelcase */
import { ThemeDefinition } from './Theme';
import { getComputedStyleValue } from '../utils/styles';

import chart_line_data_stroke_Width from '@patternfly/react-tokens/dist/esm/chart_line_data_stroke_Width';

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
        barBorderWidth: 0
      }
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0
      }
    },
    candlestick: {
      itemStyle: {
        borderWidth: 1
      }
    },
    categoryAxis: { ...axisProps },
    dataZoom: {
      handleSize: '100%',
      textStyle: {}
    },
    funnel: {
      itemStyle: {
        borderWidth: 0
      }
    },
    gauge: {
      itemStyle: {
        borderWidth: 0
      }
    },
    geo: {
      emphasis: {
        itemStyle: {
          borderWidth: 1
        },
        label: {}
      },
      itemStyle: {
        borderWidth: 0.5
      },
      label: {}
    },
    graph: {
      itemStyle: {
        borderWidth: 0
      },
      label: {},
      lineStyle: {
        width: getValue(chart_line_data_stroke_Width)
      },
      smooth: false,
      symbolSize: 4,
      symbol: 'emptyCircle'
    },
    label: {},
    legend: {
      textStyle: {}
    },
    line: {
      itemStyle: {
        borderWidth: 1
      },
      lineStyle: {
        width: getValue(chart_line_data_stroke_Width)
      },
      smooth: false,
      symbolSize: 4,
      symbol: 'emptyCircle'
    },
    logAxis: { ...axisProps },
    map: {
      emphasis: {
        itemStyle: {
          borderWidth: 1
        },
        label: {}
      },
      itemStyle: {
        borderWidth: 0.5
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
        borderWidth: 0
      }
    },
    pie: {
      itemStyle: {
        borderWidth: 0
      }
    },
    radar: {
      itemStyle: {
        borderWidth: 1
      },
      lineStyle: {
        width: getValue(chart_line_data_stroke_Width)
      },
      smooth: false,
      symbolSize: 4,
      symbol: 'emptyCircle'
    },
    sankey: {
      itemStyle: {
        borderWidth: 0
      }
    },
    scatter: {
      itemStyle: {
        borderWidth: 0
      }
    },
    textStyle: {},
    timeAxis: { ...axisProps },
    timeline: {
      emphasis: {
        controlStyle: {
          borderWidth: 1
        },
        itemStyle: {},
        label: {}
      },
      checkpointStyle: {},
      controlStyle: {
        borderWidth: 1
      },
      itemStyle: {
        borderWidth: 1
      },
      label: {},
      lineStyle: {
        width: getValue(chart_line_data_stroke_Width)
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
          width: 1
        },
        lineStyle: {
          width: getValue(chart_line_data_stroke_Width)
        }
      }
    },
    valueAxis: { ...axisProps },
    visualMap: {}
  };
};
