/* eslint-disable camelcase */
import {
  chart_threshold_stroke_dash_array,
  chart_threshold_stroke_Width
} from '@patternfly/react-tokens';

// Threshold theme
export const ThresholdTheme = {
  line: {
    style: {
      data: {
        strokeDasharray: chart_threshold_stroke_dash_array.value,
        strokeWidth: chart_threshold_stroke_Width.value
      }
    }
  }
};
