/* eslint-disable camelcase */
import chart_theme_multi_color_ordered_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_100';
import chart_theme_multi_color_ordered_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_200';
import chart_theme_multi_color_ordered_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_300';
import chart_theme_multi_color_ordered_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_400';
import chart_theme_multi_color_ordered_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_500';
import chart_theme_multi_color_ordered_ColorScale_600 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_600';
import chart_theme_multi_color_ordered_ColorScale_700 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_700';
import chart_theme_multi_color_ordered_ColorScale_800 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_800';
import chart_theme_multi_color_ordered_ColorScale_900 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_900';
import chart_theme_multi_color_ordered_ColorScale_1000 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1000';
import chart_theme_multi_color_ordered_ColorScale_1100 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1100';
import chart_theme_multi_color_ordered_ColorScale_1200 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1200';
import chart_theme_multi_color_ordered_ColorScale_1300 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1300';
import chart_theme_multi_color_ordered_ColorScale_1400 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1400';
import chart_theme_multi_color_ordered_ColorScale_1500 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1500';
import chart_theme_multi_color_ordered_ColorScale_1600 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1600';
import chart_theme_multi_color_ordered_ColorScale_1700 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1700';
import chart_theme_multi_color_ordered_ColorScale_1800 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1800';
import chart_theme_multi_color_ordered_ColorScale_1900 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_1900';
import chart_theme_multi_color_ordered_ColorScale_2000 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_2000';
import chart_theme_multi_color_ordered_ColorScale_2100 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_2100';
import chart_theme_multi_color_ordered_ColorScale_2200 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_2200';
import chart_theme_multi_color_ordered_ColorScale_2300 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_2300';
import chart_theme_multi_color_ordered_ColorScale_2400 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_2400';
import chart_theme_multi_color_ordered_ColorScale_2500 from '@patternfly/react-tokens/dist/esm/chart_theme_multi_color_ordered_ColorScale_2500';
import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';

import { getComputedStyle } from '../utils/theme';

export const getTheme = () => {
  // The color order below improves the color contrast in unordered charts; area & line
  // See https://github.com/patternfly/patternfly-next/issues/1551
  const COLOR_SCALE = [
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_100),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_200),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_300),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_400),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_500),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_600),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_700),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_800),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_900),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_1000),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_1100),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_1200),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_1300),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_1400),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_1500),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_1600),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_1700),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_1800),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_1900),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_2000),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_2100),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_2200),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_2300),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_2400),
    getComputedStyle(chart_theme_multi_color_ordered_ColorScale_2500)
  ];

  return {
    color: COLOR_SCALE,
    backgroundColor: 'rgba(0,0,0,0)',
    label: {
      color: getComputedStyle(chart_global_label_Fill)
    },
    textStyle: {},
    title: {
      textStyle: {
        // color: '#464646'
        color: getComputedStyle(chart_global_label_Fill)
      },
      subtextStyle: {
        // color: '#6e7079'
        color: getComputedStyle(chart_global_label_Fill)
      }
    },
    line: {
      itemStyle: {
        borderWidth: 1
      },
      lineStyle: {
        width: 2
      },
      symbolSize: 4,
      symbol: 'emptyCircle',
      smooth: false
    },
    radar: {
      itemStyle: {
        borderWidth: 1
      },
      lineStyle: {
        width: 2
      },
      symbolSize: 4,
      symbol: 'emptyCircle',
      smooth: false
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: '#ccc'
      }
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    },
    candlestick: {
      itemStyle: {
        color: '#eb5454',
        color0: '#47b262',
        borderColor: '#eb5454',
        borderColor0: '#47b262',
        borderWidth: 1
      }
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      },
      lineStyle: {
        width: 1,
        color: '#aaaaaa'
      },
      symbolSize: 4,
      symbol: 'emptyCircle',
      smooth: false,
      color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
      label: {
        color: '#eeeeee'
      }
    },
    map: {
      itemStyle: {
        areaColor: '#eee',
        borderColor: '#444',
        borderWidth: 0.5
      },
      label: {
        color: '#000'
      },
      emphasis: {
        itemStyle: {
          areaColor: 'rgba(255,215,0,0.8)',
          borderColor: '#444',
          borderWidth: 1
        },
        label: {
          color: 'rgb(100,0,0)'
        }
      }
    },
    geo: {
      itemStyle: {
        areaColor: '#eee',
        borderColor: '#444',
        borderWidth: 0.5
      },
      label: {
        color: '#000'
      },
      emphasis: {
        itemStyle: {
          areaColor: 'rgba(255,215,0,0.8)',
          borderColor: '#444',
          borderWidth: 1
        },
        label: {
          color: 'rgb(100,0,0)'
        }
      }
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: '#6E7079'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#6E7079'
        }
      },
      axisLabel: {
        show: true,
        color: '#6E7079'
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: ['#E0E6F1']
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)']
        }
      }
    },
    valueAxis: {
      axisLine: {
        show: false,
        lineStyle: {
          color: '#6E7079'
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: '#6E7079'
        }
      },
      axisLabel: {
        show: true,
        color: '#6E7079'
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#E0E6F1']
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)']
        }
      }
    },
    logAxis: {
      axisLine: {
        show: false,
        lineStyle: {
          color: '#6E7079'
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: '#6E7079'
        }
      },
      axisLabel: {
        show: true,
        color: '#6E7079'
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#E0E6F1']
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)']
        }
      }
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: '#6E7079'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#6E7079'
        }
      },
      axisLabel: {
        show: true,
        color: '#6E7079'
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: ['#E0E6F1']
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)']
        }
      }
    },
    toolbox: {
      iconStyle: {
        borderColor: '#999999'
      },
      emphasis: {
        iconStyle: {
          borderColor: '#666666'
        }
      }
    },
    legend: {
      textStyle: {
        color: '#333333'
      }
    },
    tooltip: {
      axisPointer: {
        lineStyle: {
          color: '#cccccc',
          width: 1
        },
        crossStyle: {
          color: '#cccccc',
          width: 1
        }
      }
    },
    timeline: {
      lineStyle: {
        color: '#dae1f5',
        width: 2
      },
      itemStyle: {
        color: '#a4b1d7',
        borderWidth: 1
      },
      controlStyle: {
        color: '#a4b1d7',
        borderColor: '#a4b1d7',
        borderWidth: 1
      },
      checkpointStyle: {
        color: '#316bf3',
        borderColor: '#ffffff'
      },
      label: {
        color: '#a4b1d7'
      },
      emphasis: {
        itemStyle: {
          color: '#ffffff'
        },
        controlStyle: {
          color: '#a4b1d7',
          borderColor: '#a4b1d7',
          borderWidth: 1
        },
        label: {
          color: '#a4b1d7'
        }
      }
    },
    visualMap: {
      color: ['#bf444c', '#d88273', '#f6efa6']
    },
    dataZoom: {
      handleSize: 'undefined%',
      textStyle: {}
    },
    markPoint: {
      label: {
        color: '#eeeeee'
      },
      emphasis: {
        label: {
          color: '#eeeeee'
        }
      }
    }
  };
};
