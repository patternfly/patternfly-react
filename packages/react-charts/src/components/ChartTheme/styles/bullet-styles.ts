/* eslint-disable camelcase */
import chart_bullet_axis_tick_count from '@patternfly/react-tokens/dist/esm/chart_bullet_axis_tick_count';
import chart_bullet_comparative_measure_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_Width';
import chart_bullet_comparative_measure_error_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_error_Width';
import chart_bullet_comparative_measure_warning_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_warning_Width';
import chart_bullet_label_grouptitle_Fill from '@patternfly/react-tokens/dist/esm/chart_bullet_label_grouptitle_Fill';
import chart_bullet_label_subtitle_Fill from '@patternfly/react-tokens/dist/esm/chart_bullet_label_subtitle_Fill';
import chart_bullet_label_title_Fill from '@patternfly/react-tokens/dist/esm/chart_bullet_label_title_Fill';
import chart_bullet_primary_measure_dot_size from '@patternfly/react-tokens/dist/esm/chart_bullet_primary_measure_dot_size';
import chart_bullet_primary_measure_segmented_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_primary_measure_segmented_Width';
import chart_bullet_qualitative_range_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_Width';
import chart_global_FontSize_2xl from '@patternfly/react-tokens/dist/esm/chart_global_FontSize_2xl';
import chart_global_FontSize_sm from '@patternfly/react-tokens/dist/esm/chart_global_FontSize_sm';
import chart_global_FontSize_lg from '@patternfly/react-tokens/dist/esm/chart_global_FontSize_lg';

// Bullet styles
export const BulletStyles = {
  axisTickCount: chart_bullet_axis_tick_count.value,
  comparativeMeasureErrorWidth: chart_bullet_comparative_measure_error_Width.value,
  comparativeMeasureWarningWidth: chart_bullet_comparative_measure_warning_Width.value,
  comparativeMeasureWidth: chart_bullet_comparative_measure_Width.value,
  label: {
    groupTitle: {
      // Victory props only
      fill: chart_bullet_label_grouptitle_Fill.var,
      fontSize: chart_global_FontSize_2xl.value
    },
    subTitle: {
      // Victory props only
      fill: chart_bullet_label_subtitle_Fill.var,
      fontSize: chart_global_FontSize_sm.value
    },
    title: {
      // Victory props only
      fill: chart_bullet_label_title_Fill.var,
      fontSize: chart_global_FontSize_lg.value
    }
  },
  primaryDotMeasureSize: chart_bullet_primary_measure_dot_size.value,
  primarySegmentedMeasureWidth: chart_bullet_primary_measure_segmented_Width.value,
  qualitativeRangeWidth: chart_bullet_qualitative_range_Width.value
};
