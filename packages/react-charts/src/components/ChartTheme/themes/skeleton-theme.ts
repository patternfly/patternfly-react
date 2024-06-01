import { ChartComponentThemeDefinition, ChartThemeDefinition } from '../ChartTheme';

interface ColorThemeInterface {
  COLOR_SCALE: string[];
}

// Labels
const LABEL_PROPS = {
  fill: 'transparent',
  stroke: 'transparent'
};

const LABEL_CENTERED_PROPS = {
  ...LABEL_PROPS
};

/**
 * Victory color theme
 * @private
 */
export const ColorTheme = (props: ColorThemeInterface): ChartThemeDefinition => {
  const { COLOR_SCALE } = props;

  return {
    area: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          fill: COLOR_SCALE[0]
        },
        labels: LABEL_CENTERED_PROPS
      }
    },
    axis: {
      colorScale: COLOR_SCALE,
      style: {
        axis: {
          fill: 'transparent',
          stroke: COLOR_SCALE[0]
        },
        axisLabel: {
          ...LABEL_CENTERED_PROPS,
          fill: COLOR_SCALE[0],
          stroke: 'transparent'
        },
        grid: {
          fill: 'transparent',
          stroke: 'transparent'
        },
        ticks: {
          fill: 'transparent',
          stroke: COLOR_SCALE[0]
        },
        tickLabels: {
          ...LABEL_PROPS,
          fill: 'transparent'
        }
      }
    },
    bar: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          fill: COLOR_SCALE[0],
          stroke: COLOR_SCALE[0]
        },
        labels: LABEL_PROPS
      }
    },
    boxplot: {
      colorScale: COLOR_SCALE,
      style: {
        max: {
          stroke: COLOR_SCALE[0]
        },
        maxLabels: LABEL_PROPS,
        median: {
          stroke: COLOR_SCALE[0]
        },
        medianLabels: LABEL_PROPS,
        min: {
          stroke: COLOR_SCALE[0]
        },
        minLabels: LABEL_PROPS,
        q1: {
          fill: COLOR_SCALE[0]
        },
        q1Labels: LABEL_PROPS,
        q3: {
          fill: COLOR_SCALE[0]
        },
        q3Labels: LABEL_PROPS
      }
    },
    candlestick: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          stroke: COLOR_SCALE[0]
        },
        labels: LABEL_CENTERED_PROPS
      }
    },
    chart: {
      colorScale: COLOR_SCALE
    },
    errorbar: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          fill: 'transparent',
          stroke: COLOR_SCALE[0]
        },
        labels: LABEL_CENTERED_PROPS
      }
    },
    group: {
      colorScale: COLOR_SCALE
    },
    legend: {
      colorScale: COLOR_SCALE,
      style: {
        labels: LABEL_PROPS,
        title: {
          ...LABEL_PROPS
        }
      }
    },
    line: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          fill: 'transparent',
          stroke: COLOR_SCALE[0]
        },
        labels: LABEL_CENTERED_PROPS
      }
    },
    pie: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          stroke: 'transparent'
        },
        labels: {
          ...LABEL_PROPS
        }
      }
    },
    scatter: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          fill: COLOR_SCALE[0],
          stroke: 'transparent'
        },
        labels: LABEL_CENTERED_PROPS
      }
    },
    stack: {
      colorScale: COLOR_SCALE
    },
    tooltip: {
      flyoutStyle: {
        fill: 'transparent', // background
        stroke: 'transparent' // border
      },
      style: {
        fill: 'transparent' // text
      }
    },
    voronoi: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          fill: COLOR_SCALE[0],
          stroke: COLOR_SCALE[0]
        },
        labels: {
          ...LABEL_CENTERED_PROPS,
          fill: 'transparent' // text
        },
        // Note: These properties override tooltip
        flyout: {
          fill: 'transparent', // background
          stroke: 'transparent' // border
        }
      }
    }
  };
};

/**
 * Component color theme
 * @private
 * @beta
 */
export const ColorComponentTheme = (props: ColorThemeInterface): ChartComponentThemeDefinition => {
  const { COLOR_SCALE } = props;

  return {
    axis: {
      axis: {
        style: {
          grid: {
            stroke: COLOR_SCALE[0]
          },
          ticks: {
            stroke: COLOR_SCALE[0]
          }
        }
      }
    },
    bullet: {
      // TBD...
    },
    bulletComparativeErrorMeasure: {
      bar: {
        style: {
          data: {
            fill: COLOR_SCALE[0],
            stroke: COLOR_SCALE[0]
          }
        }
      }
    },
    bulletComparativeMeasure: {
      bar: {
        style: {
          data: {
            fill: COLOR_SCALE[0],
            stroke: COLOR_SCALE[0]
          }
        }
      }
    },
    bulletComparativeWarningMeasure: {
      bar: {
        style: {
          data: {
            fill: COLOR_SCALE[0],
            stroke: COLOR_SCALE[0]
          }
        }
      }
    },
    bulletGroupTitle: {
      line: {
        style: {
          data: {
            fill: COLOR_SCALE[0],
            stroke: COLOR_SCALE[0]
          }
        }
      }
    },
    bulletPrimaryDotMeasure: {
      // TBD...
    },
    bulletPrimaryNegativeMeasure: {
      group: {
        colorScale: COLOR_SCALE
      }
    },
    bulletPrimarySegmentedMeasure: {
      // TBD...
    },
    bulletQualitativeRange: {
      group: {
        colorScale: COLOR_SCALE
      }
    },
    donut: {
      // TBD...
    },
    donutThresholdDynamic: {
      legend: {
        colorScale: COLOR_SCALE
      },
      pie: {
        colorScale: COLOR_SCALE
      }
    },
    donutThresholdStatic: {
      pie: {
        colorScale: COLOR_SCALE
      }
    },
    donutUtilization: {
      legend: {
        colorScale: COLOR_SCALE
      },
      pie: {
        colorScale: COLOR_SCALE
      }
    },
    label: {
      backgroundStyle: {
        fill: COLOR_SCALE[0]
      },
      style: LABEL_CENTERED_PROPS
    },
    threshold: {
      // TBD...
    }
  };
};
