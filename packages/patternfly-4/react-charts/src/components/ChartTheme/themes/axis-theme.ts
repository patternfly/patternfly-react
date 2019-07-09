/* eslint-disable camelcase */
import {
  chart_axis_grid_stroke_Color,
  chart_axis_tick_stroke_Color
} from '@patternfly/react-tokens';

// Axis theme
export const AxisTheme = {
  axis: {
    style: {
      grid: {
        stroke: chart_axis_grid_stroke_Color.value
      },
      ticks: {
        stroke: chart_axis_tick_stroke_Color.value
      }
    }
  },
};
