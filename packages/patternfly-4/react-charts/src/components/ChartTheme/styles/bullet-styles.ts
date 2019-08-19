/* eslint-disable camelcase */
import {
  chart_bullet_axis_tick_count,
  chart_bullet_comparative_measure_Width,
  chart_bullet_comparative_measure_error_Width,
  chart_bullet_comparative_measure_warning_Width,
  chart_bullet_label_subtitle_Fill,
  chart_bullet_primary_measure_dot_size,
  chart_bullet_primary_measure_segmented_Width,
  chart_bullet_qualitative_range_Width,
  chart_global_FontSize_2xl,
  chart_global_FontSize_sm,
  chart_global_FontSize_lg
} from '@patternfly/react-tokens';

// Bullet styles
export const BulletStyles = {
  axisTickCount: chart_bullet_axis_tick_count.value,
  comparativeMeasureErrorWidth: chart_bullet_comparative_measure_error_Width.value,
  comparativeMeasureWarningWidth: chart_bullet_comparative_measure_warning_Width.value,
  comparativeMeasureWidth: chart_bullet_comparative_measure_Width.value,
  label: {
    groupTitle: {
      // Victory props only
      fontSize: chart_global_FontSize_2xl.value
    },
    subTitle: {
      // Victory props only
      fill: chart_bullet_label_subtitle_Fill.value,
      fontSize: chart_global_FontSize_sm.value
    },
    title: {
      // Victory props only
      fontSize: chart_global_FontSize_lg.value
    }
  },
  primaryDotMeasureSize: chart_bullet_primary_measure_dot_size.value,
  primarySegmentedMeasureWidth: chart_bullet_primary_measure_segmented_Width.value,
  qualitativeRangeWidth: chart_bullet_qualitative_range_Width.value
};
