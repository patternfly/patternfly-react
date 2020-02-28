/* eslint-disable camelcase */
import chart_global_FontSize_sm from '@patternfly/react-tokens/dist/js/chart_global_FontSize_sm';
import chart_global_FontSize_2xl from '@patternfly/react-tokens/dist/js/chart_global_FontSize_2xl';
import chart_donut_label_subtitle_Fill from '@patternfly/react-tokens/dist/js/chart_donut_label_subtitle_Fill';
import chart_donut_label_subtitle_position from '@patternfly/react-tokens/dist/js/chart_donut_label_subtitle_position';

// Donut styles
export const DonutStyles = {
  label: {
    subTitle: {
      // Victory props only
      fill: chart_donut_label_subtitle_Fill.value,
      fontSize: chart_global_FontSize_sm.value
    },
    subTitlePosition: chart_donut_label_subtitle_position.value,
    title: {
      // Victory props only
      fontSize: chart_global_FontSize_2xl.value
    }
  }
};
