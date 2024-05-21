/* eslint-disable camelcase */
import global_font_weight_heading_bold from '@patternfly/react-tokens/dist/esm/global_font_weight_heading_bold';
import chart_voronoi_labels_Fill from '@patternfly/react-tokens/dist/esm/chart_voronoi_labels_Fill';

/**
 * Box plot tooltip styles
 * @private
 */
export const BoxPlotTooltipStyles = {
  flyout: {
    padding: 40
  },
  label: {
    fill: chart_voronoi_labels_Fill.var,
    fontWeight: global_font_weight_heading_bold.value
  } as any
};
