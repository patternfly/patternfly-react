/* eslint-disable camelcase */
import {
  chart_global_FontFamily,
  chart_global_letter_spacing,
  chart_global_FontSize_sm,
  chart_global_label_Fill,
  chart_global_label_Padding,
  chart_global_label_stroke,
  chart_global_label_text_anchor,
  chart_global_layout_Padding,
  chart_global_layout_Height,
  chart_global_layout_Width,
  chart_global_stroke_line_cap,
  chart_global_stroke_line_join,
  chart_area_data_Fill,
  chart_area_Opacity,
  chart_area_stroke_Width,
  chart_axis_axis_stroke_Width,
  chart_axis_axis_stroke_Color,
  chart_axis_axis_Fill,
  chart_axis_axis_label_Padding,
  chart_axis_axis_label_stroke_Color,
  chart_axis_grid_Fill,
  chart_axis_grid_PointerEvents,
  chart_axis_tick_Fill,
  chart_axis_tick_Size,
  chart_axis_tick_Width,
  chart_axis_tick_label_Fill,
  chart_bar_Width,
  chart_bar_data_stroke,
  chart_bar_data_Fill,
  chart_bar_data_Padding,
  chart_bar_data_stroke_Width,
  chart_boxplot_max_Padding,
  chart_boxplot_max_stroke_Color,
  chart_boxplot_max_stroke_Width,
  chart_boxplot_median_Padding,
  chart_boxplot_median_stroke_Color,
  chart_boxplot_median_stroke_Width,
  chart_boxplot_min_Padding,
  chart_boxplot_min_stroke_Width,
  chart_boxplot_min_stroke_Color,
  chart_boxplot_lower_quartile_Padding,
  chart_boxplot_lower_quartile_Fill,
  chart_boxplot_upper_quartile_Padding,
  chart_boxplot_upper_quartile_Fill,
  chart_boxplot_box_Width,
  chart_candelstick_data_stroke_Width,
  chart_candelstick_data_stroke_Color,
  chart_candelstick_candle_positive_Color,
  chart_candelstick_candle_negative_Color,
  chart_errorbar_BorderWidth,
  chart_errorbar_data_Fill,
  chart_errorbar_data_Opacity,
  chart_errorbar_data_stroke_Width,
  chart_errorbar_data_stroke_Color,
  chart_legend_gutter_Width,
  chart_legend_orientation,
  chart_legend_title_orientation,
  chart_legend_data_type,
  chart_legend_title_Padding,
  chart_line_data_Fill,
  chart_line_data_Opacity,
  chart_line_data_stroke_Width,
  chart_line_data_stroke_Color,
  chart_pie_Padding,
  chart_pie_data_Padding,
  chart_pie_data_stroke_Width,
  chart_pie_data_stroke_Color,
  chart_pie_labels_Padding,
  chart_pie_Height,
  chart_pie_Width,
  chart_scatter_data_stroke_Color,
  chart_scatter_data_stroke_Width,
  chart_scatter_data_Opacity,
  chart_scatter_data_Fill,
  chart_stack_data_stroke_Width,
  chart_tooltip_corner_radius,
  chart_tooltip_pointer_length,
  chart_tooltip_Fill,
  chart_tooltip_flyoutStyle_corner_radius,
  chart_tooltip_flyoutStyle_stroke_Width,
  chart_tooltip_flyoutStyle_PointerEvents,
  chart_tooltip_flyoutStyle_stroke_Color,
  chart_tooltip_flyoutStyle_Fill,
  chart_tooltip_pointer_Width,
  chart_tooltip_Padding,
  chart_tooltip_PointerEvents,
  chart_voronoi_data_Fill,
  chart_voronoi_data_stroke_Color,
  chart_voronoi_data_stroke_Width,
  chart_voronoi_labels_Fill,
  chart_voronoi_labels_Padding,
  chart_voronoi_labels_PointerEvents,
  chart_voronoi_flyout_stroke_Width,
  chart_voronoi_flyout_PointerEvents,
  chart_voronoi_flyout_stroke_Color,
  chart_voronoi_flyout_stroke_Fill,
} from '@patternfly/react-tokens';

// Note: Values must be in pixles

// Typography
const TYPOGRAPHY_FONT_FAMILY = chart_global_FontFamily.var;
const TYPOGRAPHY_LETTER_SPACING = chart_global_letter_spacing.var;
const TYPOGRAPHY_FONT_SIZE = chart_global_FontSize_sm.value;

