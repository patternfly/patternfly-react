import {
  chart_global_FontFamily,
  chart_global_FontSize_sm,
  chart_global_label_Margin,
  chart_global_letter_spacing,
  chart_legend_Margin,
  chart_legend_position
} from '@patternfly/react-tokens';

// Typography
const TYPOGRAPHY_FONT_FAMILY = chart_global_FontFamily.var;
const TYPOGRAPHY_LETTER_SPACING = chart_global_letter_spacing.var;
const TYPOGRAPHY_FONT_SIZE = chart_global_FontSize_sm.value;

export const CommonStyles = {
  label: {
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    fontSize: TYPOGRAPHY_FONT_SIZE,
    letterSpacing: TYPOGRAPHY_LETTER_SPACING,
    margin: chart_global_label_Margin.value,
  },
  legend: {
    margin: chart_legend_Margin.value,
    position: chart_legend_position.value
  },
};
