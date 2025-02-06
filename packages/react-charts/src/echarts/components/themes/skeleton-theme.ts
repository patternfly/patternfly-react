import { ThemeDefinition } from '../themes/Theme';

interface ColorThemeInterface {
  COLOR_SCALE: string[];
}

/**
 * ECharts color theme
 * @private
 */
export const ColorTheme = (props: ColorThemeInterface): ThemeDefinition => {
  const { COLOR_SCALE } = props;

  return {
    color: COLOR_SCALE,
    backgroundColor: 'rgba(0,0,0,0)',
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
    categoryAxis: {
      axisLabel: {
        color: 'rgba(0,0,0,0)' // Make transparent
      },
      axisLine: {
        lineStyle: {
          color: COLOR_SCALE[0]
        }
      },
      axisTick: {
        lineStyle: {
          color: COLOR_SCALE[0]
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
    },
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
        label: {
          color: 'rgba(0,0,0,0)' // Make transparent
        }
      },
      itemStyle: {
        areaColor: COLOR_SCALE[0],
        borderColor: COLOR_SCALE[0]
      },
      label: {
        color: 'rgba(0,0,0,0)' // Make transparent
      }
    },
    graph: {
      color: COLOR_SCALE,
      itemStyle: {
        borderColor: '#ccc'
      },
      label: {
        color: 'rgba(0,0,0,0)' // Make transparent
      },
      lineStyle: {
        color: COLOR_SCALE[0]
      }
    },
    label: {
      color: 'rgba(0,0,0,0)' // Make transparent
    },
    legend: {
      textStyle: {
        color: COLOR_SCALE[0]
      }
    },
    line: {},
    logAxis: {
      axisLabel: {
        color: 'rgba(0,0,0,0)' // Make transparent
      },
      axisLine: {
        lineStyle: {
          color: COLOR_SCALE[0]
        }
      },
      axisTick: {
        lineStyle: {
          color: COLOR_SCALE[0]
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
    },
    map: {
      emphasis: {
        itemStyle: {
          areaColor: COLOR_SCALE[0],
          borderColor: COLOR_SCALE[0]
        },
        label: {
          color: 'rgba(0,0,0,0)' // Make transparent
        }
      },
      itemStyle: {
        areaColor: COLOR_SCALE[0],
        borderColor: COLOR_SCALE[0]
      },
      label: {
        color: 'rgba(0,0,0,0)' // Make transparent
      }
    },
    markPoint: {
      emphasis: {
        label: {
          color: 'rgba(0,0,0,0)' // Make transparent
        }
      },
      label: {
        color: 'rgba(0,0,0,0)' // Make transparent
      }
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
    timeAxis: {
      axisLabel: {
        color: 'rgba(0,0,0,0)' // Make transparent
      },
      axisLine: {
        lineStyle: {
          color: COLOR_SCALE[0]
        }
      },
      axisTick: {
        lineStyle: {
          color: COLOR_SCALE[0]
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
    },
    timeline: {
      emphasis: {
        controlStyle: {
          color: COLOR_SCALE[0],
          borderColor: COLOR_SCALE[0]
        },
        itemStyle: {
          color: COLOR_SCALE[0]
        },
        label: {
          color: 'rgba(0,0,0,0)' // Make transparent
        }
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
      label: {
        color: 'rgba(0,0,0,0)' // Make transparent
      },
      lineStyle: {
        color: COLOR_SCALE[0]
      }
    },
    title: {
      subtextStyle: {
        color: COLOR_SCALE[0]
      },
      textStyle: {
        color: COLOR_SCALE[0]
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
    valueAxis: {
      axisLabel: {
        color: 'rgba(0,0,0,0)' // Make transparent
      },
      axisLine: {
        lineStyle: {
          color: COLOR_SCALE[0]
        }
      },
      axisTick: {
        lineStyle: {
          color: COLOR_SCALE[0]
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
    },
    visualMap: {
      color: COLOR_SCALE
    }
  };
};
