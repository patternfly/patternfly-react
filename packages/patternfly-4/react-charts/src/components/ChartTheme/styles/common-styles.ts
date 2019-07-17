import {
  chart_global_FontFamily,
  chart_global_label_Margin,
  chart_legend_Margin,
  chart_legend_position
} from '@patternfly/react-tokens';

export const CommonStyles = {
  label: {
    fontFamily: chart_global_FontFamily.value,
    margin: chart_global_label_Margin.value,
  },
  legend: {
    margin: chart_legend_Margin.value,
    position: chart_legend_position.value
  },
};
