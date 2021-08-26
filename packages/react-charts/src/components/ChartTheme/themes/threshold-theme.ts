/* eslint-disable camelcase */
import chart_threshold_stroke_dash_array from '@patternfly/react-tokens/dist/esm/chart_threshold_stroke_dash_array';
import chart_threshold_stroke_Width from '@patternfly/react-tokens/dist/esm/chart_threshold_stroke_Width';

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
