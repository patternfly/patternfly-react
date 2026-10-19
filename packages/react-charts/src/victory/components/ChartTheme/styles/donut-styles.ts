import chart_global_FontSize_sm from '@rh-felt/react-tokens/dist/esm/chart_global_FontSize_sm';
import chart_global_FontSize_2xl from '@rh-felt/react-tokens/dist/esm/chart_global_FontSize_2xl';
import chart_donut_label_subtitle_Fill from '@rh-felt/react-tokens/dist/esm/chart_donut_label_subtitle_Fill';
import chart_donut_label_title_Fill from '@rh-felt/react-tokens/dist/esm/chart_donut_label_title_Fill';
import chart_donut_label_subtitle_position from '@rh-felt/react-tokens/dist/esm/chart_donut_label_subtitle_position';

/**
 * Donut styles
 *
 * @private Not intended as public API and subject to change
 */
export const DonutStyles = {
  label: {
    subTitle: {
      // Victory props only
      fill: chart_donut_label_subtitle_Fill.var,
      fontSize: chart_global_FontSize_sm.value
    },
    subTitlePosition: chart_donut_label_subtitle_position.value,
    title: {
      // Victory props only
      fill: chart_donut_label_title_Fill.var,
      fontSize: chart_global_FontSize_2xl.value
    }
  }
};
