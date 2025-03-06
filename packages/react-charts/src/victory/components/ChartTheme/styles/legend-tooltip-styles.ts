/* eslint-disable camelcase */
import t_global_font_weight_heading_bold from '@patternfly/react-tokens/dist/esm/t_global_font_weight_heading_bold';
import chart_voronoi_labels_Fill from '@patternfly/react-tokens/dist/esm/chart_voronoi_labels_Fill';

/**
 * Legend tooltip styles
 *
 * @private Not intended as public API and subject to change
 */
export const LegendTooltipStyles = {
  flyout: {
    padding: 40
  },
  label: {
    fill: chart_voronoi_labels_Fill.var,
    fontWeight: t_global_font_weight_heading_bold.value
  } as any
};
