/* eslint-disable camelcase */
import {
  chart_threshold_stroke_dash_array
} from '@patternfly/react-tokens';

// Threshold theme
export const ThresholdTheme = {
  line: {
    style: {
      data: {
        strokeDasharray: chart_threshold_stroke_dash_array.value
      }
    }
  }
};
