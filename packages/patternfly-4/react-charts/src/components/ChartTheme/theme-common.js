// Theme
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
    // TOPOGRAPHY_FONT_FAMILY,
    // TOPOGRAPHY_LETTER_SPACING,
    TOPOGRAPHY_FONT_SIZE
  } = props;

  return {
    area: Object.assign(
      {
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
      LAYOUT_PROPS
    ),
    axis: Object.assign(
      {
        style: {
          axis: {
            // fill: 'transparent',
            fill: COLOR_AXIS_FILL,
            stroke: COLOR_AXIS_STROKE,
            strokeWidth: 1,
            strokeLinecap: STROKE_LINE_CAP,
            strokeLinejoin: STROKE_LINE_JOIN
          },
          axisLabel: Object.assign({}, LABEL_CENTERED_PROPS, {
            padding: 100
          }),
          grid: {
            fill: 'none',
            stroke: 'none',
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
      LAYOUT_PROPS
    ),
    bar: Object.assign(
      {
        barWidth: 10,
        style: {
          data: {
            stroke: 'none'
          },
          labels: LABEL_PROPS
        }
      },
      LAYOUT_PROPS
    ),
    boxplot: Object.assign(
      {
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
      LAYOUT_PROPS
    ),
    candlestick: Object.assign(
      {
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
      LAYOUT_PROPS
    ),
    chart: Object.assign(
      {
        style: {
          parent: {
            border: `1px solid ${COLOR_FILL}`
          }
        }
      },
      LAYOUT_PROPS
    ),
    errorbar: Object.assign(
      {
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
      LAYOUT_PROPS
    ),
    group: Object.assign(
      {
        colorScale: COLOR_SCALE
      },
      LAYOUT_PROPS
    ),
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
        title: Object.assign({}, LABEL_PROPS, { fontSize: TOPOGRAPHY_FONT_SIZE, padding: 2 })
      }
    },
    line: Object.assign(
      {
        style: {
          data: {
            fill: 'transparent',
            stroke: COLOR_STROKE,
            strokeWidth: 2
          },
          labels: LABEL_CENTERED_PROPS
        }
      },
      LAYOUT_PROPS
    ),
    pie: {
      colorScale: COLOR_SCALE,
      padding: 20,
      style: {
        data: {
          padding: 8,
          stroke: 'transparent',
          strokeWidth: 1
        },
        labels: Object.assign({}, LABEL_PROPS, { padding: 8 })
      }
    },
    scatter: Object.assign(
      {
        style: {
          data: {
            fill: COLOR_FILL,
            stroke: 'transparent',
            strokeWidth: 0
          },
          labels: LABEL_CENTERED_PROPS
        }
      },
      LAYOUT_PROPS
    ),
    stack: Object.assign(
      {
        colorScale: COLOR_SCALE,
        style: {
          data: {
            stroke: COLOR_STACK_STROKE,
            strokeWidth: 1
          }
        }
      },
      LAYOUT_PROPS
    ),
    tooltip: {
      cornerRadius: 0,
      flyoutStyle: {
        cornerRadius: 0,
        fill: COLOR_TOOLTIP_FLYOUT_FILL,
        stroke: COLOR_TOOLTIP_FLYOUT_STROKE,
        strokeWidth: 1,
        pointerEvents: 'none'
      },
      pointerLength: 10,
      style: Object.assign({}, LABEL_CENTERED_PROPS, {
        fill: COLOR_TOOLTIP_FILL,
        stroke: COLOR_TOOLTIP_STROKE,
        padding: 8,
        pointerEvents: 'none'
      })
    },
    voronoi: Object.assign(
      // Note: This overrides tooltip
      {
        style: {
          data: {
            fill: 'transparent',
            stroke: 'transparent',
            strokeWidth: 0
          },
          labels: Object.assign({}, LABEL_CENTERED_PROPS, { padding: 8, pointerEvents: 'none' }),
          flyout: {
            fill: COLOR_TOOLTIP_FLYOUT_FILL,
            strokeWidth: 1,
            pointerEvents: 'none'
          }
        }
      },
      LAYOUT_PROPS
    )
  };
};
