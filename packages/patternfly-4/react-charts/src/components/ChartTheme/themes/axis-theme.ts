/* eslint-disable camelcase */
import {
  chart_axis_grid_stroke_Color,
  chart_axis_tick_stroke_Color
} from '@patternfly/react-tokens';

// Todo: Replace with PF-core var when available
const COLOR_AXIS_STROKE = '#D2D2D2';

// Axis theme
export const AxisTheme = {
  axis: {
    style: {
      grid: {
        stroke: COLOR_AXIS_STROKE // chart_axis_grid_stroke_Color.value << should not be 'transparent'
      },
      ticks: {
        stroke: COLOR_AXIS_STROKE, // chart_axis_tick_stroke_Color.value << should not be 'transparent'
      }
    }
  },
};
