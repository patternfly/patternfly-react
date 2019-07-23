/* eslint-disable camelcase */
import {
  chart_bullet_value_Width,
  chart_donut_label_subtitle_Fill,
  chart_global_FontSize_2xl,
  chart_global_FontSize_sm,
  chart_global_FontSize_lg
} from '@patternfly/react-tokens';

// Bullet styles
export const BulletStyles = {
  axisTickCount: 5, // Todo: add var to theme
  comparativeMeasureErrorWidth: 30, // Todo: add pfcore var
  comparativeMeasureWidth: 30, // Todo: add pfcore var
  comparativeMeasureWarningWidth: 30, // Todo: add pfcore var
  label: {
    groupTitle: {
      // Victory props only
      fontSize: chart_global_FontSize_2xl.value
    },
    subTitle: {
      // Victory props only
      fill: chart_donut_label_subtitle_Fill.value, // "#bbb"
      fontSize: chart_global_FontSize_sm.value
    },
    title: {
      // Victory props only
      fontSize: chart_global_FontSize_lg.value
    }
  },
  primaryDotMeasureSize: 6, // Todo: add pfcore var
  primarySegmentedMeasureWidth: chart_bullet_value_Width.value, // Todo: rename pfcore var
  qualitativeRangeWidth: 30, // Todo: add pfcore var
};