// Labels
const LABEL_PROPS = {
  fontFamily: TYPOGRAPHY_FONT_FAMILY,
  fontSize: TYPOGRAPHY_FONT_SIZE,
  letterSpacing: TYPOGRAPHY_LETTER_SPACING,
  padding: chart_global_label_Padding.value,
  stroke: chart_global_label_stroke.value
};
const LABEL_CENTERED_PROPS = {
  ...LABEL_PROPS,
  textAnchor: chart_global_label_text_anchor.value
};

// Layout
const LAYOUT_PROPS = {
  padding: chart_global_layout_Padding.value,
  height: chart_global_layout_Height.value,
  width: chart_global_layout_Width.value
};

// Strokes
const STROKE_LINE_CAP = chart_global_stroke_line_cap.value;
const STROKE_LINE_JOIN = chart_global_stroke_line_join.value;

// Victory theme properties only
export const BaseTheme = {
  area: {
    ...LAYOUT_PROPS,
    style: {
      data: {
        fill: chart_area_data_Fill.value,
        fillOpacity: chart_area_Opacity.value,
        stroke: chart_global_label_stroke.value,
        strokeWidth: chart_area_stroke_Width.value
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  axis: {
    ...LAYOUT_PROPS,
    style: {
      axis: {
        fill: chart_axis_axis_Fill.value,
        strokeWidth: chart_axis_axis_stroke_Width.value,
        stroke: chart_axis_axis_stroke_Color.value,
        strokeLinecap: STROKE_LINE_CAP,
        strokeLinejoin: STROKE_LINE_JOIN
      },
      axisLabel: {
        ...LABEL_CENTERED_PROPS,
        padding: chart_axis_axis_label_Padding.value,
        stroke: chart_axis_axis_label_stroke_Color.value
      },
      grid: {
        fill: chart_axis_grid_Fill.value,
        stroke: 'none',
        pointerEvents: chart_axis_grid_PointerEvents.value,
        strokeLinecap: STROKE_LINE_CAP,
        strokeLinejoin: STROKE_LINE_JOIN
      },
      ticks: {
        fill: chart_axis_tick_Fill.value,
        size: chart_axis_tick_Size.value,
        stroke: 'none',
        strokeLinecap: STROKE_LINE_CAP,
        strokeLinejoin: STROKE_LINE_JOIN,
        strokeWidth: chart_axis_tick_Width.value
      },
      tickLabels: {
        ...LABEL_PROPS,
        fill: chart_axis_tick_label_Fill.value
      }
    }
  },
  bar: {
    ...LAYOUT_PROPS,
    barWidth: chart_bar_Width.value,
    style: {
      data: {
        fill: chart_bar_data_Fill.value,
        padding: chart_bar_data_Padding.value,
        stroke: chart_bar_data_stroke.value,
        strokeWidth: chart_bar_data_stroke_Width.value
      },
      labels: LABEL_PROPS
    }
  },
  boxplot: {
    ...LAYOUT_PROPS,
    style: {
      max: {
        padding: chart_boxplot_max_Padding.value,
        stroke: chart_boxplot_max_stroke_Color.value,
        strokeWidth: chart_boxplot_max_stroke_Width.value
      },
      maxLabels: LABEL_PROPS,
      median: {
        padding: chart_boxplot_median_Padding.value,
        stroke: chart_boxplot_median_stroke_Color.value,
        strokeWidth: chart_boxplot_median_stroke_Width.value
      },
      medianLabels: LABEL_PROPS,
      min: {
        padding: chart_boxplot_min_Padding.value,
        stroke: chart_boxplot_min_stroke_Color.value,
        strokeWidth: chart_boxplot_min_stroke_Width.value
      },
      minLabels: LABEL_PROPS,
      q1: {
        fill: chart_boxplot_lower_quartile_Fill.value,
        padding: chart_boxplot_lower_quartile_Padding.value
      },
      q1Labels: LABEL_PROPS,
      q3: {
        fill: chart_boxplot_upper_quartile_Fill.value,
        padding: chart_boxplot_upper_quartile_Padding.value
      },
      q3Labels: LABEL_PROPS
    },
    boxWidth: chart_boxplot_box_Width.value
  },
  candlestick: {
    ...LAYOUT_PROPS,
    candleColors: {
      positive: chart_candelstick_candle_positive_Color.value,
      negative: chart_candelstick_candle_negative_Color.value
    },
    style: {
      data: {
        stroke: chart_candelstick_data_stroke_Color.value,
        strokeWidth: chart_candelstick_data_stroke_Width.value
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  chart: {
    ...LAYOUT_PROPS
  },
  errorbar: {
    ...LAYOUT_PROPS,
    borderWidth: chart_errorbar_BorderWidth.value,
    style: {
      data: {
        fill: chart_errorbar_data_Fill.value,
        opacity: chart_errorbar_data_Opacity.value,
        stroke: chart_errorbar_data_stroke_Color.value,
        strokeWidth: chart_errorbar_data_stroke_Width.value
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  group: {
    ...LAYOUT_PROPS
  },
  legend: {
    gutter: chart_legend_gutter_Width.value,
    orientation: chart_legend_orientation.value,
    titleOrientation: chart_legend_title_orientation.value,
    style: {
      data: {
        type: chart_legend_data_type.value
      },
      labels: LABEL_PROPS,
      title: {
        ...LABEL_PROPS,
        fontSize: TYPOGRAPHY_FONT_SIZE,
        padding: chart_legend_title_Padding.value
      }
    }
  },
  line: {
    ...LAYOUT_PROPS,
    style: {
      data: {
        fill: chart_line_data_Fill.value,
        opacity: chart_line_data_Opacity.value,
        stroke: chart_line_data_stroke_Color.value,
        strokeWidth: chart_line_data_stroke_Width.value
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  pie: {
    padding: chart_pie_Padding.value,
    style: {
      data: {
        padding: chart_pie_data_Padding.value,
        stroke: chart_pie_data_stroke_Color.value,
        strokeWidth: chart_pie_data_stroke_Width.value
      },
      labels: {
        ...LABEL_PROPS,
        padding: chart_pie_labels_Padding.value
      }
    },
    height: chart_pie_Height.value,
    width: chart_pie_Width.value
  },
  scatter: {
    ...LAYOUT_PROPS,
    style: {
      data: {
        fill: chart_scatter_data_Fill.value,
        opacity: chart_scatter_data_Opacity.value,
        stroke: chart_scatter_data_stroke_Color.value,
        strokeWidth: chart_scatter_data_stroke_Width.value
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  stack: {
    ...LAYOUT_PROPS,
    style: {
      data: {
        strokeWidth: chart_stack_data_stroke_Width.value
      }
    }
  },
  tooltip: {
    cornerRadius: chart_tooltip_corner_radius.value,
    flyoutStyle: {
      cornerRadius: chart_tooltip_flyoutStyle_corner_radius.value,
      fill: chart_tooltip_flyoutStyle_Fill.value, // background
      pointerEvents: chart_tooltip_flyoutStyle_PointerEvents.value,
      stroke: chart_tooltip_flyoutStyle_stroke_Color.value, // border
      strokeWidth: chart_tooltip_flyoutStyle_stroke_Width.value
    },
    pointerLength: chart_tooltip_pointer_length.value,
    pointerWidth: chart_tooltip_pointer_Width.value,
    style: {
      fill: chart_tooltip_Fill.value, // text
      padding: chart_tooltip_Padding.value,
      pointerEvents: chart_tooltip_PointerEvents.value
    }
  },
  voronoi: {
    ...LAYOUT_PROPS,
    style: {
      data: {
        fill: chart_voronoi_data_Fill.value,
        stroke: chart_voronoi_data_stroke_Color.value,
        strokeWidth: chart_voronoi_data_stroke_Width.value
      },
      labels: {
        ...LABEL_CENTERED_PROPS,
        fill: chart_voronoi_labels_Fill.value, // text
        padding: chart_voronoi_labels_Padding.value,
        pointerEvents: chart_voronoi_labels_PointerEvents.value
      },
      // Note: These properties override tooltip
      flyout: {
        fill: chart_voronoi_flyout_stroke_Fill.value, // background
        pointerEvents: chart_voronoi_flyout_PointerEvents.value,
        stroke: chart_voronoi_flyout_stroke_Color.value, // border
        strokeWidth: chart_voronoi_flyout_stroke_Width.value,
      }
    }
  }
};
