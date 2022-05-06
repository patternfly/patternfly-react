/* eslint-disable camelcase */
import chart_axis_grid_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_axis_grid_stroke_Color';
import chart_axis_tick_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_axis_tick_stroke_Color';

// Axis theme
export const AxisTheme = {
  axis: {
    style: {
      grid: {
        stroke: chart_axis_grid_stroke_Color.var
      },
      ticks: {
        stroke: chart_axis_tick_stroke_Color.var
      }
    }
  }
};
