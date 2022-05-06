/* eslint-disable camelcase */
import chart_donut_threshold_first_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_first_Color';
import chart_donut_threshold_second_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_second_Color';
import chart_donut_threshold_third_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_third_Color';
import chart_donut_utilization_dynamic_pie_Height from '@patternfly/react-tokens/dist/esm/chart_donut_utilization_dynamic_pie_Height';
import chart_donut_utilization_dynamic_pie_angle_Padding from '@patternfly/react-tokens/dist/esm/chart_donut_utilization_dynamic_pie_angle_Padding';
import chart_donut_utilization_dynamic_pie_Padding from '@patternfly/react-tokens/dist/esm/chart_donut_utilization_dynamic_pie_Padding';
import chart_donut_utilization_dynamic_pie_Width from '@patternfly/react-tokens/dist/esm/chart_donut_utilization_dynamic_pie_Width';
import chart_donut_utilization_static_pie_Padding from '@patternfly/react-tokens/dist/esm/chart_donut_utilization_static_pie_Padding';

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
      chart_donut_threshold_first_Color.var,
      chart_donut_threshold_second_Color.var,
      chart_donut_threshold_third_Color.var
    ]
  },
  pie: {
    colorScale: [chart_donut_threshold_first_Color.var],
    padding: chart_donut_utilization_static_pie_Padding.value
  }
};
