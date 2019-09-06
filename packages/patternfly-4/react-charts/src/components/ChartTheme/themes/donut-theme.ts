/* eslint-disable camelcase */
import {
  chart_donut_pie_Height,
  chart_donut_pie_angle_Padding,
  chart_donut_pie_Padding,
  chart_donut_pie_Width
} from '@patternfly/react-tokens';

// Donut theme
export const DonutTheme = {
  pie: {
    height: chart_donut_pie_Height.value,
    padding: chart_donut_pie_Padding.value,
    padAngle: chart_donut_pie_angle_Padding.value,
    width: chart_donut_pie_Width.value
  }
};
