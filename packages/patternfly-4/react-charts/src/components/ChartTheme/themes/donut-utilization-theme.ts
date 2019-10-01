/* eslint-disable camelcase */
import {
  chart_donut_threshold_first_Color,
  chart_donut_threshold_second_Color,
  chart_donut_threshold_third_Color,
  chart_donut_utilization_dynamic_pie_Height,
  chart_donut_utilization_dynamic_pie_angle_Padding,
  chart_donut_utilization_dynamic_pie_Padding,
  chart_donut_utilization_dynamic_pie_Width,
  chart_donut_utilization_static_pie_Padding
} from '@patternfly/react-tokens';

// Donut utilization dynamic theme
export const DonutUtilizationDynamicTheme = {
  pie: {
    height: chart_donut_utilization_dynamic_pie_Height.value,
    padding: chart_donut_utilization_dynamic_pie_Padding.value,
    padAngle: chart_donut_utilization_dynamic_pie_angle_Padding.value,
    width: chart_donut_utilization_dynamic_pie_Width.value
  }
};

// Donut utilization static theme
export const DonutUtilizationStaticTheme = {
  legend: {
    colorScale: [
      chart_donut_threshold_first_Color.value,
      chart_donut_threshold_second_Color.value,
      chart_donut_threshold_third_Color.value
    ]
  },
  pie: {
    colorScale: [chart_donut_threshold_first_Color.value],
    padding: chart_donut_utilization_static_pie_Padding.value
  }
};
