/* eslint-disable camelcase */
import {
  chart_donut_threshold_warning_Color,
  chart_donut_threshold_danger_Color,
} from '@patternfly/react-tokens';

// Donut utilization styles
export const DonutUtilizationStyles = {
  thresholds: {
    colorScale: [
      chart_donut_threshold_warning_Color.value,
      chart_donut_threshold_danger_Color.value
    ]
  }
};
