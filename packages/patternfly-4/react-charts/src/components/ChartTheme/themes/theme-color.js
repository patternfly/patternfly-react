// Victory theme properties only
export default props => {
  const {
    COLOR_AXIS_FILL,
    COLOR_AXIS_STROKE,
    COLOR_FILL,
    COLOR_LABEL,
    COLOR_SCALE,
    COLOR_STACK_STROKE,
    COLOR_STROKE,
    COLOR_TOOLTIP_FILL,
    COLOR_TOOLTIP_STROKE,
    COLOR_TOOLTIP_FLYOUT_FILL,
    COLOR_TOOLTIP_FLYOUT_STROKE
  } = props;

  return {
    area: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          fill: COLOR_FILL,
          stroke: COLOR_STROKE
        },
        labels: {
          fill: COLOR_LABEL
        }
      }
    },
    axis: {
      colorScale: COLOR_SCALE,
      style: {
        axis: {
          fill: COLOR_AXIS_FILL,
          stroke: COLOR_AXIS_STROKE
        },
        axisLabel: {
          fill: COLOR_LABEL
        },
        tickLabels: {
          fill: COLOR_LABEL
        }
      }
    },
    bar: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          fill: COLOR_SCALE[0]
        },
        labels: {
          fill: COLOR_LABEL
        }
      }
    },
    boxplot: {
      colorScale: COLOR_SCALE,
      style: {
        max: {
          stroke: COLOR_STROKE
        },
        maxLabels: {
          fill: COLOR_LABEL
        },
        median: {
          stroke: COLOR_STROKE
        },
        medianLabels: {
          fill: COLOR_LABEL
        },
        min: {
          stroke: COLOR_STROKE
        },
        minLabels: {
          fill: COLOR_LABEL
        },
        q1: {
          fill: COLOR_FILL
        },
        q1Labels: {
          fill: COLOR_LABEL
        },
        q3: {
          fill: COLOR_FILL
        },
        q3Labels: {
          fill: COLOR_LABEL
        }
      }
    },
    candlestick: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          stroke: COLOR_STROKE
        },
        labels: {
          fill: COLOR_LABEL
        }
      },
      candleColors: {
        positive: COLOR_FILL,
        negative: COLOR_STROKE
      }
    },
    chart: {
      colorScale: COLOR_SCALE,
      style: {
        parent: {
          border: `1px solid ${COLOR_FILL}`
        }
      }
    },
    errorbar: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          stroke: COLOR_STROKE
        },
        labels: {
          fill: COLOR_LABEL
        }
      }
    },
    group: {
      colorScale: COLOR_SCALE
    },
    legend: {
      colorScale: COLOR_SCALE,
      style: {
        labels: {
          fill: COLOR_LABEL
        },
        title: {
          fill: COLOR_LABEL
        }
      }
    },
    line: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          stroke: COLOR_STROKE
        },
        labels: {
          fill: COLOR_LABEL
        }
      }
    },
    pie: {
      colorScale: COLOR_SCALE,
      style: {
        labels: {
          fill: COLOR_LABEL,
          stroke: COLOR_TOOLTIP_STROKE
        }
      }
    },
    scatter: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          fill: COLOR_FILL
        },
        labels: {
          fill: COLOR_LABEL
        }
      }
    },
    stack: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          stroke: COLOR_STACK_STROKE
        }
      }
    },
    tooltip: {
      flyoutStyle: {
        fill: COLOR_TOOLTIP_FLYOUT_FILL,
        stroke: COLOR_TOOLTIP_FLYOUT_STROKE
      },
      style: {
        fill: COLOR_TOOLTIP_FILL,
        stroke: COLOR_TOOLTIP_STROKE
      }
    },
    voronoi: {
      colorScale: COLOR_SCALE,
      style: {
        labels: {
          fill: COLOR_LABEL,
          stroke: COLOR_TOOLTIP_STROKE
        },
        flyout: {
          fill: COLOR_TOOLTIP_FLYOUT_FILL,
          stroke: COLOR_TOOLTIP_FLYOUT_STROKE
        }
      }
    }
  };
};
