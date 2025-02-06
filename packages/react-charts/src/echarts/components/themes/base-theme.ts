import { ThemeDefinition } from './Theme';

/**
 * Base theme containing Victory properties only
 * @private
 */
export const BaseTheme: ThemeDefinition = {
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
  categoryAxis: {
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
  },
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
      width: 1
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
      width: 2
    },
    smooth: false,
    symbolSize: 4,
    symbol: 'emptyCircle'
  },
  logAxis: {
    axisLabel: {
      show: true
    },
    axisLine: {
      lineStyle: {},
      show: false
    },
    axisTick: {
      lineStyle: {},
      show: false
    },
    splitArea: {
      areaStyle: {},
      show: false
    },
    splitLine: {
      lineStyle: {},
      show: true
    }
  },
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
      width: 2
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
  timeAxis: {
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
  },
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
      width: 2
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
        width: 1
      }
    }
  },
  valueAxis: {
    axisLabel: {
      show: true
    },
    axisLine: {
      lineStyle: {},
      show: false
    },
    axisTick: {
      lineStyle: {},
      show: false
    },
    splitArea: {
      areaStyle: {},
      show: false
    },
    splitLine: {
      lineStyle: {},
      show: true
    }
  },
  visualMap: {}
};
