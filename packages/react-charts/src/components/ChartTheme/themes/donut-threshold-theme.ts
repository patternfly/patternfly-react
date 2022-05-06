/* eslint-disable camelcase */
import chart_donut_threshold_first_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_first_Color';
import chart_donut_threshold_second_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_second_Color';
import chart_donut_threshold_third_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_third_Color';
import chart_donut_threshold_dynamic_pie_Height from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_dynamic_pie_Height';
import chart_donut_threshold_dynamic_pie_Padding from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_dynamic_pie_Padding';
import chart_donut_threshold_dynamic_pie_Width from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_dynamic_pie_Width';
import chart_donut_threshold_static_pie_Height from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_static_pie_Height';
import chart_donut_threshold_static_pie_angle_Padding from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_static_pie_angle_Padding';
import chart_donut_threshold_static_pie_Padding from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_static_pie_Padding';
import chart_donut_threshold_static_pie_Width from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_static_pie_Width';

// Donut threshold dynamic theme
export const DonutThresholdDynamicTheme = {
  legend: {
    colorScale: [chart_donut_threshold_second_Color.var, chart_donut_threshold_third_Color.var]
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
      chart_donut_threshold_first_Color.var,
      chart_donut_threshold_second_Color.var,
      chart_donut_threshold_third_Color.var
    ],
    height: chart_donut_threshold_static_pie_Height.value,
    padAngle: chart_donut_threshold_static_pie_angle_Padding.value,
    padding: chart_donut_threshold_static_pie_Padding.value,
    width: chart_donut_threshold_static_pie_Width.value
  }
};
