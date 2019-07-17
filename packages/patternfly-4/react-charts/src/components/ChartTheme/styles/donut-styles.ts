/* eslint-disable camelcase */
import {
  chart_global_FontSize_sm,
  chart_global_FontSize_2xl,
  chart_donut_label_subtitle_Fill,
  chart_donut_label_subtitle_position
} from '@patternfly/react-tokens';

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
