import chart_global_FontFamily from '@rh-felt/react-tokens/dist/esm/chart_global_FontFamily';
import chart_global_FontSize_sm from '@rh-felt/react-tokens/dist/esm/chart_global_FontSize_sm';
import chart_global_label_Margin from '@rh-felt/react-tokens/dist/esm/chart_global_label_Margin';
import chart_global_label_Fill from '@rh-felt/react-tokens/dist/esm/chart_global_label_Fill';
import chart_global_letter_spacing from '@rh-felt/react-tokens/dist/esm/chart_global_letter_spacing';
import chart_legend_Margin from '@rh-felt/react-tokens/dist/esm/chart_legend_Margin';
import chart_legend_position from '@rh-felt/react-tokens/dist/esm/chart_legend_position';

// Typography
const TYPOGRAPHY_FONT_FAMILY = chart_global_FontFamily.var.replace(/"/g, "'"); // Well-formed XML
const TYPOGRAPHY_LETTER_SPACING = chart_global_letter_spacing.var;
const TYPOGRAPHY_FONT_SIZE = chart_global_FontSize_sm.value;

/**
 * Common styles
 *
 * @private Not intended as public API and subject to change
 */
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
