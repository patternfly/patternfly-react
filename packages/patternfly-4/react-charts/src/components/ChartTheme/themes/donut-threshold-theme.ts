/* eslint-disable camelcase */
import {
  chart_donut_threshold_first_Color,
  chart_donut_threshold_second_Color,
  chart_donut_threshold_third_Color,
  chart_donut_threshold_dynamic_pie_Height,
  chart_donut_threshold_dynamic_pie_Padding,
  chart_donut_threshold_dynamic_pie_Width,
  chart_donut_threshold_static_pie_Height,
  chart_donut_threshold_static_pie_angle_Padding,
  chart_donut_threshold_static_pie_Padding,
  chart_donut_threshold_static_pie_Width
} from '@patternfly/react-tokens';

// Donut threshold dynamic theme
export const DonutThresholdDynamicTheme = {
  legend: {
    colorScale: [
      chart_donut_threshold_second_Color.value,
      chart_donut_threshold_third_Color.value
    ]
  },
  pie: {
    height: chart_donut_threshold_dynamic_pie_Height.value,
    padding: chart_donut_threshold_dynamic_pie_Padding.value,
    width: chart_donut_threshold_dynamic_pie_Width.value
  }
};

// Donut threshold static theme
export const DonutThresholdStaticTheme = {
  pie: {
    colorScale: [
      chart_donut_threshold_first_Color.value,
      chart_donut_threshold_second_Color.value,
      chart_donut_threshold_third_Color.value
    ],
    height: chart_donut_threshold_static_pie_Height.value,
    padAngle: chart_donut_threshold_static_pie_angle_Padding.value,
    padding: chart_donut_threshold_static_pie_Padding.value,
    width: chart_donut_threshold_static_pie_Width.value
  }
};
