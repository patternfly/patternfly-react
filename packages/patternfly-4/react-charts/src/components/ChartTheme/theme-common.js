// Victory theme properties only
export default props => {
  const {
    COLOR_AXIS_FILL,
    COLOR_AXIS_STROKE,
    COLOR_FILL,
    COLOR_SCALE,
    COLOR_STACK_STROKE,
    COLOR_STROKE,
    COLOR_TOOLTIP_FILL,
    COLOR_TOOLTIP_STROKE,
    COLOR_TOOLTIP_FLYOUT_FILL,
    COLOR_TOOLTIP_FLYOUT_STROKE,
    LAYOUT_PROPS,
    LABEL_PROPS,
    LABEL_CENTERED_PROPS,
    STROKE_LINE_CAP,
    STROKE_LINE_JOIN,
    TYPOGRAPHY_FONT_SIZE
  } = props;

  return {
    area: {
      ...LAYOUT_PROPS,
      style: {
        data: {
          fill: COLOR_FILL,
          fillOpacity: 0.4,
          stroke: COLOR_STROKE,
          strokeWidth: 2
        },
        labels: LABEL_CENTERED_PROPS
      }
    },
    axis: {
      ...LAYOUT_PROPS,
      style: {
        axis: {
          // fill: 'transparent',
          fill: COLOR_AXIS_FILL,
          stroke: COLOR_AXIS_STROKE,
          strokeWidth: 1,
          strokeLinecap: STROKE_LINE_CAP,
          strokeLinejoin: STROKE_LINE_JOIN
        },
        axisLabel: {
          ...LABEL_CENTERED_PROPS,
          padding: 100
        },
        grid: {
          fill: 'none',
          stroke: 'none', // Todo: Need to show for one axis only
          pointerEvents: 'painted'
        },
        ticks: {
          fill: 'transparent',
          size: 1,
          stroke: 'transparent'
        },
        tickLabels: LABEL_PROPS
      }
    },
    bar: {
      ...LAYOUT_PROPS,
      barWidth: 10,
      style: {
        data: {
          stroke: 'none'
        },
        labels: LABEL_PROPS
      }
    },
    boxplot: {
      ...LAYOUT_PROPS,
      style: {
        max: { padding: 8, stroke: COLOR_STROKE, strokeWidth: 1 },
        maxLabels: LABEL_PROPS,
        median: { padding: 8, stroke: COLOR_STROKE, strokeWidth: 1 },
        medianLabels: LABEL_PROPS,
        min: { padding: 8, stroke: COLOR_STROKE, strokeWidth: 1 },
        minLabels: LABEL_PROPS,
        q1: { padding: 8, fill: COLOR_FILL },
        q1Labels: LABEL_PROPS,
        q3: { padding: 8, fill: COLOR_FILL },
        q3Labels: LABEL_PROPS
      },
      boxWidth: 20
    },
    candlestick: {
      ...LAYOUT_PROPS,
      style: {
        data: {
          stroke: COLOR_STROKE,
          strokeWidth: 1
        },
        labels: LABEL_CENTERED_PROPS
      },
      candleColors: {
        positive: COLOR_FILL,
        negative: COLOR_STROKE
      }
    },
    chart: {
      ...LAYOUT_PROPS,
      style: {
        parent: {
          border: `1px solid ${COLOR_FILL}`
        }
      }
    },
    errorbar: {
      ...LAYOUT_PROPS,
      borderWidth: 8,
      style: {
        data: {
          fill: 'transparent',
          stroke: COLOR_STROKE,
          strokeWidth: 2
        },
        labels: LABEL_CENTERED_PROPS
      }
    },
    group: {
      ...LAYOUT_PROPS,
      colorScale: COLOR_SCALE
    },
    legend: {
      colorScale: COLOR_SCALE,
      gutter: 20,
      orientation: 'horizontal',
      titleOrientation: 'top',
      style: {
        data: {
          type: 'square'
        },
        labels: LABEL_PROPS,
        title: {
          ...LABEL_PROPS,
          fontSize: TYPOGRAPHY_FONT_SIZE,
          padding: 2
        }
      }
    },
    line: {
      ...LAYOUT_PROPS,
      style: {
        data: {
          fill: 'transparent',
          stroke: COLOR_STROKE,
          strokeWidth: 2
        },
        labels: LABEL_CENTERED_PROPS
      }
    },
    pie: {
      colorScale: COLOR_SCALE,
      padding: 20,
      style: {
        data: {
          padding: 8,
          stroke: 'transparent',
          strokeWidth: 1
        },
        labels: {
          ...LABEL_PROPS,
          padding: 8,
          stroke: COLOR_TOOLTIP_STROKE
        }
      }
    },
    scatter: {
      ...LAYOUT_PROPS,
      style: {
        data: {
          fill: COLOR_FILL,
          stroke: 'transparent',
          strokeWidth: 0
        },
        labels: LABEL_CENTERED_PROPS
      }
    },
    stack: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          stroke: COLOR_STACK_STROKE,
          strokeWidth: 1
        }
      }
    },
    tooltip: {
      cornerRadius: 0,
      flyoutStyle: {
        cornerRadius: 0,
        fill: COLOR_TOOLTIP_FLYOUT_FILL,
        stroke: COLOR_TOOLTIP_FLYOUT_STROKE,
        strokeWidth: 0,
        pointerEvents: 'none'
      },
      pointerLength: 10,
      pointerWidth: 20,
      style: {
        ...LABEL_CENTERED_PROPS,
        fill: COLOR_TOOLTIP_FILL,
        stroke: COLOR_TOOLTIP_STROKE,
        padding: 16,
        pointerEvents: 'none'
      }
    },
    voronoi: {
      ...LAYOUT_PROPS,
      style: {
        data: {
          fill: 'transparent',
          stroke: 'transparent',
          strokeWidth: 0
        },
        labels: {
          ...LABEL_CENTERED_PROPS,
          padding: 8,
          pointerEvents: 'none',
          stroke: COLOR_TOOLTIP_STROKE
        },
        // Note: These styles overrides tooltip
        flyout: {
          fill: COLOR_TOOLTIP_FLYOUT_FILL,
          strokeWidth: 1,
          pointerEvents: 'none'
        }
      }
    }
  };
};
