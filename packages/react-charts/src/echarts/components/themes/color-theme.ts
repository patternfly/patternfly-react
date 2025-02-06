/* eslint-disable camelcase */
import { ThemeDefinition } from './Theme';
import { getComputedValue } from '../utils/styles';

import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';

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

  return {
    color: COLOR_SCALE,
    // backgroundColor: 'rgba(0,0,0,0)',
    backgroundColor: '#eb5454',
    bar: {
      itemStyle: {
        barBorderColor: '#ccc'
      }
    },
    boxplot: {
      itemStyle: {
        borderColor: '#ccc'
      }
    },
    candlestick: {
      itemStyle: {
        borderColor: '#eb5454',
        borderColor0: '#47b262',
        color: '#eb5454',
        color0: '#47b262'
      }
    },
    categoryAxis: {
      axisLabel: {
        color: '#6E7079'
      },
      axisLine: {
        lineStyle: {
          color: '#6E7079'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#6E7079'
        }
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)']
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#E0E6F1']
        }
      }
    },
    dataZoom: {},
    funnel: {
      itemStyle: {
        borderColor: '#ccc'
      }
    },
    gauge: {
      itemStyle: {
        borderColor: '#ccc'
      }
    },
    geo: {
      emphasis: {
        itemStyle: {
          areaColor: 'rgba(255,215,0,0.8)',
          borderColor: '#444'
        },
        label: {
          color: 'rgb(100,0,0)'
        }
      },
      itemStyle: {
        areaColor: '#eee',
        borderColor: '#444'
      },
      label: {
        color: '#000'
      }
    },
    graph: {
      color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
      itemStyle: {
        borderColor: '#ccc'
      },
      label: {
        color: '#eeeeee'
      },
      lineStyle: {
        color: '#aaaaaa'
      }
    },
    label: {
      color: getComputedValue(chart_global_label_Fill)
    },
    legend: {
      textStyle: {
        color: '#333333'
      }
    },
    line: {},
    logAxis: {
      axisLabel: {
        color: '#6E7079'
      },
      axisLine: {
        lineStyle: {
          color: '#6E7079'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#6E7079'
        }
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)']
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#E0E6F1']
        }
      }
    },
    map: {
      emphasis: {
        itemStyle: {
          areaColor: 'rgba(255,215,0,0.8)',
          borderColor: '#444'
        },
        label: {
          color: 'rgb(100,0,0)'
        }
      },
      itemStyle: {
        areaColor: '#eee',
        borderColor: '#444'
      },
      label: {
        color: '#000'
      }
    },
    markPoint: {
      emphasis: {
        label: {
          color: '#eeeeee'
        }
      },
      label: {
        color: '#eeeeee'
      }
    },
    parallel: {
      itemStyle: {
        borderColor: '#ccc'
      }
    },
    pie: {
      itemStyle: {
        borderColor: '#ccc'
      }
    },
    radar: {},
    sankey: {
      itemStyle: {
        borderColor: '#eb5454' // '#ccc'
      }
    },
    scatter: {
      itemStyle: {
        borderColor: '#ccc'
      }
    },
    textStyle: {},
    timeAxis: {
      axisLabel: {
        color: '#6E7079'
      },
      axisLine: {
        lineStyle: {
          color: '#6E7079'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#6E7079'
        }
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)']
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#E0E6F1']
        }
      }
    },
    timeline: {
      emphasis: {
        controlStyle: {
          color: '#a4b1d7',
          borderColor: '#a4b1d7'
        },
        itemStyle: {
          color: '#ffffff'
        },
        label: {
          color: '#a4b1d7'
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
        color: '#a4b1d7'
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
          borderColor: '#666666'
        }
      },
      iconStyle: {
        borderColor: '#999999'
      }
    },
    tooltip: {
      axisPointer: {
        crossStyle: {
          color: '#cccccc'
        },
        lineStyle: {
          color: '#cccccc'
        }
      }
    },
    valueAxis: {
      axisLabel: {
        color: '#6E7079'
      },
      axisLine: {
        lineStyle: {
          color: '#6E7079'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#6E7079'
        }
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)']
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#E0E6F1']
        }
      }
    },
    visualMap: {
      color: ['#bf444c', '#d88273', '#f6efa6']
    }
  };
};
