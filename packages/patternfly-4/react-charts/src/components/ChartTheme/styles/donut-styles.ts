/* eslint-disable camelcase */
import {
  chart_global_FontSize_sm,
  chart_global_FontSize_2xl,
  chart_donut_label_subtitle_Fill
} from '@patternfly/react-tokens';

// Donut styles
export const DonutStyles = {
  label: {
    subTitle: {
      // Victory props only
      fill: chart_donut_label_subtitle_Fill.value,
      fontSize: chart_global_FontSize_sm.value
    },
    subTitlePosition: 'center', // Todo: Replace with PF-core var when available
    title: {
      // Victory props only
      fontSize: chart_global_FontSize_2xl.value
    }
  }
};
