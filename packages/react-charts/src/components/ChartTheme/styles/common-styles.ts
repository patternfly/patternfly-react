/* eslint-disable camelcase */
import chart_global_FontFamily from '@patternfly/react-tokens/dist/esm/chart_global_FontFamily';
import chart_global_FontSize_sm from '@patternfly/react-tokens/dist/esm/chart_global_FontSize_sm';
import chart_global_label_Margin from '@patternfly/react-tokens/dist/esm/chart_global_label_Margin';
import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import chart_global_letter_spacing from '@patternfly/react-tokens/dist/esm/chart_global_letter_spacing';
import chart_legend_Margin from '@patternfly/react-tokens/dist/esm/chart_legend_Margin';
import chart_legend_position from '@patternfly/react-tokens/dist/esm/chart_legend_position';

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
    fill: chart_global_label_Fill.var
  },
  legend: {
    margin: chart_legend_Margin.value,
    position: chart_legend_position.value
  }
};
