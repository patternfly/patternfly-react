/* eslint-disable camelcase */
import global_FontWeight_bold from '@patternfly/react-tokens/dist/js/global_FontWeight_bold';
import chart_voronoi_labels_Fill from '@patternfly/react-tokens/dist/js/chart_voronoi_labels_Fill';

// Legend tooltip styles
export const LegendTooltipStyles = {
  flyout: {
    padding: 40
  },
  label: {
    fill: chart_voronoi_labels_Fill.value,
    fontWeight: global_FontWeight_bold.value
  } as any
};
